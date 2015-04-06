<!DOCTYPE html>

<head>
  <title>Absolution</title>
  <meta charset="utf-8" /> 
  <meta name="description" src="FINE 225 self-directed project"/>
  <meta name="viewport" content="width=device-width">
  <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="dist/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="assets/css/style.min.css">
</head>

<body>

<!-- Progress indicator -->
<div id="progress" class="col-lg-12">
     <h1><span>0</span>%</h1>
     <p>Loading frames...</p>
</div>

<!-- Main content -->
<div id="content">

<!-- Playback and Audio menu -->
<div id="playbackContainer">
 <div class="panel panel-default">
  <div class="panel-body">
    <div class="col-lg-3 col-xs-4">
    <a href="#" title="Play/Pause" class="btn btn-default" id="btnPlayPause"><span class="glyphicon glyphicon-play"></span>/<span class="glyphicon glyphicon-pause"></span></a>
    <a href="#" title="Rewind" class="btn btn-default" id="btnRewind"><span class="glyphicon glyphicon-step-backward"></span></a>
	</div>
	
    <div class="col-lg-6 col-xs-8">	  
	  <form class="form-horizontal" id="formMusic">
	  <div class="form-group">
          <strong class="col-lg-2 col-xs-3">Music:</strong>
          <label class="col-lg-2 col-xs-3">
            <input type="radio" name="optionMusic" id="optionMusic0" value="0" checked="">
            None
          </label>
          <label class="col-lg-2 col-xs-3">
            <input type="radio" name="optionMusic" id="optionMusic1" value="1">
            1
          </label>
		  <label class="col-lg-2 col-xs-3">
            <input type="radio" name="optionMusic" id="optionMusic2" value="2">
            2
          </label>
		  <label class="col-lg-2 col-xs-3">
            <input type="radio" name="optionMusic" id="optionMusic3" value="3">
            3
          </label>
		  <label class="col-lg-2 col-xs-3">
            <input type="radio" name="optionMusic" id="optionMusic4" value="4">
            4
          </label>
	  </div>
	  </form>
	</div>	  
	
	<div class="audio">
	  <audio controls  class="player_audio" id="audio1">
	    <source src="assets/sfx/Kreaten_-_KREATEN_-13-_Galekeria.mp3" type="audio/mpeg">
	  </audio>
	  <audio controls  class="player_audio" id="audio2">
	    <source src="assets/sfx/Ristikiehtova_-_Pelastusta_odotellessa_-maanpinta-.mp3" type="audio/mpeg">
	  </audio>
	  <audio controls  class="player_audio" id="audio3">
	    <source src="assets/sfx/3minutetunes_-_Suspense_and_Tension-stem-10-30sec.mp3" type="audio/mpeg">
	  </audio>
	  <audio controls  class="player_audio" id="audio4">
	    <source src="assets/sfx/Wa_Rock_Korean_Music_s_-_ThemaKhyber.mp3" type="audio/mpeg">
	  </audio>
	</div>
	
  </div>
 </div>
</div>

<!-- HTML5 Canvas -->
<div id="canvasContainer">
  <canvas id="canvas" width="1280" height="720">Sorry! You can only view this if your browser supports HTML5 and Javascript.<br />Please update or use a different modern browser.</canvas>
</div>

</div>

<!-- Information -->
<div id="about" class="col-lg-12">
<div class="panel panel-default col-lg-6 col-md-offset-3">
  <div class="panel-heading"><strong>Absolution</strong><br/>FINE 225 self-directed project</div>
  <div class="panel-body">

  <ul class="nav nav-tabs">
    <li class="active"><a href="#home" title="Home" data-toggle="tab">Home</a></li>
    <li><a href="#instructions" title="Instructions" data-toggle="tab">Instructions</a></li>
    <li><a href="#process" title="Process" data-toggle="tab">Process</a></li>
    <li><a href="#attribution" title="Attribution" data-toggle="tab">Attribution</a></li>
  </ul>
  <div id="myTabContent" class="tab-content">
    <div class="tab-pane fade active in" id="home">
      <p>Inspired by the <a href="http://www.kwag.ca/en/exhibitions/EncounterswithMusic.asp" title="Encounters with Music @ KWAG"><em>Encounters with Music</em></a> exhibit at the Kitchener-Waterloo Art Gallery.</p>
      <p>What music do you hear accompanying the images?</p>
    </div>
    <div class="tab-pane fade" id="instructions">
      <p>To view the piece, click on the Play/Pause button. The audio can be switched by clicking on the corresponding radio button.</p>
      <p>When the animation is done, click on the Rewind button to view it again.</p>
    </div>
    <div class="tab-pane fade" id="process">
      <ol>
        <li>Gather ideas for different shots to use.</li>
        <li>For each shot, search for stock video footage. When one isn't found, use a mirror.</li>
        <li>Draw each frame loosely but with enough definition. <em>Paint Tool SAI</em></li>
        <li>Compile groups of chosen frames and determine the final sequence for the animation.</li>
        <li>View the sequence while listening to different audio tracks, taking note of ones that impact the work.</li>
        <li>Write code to create a frame animation player and create a webpage. <em>HTML5, CSS3, Javascript/jQuery</em></li>
      </ol>
      <p>Work-in-progress and unused frames can be found <a href="https://www.dropbox.com/sh/0ep483rzvy2g5a4/AADu_BSntWSYmsLeGMGLD3dJa?dl=0" title="Dropbox">here on Dropbox</a>.</p>
    </div>
    <div class="tab-pane fade" id="attribution">
      <p>Music:
	  <ol>
	    <li><a href="https://www.jamendo.com/en/track/601643/kreaten-13-galekeria" title="Galerkeria"><em>Galerkeria</em> by Kreaten</a></li>
        <li><a href="https://www.jamendo.com/en/track/102806/pelastusta-odotellessa-maanpinta" title="Pelatusta odotellessa -maanpinta-"><em>Pelastusta odotellessa -maanpinta-</em> by Ristikiehtova</a></li>
        <li><a href="https://www.jamendo.com/en/track/1172858/suspense-and-tension-stem-10-30sec" title="Suspense and Tension-stem-10-30sec"><em>Suspense and Tension-stem-10-30sec</em> by 3minutetunes</a></li>
        <li><a href="https://www.jamendo.com/en/track/778011/themakhyber" title="ThemaKhyber"><em>ThemaKhyber</em> by Wa Rock Korean Music's</a></li>
	  </ol>
	  </p>
    </div>
   </div>
  </div>
 </div>
</div>

<!-- Footer -->
<footer class="col-lg-12">
      &copy; <? echo date("Y"); ?> <a href="http://jyntran.ca" title="J. Tran">J. Tran</a>
</footer>

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<!-- Bootstrap -->
<script src="dist/js/bootstrap.min.js"></script>

<!-- Frame animation script and preloading -->
<script src="assets/js/script.min.js"></script>

</body>

</html>
