function setFriendsEvents () {
	var elements = document.querySelectorAll('.friendsList > li');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("mouseover", friendOnHover);
	};
}

function friendOnHover (eventArg) {
	var oldInfoObjects = document.getElementsByClassName('userInfoBox');
	for (var i = 0; i < oldInfoObjects.length; i++) {
		document.body.removeChild(oldInfoObjects[i])
	};

	var x = eventArg.clientX;
    	var y = eventArg.clientY;

    	var img = this.getElementsByClassName('friendPic')[0].cloneNode(true);
    	var title = this.getElementsByClassName('friendName')[0].cloneNode(true);

	var info = document.createElement('div');
	info.className = 'userInfoBox';
	info.style.left = x + 'px';
	info.style.top = y + 'px';

	info.appendChild(img);
	info.appendChild(title);

	document.body.appendChild(info);
	
};