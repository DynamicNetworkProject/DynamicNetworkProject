function setSearchFriendsEvents(argument) {
    $('#search-friends input').on('input', searchFriends);
};
function searchFriends(argument) {
    var searched = $('#search-friends input').val().toLowerCase();
    var userNames = $('.friendName');
    for (var i = 0; i < userNames.length; i++) {
        var $current = $(userNames[i]);
        var userName = $current.html().toLowerCase();

        if (userName.indexOf(searched) !== -1) {
            $current.parent().show(400);
        } else {
            $current.parent().hide(400);
        };
    };
};
