/* Canvas variables */
var container = document.getElementById("container");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/* Resize canvas to window width */
function resize() {
    var canvasRatio = canvas.height / canvas.width;
    var windowRatio = window.innerHeight / window.innerWidth;
    var width, height;

    if (windowRatio < canvasRatio) {
        height = window.innerHeight;
        width = height / canvasRatio;
    } else {
        width = window.innerWidth;
        height = width * canvasRatio;
    }

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
};

window.addEventListener('resize', resize, false);

resize();

/* Animation */
var frames;

var img;
var imgArr = new Array();
var files;

var finished = false;
var loadedCalled = false;

var i = 1;
var n = 0;
var numLoaded = 0;

/* Checks if all images have been loaded */
function check(){
	numLoaded++;
    var percent = Math.floor((numLoaded / n) * 100);
    /*$('.loaded').width(percent.toString()+'%');*/
    $('#progress span').text(percent.toString());
	if (numLoaded >= n && !loadedCalled) {
		loadedCalled = true;
		clearInterval(finished);
		loaded();
	}
}

/* Loads each image from the file list */
function loadImages(){	
	for (var j=0; j<n; j++) {
		img = new Image();
		img.onload = function(){
			check();
		};
		img.onerror = function(){
			console.log("ERROR: Couldn't load " + files[j]);
		};
		img.src = frames + files[j];
		imgArr[j] = img;
    }
}

/* Main preload function, fetches file list */
function preload() {
  $("#content").hide();
  $('#status').show();
  
  $.getJSON('files.php', function(data) {
	if (data.success == "true") {
		n = data.length;
		frames = data.dir;
		files = data.files;
		finished = setInterval(check,1);
		loadImages();
	}
  });
}

/* This is called when the images have been preloaded */
function loaded() {
	resize();
  $('#progress').hide();
  $(".player_audio").prop("muted",true);
  $('.player_audio').hide();
  $('#content').show();
	
  var curr = 0;
  var animate;
  var isPlaying = false;
  var selected = 0;
  
  // Draws each frame
  function draw() {
	var img = new Image();
	img = imgArr[curr];
    ctx.drawImage(img, 0, 0, 1280, 720, 0, 0, canvas.width, canvas.height);
	curr++;
	if (curr >= n) {
		clearInterval(animate);
	}
  }
  
  $("#btnPlayPause").click(function(){
	  if (isPlaying) {
		clearInterval(animate);
		$(".player_audio").trigger('pause');
		isPlaying = false;
	  } else {
		animate = setInterval(draw,150);
		$(".player_audio").trigger('play');
		isPlaying = true;
	  }
     return false;
     e.preventDefault();
  });
  $("#btnRewind").click(function(){
    curr = 0;
	animate = setInterval(draw,150);
    $(".player_audio").prop("currentTime",0);
	$(".player_audio").trigger('play');
	isPlaying = true;
     return false;
     e.preventDefault();
  });
  
  $("form").click(function(){
	  if ($("#optionMusic0").is(':checked')){
	    selected = 0;
	    $(".player_audio").prop("muted",true);
      }
	  if ($("#optionMusic1").is(':checked')){
	    selected = 1;
	    $(".player_audio").prop("muted",true);
	    $("#audio1").prop('muted',false);
      }
	  if ($("#optionMusic2").is(':checked')){
	    selected = 2;
	    $(".player_audio").prop("muted",true);
	    $("#audio2").prop('muted',false);
      }
  });

}

preload();