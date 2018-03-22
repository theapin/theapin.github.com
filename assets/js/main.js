var height,width,cx,cy;//屏幕高度，屏幕宽度，屏幕中心点的x，y坐标
//屏幕坐标系是左上角为 （0，0），右下角是（width，height）
var origin;//不能动的中心星球
var planets=[];//能动的行星数组
var floats=[];//这个不用管，这是works页面的，这里没有用到
var t_height=180;//最内圈轨道的高度的默认高度，（根据这个与rate和 t_d 计算其他轨道高度与间距）
//轨道宽度是高度两倍
var t_d=90;//轨道的间距
var rate;//页面缩放的比例，（当前宽高与(1200,700)的比例）
var o_len=150;//中心球的直径
//1200 700
var t;//这里没有用到
var planetNum=5;//可移动的行星数量
var names=["resume","music","image","video","work"];//可移动的行星名字
J.load(function(){
  setSize();
  names.each(function(item,i){
    planets.append(new Planet(item,i));
  });
  setInterval(function(){
    planets.each(function(item){
      item.act();
    });
  },200);
});
function setSize(){
  height=J.height(),width=J.width();
  rate=((height>width)?(width*2/3):height)/700;
  t_d=90*rate;
  t_height=180*rate;
  o_len=150*rate;
  cx=width/2,cy=height/2;
  J.class("track").each(function(item,i){
    var h=(t_height+i*t_d);
    item.css({
      width:2*h+"px",
      height:h+"px",
      left:(cx-h)+"px",
      top:(cy-h/2)+"px"
    });
  });
  origin=J.id("origin").css({
    width:o_len+"px",
    height:o_len+"px",
    "font-size":o_len/5+"px",
    "line-height":o_len+"px",
    left:(cx-o_len/2)+"px",
    top:(cy-o_len/2)+"px",
    "z-index":""+(planetNum)
  }).event("onclick","Jet.open('https://github.com/theapin')");
}
window.onresize=function(){
  setSize();
  planets.each(function(item){
    item.resize();
  })
}






