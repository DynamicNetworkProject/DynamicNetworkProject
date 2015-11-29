// Composite functionality to use in the whole project
var closeArticleWindow = function () {
	var currentWindow = this.parentNode.parentNode;
	currentWindow.classList.add('hidden');
};