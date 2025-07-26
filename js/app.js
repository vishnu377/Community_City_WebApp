document.addEventListener('DOMContentLoaded', () => {

    const getStartedBtn = document.querySelector("#welcome-screen .btn-primary");
    const navItems = document.querySelectorAll('.nav-item');
    const contentPages = document.querySelectorAll('.content-page');
    const screens = document.querySelectorAll('.screen');
    const mainAppNav = document.querySelector('.bottom-nav');

    // Function to switch between major screens
    function showScreen(screenId) {
        screens.forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    // Function to switch between pages within the main app
    function showContentPage(pageId) {
        contentPages.forEach(p => p.classList.remove('active'));
        if (document.getElementById(pageId)) {
            document.getElementById(pageId).classList.add('active');
        }
    }

    // Event Listener for the "Get Started" button
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            showScreen('main-app');
        });
    }

    // Logic for the Bottom Navigation
    mainAppNav.addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (!navItem) return;

        navItems.forEach(item => item.classList.remove('active'));
        navItem.classList.add('active');

        const targetPageId = navItem.dataset.target;
        if (targetPageId) {
            showContentPage(targetPageId);
        }
    });
});













document.addEventListener('DOMContentLoaded', () => {

    // --- Mock Data (Simulating a database) ---
    const members = [
        { name: 'John Doe', location: 'New York, USA', avatar: 'assets/images/user-avatar.jpg' },
        { name: 'Jane Smith', location: 'London, UK', avatar: 'assets/images/user-avatar.jpg' },
        { name: 'Ravi Kumar', location: 'Mumbai, India', avatar: 'assets/images/user-avatar.jpg' },
    ];

    const committees = [
        { name: 'Cultural Committee', members: [{ name: 'Jane Smith', role: 'President' }, { name: 'Peter Jones', role: 'Member' }] },
        { name: 'Sports Committee', members: [{ name: 'Ravi Kumar', role: 'Head' }, { name: 'Susan Lee', role: 'Coordinator' }] }
    ];

    const albums = [
        { name: 'Annual Gala 2024', count: 84, cover: 'assets/images/welcome-background.png' },
        { name: 'Charity Drive', count: 52, cover: 'assets/images/welcome-background.png' },
        { name: 'Sports Day', count: 112, cover: 'assets/images/welcome-background.png' },
        { name: 'Holi Celebration', count: 98, cover: 'assets/images/welcome-background.png' }
    ];

    const jobs = [
        { title: 'Senior UX Designer', company: 'Innovate Corp', type: 'Full-time', location: 'Remote' },
        { title: 'Project Manager', company: 'BuildIt Ltd.', type: 'Contract', location: 'New York' }
    ];
    
    const birthdayWishes = [
        { name: 'Michael Brown', avatar: 'assets/images/user-avatar.jpg' }
    ];
    
    const tributes = [
        { name: 'George Williams', date: 'July 26th', avatar: 'assets/images/user-avatar.jpg' }
    ];


    // --- Element Selectors ---
    const mainApp = document.getElementById('main-app');
    const contentPages = document.querySelectorAll('.content-page');
    const pageTitle = mainApp.querySelector('.page-title');
    const backButton = mainApp.querySelector('.back-button');
    const actionCards = document.querySelectorAll('.action-card, .moment-card');

    // --- Dynamic Content Rendering Functions ---

    function renderMembers() {
        const list = document.querySelector('.member-list');
        list.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="${member.avatar}" alt="${member.name}">
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <p>${member.location}</p>
                </div>
                <div class="view-btn">View</div>
            </div>
        `).join('');
    }

    function renderCommittees() {
        const container = document.getElementById('committee-content');
        container.innerHTML = committees.map(committee => `
            <div class="committee-card">
                <div class="committee-header">
                    <h4>${committee.name}</h4>
                    <i class="material-icons-sharp">expand_more</i>
                </div>
                <div class="committee-members">
                    ${committee.members.map(member => `
                        <div class="committee-member">
                            <img src="assets/images/user-avatar.jpg" alt="${member.name}">
                            <div class="role">${member.name}<span>${member.role}</span></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        // Add event listeners for expansion
        container.querySelectorAll('.committee-header').forEach(header => {
            header.addEventListener('click', () => {
                const card = header.parentElement;
                card.classList.toggle('expanded');
                const membersDiv = card.querySelector('.committee-members');
                if (card.classList.contains('expanded')) {
                    membersDiv.style.maxHeight = membersDiv.scrollHeight + 'px';
                } else {
                    membersDiv.style.maxHeight = '0';
                }
            });
        });
    }
    
    function renderGallery() {
        const grid = document.querySelector('.album-grid');
        grid.innerHTML = albums.map(album => `
             <div class="album-card">
                <img src="${album.cover}" alt="${album.name}">
                <h4>${album.name}</h4>
                <p>${album.count} photos</p>
            </div>
        `).join('');
    }

    function renderJobs() {
        const list = document.querySelector('.job-list');
        list.innerHTML = jobs.map(job => `
            <div class="job-card">
                <div class="job-card-header">
                    <div>
                        <h4 class="job-title">${job.title}</h4>
                        <p class="job-company">${job.company}</p>
                    </div>
                    <div class="job-type">${job.type}</div>
                </div>
                <div class="job-card-footer">
                    <span class="job-location">${job.location}</span>
                    <a href="#" class="apply-btn">Apply</a>
                </div>
            </div>
        `).join('');
    }
    
    function renderWishes() {
        const bdayList = document.querySelector('.birthday-wish-list');
        bdayList.innerHTML = birthdayWishes.map(p => `
            <div class="birthday-card">
                <img src="${p.avatar}" alt="${p.name}">
                <div class="birthday-info"><p>${p.name}</p><span>Wish them a great year!</span></div>
                <div class="wish-btn">Wish</div>
            </div>
        `).join('');

        const tributeList = document.querySelector('.tribute-list');
        tributeList.innerHTML = tributes.map(t => `
             <div class="tribute-card-small">
                <img src="${t.avatar}" alt="${t.name}">
                <div class="tribute-info"><p>${t.name}</p><span>Remembering a Legacy: ${t.date}</span></div>
            </div>
        `).join('');
    }


    // --- Navigation Logic ---

    function showPage(pageId, title) {
        contentPages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        
        pageTitle.textContent = title;
        if(pageId === 'home-content') {
            backButton.style.display = 'none';
        } else {
            backButton.style.display = 'block';
        }
    }

    // Home screen action cards navigation
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetPage = card.dataset.target;
            const title = card.dataset.title;
            if(targetPage) {
                showPage(targetPage, title);
            }
        });
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        showPage('home-content', 'Home');
    });
    
    // --- Initial Render Call ---
    renderMembers();
    renderCommittees();
    renderGallery();
    renderJobs();
    renderWishes();

});