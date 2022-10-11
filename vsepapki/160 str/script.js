//160


var leftOffset = 0;

var moveHeading = function() {
    $("h1").offset({left: leftOffset });

    leftOffset++;

    if(leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval(moveHeading, 0);


//162

/*
var clickHandler = function (event) {
    document.write("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);
*/

//163

/*
$("html").mousemove(function (event) {
    $("#heading").offset( {
        left: event.pageX,
        top: event.pageY
    });
});
*/

//165(1)

/*
$("html").click(function (event) {
    $("#heading").offset( {
        left: event.pageX,
        top: event.pageY
    });
});
*/

//165(1-4)

/*
var der = 'вправо';
var offset = 0;
var clicks = 0;
var intervalLength = 120;

$("h1").offset({left:offset, top:offset});
var moveHeading = function(){
    if (der === 'вправо') {
        $("h1").offset({
            left: offset
        });
        offset++;
        if(offset > 200) {
            offset = 0;
            der = 'вниз';
        }
    } else if (der === 'вниз') {
        $("h1").offset({
            top: offset
        });
        offset++;
        if (offset > 200) {
            offset = 200;
            der = 'влево';
        }
    } else if(der === 'влево') {
        $("h1").offset({
            left: offset
        });
        offset--;
        if(offset < 0) {
            offset = 200;
            der = 'вверх';
        }
    } else if (der === 'вверх') {
        $("h1").offset({
            top: offset
        });
        offset--;
        if (offset < 0) {
            offset = 0;
            der = 'вправо';
        }
    }
};
var intervalId = setInterval(moveHeading, intervalLength);
$("h1").click(function() {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("h1").text("Ты выйграл!!! Молодец!!!");
    } else {
        intervalId = setInterval(moveHeading, intervalLength)
    }
});
setInterval(moveHeading, 30);
*/