
function setArticlesLenght (articleMaxLenght) {
	var articles = document.getElementsByClassName('article');
	for (var i = 0; i < articles.length; i++) {
		var paragraph = articles[i].getElementsByTagName('p')[0];
		var articleArrows = articles[i].getElementsByClassName('show-hide')[0];
		articleArrows.addEventListener('click', showHideArticle);
	
		if (paragraph.innerHTML.length >= articleMaxLenght) {
			var textPart = paragraph.innerHTML.substring(0, articleMaxLenght);
			var hiddenPart = paragraph.innerHTML.substring(articleMaxLenght, articleMaxLenght.length);
			var spanWithDots = document.createElement('span');
			spanWithDots.className = 'spanWithDots';
			spanWithDots.innerHTML = '...';
			paragraph.innerHTML = textPart;
			paragraph.appendChild(spanWithDots);
			var hiddenSpan = document.createElement('span');
			hiddenSpan.className = 'hidden';
			hiddenSpan.innerHTML = hiddenPart;
			paragraph.appendChild(hiddenSpan);
		}
	};
}

(function closeArticle () {
	var closeBtn = document.getElementsByClassName("close-article-btn");
	for (var i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', closeArticleWindow);
	}
})();

function showHideArticle () {
	var thisArticle = this.parentNode.parentNode;
	var hidden = thisArticle.getElementsByClassName('hidden')[0];
	var showed = thisArticle.getElementsByClassName('showed')[0];
	var arrow = thisArticle.getElementsByClassName('show-hide')[0];
	if (hidden.className === 'hidden') {
		thisArticle.getElementsByClassName('hidden')[0].className = 'showed';
			thisArticle.getElementsByClassName('spanWithDots')[0].classList.add('hidden');
			arrow.classList.add('flipped');
	}else{
		thisArticle.getElementsByClassName('showed')[0].className = 'hidden';
		thisArticle.getElementsByClassName('spanWithDots')[0].classList.remove('hidden');
		arrow.classList.remove('flipped');
		// TODO: flipArrowBug;
	}
};
