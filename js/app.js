// === The Digital Legacy: The Complete & Final JavaScript Logic ===
document.addEventListener('DOMContentLoaded', () => {

    // --- Mock Data Structure (The Heart of the App) ---
    const samajData = {
        villages: ['Mandvi', 'Bhuj', 'Anjar', 'Naliya'],
        structure: {
            'Jain Sandh': { icon: 'groups', subcategories: ['Members List', 'Mahajan Committee List'] },
            'Matrimony': { icon: 'favorite', subcategories: ['New Marriage', 'Engagement', 'Boy', 'Girls', 'Divorced', 'Widower', 'Widow'], permissionRequired: true },
            'Life Events': { icon: 'cake', subcategories: ['Birthday', 'Marriage Anniversary', 'New Born Baby', 'New Opening'] },
            'Dharmik': { icon: 'brightness_7', subcategories: ['Jain Sangh Name', 'Tapsya', 'Pratika', 'Chomasa', 'Sheshkar'] },
            'Daily Updates': { icon: 'newspaper', subcategories: ['Newspaper', 'Panchang', 'Congratulations', 'Thankyou', 'Social'] },
            'Village Info': { icon: 'location_city', subcategories: ['History', 'Derasar', 'Hospital', 'Library', 'School', 'Bank', 'Police Station', 'Post Office', 'Gram Panchayat'] },
            'Death / Condolence': { icon: 'info', isDirectContent: true, },
        },
        members: [
            { name: 'Ramesh Shah', village: 'Mandvi', status: 'Male', avatar: 'assets/images/user-avatar.jpg' },
            { name: 'Priya Mehta', village: 'Mandvi', status: 'Female', avatar: 'assets/images/user-avatar.jpg' },
            { name: 'Aarav Gada', village: 'Mandvi', status: 'Kids', avatar: 'assets/images/user-avatar.jpg' }
        ],
        committees: [
            { name: 'Derasar Committee', members: [{name: 'Ashok Shah', role: 'President'}, {name: 'Vimal Mehta', role: 'Secretary'}]},
            { name: 'Education Committee', members: [{name: 'Dr. Neha Doshi', role: 'Head'}]}
        ],
        events: [
            { type: 'Birthday', title: 'Happy Birthday to Anjali Furia!', date: 'July 26' },
            { type: 'New Marriage', title: 'Rahul Vora & Tina Shah tied the knot!', date: 'July 24' },
            { type: 'Death', title: 'In loving memory of Harshad bhai Gada.', date: 'July 22' },
            { type: 'Tapsya', title: 'Anumodan for 8 Upvas by Sarlaben.', date: 'July 20' }
        ],
        jainSanghSubTree: { 'Jain Sangh Name': ['Maharaj Saheb details', 'Maha Satiji details', 'Dixa', 'History'] },
        villageDetails: { 'Derasar': { image: 'assets/images/derasar.jpg', address: '123 Temple Road, Mandvi, Kutch', details: '...' }, 'Hospital': { image: 'assets/images/hospital.jpg', address: '456 Health St, Mandvi, Kutch', details: '...' } }
    };

    // --- Element Selectors ---
    const getStartedBtn = document.getElementById('login-register-btn');
    const pageContainer = document.getElementById('page-container');
    const pageTitle = document.querySelector('.page-title');
    const backButton = document.querySelector('.back-button');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const goToRegisterLink = document.getElementById('go-to-register');
    const goToLoginLink = document.getElementById('go-to-login');
    const addEntryBtn = document.getElementById('add-entry-btn');
    const closeBtn = document.querySelector('.close-btn');

    let navigationStack = [];
    let currentVillage = 'Mandvi'; // Default village after login

    // --- Core Functions ---
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }
    function updateHeader(title, showBack) { pageTitle.textContent = title; backButton.style.display = showBack ? 'block' : 'none'; }

    // --- Dynamic Page Rendering Engine ---
    function renderPage(state) {
        const { pageData, title } = state;
        let content = '';
        if (pageData.type === 'village-dashboard') {
            content = `<div class="village-banner" style="background-image: url('assets/images/village-banner.jpg')"><h3>${title}</h3></div><div class="category-grid">${Object.entries(samajData.structure).map(([key, value]) => `<div class="category-card" data-category="${key}"><div class="category-icon"><i class="material-icons-sharp">${value.icon}</i></div><h4>${key}</h4></div>`).join('')}</div>`;
        } else if (pageData.type === 'subcategory-list') {
            content = `<div class="list-page">${pageData.items.map(item => `<div class="list-item" data-subcategory="${item}"><h4>${item}</h4><i class="material-icons-sharp ${pageData.permissionRequired ? 'lock-icon' : ''}">${pageData.permissionRequired ? 'lock' : 'arrow_forward_ios'}</i></div>`).join('')}</div>`;
        } else if (pageData.type === 'member-directory') {
            content = `<div class="filter-tabs"><div class="filter-tab active">All</div><div class="filter-tab">Male</div><div class="filter-tab">Female</div><div class="filter-tab">Kids</div></div><div class="member-list">${samajData.members.map(m => `<div class="member-card"><img src="${m.avatar}" alt="${m.name}"><div class="member-info"><h4>${m.name}</h4><p class="status">${m.status}</p></div></div>`).join('')}</div>`;
        } else if (pageData.type === 'committee-list') {
            content = `<div class="list-page">${samajData.committees.map(c => `<div class="committee-card"><div class="committee-header"><h4>${c.name}</h4><i class="material-icons-sharp">expand_more</i></div><div class="committee-members">${c.members.map(m => `<div class="committee-member"><img src="assets/images/user-avatar.jpg" alt="${m.name}"><div class="role">${m.name}<span>${m.role}</span></div></div>`).join('')}</div></div>`).join('')}</div>`;
        } else if (pageData.type === 'event-list') {
            const eventType = pageData.eventType;
            content = `<div class="list-page">${samajData.events.filter(e => e.type === eventType).map(e => `<div class="event-card ${e.type.toLowerCase()}"><i class="material-icons-sharp event-icon">cake</i><div class="event-details"><h4>${e.title}</h4></div><p class="event-date">${e.date}</p></div>`).join('')}</div>`;
        } else {
            const detail = samajData.villageDetails[title] || { image: 'assets/images/placeholder.jpg', address: 'Details not available.', details: `This is the content page for ${title}.` };
            content = `<div class="content-detail-page"><div class="detail-image-header" style="background-image: url('${detail.image}')"></div><h3 class="detail-title">${title}</h3><div class="detail-section"><h5>Address</h5><p>${detail.address}</p></div><div class="detail-section"><h5>Details</h5><p>${detail.details}</p></div></div>`;
        }
        pageContainer.innerHTML = content;
        updateHeader(title, navigationStack.length > 1);
    }
    
    // --- Navigation Logic ---
    function navigateTo(state) { navigationStack.push(state); renderPage(state); }
    function goBack() { if (navigationStack.length > 1) { navigationStack.pop(); renderPage(navigationStack[navigationStack.length - 1]); } }
    
    // --- Event Listeners ---
    getStartedBtn.addEventListener('click', () => showScreen('login-screen'));
    goToRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showScreen('registration-screen'); });
    goToLoginLink.addEventListener('click', (e) => { e.preventDefault(); showScreen('login-screen'); });
    loginSubmitBtn.addEventListener('click', () => {
        const homeState = { title: currentVillage, pageData: { type: 'village-dashboard' } };
        navigationStack = [homeState];
        renderPage(homeState);
        showScreen('main-app-screen');
    });
    
    document.getElementById('registration-form').addEventListener('submit', (e) => { e.preventDefault(); alert('Registration successful! Please login.'); showScreen('login-screen'); });
    addEntryBtn.addEventListener('click', () => showScreen('add-entry-screen'));
    if(closeBtn) closeBtn.addEventListener('click', () => showScreen('main-app-screen'));

    pageContainer.addEventListener('click', e => {
        const categoryCard = e.target.closest('.category-card');
        const subcategoryItem = e.target.closest('.list-item');
        const committeeHeader = e.target.closest('.committee-header');
        
        if (committeeHeader) {
            const card = committeeHeader.parentElement;
            card.classList.toggle('expanded');
            const membersDiv = card.querySelector('.committee-members');
            membersDiv.style.maxHeight = card.classList.contains('expanded') ? membersDiv.scrollHeight + 'px' : '0';
        }

        if (categoryCard) {
            const categoryName = categoryCard.dataset.category;
            const categoryData = samajData.structure[categoryName];
            if (categoryData.permissionRequired) { alert('Admin permission required.'); return; }
            navigateTo({ title: categoryName, pageData: { type: categoryData.subcategories ? 'subcategory-list' : 'content-detail', items: categoryData.subcategories, permissionRequired: categoryData.permissionRequired } });
        }
        if (subcategoryItem) {
            const subName = subcategoryItem.dataset.subcategory;
            const jainSanghSubTree = samajData.jainSanghSubTree[subName];
            if (jainSanghSubTree) navigateTo({ title: subName, pageData: { type: 'subcategory-list', items: jainSanghSubTree } });
            else if (subName === 'Members List') navigateTo({ title: 'Member Directory', pageData: { type: 'member-directory' } });
            else if (subName === 'Mahajan Committee List') navigateTo({ title: 'Committee Lists', pageData: { type: 'committee-list' } });
            else if (['Birthday', 'New Marriage'].includes(subName)) navigateTo({ title: subName, pageData: { type: 'event-list', eventType: subName } });
            else navigateTo({ title: subName, pageData: { type: 'content-detail' } });
        }
    });

    backButton.addEventListener('click', goBack);
    
    // --- Initial Call ---
    const villageSelect = document.querySelector('select[name="village"]');
    villageSelect.innerHTML = `<option value="">-- Select Village --</option>` + samajData.villages.map(v => `<option value="${v}">${v}</option>`).join('');
});












