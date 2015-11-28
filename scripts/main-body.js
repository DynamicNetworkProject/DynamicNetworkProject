
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
			spanWithDots.innerHTML = '...';
			paragraph.innerHTML = textPart;
			paragraph.appendChild(spanWithDots);
			var hiddenSpan = document.createElement('span');
			hiddenSpan.className = 'hidden';
			// hiddenSpan.style.display = 'none';
			hiddenSpan.innerHTML = hiddenPart;
			paragraph.appendChild(hiddenSpan);
		}else {
			// TODO: Hide show/hide button
		// articleArrows.addEventListener('click', hideArticle);
		}
	};
}

function showHideArticle () {
	var thisArticle = this.parentNode.parentNode;
	var hidden = thisArticle.getElementsByClassName('hidden')[0];
	var showed = thisArticle.getElementsByClassName('showed')[0];
	if (hidden) {
		thisArticle.getElementsByClassName('hidden')[0].className = 'showed';
			document.getElementsByClassName('dots').className = 'hidden'
	;
	}else{
		thisArticle.getElementsByClassName('showed')[0].className = 'hidden';
	}
};
