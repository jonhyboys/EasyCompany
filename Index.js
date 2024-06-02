(function index(){
    const menuButton = document.getElementById('mobil-menu');
    menuButton.addEventListener('click', showMenu);

    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', hideMenu);

    function showMenu(){
        const menu = document.getElementById('menu');
        menu.classList.remove('hide');
    }

    function hideMenu(){
        const menu = document.getElementById('menu');
        menu.classList.add('hide');
    }
})();