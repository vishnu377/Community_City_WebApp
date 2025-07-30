document.addEventListener('DOMContentLoaded', () => {

    // --- FINALIZED & COMPLETE APP DATA STRUCTURE ---
    const samajData = {
        social: {
            homeCategories: [
                { name: 'The Village Name', icon: 'location_city', id: 'village' }, { name: 'Jain Sandh', icon: 'groups', id: 'jain_sandh' }, { name: 'Death', icon: 'sick', id: 'death' }, { name: 'Matrimony', icon: 'favorite', id: 'matrimony' }, { name: 'New Marriage', icon: 'celebration', id: 'new_marriage' }, { name: 'Engagement', icon: 'ring_volume', id: 'engagement' }, { name: 'New Born Baby', icon: 'child_care', id: 'new_born' }, { name: 'Condolence', icon: 'sentiment_very_dissatisfied', id: 'condolence' }, { name: 'Anniversary', icon: 'cake', id: 'anniversary' }, { name: 'Birthday', icon: 'emoji_events', id: 'birthday' }, { name: 'New Opening', icon: 'store', id: 'new_opening' }, { name: 'Social', icon: 'people', id: 'social' }, { name: 'Dharmik', icon: 'brightness_7', id: 'dharmik' }, { name: 'Tapsya', icon: 'self_improvement', id: 'tapsya' }, { name: 'Congratulations', icon: 'thumb_up', id: 'congrats' }, { name: 'Thankyou', icon: 'volunteer_activism', id: 'thankyou' }, { name: 'Medical', icon: 'local_hospital', id: 'medical' }, { name: 'Panchang', icon: 'event', id: 'panchang' }, { name: 'Pratika', icon: 'book', id: 'pratika' }, { name: 'Newspaper', icon: 'newspaper', id: 'newspaper' },
            ],
            villages: ['Mandvi', 'Bhuj', 'Koday', 'Anjar', 'Naliya', 'Bidada'],
            villageStructure: [
                { name: 'History', icon: 'landmark' }, { name: 'Mahajan Committee List', icon: 'gavel' }, { name: 'Members List', icon: 'contacts' }, { name: 'Derasar', icon: 'account_balance' }, { name: 'Sathank', icon: 'church' }, { name: 'Bhojanalay', icon: 'restaurant' }, { name: 'Hospital', icon: 'medical_services' }, { name: 'Library', icon: 'local_library' }, { name: 'School', icon: 'school' }, { name: 'Bank', icon: 'atm' }, { name: 'Police Station', icon: 'local_police' }, { name: 'Post Office', icon: 'local_post_office' }, { name: 'Gram Panchayat', icon: 'domain' },
            ],
            mahajanSubCommittees: ['Derasar Committee', 'Bhojanshala Committee', 'Sathank Committee', 'Hospital Committee', 'Mahila Committee', 'Education Committee'],
            members: [
                { name: 'Ramesh Shah', id: 'KJS-001', avatar: 'assets/images/user-avatar.jpg', type: 'Male' }, { name: 'Priya Mehta', id: 'KJS-002', avatar: 'assets/images/user-avatar.jpg', type: 'Female' }, { name: 'Aarav Gada', id: 'KJS-003', avatar: 'assets/images/user-avatar.jpg', type: 'Kids' }
            ],
            jainSanghs: ['Shri 6 Koti Sthanakvasi', 'Shri 8 Koti Nani Paksh', 'Shri Tapā Gaccha', 'Shri Achal Gaccha'],
            jainSanghSubTree: ['Maharaj Saheb details', 'Maha Satiji details', 'Dixa', 'Chomasa', 'Sheshkar', 'History'],
            matrimonyCategories: ['Boy', 'Girls', 'Divorced', 'Widower', 'Widow']
        },
        business: {
            categories: [
                { id: 1, name: 'Handicrafts' }, { id: 2, name: 'Foods & Spices' }, { id: 3, name: 'Apparel' }, { id: 4, 'name': 'Decor' }
            ],
            products: [
                { id: 101, name: 'Handmade Shawl', price: 2500, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 1, desc: 'A beautiful shawl.' },
                { id: 102, name: 'Spicy Mango Pickle', price: 280, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 2, desc: 'Traditional pickle.' },
                { id: 103, name: 'Wooden Elephant', price: 1200, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 4, desc: 'Hand-carved decor.' },
                { id: 104, name: 'Bandhani Kurta', price: 1800, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 3, desc: 'Traditional attire.' },
                { id: 105, name: 'Organic Turmeric', price: 350, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 2, desc: 'Freshly ground.' },
            ],
            cart: [],
        }
    };

    // --- Element Selectors ---
    const pageContainer = document.getElementById('page-container');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const mainAppBackButton = document.querySelector('#main-app-screen .back-button');

    let navigationStack = [];

    // --- Core Functions ---
    const showScreen = (screenId) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(screenId)?.classList.add('active'); };
    const updateHeader = (title, showBack) => {
        document.querySelector('#main-app-screen .page-title').textContent = title;
        mainAppBackButton.style.display = showBack ? 'block' : 'none';
    };

    // --- Page Rendering Engine ---
    const renderPage = (state) => {
        let content = '';
        switch (state.page) {
            case 'socialHome':
                content = `<div class="category-grid">${samajData.social.homeCategories.map(cat => `<div class="category-card" data-page-id="${cat.id}" data-page-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader('Social', false); break;
            case 'villageSelector':
                content = `<div class="village-selector-page"><h3>Select your village</h3><select id="village-dropdown"><option value="">-- Choose Village --</option>${samajData.social.villages.map(v => `<option value="${v}">${v}</option>`).join('')}</select></div>`;
                updateHeader('Select Village', true); break;
            case 'villageDashboard':
                content = `<div class="category-grid">${samajData.social.villageStructure.map(cat => `<div class="category-card" data-page-id="${cat.name.replace(/ /g, '_')}" data-page-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader(state.village, true); break;
            case 'subCategoryList':
                content = `<div class="list-page">${state.items.map(item => `<div class="list-item" data-page-id="${item.replace(/ /g, '_')}" data-page-title="${item}"><h4>${item}</h4><i class="material-icons-sharp">arrow_forward_ios</i></div>`).join('')}</div>`;
                updateHeader(state.title, true); break;
            case 'memberList':
                content = `<div class="member-list">${samajData.social.members.map(m => `<div class="member-card"><img src="${m.avatar}" alt="${m.name}"><div class="member-info"><h4>${m.name}</h4><p>${m.type}</p><span class="member-id">${m.id}</span></div></div>`).join('')}</div>`;
                updateHeader(state.title, true); break;
            
            case 'businessHome':
                const currentFilter = state.filter || 'all';
                const productsToDisplay = currentFilter === 'all'
                    ? samajData.business.products
                    : samajData.business.products.filter(p => p.categoryId === currentFilter);
                content = `
                    <div class="business-home-page">
                        <input type="text" class="search-bar" placeholder="Search for products...">
                        <div class="category-filter-container">
                            <div class="category-filter-tab ${currentFilter === 'all' ? 'active' : ''}" data-category-id="all">All</div>
                            ${samajData.business.categories.map(cat => `<div class="category-filter-tab ${currentFilter === cat.id ? 'active' : ''}" data-category-id="${cat.id}">${cat.name}</div>`).join('')}
                        </div>
                        <h3 class="section-title">Products</h3>
                        <div class="product-grid">
                            ${productsToDisplay.length > 0 ? productsToDisplay.map(p => `<div class="product-card" data-product-id="${p.id}"><img src="${p.image}" alt="${p.name}"><div class="product-info"><h5>${p.name}</h5><p class="product-price">₹${p.price}</p></div></div>`).join('') : '<p>No products found.</p>'}
                        </div>
                    </div>`;
                updateHeader('Business', false); break;

            default: content = `<h2>${state.title || 'Page Not Found'}</h2><p>Content under construction.</p>`; updateHeader(state.title || 'Error', true);
        }
        pageContainer.innerHTML = content;
    };
    
    // --- Navigation & Event Logic ---
    const navigateTo = (state) => { navigationStack.push(state); renderPage(state); };
    const goBack = () => { if (navigationStack.length <= 1) return; navigationStack.pop(); renderPage(navigationStack[navigationStack.length - 1]); };
    
    // Main Click Handler
    pageContainer.addEventListener('click', (e) => {
        // Business Module Logic: Category Filtering
        const filterTab = e.target.closest('.category-filter-tab');
        if (filterTab) {
            const categoryId = filterTab.dataset.categoryId === 'all' ? 'all' : parseInt(filterTab.dataset.categoryId);
            const currentState = navigationStack[navigationStack.length - 1];
            currentState.filter = categoryId; // Update the filter on the current state
            renderPage(currentState); // Re-render the same page with the filter
            return;
        }

        // General Click Logic
        const card = e.target.closest('.category-card, .list-item, .product-card');
        if (!card) return;

        if (card.matches('.product-card')) { alert(`Product Detail for ID: ${card.dataset.productId}`); return; }

        // Social Logic (Hierarchical)
        const { pageId, pageTitle } = card.dataset;
        const currentState = navigationStack[navigationStack.length - 1];
        let newState = {};

        if (currentState.page === 'socialHome') {
            if (pageId === 'village') { newState = { page: 'villageSelector' }; }
            else if (pageId === 'jain_sandh') { newState = { page: 'subCategoryList', title: 'Jain Sandh', items: samajData.social.jainSanghs }; }
            else if (pageId === 'matrimony') { newState = { page: 'subCategoryList', title: 'Matrimony', items: samajData.social.matrimonyCategories }; }
            else { newState = { page: 'content', title: pageTitle }; }
        } else if (currentState.page === 'villageDashboard') {
            if (pageId === 'Mahajan_Committee_List') { newState = { page: 'subCategoryList', title: pageTitle, items: samajData.social.mahajanSubCommittees }; }
            else if (pageId === 'Members_List') { newState = { page: 'memberList', title: pageTitle }; }
            else { newState = { page: 'content', title: pageTitle }; }
        } else if (currentState.title === 'Jain Sandh') {
            newState = { page: 'subCategoryList', title: pageTitle, items: samajData.social.jainSanghSubTree };
        } else {
            newState = { page: 'content', title: pageTitle };
        }
        navigateTo(newState);
    });

    // Village Dropdown Handler
    pageContainer.addEventListener('change', (e) => {
        if (e.target.id === 'village-dropdown') {
            const selectedVillage = e.target.value;
            if (selectedVillage) { navigateTo({ page: 'villageDashboard', village: selectedVillage }); }
        }
    });

    // --- Initial App Start Sequence ---
    const startApp = () => {
        setTimeout(() => { showScreen('login-screen'); }, 2500);
        loginSubmitBtn.addEventListener('click', () => {
            const homeState = { page: 'socialHome' };
            navigationStack = [homeState]; renderPage(homeState); showScreen('main-app-screen');
        });
        mainAppBackButton.addEventListener('click', goBack);
        bottomNavItems.forEach(item => {
            item.addEventListener('click', () => {
                bottomNavItems.forEach(i => i.classList.remove('active')); item.classList.add('active');
                const homeState = { page: item.dataset.page };
                navigationStack = [homeState]; renderPage(homeState);
            });
        });
    };
    
    startApp();
});