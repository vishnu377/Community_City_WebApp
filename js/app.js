document.addEventListener('DOMContentLoaded', () => {

    // --- The Complete Data Structure for the Entire App ---
    const samajData = {
        homeCategories: [
            { name: 'The Village Name', icon: 'location_city', id: 'village' },
            { name: 'Jain Sandh', icon: 'groups', id: 'jain_sandh' },
            { name: 'Death', icon: 'people', id: 'Death' },
           
            { name: 'Matrimony', icon: 'favorite', id: 'matrimony' },
            { name: 'New Marriage', icon: 'celebration', id: 'new_marriage' },
            { name: 'Engagement', icon: 'ring_volume', id: 'engagement' },
            { name: 'New Born Baby', icon: 'child_care', id: 'new_born' },
            { name: 'Condolence', icon: 'sick', id: 'condolence' },
            { name: 'Anniversary', icon: 'cake', id: 'anniversary' },
            { name: 'Birthday', icon: 'emoji_events', id: 'birthday' },
            { name: 'New Opening', icon: 'store', id: 'new_opening' },
            { name: 'Social', icon: 'people', id: 'social' },
            { name: 'Dharmik', icon: 'brightness_7', id: 'dharmik' },
            { name: 'Tapsya', icon: 'self_improvement', id: 'tapsya' },
            { name: 'Congratulations', icon: 'thumb_up', id: 'congrats' },
             { name: 'Thankyou', icon: 'thumb_up', id: 'congrats' },
            { name: 'Medical', icon: 'local_hospital', id: 'medical' },
             { name: 'Panchang', icon: 'emoji_events', id: 'medical' },
              { name: 'Pratika', icon: 'newspaper', id: 'medical' },
            { name: 'Newspaper', icon: 'newspaper', id: 'newspaper' },
        ],
        villages: ['Mandvi', 'Bhuj', 'Koday', 'Anjar', 'Naliya', 'Bidada'],
        villageStructure: [
            { name: 'History', icon: 'landmark' },
            { name: 'Mahajan Committee List', icon: 'gavel' },
            { name: 'Members List', icon: 'contacts' },
            { name: 'Derasar', icon: 'account_balance' },
            { name: 'Sathank', icon: 'church' },
            { name: 'Bhojanalay', icon: 'restaurant' },
            { name: 'Hospital', icon: 'medical_services' },
            { name: 'Library', icon: 'local_library' },
            { name: 'School', icon: 'school' },
            { name: 'Bank', icon: 'atm' },
            { name: 'Police Station', icon: 'local_police' },
            { name: 'Post Office', icon: 'local_post_office' },
            { name: 'Gram Panchayat', icon: 'domain' },
        ],
        mahajanSubCommittees: ['Derasar Committee', 'Bhojanshala Committee', 'Sathank Committee', 'Hospital Committee', 'Mahila Committee', 'Education Committee'],
        members: [
            { name: 'Ramesh Shah', id: 'KJS-001', avatar: 'assets/images/user-avatar.jpg', type: 'Male' },
            { name: 'Priya Mehta', id: 'KJS-002', avatar: 'assets/images/user-avatar.jpg', type: 'Female' },
            { name: 'Aarav Gada', id: 'KJS-003', avatar: 'assets/images/user-avatar.jpg', type: 'Kids' }
        ],
        jainSanghs: ['Shri 6 Koti Sthanakvasi', 'Shri 8 Koti Nani Paksh', 'Shri Tapā Gaccha', 'Shri Achal Gaccha'],
        jainSanghSubTree: ['Maharaj Saheb details', 'Maha Satiji details', 'Dixa', 'Chomasa', 'Sheshkar', 'History'],
        matrimonyCategories: ['Boy', 'Girls', 'Divorced', 'Widower', 'Widow']
    };

    // --- Element Selectors ---
    const pageContainer = document.getElementById('page-container');
    const pageTitle = document.querySelector('.page-title');
    const backButton = document.querySelector('.back-button');
    const loginSubmitBtn = document.getElementById('login-submit-btn');

    let navigationStack = [];

    // --- Core Functions ---
    const showScreen = (screenId) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    };

    const updateHeader = (title, showBack) => {
        pageTitle.textContent = title;
        backButton.style.display = showBack ? 'block' : 'none';
    };

    // --- Page Rendering Engine ---
    const renderPage = (state) => {
        pageContainer.innerHTML = ''; // Clear previous content
        let content = '';

        switch (state.page) {
            case 'home':
                content = `<div class="category-grid">${samajData.homeCategories.map(cat => `
                    <div class="category-card" data-page-id="${cat.id}" data-page-title="${cat.name}">
                        <div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div>
                        <h4>${cat.name}</h4>
                    </div>`).join('')}</div>`;
                updateHeader('Home', false);
                break;
            
            case 'villageSelector':
                content = `<div class="village-selector-page">
                    <h3>Select your village</h3>
                    <select id="village-dropdown">
                        <option value="">-- Choose Village --</option>
                        ${samajData.villages.map(v => `<option value="${v}">${v}</option>`).join('')}
                    </select>
                </div>`;
                updateHeader('Select Village', true);
                break;
                
            case 'villageDashboard':
                content = `<div class="category-grid">${samajData.villageStructure.map(cat => `
                    <div class="category-card" data-page-id="${cat.name.replace(/ /g, '_')}" data-page-title="${cat.name}">
                        <div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div>
                        <h4>${cat.name}</h4>
                    </div>`).join('')}</div>`;
                updateHeader(state.village, true);
                break;

            case 'subCategoryList':
                content = `<div class="list-page">${state.items.map(item => `
                    <div class="list-item" data-page-id="${item.replace(/ /g, '_')}" data-page-title="${item}">
                        <h4>${item}</h4><i class="material-icons-sharp">arrow_forward_ios</i>
                    </div>`).join('')}</div>`;
                updateHeader(state.title, true);
                break;
            
            case 'memberList':
                 content = `<div class="member-list">${samajData.members.map(m => `
                    <div class="member-card">
                        <img src="${m.avatar}" alt="${m.name}">
                        <div class="member-info">
                            <h4>${m.name}</h4>
                            <p>${m.type}</p>
                            <span class="member-id">${m.id}</span>
                        </div>
                    </div>`).join('')}</div>`;
                updateHeader(state.title, true);
                break;

            default:
                content = `<h2>${state.title}</h2><p>Content for this page will be displayed here.</p>`;
                updateHeader(state.title, true);
        }
        
        pageContainer.innerHTML = content;
    };
    
    // --- Navigation Logic ---
    const navigateTo = (state) => {
        navigationStack.push(state);
        renderPage(state);
    };

    const goBack = () => {
        if (navigationStack.length > 1) {
            navigationStack.pop();
            renderPage(navigationStack[navigationStack.length - 1]);
        }
    };
    
    // --- Event Listeners ---
    loginSubmitBtn.addEventListener('click', () => {
        const homeState = { page: 'home' };
        navigationStack = [homeState];
        renderPage(homeState);
        showScreen('main-app-screen');
    });
    
    backButton.addEventListener('click', goBack);

    pageContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card, .list-item');
        if (!card) return;

        const { pageId, pageTitle } = card.dataset;
        let newState = {};

        // Main Home Screen Navigation
        if (navigationStack[navigationStack.length - 1].page === 'home') {
            if (pageId === 'village') newState = { page: 'villageSelector' };
            else if (pageId === 'jain_sandh') newState = { page: 'subCategoryList', title: 'Jain Sandh', items: samajData.jainSanghs };
            else if (pageId === 'matrimony') newState = { page: 'subCategoryList', title: 'Matrimony', items: samajData.matrimonyCategories };
            else newState = { page: 'content', title: pageTitle }; // For simple pages
        } 
        // Village Dashboard Navigation
        else if(navigationStack[navigationStack.length-1].page === 'villageDashboard') {
            if (pageId === 'Mahajan_Committee_List') newState = { page: 'subCategoryList', title: pageTitle, items: samajData.mahajanSubCommittees };
            else if (pageId === 'Members_List') newState = { page: 'memberList', title: pageTitle };
            else newState = { page: 'content', title: pageTitle };
        }
        // Jain Sandh Navigation
        else if(navigationStack[navigationStack.length-1].title === 'Jain Sandh') {
             newState = { page: 'subCategoryList', title: pageTitle, items: samajData.jainSanghSubTree };
        }
        // Generic Navigation
        else {
            newState = { page: 'content', title: pageTitle };
        }
        
        navigateTo(newState);
    });

    pageContainer.addEventListener('change', (e) => {
        if (e.target.id === 'village-dropdown') {
            const selectedVillage = e.target.value;
            if (selectedVillage) {
                navigateTo({ page: 'villageDashboard', village: selectedVillage });
            }
        }
    });

});