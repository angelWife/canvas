$(function () {

  //关闭头部的搜索
  $(".head-nav li").on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active');
  });
  //列表左边菜单
  // $("#left-nav .show-childNav").off('click').on('click', function () {
  //   $(this).toggleClass('icon-jian').toggleClass('icon-jia');
  //   $(this).parents('dt').next('dd').toggleClass('ani-show');
  // });
  $("#left-nav dt").off('click').on('click', function () {
    var dd = $(this).next('dd');
    if(dd.length>0){
      $(this).find('.show-childNav').toggleClass('icon-jian').toggleClass('icon-jia');
      $(this).next('dd').toggleClass('ani-show');
    }
    });
    $("#left-nav .link-a").off('click').on('click', function () {
      $("#left-nav").find('.active').removeClass('active');
        $(this).addClass('active');
    });
  // headSwiper("mainBanner");
  // footSwiper("sayBanner");
  // controlHeader();
  // setHead();
});

function leftNavClick(obj){
  var dd = $(obj).next('dd');
  if(dd.length>0){
    $(obj).find('.iconfont').toggleClass('icon-jian').toggleClass('icon-jia');
    $(obj).next('dd').toggleClass('ani-show');
  }
}
function leftLinkClick(obj){
  $("#left-nav").find('.active').removeClass('active');
  $(obj).addClass('active');
}

//首页关于我们跳转
function moreAboutUs(){
 // window
  window.location.href="joinUs.html";
}

//控制头部
function setHead() {
  var win_w = $(window).width();
  if (win_w <= 1300) {
    $(".myheader .logo").css("margin-left", "0");
    $(".myheader .head-nav").css("margin-right", "0");
  } else {
    $(".myheader .logo").css("margin-left", "10%");
    $(".myheader .head-nav").css("margin-right", "10%");
  }
  window.onresize = function () {
    setHead();
  }
}

function controlHeader() {
  $(window).on("scroll", function () {
    var top = $(this).scrollTop();
    if (top > 0) {
      $(".myheader").addClass('fixed');
      $(".need-top").css("padding-top", "105px");
    } else {
      $(".myheader").removeClass('fixed');
      $(".need-top").css("padding-top", "0");
    }
  });
}

//打开头部的搜索
function showSearch() {
  $(".logo").addClass('fixed');
  $(".search-modal").addClass('show-modal');
  $("html,body").css("overflow", "hidden");
}
//首页大轮播
function headSwiper(id) {
  new Swiper('#' + id, {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      autoHeight:true,
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet',
      clickable: true
    },
  })
}

//底部轮播
function footSwiper(id) {
  var mySwiper = new Swiper('#' + id, {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    pagination: {
      el: '.pagination-foot',
      bulletActiveClass: 'pagination-foot-bullet-active',
      bulletClass: 'pagination-foot-bullet',
      clickable: true
    },
  });
  $('.swiper-slide').mouseenter(function() {
    mySwiper.autoplay.stop();
})
$('.swiper-slide').mouseleave(function() {
    mySwiper.autoplay.start();
})

}

//上传图片
function picUplaod(obj, id) {
  var reads = new FileReader();
  debugger
  var _file = $(obj).prop('files')[0];
  reads.readAsDataURL(_file);
  reads.onload = function (e) {
    $("#" + id).html("<img src='" + this.result + "'/><i class='iconfont icon-guanbi1 close'></i>");
    $(".close").on('click', function () {
      $(this).siblings().remove();
      $(this).remove();
    });
    $(obj).val('');
  };
}