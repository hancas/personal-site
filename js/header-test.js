var $hello = $('.box_1');
var $haenyo = $('.box_2');
var $pilon = $('.box_3');
var $scratchmade = $('.box_4');
var $noonas = $('.box_5');
var $urbanteachers = $('.box_6');
var $foodshed = $('.box_7');
var $freelance = $('.box_8');
var $title = $('.portfolio-title');
var $number = $('.number');

$hello.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('hello');
    $number.addClass('project-one');
  } else {
    $title.removeClass('hello');
    $number.removeClass('project-one');
  }
});
$haenyo.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('haenyo');
    $number.addClass('project-two');
  } else {
    $title.removeClass('haenyo');
    $number.removeClass('project-two');
  }
});
$pilon.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('pilon');
    $number.addClass('project-three');
  } else {
    $title.removeClass('pilon');
    $number.removeClass('project-three');
  }
});
$scratchmade.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('scratchmade');
    $number.addClass('project-four');
  } else {
    $title.removeClass('scratchmade');
    $number.removeClass('project-four');
  }
});
$noonas.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('noonas');
    $number.addClass('project-five');
  } else {
    $title.removeClass('noonas');
    $number.removeClass('project-five');
  }
});
$urbanteachers.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('urbanteachers');
    $number.addClass('project-six');
  } else {
    $title.removeClass('urbanteachers');
    $number.removeClass('project-six');
  }
});
$foodshed.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('foodshed');
    $number.addClass('project-seven');
  } else {
    $title.removeClass('foodshed');
    $number.removeClass('project-seven');
  }
});
$freelance.waypoint(function (direction) {
  if (direction == 'down') {
    $title.addClass('freelance');
    $number.addClass('project-eight');
  } else {
    $title.removeClass('freelance');
    $number.removeClass('project-eight');
  }
});
