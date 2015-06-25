Template.stream.rendered = function() {
	jwplayer('my-video').setup({
	    file: 'rtmp://128.199.157.128/live/test',
	    width: '100%',
        aspectratio: "16:9"
	});
};
