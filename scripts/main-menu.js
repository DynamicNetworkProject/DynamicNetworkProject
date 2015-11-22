function setMainMenuEvents () {
    var element = document.getElementById('menu-arrow')
    element.addEventListener("click", showHideMainMenu);
}

function showHideMainMenu (argument) {
    var button = document.getElementById('menu-arrow');
    var wrapper = document.getElementById('header-container');
    var elements = wrapper.getElementsByTagName('li');
    for (var i = elements.length - 1; i >= 0; i--) {
        if (elements[i].className !== 'mainNavigation' ){
            elements[i].className = 'hidden';
            if (button.className == 'open') {
             button.className = 'closedd'
             elements[i].className = 'hidden';
            }else {
             elements[i].className = 'show'
             button.className = 'open'
            }  
        }

    };
}
