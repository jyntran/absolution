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
  // set up the layout
  resize();
  $('#progress').hide();
  $(".player_audio").prop("muted",true);
  $('.player_audio').hide();
  $('#content').show();
    
  var curr = 0; // current frame number
  var animate; // for requestAnimationFrame
  var timeout; // for setTimeout
  var fps = 7; // frames per second
               // would have done 8 but it needed to sync with the audio 
  var isPlaying = false; // flag to check play/pause status
  
  // Draws each frame
  function draw() {
    // timeout function with requestAnimationFrame to control fps and audio sync
	// varies with each browser but better than setInterval
    timeout = setTimeout(function() {
      animate = requestAnimationFrame(draw);
      var img = new Image();
      img = imgArr[curr];
      ctx.drawImage(img, 0, 0, 1280, 720, 0, 0, canvas.width, canvas.height);
      curr++;
	  // when animation has ended, stop	
        if (curr >= n) {
          cancelAnimationFrame(animate);
        }
    }, 1000 / fps);
  }
  
  // Button functions
  $("#btnPlayPause").click(function(){
    if (isPlaying) {
      cancelAnimationFrame(animate);
      clearTimeout(timeout);
      $(".player_audio").trigger('pause');
      isPlaying = false;
    } else {
      $('#canvasContainer').attr("style","background:none;"); // hide title screen
      animate = requestAnimationFrame(draw);
      $(".player_audio").trigger('play');
      isPlaying = true;
    }
    resize();
    return false;
    e.preventDefault();
  });
  $("#btnRewind").click(function(){
    curr = 0;
    animate = requestAnimationFrame(draw);
    $(".player_audio").prop("currentTime",0);
    $(".player_audio").trigger('play');
    isPlaying = true;
    resize();
    return false;
    e.preventDefault();
  });
  
  // Audio selection
  $("form").click(function(){
    if ($("#optionMusic0").is(':checked')){
      $(".player_audio").prop("muted",true);
    }
    if ($("#optionMusic1").is(':checked')){
      $(".player_audio").prop("muted",true);
      $("#audio1").prop('muted',false);
    }
    if ($("#optionMusic2").is(':checked')){
      $(".player_audio").prop("muted",true);
      $("#audio2").prop('muted',false);
    }
    if ($("#optionMusic3").is(':checked')){
      $(".player_audio").prop("muted",true);
      $("#audio3").prop('muted',false);
    }
    if ($("#optionMusic4").is(':checked')){
      $(".player_audio").prop("muted",true);
      $("#audio4").prop('muted',false);
    }
  });

}

/* Everything now set up, begin preload */
preload();