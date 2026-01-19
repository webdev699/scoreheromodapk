document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header .container nav');
    
    // Create Mobile Toggle Button
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.ariaLabel = 'Toggle Menu';
    header.appendChild(mobileBtn);

    // Create Drawer Overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';
    document.body.appendChild(overlay);

    // Create Drawer Container
    const drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    
    // Header for Drawer
    const drawerHeader = document.createElement('div');
    drawerHeader.className = 'drawer-header';
    drawerHeader.innerHTML = '<div class="drawer-logo">Score<span>Hero</span>MOD</div><button class="drawer-close" aria-label="Close Menu">&times;</button>';
    drawer.appendChild(drawerHeader);

    // Copy Links
    const originalLinks = document.querySelector('.nav-links');
    if (originalLinks) {
        const linksClone = originalLinks.cloneNode(true);
        linksClone.className = 'drawer-links';
        drawer.appendChild(linksClone);
    }

    document.body.appendChild(drawer);

    // Event Listeners
    const closeBtn = drawer.querySelector('.drawer-close');

    function toggleMenu() {
        const isOpen = drawer.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    // Use passive event listener for better scroll performance
    overlay.addEventListener('click', toggleMenu, { passive: true });

    // Close on link click
    const drawerLinks = drawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', toggleMenu, { passive: true });
    });
});
