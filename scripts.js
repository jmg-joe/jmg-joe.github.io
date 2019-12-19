$(document).ready(() => {
    var argg = ['click me again', 'click me one more time'];
    var i = 0;
    $('.selected-element').addClass('animate');
    $('.selected-element').click(() => {
        hello(argg, i)
        i++;
    });
});


function hello(arr, num) {
    if (num == 2) {
        var large = '<div class="container-fluid four-loko"> <div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3>Please Pick a Song that Matches the Mood</h3></div><div class="modal-body"><div class="col-xs-3 col-xs-offset-5"><div id="loadbar" style="display: none;"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></div><div class="blockG" id="rotateG_08"></div></div></div><div class="quiz" id="quiz" data-toggle="buttons"><label class="element-animation1 btn btn-lg btn-primary btn-block"><span class="btn-label"><iclass="glyphicon glyphicon-chevron-right"></i></span> <input onClick="test(\'a\');" type="radio" name="q_answer" value="1">Classic Party</label><label class="element-animation2 btn btn-lg btn-primary btn-block"><span class="btn-label"><iclass="glyphicon glyphicon-chevron-right"></i></span> <input onClick="test(\'b\');changeColor()" type="radio" name="q_answer" value="2">Classic Party with a twist</label><label class="element-animation3 btn btn-lg btn-primary btn-block"><span class="btn-label"><iclass="glyphicon glyphicon-chevron-right"></i></span> <input onClick="test(\'c\')" type="radio" name="q_answer" value="3">South of the Border</label><label class="element-animation4 btn btn-lg btn-primary btn-block"><span class="btn-label"><iclass="glyphicon glyphicon-chevron-right"></i></span> <input onClick="test(\'d\')" type="radio" name="q_answer" value="4">Break it Down</label></div></div><div class="modal-footer text-muted"><span id="answer"></span></div></div></div></div >'
        $('.selected-element').addClass('hide');
        $('.wrapper').append(large)
    }

    else {
        $('.selected-element').text(arr[num]);
    }



}

function test(str) {
    elementId = '#' + str;
    elementSource = 'url(assets/' + str + '.jpg)';
    if ($(elementId).prop("paused") == true) {
        $(elementId).trigger("play");
        $('.four-loko').css("background-image", elementSource);
        changeColor();
        $('body').css("background-color", 'rgb(255, 255, 255');
    }
    else {
        $(elementId).trigger("pause");
    }
}

var bodyElement = document.querySelector("body");

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var delay = 0;

function changeColor() {
    // change to setTimeout function
    delay++;
    if (delay > 35) {
        bodyElement.style.backgroundColor = getRandomColor();
        delay = 0;
    }

    requestAnimationFrame(changeColor);
}

function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }

    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}	
