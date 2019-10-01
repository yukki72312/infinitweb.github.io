//同意用のチェックボックス
    window.addEventListener('load', function() {
        var c = [
            document.getElementById('agee'),
        ];
        var chklist;
        if (document.cookie) {
            chklist = document.cookie.split(",");
        };
        c.forEach(function(ci, i) {
            if (chklist && chklist[i] === 'true') ci.checked = true;
            ci.addEventListener('click', function() {
                var x = [];
                c.forEach(function(cj) {
                    x.push(cj.checked);
                });

                var expire = new Date();
                expire.setTime(expire.getTime() + 1000 * 3600 * 24);
                document.cookie = x.join(',') + ',; expires=' + expire.toUTCString();
            });
        });

    });
//モーダルウィンドウの設定

$(function() {
$('#open').on('click', function() {
  $('#mo, #mw').fadeIn();
});
$('#close').on('click', function() {
  $('#mo, #mw').fadeOut();
});
$('#cb').on('click', function() {
  $('#mo, #mw').fadeOut();
});
locateCenter();
$(window).resize(locateCenter);
function locateCenter() {
  let w = $(window).width();
  let h = $(window).height();

  let cw = $('#mw').outerWidth();
  let ch = $('#mw').outerHeight();

  $('#mw').css({
    'left': ((w - cw) / 2) + 'px',
    'top': ((h - ch) / 2) + 'px'
  });
}
});

//モーダルウィンドウの設定2
$('#open1').on('click', function() {
  $('#mo, #mw').fadeIn();
});
//スクロールの設定
$(function(){
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
});
//コピーの設定
$(".copy").click(function () {

var str = "play.infinitcraft.net";
document.getElementById("coop").innerText = "コピーが完了しました！";

var listener = function(e){

  e.clipboardData.setData("text/plain" , str);
  e.preventDefault();
  document.removeEventListener("copy", listener);
}
document.addEventListener("copy" , listener);
document.execCommand("copy");
});
//通知用モーダルの設定1
$(function() {
$('#openn').on('click', function() {
  $('#mon, #mwn').fadeIn();
});
$('#closen').on('click', function() {
  $('#mon, #mwn').fadeOut();
});
$('#cbn').on('click', function() {
  $('#mon, #mwn').fadeOut();
});
locateCenter();
$(window).resize(locateCenter);
function locateCenter() {
  let w = $(window).width();
  let h = $(window).height();

  let cw = $('#mwn').outerWidth();
  let ch = $('#mwn').outerHeight();

  $('#mwn').css({
    'left': ((w - cw) / 2) + 'px',
    'top': ((h - ch) / 2) + 'px'
  });
}
});
//アニメーション描画設定
$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('h1').each(function() {
    var imgPosition = $(this).offset().top;
    if (scrollY > imgPosition - windowH) {
      $(this).addClass("anim");
    }
  });
});
$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('p').each(function() {
    var imgPosition = $(this).offset().top;
    if (scrollY > imgPosition - windowH) {
      $(this).addClass("anim");
    }
  });
});

//個々からミニゲームの説明
$(".vddd").click(function () {
  var how = document.getElementById('how')
  how.innerHTML = '<i style="font-size: 40px;" class="fas fa-bars"></i>'
});
