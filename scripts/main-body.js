function setArticlesLenght (articleMaxLenght) {
	var articles = document.getElementsByClassName('article');
	for (var i = 0; i < articles.length; i++) {
		var paragraph = articles[i].getElementsByTagName('p')[0];
		var articleArrows = articles[i].getElementsByClassName('show-hide')[0];
		articleArrows.addEventListener('click', showHideArticle);

		if (paragraph.innerHTML.length >= articleMaxLenght) {
			var textPart = paragraph.innerHTML.substring(0, articleMaxLenght);
			var hiddenPart = paragraph.innerHTML.substring(articleMaxLenght, articleMaxLenght.length);
			textPart += '...';
			paragraph.innerHTML = textPart;
			var hiddenSpan = document.createElement('span');
			hiddenSpan.className = 'hidden';
			hiddenSpan.innerHTML = hiddenPart;
			paragraph.appendChild(hiddenSpan);
		}else{
			// TODO: Hide show/hide button
		}
	};
}

function showHideArticle () {
	var thisArticle = this.parentNode.parentNode;
	var show = thisArticle.getElementsByClassName('hidden')[0].className = 'showed';
	// thisArticle.getElementsByClassName('showed')[0].className = 'hidden';
}
