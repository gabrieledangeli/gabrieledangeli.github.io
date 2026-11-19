const navigation = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');

if (typeof navigation.showPopover === 'function') {
    const mobile = window.matchMedia('(max-width: 49.4375rem)');

    function updateMenu() {
        if (mobile.matches) {
            navigation.setAttribute('popover', 'auto');
        } else {
            navigation.removeAttribute('popover');
        }
        menuToggle.hidden = !mobile.matches;
    }

    mobile.addEventListener('change', updateMenu);
    updateMenu();
}
