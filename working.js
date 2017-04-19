/**
 * Created by sw on 2017/4/18 0018.
 * 方法没有封装，写死的
 */
function daojishi(obj) {
    var sec =60;
    var minu=5*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            $("#imgsrc0").attr("src","img/working/success/3.1.png");
            obj.html('已完成');
            daojishi1(img2);
        }
    }, 10);
}

function daojishi1(obj) {
    var sec =60;
    var minu=2*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            img2.css("color","red")
            $("#imgsrc1").attr("src","img/working/success/3.2.png");
            obj.html('已完成');
            daojishi2(img3);
        }
    }, 10);
}

function daojishi2(obj) {
    var sec =60;
    var minu=2*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            img3.css("color","red")
            $("#imgsrc2").attr("src","img/working/success/3.3.png");
            obj.html('已完成');

            daojishi3(img4);
        }
    }, 10);
}

function daojishi3(obj) {
    var sec =60;
    var minu=2*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            img4.css("color","red")
            $("#imgsrc3").attr("src","img/working/success/3.4.png");
            obj.html('已完成');

            daojishi4(img5);
        }
    }, 10);
}

function daojishi4(obj) {
    var sec =60;
    var minu=2*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            img5.css("color","red")
            $("#imgsrc4").attr("src","img/working/success/3.5.png");
            obj.html('已完成');

            daojishi5(img6);
        }
    }, 10);
}

function daojishi5(obj) {
    var sec =60;
    var minu=2*60;
    countTime = setInterval(function() {
        sec = --sec < 0 ? 59 : sec;
        minu = --minu < 0 ? 0 : minu;

        var ms = Math.floor(sec).toString();

        if(ms.length <= 1) {
            ms = "0" + ms;
        }

        var mi = Math.floor(minu/60).toString();

        if(mi.length <= 1) {
            mi = "0" + mi;
        }
        obj.html(mi+":"+ms);
        if(minu==0){
            clearInterval(countTime);
            img6.css("color","red")
            $("#imgsrc5").attr("src","img/working/success/3.6.png");
            obj.html('已完成');
            $("#imgsrc6").attr("src","img/working/success/3.7.png");
        }
    }, 10);
}

