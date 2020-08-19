"use strict";

$("marquee").mouseover(function(){
    this.stop();
});

$("marquee").mouseout(function(){
    this.start();
});

/* 格式化输出日期 */
let zero_completion = (s,num) => {
    s = String(s);
    if(s.length < num) return (new Array(num - s.length + 1)).join("0") + s;
    return s;
};

(() => {
    let date = new Date();
    let y = zero_completion(date.getFullYear(),4),
        mo = zero_completion(date.getMonth() + 1,2),
        d = zero_completion(date.getDate(),2),
        h = zero_completion(date.getHours(),2),
        mi = zero_completion(date.getMinutes(),2),
        s = zero_completion(date.getSeconds(),2);
    let cur_time = `${y}-${mo}-${d} ${h}:${mi}:${s}`;
    $("#server-info").text(`Total 0.000000(s) query 0, Server time : ${cur_time}, Gzip enabled`);
})();