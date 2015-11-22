
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
	var showed = thisArticle.getElementsByClassName('hidden')[0];
	var hidden = thisArticle.getElementsByClassName('showed')[0];
	if (showed) {
		thisArticle.getElementsByClassName('hidden')[0].className = 'showed';
	}else{
		thisArticle.getElementsByClassName('showed')[0].className = 'hidden';
	}
	// var showed = thisArticle.getElementsByClassName('hidden')[0].className = 'showed';
	// if (showed.style.display = 'none') {
	// 	showed.style.visibility = 'visible';
	// }
	// if (showed.style.visibility = 'visible') {
	// 	showed.style.visibility = 'hidden';
	// }
	// 	if(show === 'showed') {

	// 		('click', hideArt);
	// 	}
	// function hideArt() {
	// 	// var showed = document.getElementsByClassName('showed');
	// 	// showed.className = 'hidden';
	// 	// return showed;
	// 	alert('a');
	// }
	// if (var v = thisArticle.getElementsByClassName('hidden')[0].style.visibility == 'visible') {
	// 	v.style.visibility = 'hidden';
	// }
}
// function hideArticle () {
// 	var thisArticle = this.parentNode.parentNode;
// 	var showed = thisArticle.getElementsByClassName('showed')[0].className = 'hidden';
// }