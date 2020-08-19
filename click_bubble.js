"use strict";

let clickEventObj = {
    txt_cnt: 0,
    txt: ["点击了一下","点击了两下","点击了三下","点击了四下","点击了五下","再点生气了","人家真的生气啦！","好啦人家没生气","再点就是表情啦~","😘","😀","😂","😊","😍","😭","😡","❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤"],
    colors_cnt: 0,
    colors: ["turquoise","red","orange","green","blue","purple","hotpink","brown"],
    DIS: 250,
    DURATION: 1500,
    getNextText: function(){
        let ret = this.txt[this.txt_cnt];
        this.txt_cnt = (this.txt_cnt + 1) % this.txt.length
        return ret;
    },
    getNextColor: function(){
        let ret = this.colors[this.colors_cnt];
        this.colors_cnt = (this.colors_cnt + 1) % this.colors.length
        return ret;
    }
};

$(document.body).css({
    "cursor": "url(https://files.cnblogs.com/files/wkfvawl/cursor.ico),auto"
});

$(this).click((event) => {
    let p = document.createElement("p");
    p.innerText = clickEventObj.getNextText();
    p.className = "click-bubble";
    $(p).css({
        "font-family": "'STKaiti', sans-serif",
        "user-select": "none",
        "margin": "0",
        "font-size": "1.5em",
        "font-weight": "bold",
        "position": "absolute",
    });
    p.style.left = event.clientX;
    p.style.top = event.clientY;
    let startPosX = p.style.left,startPosY = p.style.top;
    p.style.color = clickEventObj.getNextColor();
    document.body.appendChild(p);
    let endPosY = parseInt(startPosY.substr(0,startPosY.length - 2)) - clickEventObj.DIS;
    $(p).animate({top: `${endPosY}px`,opacity: 0},clickEventObj.DURATION,function(){
        document.body.removeChild(p);//动画完成后才删元素
    });
});