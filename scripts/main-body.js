function setMainBodyEvents() {
     renderArticles();
	 var articleMaxLenght = 300;
	 
	 setArticlesLenght(articleMaxLenght);
	 closeArticle();
};

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

function closeArticle () {
	var closeBtn = document.getElementsByClassName("close-article-btn");
	for (var i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', closeArticleWindow);
	}
};

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

        //Handlebars
function renderArticles() {
    var articlesData =
  [{
      title: "Title of Lorem ipsum dolor sit amet",
      postedBy: "Info",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.praesentium saepe tempore, veritatis?",
      datePosted: "12.07.2015",
      imgURL: "imgs/info.png"
  },
{
    title: "Second Title",
    postedBy: "Someone",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.",
    datePosted: "12.07.2015",
    imgURL: "imgs/profiles/homer.jpg"
},
{
    title: "Another Title",
    postedBy: "Homer Simpson",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.Alias error iure laboriosam maxime modi repudiandae unde!",
    datePosted: "12.07.2015",
    imgURL: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg"

},
{
    title: "Title of Lorem ipsum dolor sit amet",
    postedBy: "Info",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam lorem recusandae! Alias error iure laboriosam maxi  odio officiis quam lorem recusandae! Alias error iure laboriosam mme modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.",
    datePosted: "12.07.2015",
    imgURL: "imgs/info.png"
}];
    var htmlTemplate = document.getElementById("articles-template").innerHTML;
    var template = Handlebars.compile(htmlTemplate);

    var objectsForRendering = { articles: articlesData };
    var generatedHtml = template(objectsForRendering);
    document.getElementById("main-container").innerHTML = generatedHtml;
};
