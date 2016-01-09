function renderFriendsList() {
    var dataContextFriends = new DataContext();
    var friendsList = dataContextFriends.getFriends;

    var htmlTemplate = document.getElementById("friendsList-template").innerHTML;
    var template = Handlebars.compile(htmlTemplate);

    var objectsForRendering = { friends: friendsList };
    var generatedHtml = template(objectsForRendering);

    $("#friends-list-wrapper").html(generatedHtml);
}

function setupFriends() {
    renderFriendsList();

    $(".friendsList > li").mouseover(friendOnHover);
    $("#left-arrow").click(friendsBarButtonOnclick);

    function friendsBarButtonOnclick() {
        var bar = document.querySelector('#friends-bar');
        var friendBarNames = bar.querySelectorAll('.friendName');
        var title = document.querySelector('.h5title');
        var search = document.querySelector('#search-friends');
        var arrowButton = document.querySelector('#left-arrow');

        var articleMinWidth = $('#main-container').width();
        var friendsBarOpened = $('.friends-bar-opened').width();
        var friendsBarClosed = $('.friends-bar-closed').width();
        var articleMaxWidth = articleMinWidth + (friendsBarOpened - friendsBarClosed);
        //Bug with the width(padding, border, margin are not included)

        if (bar.className == 'friends-bar-opened') {
            bar.classList.add('friends-bar-closed');
            bar.classList.remove('friends-bar-opened');
            arrowButton.classList.add('flipped');

            for (var i = 0; i < friendBarNames.length; i++) {
                friendBarNames[i].classList.add('hidden');
            };

            title.classList.add('hidden');
            search.classList.add('hidden');
            $('article').hide();
            $('article').fadeIn(500).width(articleMaxWidth);
        } else {
            bar.classList.add('friends-bar-opened');
            bar.classList.remove('friends-bar-closed');
            arrowButton.classList.remove('flipped');

            for (var i = 0; i < friendBarNames.length; i++) {
                friendBarNames[i].classList.remove('hidden');;
            };

            title.classList.remove('hidden');
            search.classList.remove('hidden');
            $('article').hide();
            $('article').fadeIn(500).width(articleMinWidth);
        }
    }
    function friendOnHover(eventArg) {
        var oldInfoObjects = document.getElementsByClassName('userInfoBox');
        for (var i = 0; i < oldInfoObjects.length; i++) {
            document.body.removeChild(oldInfoObjects[i])
        };

        var x = eventArg.clientX;
        var y = eventArg.clientY;

        var img = this.getElementsByClassName('friendPic')[0].cloneNode(true);
        var title = this.getElementsByClassName('friendName')[0].cloneNode(true);
        title.className = "userFriendName";

        var info = document.createElement('div');
        info.className = 'userInfoBox';
        info.style.left = x + 'px';
        info.style.top = y + 'px';

        info.appendChild(img);
        info.appendChild(title);

        document.body.appendChild(info);
    };

    $(".friendsList > li").mouseout(function () {
        $('.userInfoBox').remove();
    });
    $(".friendsList > li").mouseover(function () {
        $('.userInfoBox').hide();
        $('.userInfoBox').fadeIn(700);
    });
}
