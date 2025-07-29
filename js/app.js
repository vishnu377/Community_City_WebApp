document.addEventListener('DOMContentLoaded', () => {

    // --- COMPLETE APP DATA STRUCTURE ---
    const samajData = {
        // --- SOCIAL MODULE DATA ---
        social: {
            homeCategories: [
                { name: 'The Village Name', icon: 'location_city', id: 'village' }, { name: 'Jain Sandh', icon: 'groups', id: 'jain_sandh' }, { name: 'Matrimony', icon: 'favorite', id: 'matrimony' }, { name: 'New Marriage', icon: 'celebration', id: 'new_marriage' }, { name: 'Engagement', icon: 'ring_volume', id: 'engagement' }, { name: 'New Born Baby', icon: 'child_care', id: 'new_born' }, { name: 'Condolence', icon: 'sick', id: 'condolence' }, { name: 'Anniversary', icon: 'cake', id: 'anniversary' }, { name: 'Birthday', icon: 'emoji_events', id: 'birthday' }, { name: 'New Opening', icon: 'store', id: 'new_opening' }, { name: 'Dharmik', icon: 'brightness_7', id: 'dharmik' }, { name: 'Medical', icon: 'local_hospital', id: 'medical' },
            ],
            villages: ['Mandvi', 'Bhuj', 'Koday', 'Anjar', 'Naliya', 'Bidada'],
            villageStructure: [ { name: 'History', icon: 'landmark' }, { name: 'Mahajan Committee List', icon: 'gavel' }, { name: 'Members List', icon: 'contacts' }, { name: 'Derasar', icon: 'account_balance' }, { name: 'Hospital', icon: 'medical_services' }, { name: 'School', icon: 'school' } ],
            mahajanSubCommittees: ['Derasar Committee', 'Bhojanshala Committee', 'Hospital Committee', 'Mahila Committee', 'Education Committee'],
            members: [ { name: 'Ramesh Shah', id: 'KJS-001', avatar: 'assets/images/user-avatar.jpg', type: 'Male' }, { name: 'Priya Mehta', id: 'KJS-002', avatar: 'assets/images/user-avatar.jpg', type: 'Female' }, ],
            jainSanghs: ['Shri 6 Koti Sthanakvasi', 'Shri 8 Koti Nani Paksh', 'Shri Tapā Gaccha'],
            jainSanghSubTree: ['Maharaj Saheb details', 'Dixa', 'History'],
            matrimonyCategories: ['Boy', 'Girls', 'Divorced', 'Widower', 'Widow']
        },
        // --- BUSINESS MODULE DATA (NEW) ---
        business: {
            vendors: [ { id: 1, name: 'Kutchi Handicrafts', logo: 'assets/images/homeimages/kvo jodo logo.png' }, { id: 2, name: 'Samaj Foods & Spices', logo: 'assets/images/homeimages/kvo jodo logo.png' } ],
            products: [
                { id: 101, name: 'Handmade Kutchi Shawl', price: 2500, image: 'assets/images/homeimages/kvo jodo logo.png', vendorId: 1, desc: 'A beautiful, intricately woven shawl made by local artisans.' },
                { id: 102, name: 'Organic Turmeric Powder', price: 350, image: 'assets/images/homeimages/kvo jodo logo.png', vendorId: 2, desc: 'Freshly ground turmeric powder, sourced from local farms.' },
                { id: 103, name: 'Wooden Toy Set', price: 800, image: 'assets/images/homeimages/kvo jodo logo.png', vendorId: 1, desc: 'Eco-friendly wooden toys for children, painted with non-toxic colors.' },
                { id: 104, name: 'Spicy Mango Pickle', price: 280, image: 'assets/images/homeimages/kvo jodo logo.png', vendorId: 2, desc: 'A traditional mango pickle with a perfect blend of spices.' }
            ],
            cart: [],
        }
    };

    // --- Element Selectors ---
    const pageContainer = document.getElementById('page-container');
    const pageTitle = document.querySelector('.page-title');
    const backButton = document.querySelector('.back-button');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');

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
    const updateCartCount = () => cartCount.textContent = samajData.business.cart.length;

    // --- Page Rendering Engine ---
    const renderPage = (state) => {
        pageContainer.innerHTML = '';
        let content = '';

        switch (state.page) {
            // Social Module Pages
            case 'socialHome':
                content = `<div class="category-grid">${samajData.social.homeCategories.map(cat => `<div class="category-card" data-page-id="${cat.id}" data-page-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader('Social', false);
                break;
            case 'villageSelector':
                content = `<div class="village-selector-page"><h3>Select your village</h3><select id="village-dropdown"><option value="">-- Choose Village --</option>${samajData.social.villages.map(v => `<option value="${v}">${v}</option>`).join('')}</select></div>`;
                updateHeader('Select Village', true);
                break;
            case 'villageDashboard':
                content = `<div class="category-grid">${samajData.social.villageStructure.map(cat => `<div class="category-card" data-page-id="${cat.name.replace(/ /g, '_')}" data-page-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader(state.village, true);
                break;
            case 'subCategoryList':
                content = `<div class="list-page">${state.items.map(item => `<div class="list-item" data-page-id="${item.replace(/ /g, '_')}" data-page-title="${item}"><h4>${item}</h4><i class="material-icons-sharp">arrow_forward_ios</i></div>`).join('')}</div>`;
                updateHeader(state.title, true);
                break;
             case 'memberList':
                 content = `<div class="member-list">${samajData.social.members.map(m => `<div class="member-card"><img src="${m.avatar}" alt="${m.name}"><div class="member-info"><h4>${m.name}</h4><p>${m.type}</p><span class="member-id">${m.id}</span></div></div>`).join('')}</div>`;
                updateHeader(state.title, true);
                break;
            
            // Business Module Pages (NEW)
            case 'businessHome':
                content = `<div class="business-home-page">
                    <input type="text" class="search-bar" placeholder="Search for products...">
                    <div class="promo-carousel"><img src="assets/images/homeimages/kvo jodo logo.png" alt="Sale Banner"/></div>
                    <h3 class="section-title">Featured Products</h3>
                    <div class="product-grid">${samajData.business.products.map(p => `
                        <div class="product-card" data-product-id="${p.id}">
                            <img src="${p.image}" alt="${p.name}">
                            <div class="product-info"><h5>${p.name}</h5><p class="product-price">₹${p.price}</p><p class="product-vendor">By: ${samajData.business.vendors.find(v => v.id === p.vendorId).name}</p></div>
                        </div>`).join('')}</div>
                </div>`;
                updateHeader('Business', false);
                break;
            case 'productDetail':
                const product = samajData.business.products.find(p => p.id === state.productId);
                const vendor = samajData.business.vendors.find(v => v.id === product.vendorId);
                content = `<div class="product-detail-page">
                    <div class="product-image-slider"><img src="${product.image}" alt="${product.name}"></div>
                    <div class="product-detail-content">
                        <h2 class="product-detail-title">${product.name}</h2>
                        <p class="product-detail-price">₹${product.price}</p>
                        <div class="vendor-info-box"><img src="${vendor.logo}" alt="${vendor.name}"><div><h4>Sold by ${vendor.name}</h4></div></div>
                        <p class="product-detail-desc">${product.desc}</p>
                        <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>`;
                updateHeader('Product Details', true);
                break;
            case 'cart':
                 content = `<div class="cart-page"><div class="list-page">
                    ${samajData.business.cart.length > 0 ? samajData.business.cart.map(p => `
                        <div class="list-item cart-item">
                            <img src="${p.image}" alt="${p.name}"/>
                            <div class="cart-item-details"><h4>${p.name}</h4><p class="cart-item-price">₹${p.price}</p></div>
                        </div>`).join('') : '<p>Your cart is empty.</p>'}
                 </div>
                 ${samajData.business.cart.length > 0 ? `<div class="cart-summary">
                    <div class="summary-row"><h4>Total</h4><h4>₹${samajData.business.cart.reduce((sum, p) => sum + p.price, 0)}</h4></div>
                    <button class="btn btn-primary">Proceed to Checkout</button>
                 </div>` : ''}</div>`;
                updateHeader('My Cart', true);
                break;

            default: content = `<h2>${state.title || 'Page Not Found'}</h2>`; updateHeader(state.title || 'Error', true);
        }
        pageContainer.innerHTML = content;
    };
    
    // --- Navigation & Event Logic ---
    const navigateTo = (state) => { navigationStack.push(state); renderPage(state); };
    const goBack = () => { if (navigationStack.length > 1) { navigationStack.pop(); renderPage(navigationStack[navigationStack.length - 1]); } };
    
    // Main Click Handler
    pageContainer.addEventListener('click', (e) => {
        const currentState = navigationStack[navigationStack.length - 1];
        const card = e.target.closest('.category-card, .list-item, .product-card, .add-to-cart-btn');
        if (!card) return;

        // E-commerce actions
        if (card.matches('.product-card')) { navigateTo({ page: 'productDetail', productId: parseInt(card.dataset.productId) }); return; }
        if (card.matches('.add-to-cart-btn')) {
            const product = samajData.business.products.find(p => p.id === parseInt(card.dataset.productId));
            samajData.business.cart.push(product);
            updateCartCount();
            alert(`${product.name} added to cart!`);
            return;
        }

        // Social Module Navigation
        const { pageId, pageTitle } = card.dataset;
        let newState = {};
        if (currentState.page === 'socialHome') {
            if (pageId === 'village') newState = { page: 'villageSelector' };
            else if (pageId === 'jain_sandh') newState = { page: 'subCategoryList', title: 'Jain Sandh', items: samajData.social.jainSanghs };
            else if (pageId === 'matrimony') newState = { page: 'subCategoryList', title: 'Matrimony', items: samajData.social.matrimonyCategories };
            else newState = { page: 'content', title: pageTitle };
        } else if (currentState.page === 'villageDashboard') {
            if (pageId === 'Mahajan_Committee_List') newState = { page: 'subCategoryList', title: pageTitle, items: samajData.social.mahajanSubCommittees };
            else if (pageId === 'Members_List') newState = { page: 'memberList', title: pageTitle };
            else newState = { page: 'content', title: pageTitle };
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
            if (selectedVillage) navigateTo({ page: 'villageDashboard', village: selectedVillage });
        }
    });

    // Bottom Navigation Handler
    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            bottomNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const homeState = { page: item.dataset.page };
            navigationStack = [homeState];
            renderPage(homeState);
        });
    });

    // --- Initial App Start ---
    const initApp = () => {
        loginSubmitBtn.addEventListener('click', () => {
            const homeState = { page: 'socialHome' }; // Default to social home
            navigationStack = [homeState];
            renderPage(homeState);
            showScreen('main-app-screen');
        });

        backButton.addEventListener('click', goBack);
        cartButton.addEventListener('click', () => navigateTo({ page: 'cart' }));

        // Splash screen logic
        setTimeout(() => {
            showScreen('login-screen');
        }, 2500); // Show splash for 2.5 seconds
    };

    initApp();
});