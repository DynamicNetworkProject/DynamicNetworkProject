function setMainMenuEvents () {

    $('#menu-arrow').on('click', showHideMainMenu);
};

function showHideMainMenu (argument) {
    $mainNavs = $('#header-container li.mainNavigation');
    $('#header-container li').not($mainNavs).toggle(300);
    $('#arrow-pic').toggleClass('flipped-x', '');
};

