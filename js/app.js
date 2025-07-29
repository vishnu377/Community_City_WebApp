





































document.addEventListener('DOMContentLoaded', () => {

    // --- COMPLETE & MERGED APP DATA STRUCTURE ---
    const samajData = {
        currentUser: { isSeller: false, sellerId: null, sellerName: null },
        // --- SOCIAL MODULE DATA (RESTORED TO FULL DETAIL) ---
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
        // --- BUSINESS MODULE DATA ---
        business: {
            sellers: [ { id: 1, name: 'Kutchi Handicrafts', logo: 'assets/images/homeimages/kvo jodo logo.png' } ],
            products: [ { id: 101, name: 'Handmade Shawl', price: 2500, image: 'assets/images/homeimages/kvo jodo logo.png', sellerId: 1, desc: 'A beautiful shawl.' }, { id: 102, name: 'Wooden Toys', price: 800, image: 'assets/images/homeimages/kvo jodo logo.png', sellerId: 1, desc: 'Eco-friendly toys.' }, ],
            cart: [],
        }
    };

    // --- Element Selectors ---
    const pageContainer = document.getElementById('page-container');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const mainAppBackButton = document.querySelector('#main-app-screen .back-button');
    const formBackButtons = document.querySelectorAll('.back-button-form');

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
            case 'businessRoleSelection':
                content = `<div class="role-selection-page"><div class="role-selection-box" id="iam-buyer-btn"><i class="material-icons-sharp">shopping_bag</i><h3>I'm a Buyer</h3><p>Browse & buy products</p></div><div class="role-selection-box" id="iam-seller-btn"><i class="material-icons-sharp">store</i><h3>I'm a Seller</h3><p>List & manage products</p></div></div>`;
                updateHeader('Business', false); break;
            case 'businessHome':
                content = `<div class="business-home-page"><input type="text" class="search-bar" placeholder="Search..."><div class="promo-carousel"><img src="assets/images/homeimages/kvo jodo logo.png"/></div><h3 class="section-title">Featured</h3><div class="product-grid">${samajData.business.products.map(p => `<div class="product-card" data-product-id="${p.id}"><img src="${p.image}"><div><h5>${p.name}</h5><p class="product-price">₹${p.price}</p></div></div>`).join('')}</div></div>`;
                updateHeader('Marketplace', true); break;
            case 'sellerDashboard':
                const myProducts = samajData.business.products.filter(p => p.sellerId === samajData.currentUser.sellerId);
                content = `<div class="seller-dashboard-page"><div class="dashboard-header"><h2>${samajData.currentUser.sellerName || 'My Dashboard'}</h2><button class="btn btn-primary" id="add-new-product-btn">Add New</button></div><div class="my-products-grid">${myProducts.length > 0 ? myProducts.map(p => `<div class="product-card"><img src="${p.image}"><div><h5>${p.name}</h5><p class="product-price">₹${p.price}</p></div></div>`).join('') : '<p>You have not listed any products yet.</p>'}</div></div>`;
                updateHeader('Seller Dashboard', true); break;
            default: content = `<h2>${state.title || 'Page Not Found'}</h2><p>Content under construction.</p>`; updateHeader(state.title || 'Error', true);
        }
        pageContainer.innerHTML = content;
    };
    
    // --- Navigation & Event Logic ---
    const navigateTo = (state) => { navigationStack.push(state); renderPage(state); };
    const goBack = () => {
        if (navigationStack.length <= 1) return;
        navigationStack.pop();
        const prevState = navigationStack[navigationStack.length - 1];
        if (document.querySelector('.screen.active').id !== 'main-app-screen') {
            showScreen('main-app-screen');
        }
        renderPage(prevState);
    };
    
    // Main Click Handler
    pageContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card, .list-item, .product-card, #iam-buyer-btn, #iam-seller-btn, #add-new-product-btn');
        if (!card) return;

        // Business Logic
        if (card.matches('#iam-buyer-btn')) { navigateTo({ page: 'businessHome' }); return; }
        if (card.matches('#iam-seller-btn')) {
            if (samajData.currentUser.isSeller) { navigateTo({ page: 'sellerDashboard' }); } 
            else { showScreen('seller-registration-screen'); }
            return;
        }
        if (card.matches('#add-new-product-btn')) { showScreen('add-product-screen'); return; }
        if (card.matches('.product-card')) { navigateTo({ page: 'productDetail', productId: parseInt(card.dataset.productId) }); return; }

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
        formBackButtons.forEach(btn => btn.addEventListener('click', goBack));
        document.getElementById('seller-registration-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const businessName = e.target.elements[1].value;
            samajData.currentUser.isSeller = true; samajData.currentUser.sellerId = Date.now(); samajData.currentUser.sellerName = businessName;
            alert(`Congratulations, ${businessName}! You are now a seller.`);
            navigateTo({ page: 'sellerDashboard' }); showScreen('main-app-screen');
        });
        document.getElementById('add-product-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const newProduct = { id: Date.now(), name: e.target.elements[0].value, price: parseInt(e.target.elements[1].value), image: 'assets/images/homeimages/kvo jodo logo.png', sellerId: samajData.currentUser.sellerId, desc: e.target.elements[2].value };
            samajData.business.products.push(newProduct);
            alert('Product added successfully!');
            navigateTo({ page: 'sellerDashboard' }); showScreen('main-app-screen');
        });
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