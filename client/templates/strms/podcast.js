Template.podcast.rendered = function() {
	jwplayer('my-video').setup({
		autostart: true,
	    file: 'http://128.199.243.135:8000/stream',
  		primary: 'flash',
	    width: '640',
	    height: '480',
	    type: "mp3"
	});
};
