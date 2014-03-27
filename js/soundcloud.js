SC.initialize({
	client_id: "e517d415cdd1bf3053a497011cbf2339",
}); 


SC.stream("/rodrigobueno/loveee", function(tracks){
	tracks.play();
});

SC.oEmbed("http://soundcloud.com/rodrigobueno", {
	color: "ff0066",
	maxwidth: '600px',
	maxheight: '100px',
	show_comments: 'true',
	iframe: 'true'
},document.getElementById("soundcloud-player"));