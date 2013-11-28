$(document).ready(function() {
	$('section#thumbs div.thumbnail > div.wrapper').each(function(index, el) {
		addWallLink(el);
	});

	function addWallLink($el) {
		var tLink = $el.attr('data-original');
		var wallLink = tLink.replace("thumbs","wallpapers");
		var wallLink = wallLink.replace("thumb-","wallpaper-");
		$(this).append('<div class="dl"><a href='+wallLink+'>Download</a></div>');)
	}
});

