<?php
header('Content-type: text/html; charset=utf-8');

$obj = new stdClass();

$dir = "./assets/img/frames/";
// Get all files and remove current and parent directories
$arr = array_diff(scandir($dir), array('..', '.'));
// Shift files up to index 0
$first = array_shift($arr);
// Re-add the first element
array_unshift($arr,$first);

$obj->success = 'true';
$obj->dir = $dir;
$obj->files = $arr;
$obj->length = count($arr);

$result = (array)$obj;
echo json_encode($result);

?>