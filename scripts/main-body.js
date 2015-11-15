function setArticlesLenght (articleMaxLenght) {
	var articles = document.getElementsByClassName('article');
	for (var i = 0; i < articles.length; i++) {
		var paragraph = articles[i].getElementsByTagName('p')[0];

		if (paragraph.innerHTML.length >= articleMaxLenght) {
			var text = paragraph.innerHTML.substring(0, articleMaxLenght);
			text += '...';
			paragraph.innerHTML = text;		
		}else{
			// TODO: Hide show/hide button
		}
	};
}