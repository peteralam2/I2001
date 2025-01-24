document.getElementById('toggle-sidebar').addEventListener('click', function () {

    //change icons
    const sidebar = document.querySelector('.rside-bar');
    const menuIcon = document.getElementById('menu-icon');

    //change collapse to expand
    const hoverSpan = document.getElementById('hover-text');
    const currentHoverText = hoverSpan.dataset.hover;

    sidebar.classList.toggle('collapsed');
    
//change collapse uncollapse icon

    if (sidebar.classList.contains('collapsed')) {
        menuIcon.innerHTML = `<path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/>`;
        hoverSpan.dataset.hover = 'expand';
         
    } else {
        menuIcon.innerHTML = `<path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/>`;
        hoverSpan.dataset.hover = 'collapse';
    }
});






