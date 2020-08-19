"use strict";

$("marquee").mouseover(function(){
    this.stop();
});

$("marquee").mouseout(function(){
    this.start();
});