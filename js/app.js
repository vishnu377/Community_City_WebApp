



document.addEventListener('DOMContentLoaded', () => {

    // --- NEW APP DATA STRUCTURE BASED ON THE PROVIDED IMAGE ---
    const samajData = {
        social: {
            homeCategories: [
                { name: 'Village Name', icon: 'location_city', id: 'village_name' },
                { name: 'Jain Sandh', icon: 'groups', id: 'jain_sandh' },
                { name: 'Death', icon: 'sick', id: 'death' },
                { name: 'Matrimony', icon: 'favorite', id: 'matrimony' },
                { name: 'New marriage', icon: 'celebration', id: 'new_marriage' },
                { name: 'Engagement', icon: 'ring_volume', id: 'engagement' },
                { name: 'New born baby', icon: 'child_care', id: 'new_born_baby' },
                { name: 'Condolence', icon: 'sentiment_very_dissatisfied', id: 'condolence' },
                { name: 'Marriage anniversary', icon: 'cake', id: 'marriage_anniversary' },
                { name: 'Birthday', icon: 'emoji_events', id: 'birthday' },
                { name: 'New opening', icon: 'store', id: 'new_opening' },
                { name: 'Social', icon: 'people', id: 'social_page' },
                { name: 'Education', icon: 'school', id: 'education' },
                { name: 'Cooking', icon: 'soup_kitchen', id: 'cooking' },
                { name: 'Good Thought', icon: 'lightbulb', id: 'good_thought' },
                { name: 'Dharmik', icon: 'brightness_7', id: 'dharmik' },
                { name: 'Tapsya', icon: 'self_improvement', id: 'tapsya' },
                { name: 'Congratulations', icon: 'thumb_up', id: 'congratulations' },
                { name: 'Thankyou', icon: 'volunteer_activism', id: 'thankyou' },
                { name: 'Medical', icon: 'local_hospital', id: 'medical' },
                { name: 'Panchang', icon: 'event', id: 'panchang' },
                { name: 'Pratika', icon: 'book', id: 'pratika' },
                { name: 'Newspaper', icon: 'newspaper', id: 'newspaper' },
            ],
            villages: ['Mandvi', 'Bhuj', 'Koday', 'Anjar', 'Naliya', 'Bidada'],
            villageStructure: [
                { name: 'History', icon: 'landmark', id: 'history' },
                { name: 'Committee List', icon: 'gavel', id: 'committee_list', items: ['Mahajan Committee', 'Derasar Committee', 'Bhojanshala Committee', 'Sathank Committee', 'Sanatorium Committee', 'Hospital Committee', 'Mahila Committee', 'Senior Citizen Committee', 'Medical Committee', 'Education Committee']},
                { name: 'Members List', icon: 'contacts', id: 'members_list' },
                { name: 'Derasar', icon: 'account_balance', id: 'derasar' },
                { name: 'Sathank', icon: 'church', id: 'sathank' },
                { name: 'Bhojanalay', icon: 'restaurant', id: 'bhojanalay' },
                { name: 'Sanatorium', icon: 'healing', id: 'sanatorium' },
                { name: 'Hospital', icon: 'medical_services', id: 'hospital' },
                { name: 'Library', icon: 'local_library', id: 'library' },
                { name: 'School', icon: 'school', id: 'school' },
                { name: 'Bank', icon: 'atm', id: 'bank' },
                { name: 'Police Station', icon: 'local_police', id: 'police_station' },
                { name: 'Post Office', icon: 'local_post_office', id: 'post_office' },
                { name: 'Gram Panchayat', icon: 'domain', id: 'gram_panchayat' },
            ],
            memberFilters: ['All', 'Male', 'Female', 'Kids (Under 10 Years)', 'Boys (Over 21 Years)', 'Girls (Over 18 Years)', 'Divorce', 'Widower', 'Widow'],
            members: [
                { name: 'Ramesh Shah', id: 'KJS-001', avatar: 'assets/images/user-avatar.jpg', type: 'Male', status: 'Widower' },
                { name: 'Priya Mehta', id: 'KJS-002', avatar: 'assets/images/user-avatar.jpg', type: 'Female', status: 'Divorce' },
                { name: 'Aarav Gada', id: 'KJS-003', avatar: 'assets/images/user-avatar.jpg', type: 'Kids (Under 10 Years)', status: 'Single' },
                { name: 'Riya Sanghvi', id: 'KJS-004', avatar: 'assets/images/user-avatar.jpg', type: 'Girls (Over 18 Years)', status: 'Single' },
                { name: 'Ankit Vora', id: 'KJS-005', avatar: 'assets/images/user-avatar.jpg', type: 'Boys (Over 21 Years)', status: 'Single' },
                { name: 'Meena Parekh', id: 'KJS-007', avatar: 'assets/images/user-avatar.jpg', type: 'Female', status: 'Widow' },
            ],
            jainSanghs: {
                names: ['Shri 6 Koti Sthanakvasi', 'Shri 8 Koti Nani Paksh', 'Shri Tapā Gaccha', 'Shri Achal Gaccha'],
                subTree: ['History', 'Maharaj Saheb details', 'Maha Satiji details', 'Dixa', 'Chomasa', 'Sheshkar', 'Tapsya']
            },
            matrimony: [
                { name: 'Boy' }, { name: 'Girls' }, { name: 'Divorced', items: ['Male', 'Female'] }, { name: 'Widower' }, { name: 'Widow' }
            ]
        },
        business: {
            sellers: [ { id: 1, name: 'Kutchi Handicrafts', sellerPhone: '1234567890' }, { id: 2, name: 'Samaj Foods', sellerPhone: '919876543211' } ],
            categories: [ { id: 1, name: 'Handicrafts' }, { id: 2, name: 'Foods & Spices' }, { id: 3, name: 'Apparel' }, { id: 4, name: 'Decor' } ],
            products: [
                { id: 101, name: 'Handmade Shawl', price: 2500, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 1, sellerId: 1, desc: 'A beautiful shawl, hand-woven by local artisans with traditional Kutchi patterns.' },
                { id: 102, name: 'Spicy Mango Pickle', price: 280, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 2, sellerId: 2, desc: 'Homemade, traditional mango pickle with a perfect blend of hand-ground spices.' },
                { id: 103, name: 'Wooden Elephant', price: 1200, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 4, sellerId: 1, desc: 'Intricately hand-carved wooden elephant statue.' },
                { id: 104, name: 'Bandhani Kurta', price: 1800, image: 'assets/images/homeimages/kvo jodo logo.png', categoryId: 3, sellerId: 1, desc: 'Vibrant and traditional Bandhani Kurta for men.' },
            ],
        }
    };

    const pageContainer = document.getElementById('page-container');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const mainAppBackButton = document.querySelector('#main-app-screen .back-button');

    let navigationStack = [];

    const showScreen = (screenId) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(screenId)?.classList.add('active'); };
    const updateHeader = (title, showBack) => {
        document.querySelector('#main-app-screen .page-title').textContent = title;
        mainAppBackButton.style.display = showBack ? 'block' : 'none';
    };

    const renderPage = (state) => {
        let content = '';
        const pageData = state.data || {};

        switch (state.page) {
            case 'socialHome':
                content = `<div class="category-grid">${samajData.social.homeCategories.map(cat => `<div class="category-card" data-id="${cat.id}" data-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon || 'category'}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader('Social', false); break;

            case 'villageSelector':
                content = `<div class="village-selector-page"><h3>Select your village</h3><select id="village-dropdown"><option value="">-- Choose Village --</option>${samajData.social.villages.map(v => `<option value="${v}">${v}</option>`).join('')}</select></div>`;
                updateHeader('Select Village', true); break;

            case 'villageDashboard':
                content = `<div class="category-grid">${samajData.social.villageStructure.map(cat => `<div class="category-card" data-id="${cat.id}" data-title="${cat.name}"><div class="category-icon"><i class="material-icons-sharp">${cat.icon}</i></div><h4>${cat.name}</h4></div>`).join('')}</div>`;
                updateHeader(pageData.village, true); break;

            case 'listPage':
                content = `<div class="list-page">${pageData.items.map(item => {
                    const hasSubItems = typeof item === 'object' && item.items;
                    return `<div class="list-item" data-id="${(typeof item === 'object' ? item.name : item)}" data-title="${(typeof item === 'object' ? item.name : item)}"><h4>${(typeof item === 'object' ? item.name : item)}</h4>${hasSubItems ? '<i class="material-icons-sharp">arrow_forward_ios</i>' : ''}</div>`;
                }).join('')}</div>`;
                updateHeader(pageData.title, true); break;

            case 'memberList':
                const currentFilter = pageData.filter || 'All';
                const membersToDisplay = currentFilter === 'All' ? samajData.social.members : samajData.social.members.filter(m => m.type === currentFilter || m.status === currentFilter);
                content = `
                    <div class="member-list-page">
                        <div class="category-filter-container">${samajData.social.memberFilters.map(cat => `<div class="category-filter-tab member-filter ${currentFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</div>`).join('')}</div>
                        <div class="member-list">${membersToDisplay.map(m => `<div class="member-card"><img src="${m.avatar}" alt="${m.name}"><div class="member-info"><h4>${m.name}</h4><p>${m.type} / ${m.status}</p><span class="member-id">${m.id}</span></div></div>`).join('')}</div>
                    </div>`;
                updateHeader('Members List', true); break;
            
            case 'businessHome':
                // Business functionality remains the same
                const currentBizFilter = pageData.filter || 'all';
                const productsToDisplay = currentBizFilter === 'all' ? samajData.business.products : samajData.business.products.filter(p => p.categoryId === currentBizFilter);
                content = `<div class="business-home-page"><input type="text" class="search-bar" placeholder="Search for products..."><div class="category-filter-container">${[{id: 'all', name: 'All'}, ...samajData.business.categories].map(cat => `<div class="category-filter-tab biz-filter ${currentBizFilter === cat.id ? 'active' : ''}" data-category-id="${cat.id}">${cat.name}</div>`).join('')}</div><h3 class="section-title">Products</h3><div class="product-grid">${productsToDisplay.map(p => `<div class="product-card" data-product-id="${p.id}"><img src="${p.image}" alt="${p.name}"><div class="product-info"><h5>${p.name}</h5><p class="product-price">₹${p.price}</p></div></div>`).join('')}</div></div>`;
                updateHeader('Business', false); break;

            case 'productDetail':
                const product = samajData.business.products.find(p => p.id === pageData.productId);
                const seller = samajData.business.sellers.find(s => s.id === product.sellerId);
                const inquiryText = encodeURIComponent(`Hello, I am interested in buying your product: ${product.name} (ID: ${product.id})`);
                const whatsappLink = `https://wa.me/${seller.sellerPhone}?text=${inquiryText}`;
                content = `<div class="product-detail-page"><div class="product-image-slider"><img src="${product.image}" alt="${product.name}"></div><div class="product-detail-content"><h2 class="product-detail-title">${product.name}</h2><p class="product-detail-price">₹${product.price}</p><p class="product-detail-desc">${product.desc}</p><div class="action-buttons"><a href="${whatsappLink}" target="_blank" class="btn contact-seller">Contact Seller</a><a href="${whatsappLink}" target="_blank" class="btn whatsapp"><i class="material-icons-sharp">whatsapp</i>Buy Now</a></div></div></div>`;
                updateHeader('Details', true); break;

            default: content = `<h2>${pageData.title || 'Page Not Found'}</h2><p>Content under construction.</p>`; updateHeader(pageData.title || 'Error', true);
        }
        pageContainer.innerHTML = content;
    };
    
    const navigateTo = (state) => { navigationStack.push(state); renderPage(state); };
    const goBack = () => { if (navigationStack.length <= 1) return; navigationStack.pop(); renderPage(navigationStack[navigationStack.length - 1]); };
    
    pageContainer.addEventListener('click', (e) => {
        const currentState = navigationStack[navigationStack.length - 1];

        // --- FILTER HANDLERS ---
        const bizFilterTab = e.target.closest('.biz-filter');
        if (bizFilterTab) {
            currentState.data.filter = bizFilterTab.dataset.categoryId === 'all' ? 'all' : parseInt(bizFilterTab.dataset.categoryId);
            renderPage(currentState); return;
        }
        const memberFilterTab = e.target.closest('.member-filter');
        if (memberFilterTab) {
            currentState.data.filter = memberFilterTab.dataset.filter;
            renderPage(currentState); return;
        }

        const card = e.target.closest('.category-card, .list-item, .product-card');
        if (!card) return;

        // --- NAVIGATION HANDLERS ---
        if (card.matches('.product-card')) {
            navigateTo({ page: 'productDetail', data: { productId: parseInt(card.dataset.productId) } }); return;
        }
        
        const id = card.dataset.id;
        const title = card.dataset.title;
        let newState = {};

        if (currentState.page === 'socialHome') {
            if (id === 'village_name') { newState = { page: 'villageSelector', data: { title: title } }; }
            else if (id === 'jain_sandh') { newState = { page: 'listPage', data: { title: 'Jain Sangh', items: samajData.social.jainSanghs.names } }; }
            else if (id === 'matrimony') { newState = { page: 'listPage', data: { title: 'Matrimony', items: samajData.social.matrimony } }; }
            else { newState = { page: 'content', data: { title: title } }; }
        } else if (currentState.page === 'villageDashboard') {
            const selectedCat = samajData.social.villageStructure.find(c => c.id === id);
            if (selectedCat.items) { newState = { page: 'listPage', data: { title: title, items: selectedCat.items } }; }
            else if (id === 'members_list') { newState = { page: 'memberList', data: { title: title, filter: 'All' } }; }
            else { newState = { page: 'content', data: { title: title } }; }
        } else if (currentState.page === 'listPage') {
            const parentTitle = currentState.data.title;
            if (parentTitle === 'Jain Sangh') {
                newState = { page: 'listPage', data: { title: title, items: samajData.social.jainSanghs.subTree } };
            } else if (parentTitle === 'Matrimony') {
                const selectedMatrimony = samajData.social.matrimony.find(m => m.name === title);
                if (selectedMatrimony.items) { newState = { page: 'listPage', data: { title: title, items: selectedMatrimony.items } }; }
                else { newState = { page: 'content', data: { title: title } }; }
            } else {
                newState = { page: 'content', data: { title: title } };
            }
        }
        else { return; } // Avoid navigation from unknown states
        
        navigateTo(newState);
    });

    pageContainer.addEventListener('change', (e) => {
        if (e.target.id === 'village-dropdown') {
            const selectedVillage = e.target.value;
            if (selectedVillage) { navigateTo({ page: 'villageDashboard', data: { village: selectedVillage } }); }
        }
    });

    const startApp = () => {
        setTimeout(() => { showScreen('login-screen'); }, 2500);
        loginSubmitBtn.addEventListener('click', () => {
            const homeState = { page: 'socialHome', data:{} };
            navigationStack = [homeState]; renderPage(homeState); showScreen('main-app-screen');
        });
        mainAppBackButton.addEventListener('click', goBack);
        bottomNavItems.forEach(item => {
            item.addEventListener('click', () => {
                bottomNavItems.forEach(i => i.classList.remove('active')); item.classList.add('active');
                const homeState = { page: item.dataset.page, data:{} };
                navigationStack = [homeState]; renderPage(homeState);
            });
        });
    };
    
    startApp();
});