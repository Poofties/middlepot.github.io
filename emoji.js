var emojis = ['☂️', '☎️', '✂️', '✉️', '✏️', '❤️', '☕️', '⚰️', '⭐', '🌕', '🌡', '🌧', '🌱', '🌷', '🌹', '🌼', '🍄', '🍓', '🍞', '🍦', '🍩', '🍪', '🍮', '🍯', '🍰', '🍼', '🎀', '🎁', '🎃', '🎄', '🎗', '🎠', '🎻', '🏠', '🐁', '🐇', '🐈', '🐌', '🐑', '🐕', '🐝', '👒', '👗', '👚', '👜', '👶', '💉', '💊', '💌', '💐', '💓', '💕', '💖', '💗', '💘', '💝', '💟', '💻', '💿', '📍', '📚', '📱', '📷', '🔒', '🔪', '🖇', '🖋', '🗝', '🚲', '🛏', '🛼', '🤍', '🥄', '🥛', '🥞', '🥧', '🥿', '🦋', '🦷', '🧁', '🧇', '🧦', '🧴', '🧷', '🧸', '🧺', '🧼', '🩰', '🩳', '🩹', '🪑', '🪦', '🫖'];
var inner = document.body.innerHTML;
for(var i = 0; i < emojis.length; ++i){
	var img = '<img src="https://middlepot.com/emoji/'+emojis[i]+'.gif" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;">';
	inner = inner.replaceAll(emojis[i], img);
}
document.body.innerHTML = inner;