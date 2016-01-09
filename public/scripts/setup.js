$(document).ready(function () {  
    $("#main-container").load("partial-views/articles-partial.html", setupMainBody);
	
    $("#friends-list-wrapper").load("partial-views/friends-list-partial.html", setupFriends);
	
    setMainMenuEvents();

    setSearchFriendsEvents();
});




