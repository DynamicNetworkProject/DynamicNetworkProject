$(document).ready(function () {
	$("#main-container").load("partial-views/articles-partial.html", setMainBodyEvents);
	//setMainBodyEvents();
    $("#friends-list-wrapper").load("partial-views/friends-list-partial.html", setFriendsEvents);
	
    setMainMenuEvents();
});



