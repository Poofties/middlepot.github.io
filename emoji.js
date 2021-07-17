var whiteoverlay = document.createElement('div');
whiteoverlay.id = 'emojis_whiteoverlay';
whiteoverlay.style.position = 'fixed';
whiteoverlay.style.display = 'flex';
whiteoverlay.style.justifyContent = 'center';
whiteoverlay.style.alignItems = 'center';
whiteoverlay.style.width = '100%';
whiteoverlay.style.height = '100%';
whiteoverlay.style.top = '0';
whiteoverlay.style.left = '0';
whiteoverlay.style.background = '#fff';
whiteoverlay.style.zIndex = '999999';
$('body').append(whiteoverlay);

function loadEmojis(){
	var emojis = ['☂️', '☎️', '✂️', '✉️', '✏️', '❤️', '☕️', '⚰️', '⭐', '🌕', '🌡', '🌧', '🌱', '🌷', '🌹', '🌼', '🍄', '🍓', '🍞', '🍦', '🍩', '🍪', '🍮', '🍯', '🍰', '🍼', '🎀', '🎁', '🎃', '🎄', '🎗', '🎠', '🎻', '🏠', '🐁', '🐇', '🐈', '🐌', '🐑', '🐕', '🐝', '👒', '👗', '👚', '👜', '👶', '💉', '💊', '💌', '💐', '💓', '💕', '💖', '💗', '💘', '💝', '💟', '💻', '💿', '📍', '📚', '📱', '📷', '🔒', '🔪', '🖇', '🖋', '🗝', '🚲', '🛏', '🛼', '🤍', '🥄', '🥛', '🥞', '🥧', '🥿', '🦋', '🦷', '🧁', '🧇', '🧦', '🧴', '🧷', '🧸', '🧺', '🧼', '🩰', '🩳', '🩹', '🪑', '🪦', '🫖'];
	var vanilla = true;
	var inner = document.body.innerHTML;
	if(!inner){
		inner = $('body').text();
		vanilla = false;
	}

	for(var i = 0; i < emojis.length; ++i){
		var img = '<img src="https://middlepot.com/emoji/'+emojis[i]+'.gif" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;"></img>';
		var regex = new RegExp(emojis[i], "g");
		inner = inner.replace(regex, img);
	}
	if(vanilla)
		document.body.innerHTML = inner;
	else
		$('body').html(inner);
}

$(window).load(function() {
    $('#emojis_whiteoverlay').hide();
});