// Composite functionality to use in the whole project
var core = function (){
    function _get(selector){
        return document.querySelector(selector);
    }

    return{
        get: _get
    };
}