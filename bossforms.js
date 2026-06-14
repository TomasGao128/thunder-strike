
function drawBossForm(ctx,form,st){
// Form 0: 暗黑圆盘
if(form==0){
  var gb=ctx.createRadialGradient(0,0,5,0,0,42);
  gb.addColorStop(0,"#fee");gb.addColorStop(0.1,"#f66");gb.addColorStop(0.3,"#c22");gb.addColorStop(0.6,"#800");gb.addColorStop(1,"#200");
  ctx.shadowColor="#800";ctx.shadowBlur=30;
  ctx.fillStyle=gb;
  ctx.beginPath();
  for(var k=0;k<10;k++){var a=k*0.6283-st*0.008;var r=38+Math.sin(st*0.06+k*1.8)*3;if(k==0)ctx.moveTo(r*Math.cos(a),r*Math.sin(a));else ctx.lineTo(r*Math.cos(a),r*Math.sin(a));}
  ctx.closePath();ctx.fill();
  for(var t=0;t<4;t++){var ta=t*1.57+st*0.015;ctx.strokeStyle="rgba(180,30,30,0.5)";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(Math.cos(ta)*20,Math.sin(ta)*20);ctx.lineTo(Math.cos(ta+0.6)*(42+Math.sin(st*0.05+t)*3),Math.sin(ta+0.6)*(42+Math.sin(st*0.05+t)*3));ctx.stroke();}
  var ge=ctx.createRadialGradient(-3,-3,2,0,0,18);
  ge.addColorStop(0,"#fff");ge.addColorStop(0.3,"#f80");ge.addColorStop(1,"#c00");
  ctx.shadowColor="#f00";ctx.shadowBlur=40;
  ctx.fillStyle=ge;
  ctx.beginPath();ctx.arc(0,0,14+Math.sin(st*0.07)*2,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#000";ctx.shadowBlur=8;
  ctx.beginPath();ctx.ellipse(0,0,4,9+Math.sin(st*0.05)*1.5,0,0,Math.PI*2);ctx.fill();
}
// Form 1: 机械蜘蛛
if(form==1){
  ctx.shadowColor="#0f0";ctx.shadowBlur=25;
  // 身体
  var gb1=ctx.createRadialGradient(0,0,3,0,0,30);
  gb1.addColorStop(0,"#afa");gb1.addColorStop(0.3,"#0a0");gb1.addColorStop(0.7,"#060");gb1.addColorStop(1,"#020");
  ctx.fillStyle=gb1;
  ctx.beginPath();ctx.ellipse(0,0,26,20+Math.sin(st*0.04)*2,0,0,Math.PI*2);ctx.fill();
  // 8条蜘蛛腿
  ctx.strokeStyle="rgba(0,255,0,0.6)";ctx.lineWidth=3;
  for(var t=0;t<8;t++){var ta=t*0.785+st*0.02;var legLen=35+Math.sin(st*0.06+t)*6;var bend=Math.sin(st*0.08+t)*8;
    ctx.beginPath();ctx.moveTo(Math.cos(ta)*18,Math.sin(ta)*15);
    ctx.quadraticCurveTo(Math.cos(ta+0.3)*legLen*0.6+bend,Math.sin(ta+0.3)*legLen*0.6,Math.cos(ta+0.5)*legLen,Math.sin(ta+0.5)*legLen);ctx.stroke();}
  // 头部
  ctx.fillStyle="#0c0";ctx.beginPath();ctx.arc(0,-18,10,0,Math.PI*2);ctx.fill();
  // 8只复眼
  ctx.shadowColor="#ff0";ctx.shadowBlur=15;
  for(var t=0;t<8;t++){var ea=t*0.785;ctx.fillStyle="rgba(255,255,0,"+(0.5+Math.sin(st*0.07+t)*0.3)+")";ctx.beginPath();ctx.arc(Math.cos(ea)*6,Math.sin(ea)*6-18,2+Math.sin(st*0.05+t)*0.5,0,Math.PI*2);ctx.fill();}
  // 獠牙
  ctx.shadowColor="#0f0";ctx.shadowBlur=10;ctx.fillStyle="rgba(0,255,0,0.7)";
  ctx.beginPath();ctx.moveTo(-5,-22);ctx.lineTo(-8,-30);ctx.lineTo(-2,-24);ctx.closePath();ctx.fill();
  ctx.beginPath();ctx.moveTo(5,-22);ctx.lineTo(8,-30);ctx.lineTo(2,-24);ctx.closePath();ctx.fill();
}
// Form 2: 赛博飞龙
if(form==2){
  ctx.shadowColor="#08f";ctx.shadowBlur=30;
  // 龙身
  var gb2=ctx.createLinearGradient(-30,0,30,0);
  gb2.addColorStop(0,"#08f");gb2.addColorStop(0.5,"#0ff");gb2.addColorStop(1,"#06f");
  ctx.fillStyle=gb2;
  ctx.beginPath();ctx.moveTo(0,-30);ctx.lineTo(-30,10);ctx.lineTo(-20,30);ctx.lineTo(20,30);ctx.lineTo(30,10);ctx.closePath();ctx.fill();
  // 翅膀
  ctx.shadowColor="#0ff";ctx.shadowBlur=20;
  for(var t=0;t<2;t++){var side=t==0?-1:1;var flap=Math.sin(st*0.06)*8;
    ctx.fillStyle="rgba(0,200,255,0.3)";
    ctx.beginPath();ctx.moveTo(side*15,5);ctx.lineTo(side*(40+flap),-20-Math.sin(st*0.05)*5);ctx.lineTo(side*(35+flap),0);ctx.lineTo(side*(32+flap),15);ctx.closePath();ctx.fill();}
  // 龙头
  ctx.fillStyle="#0af";ctx.beginPath();ctx.moveTo(0,-35);ctx.lineTo(-12,-25);ctx.lineTo(0,-15);ctx.lineTo(12,-25);ctx.closePath();ctx.fill();
  // 龙眼
  ctx.shadowColor="#ff0";ctx.shadowBlur=20;
  ctx.fillStyle="rgba(255,255,0,"+(0.7+Math.sin(st*0.08)*0.3)+")";
  ctx.beginPath();ctx.arc(-5,-28,4,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(5,-28,4,0,Math.PI*2);ctx.fill();
  // 龙口火焰
  ctx.shadowColor="#f80";ctx.shadowBlur=25;
  ctx.fillStyle="rgba(255,150,0,"+(0.3+Math.sin(st*0.1)*0.2)+")";
  ctx.beginPath();ctx.moveTo(-6,-33);ctx.lineTo(0,-50-Math.random()*8);ctx.lineTo(6,-33);ctx.closePath();ctx.fill();
  // 龙尾
  ctx.strokeStyle="#0af";ctx.lineWidth=4;
  ctx.beginPath();ctx.moveTo(0,30);ctx.lineTo(-5+Math.sin(st*0.05)*3,45+Math.sin(st*0.07)*3);ctx.lineTo(-3+Math.sin(st*0.06)*4,55+Math.sin(st*0.08)*4);ctx.stroke();
  // 尾巴尖刺
  ctx.fillStyle="#0ff";ctx.beginPath();ctx.arc(-3+Math.sin(st*0.06)*4,55+Math.sin(st*0.08)*4,4,0,Math.PI*2);ctx.fill();
}
// Form 3: 暗影魔像
if(form==3){
  ctx.shadowColor="#80f";ctx.shadowBlur=35;
  // 巨人体型
  var gb3=ctx.createLinearGradient(-25,-40,25,40);
  gb3.addColorStop(0,"#a6f");gb3.addColorStop(0.5,"#50a");gb3.addColorStop(1,"#208");
  ctx.fillStyle=gb3;
  // 躯干
  ctx.beginPath();ctx.moveTo(0,40);ctx.lineTo(-25,0);ctx.lineTo(-20,-25);ctx.lineTo(20,-25);ctx.lineTo(25,0);ctx.closePath();ctx.fill();
  // 头部
  ctx.fillStyle="#62c";ctx.beginPath();ctx.arc(0,-32,16,0,Math.PI*2);ctx.fill();
  // 独眼
  ctx.shadowColor="#f0f";ctx.shadowBlur=30;
  var eyeG=ctx.createRadialGradient(-2,-2,1,0,0,12);
  eyeG.addColorStop(0,"#fff");eyeG.addColorStop(0.3,"#f0f");eyeG.addColorStop(0.7,"#80f");eyeG.addColorStop(1,"#400");
  ctx.fillStyle=eyeG;
  ctx.beginPath();ctx.arc(0,-32,10+Math.sin(st*0.06)*2,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#000";ctx.beginPath();ctx.arc(0,-32,5,0,Math.PI*2);ctx.fill();
  // 手臂
  ctx.shadowColor="#80f";ctx.shadowBlur=15;
  ctx.strokeStyle="rgba(100,50,200,0.8)";ctx.lineWidth=6;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    ctx.beginPath();ctx.moveTo(side*22,-10);ctx.lineTo(side*(32+Math.sin(st*0.05)*4),5+Math.sin(st*0.07)*3);ctx.lineTo(side*(30+Math.sin(st*0.06)*5),20+Math.sin(st*0.08)*4);ctx.stroke();}
  // 拳头
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    ctx.fillStyle="rgba(150,100,255,0.6)";
    ctx.beginPath();ctx.arc(side*(30+Math.sin(st*0.06)*5),20+Math.sin(st*0.08)*4,6,0,Math.PI*2);ctx.fill();}
  // 肩甲
  ctx.fillStyle="rgba(100,50,200,0.4)";
  ctx.beginPath();ctx.arc(-22,-10,8,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(22,-10,8,0,Math.PI*2);ctx.fill();
  // 腿部
  ctx.strokeStyle="rgba(80,30,180,0.6)";ctx.lineWidth=5;
  ctx.beginPath();ctx.moveTo(-12,35);ctx.lineTo(-15,55);ctx.lineTo(-10,65);ctx.stroke();
  ctx.beginPath();ctx.moveTo(12,35);ctx.lineTo(15,55);ctx.lineTo(10,65);ctx.stroke();
}
// Form 4: 终焉天使
if(form==4){
  ctx.shadowColor="#f0f";ctx.shadowBlur=50;
  // 天使光环
  ctx.strokeStyle="rgba(255,200,0,"+(0.2+Math.sin(st*0.04)*0.1)+")";ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(0,-50,20+Math.sin(st*0.03)*3,0,Math.PI*2);ctx.stroke();
  // 六翼展开
  ctx.shadowColor="#f0f";ctx.shadowBlur=40;
  for(var t=0;t<3;t++){var side=1;var wingIdx=t;var wingSpan=45+wingIdx*10+Math.sin(st*0.04+wingIdx)*6;var wingY=-10-wingIdx*8;
    // 左翼
    ctx.fillStyle="rgba(200,50,255,"+(0.12-wingIdx*0.02+Math.sin(st*0.03+wingIdx)*0.06)+")";
    ctx.beginPath();ctx.moveTo(-5,wingY+5);ctx.lineTo(-wingSpan,wingY-15-Math.sin(st*0.05+wingIdx)*5);ctx.lineTo(-wingSpan+10,wingY+5);ctx.closePath();ctx.fill();
    // 右翼
    ctx.beginPath();ctx.moveTo(5,wingY+5);ctx.lineTo(wingSpan,wingY-15-Math.sin(st*0.05+wingIdx)*5);ctx.lineTo(wingSpan-10,wingY+5);ctx.closePath();ctx.fill();
    // 翼尖发光
    ctx.fillStyle="rgba(255,200,255,"+(0.3+Math.sin(st*0.06+wingIdx)*0.2)+")";
    ctx.beginPath();ctx.arc(-wingSpan,wingY-15-Math.sin(st*0.05+wingIdx)*5,3,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(wingSpan,wingY-15-Math.sin(st*0.05+wingIdx)*5,3,0,Math.PI*2);ctx.fill();}
  // 身体
  var gb4=ctx.createRadialGradient(0,0,3,0,0,25);
  gb4.addColorStop(0,"#fff");gb4.addColorStop(0.3,"#f8f");gb4.addColorStop(0.6,"#a0f");gb4.addColorStop(1,"#408");
  ctx.shadowColor="#f0f";ctx.shadowBlur=35;
  ctx.fillStyle=gb4;
  ctx.beginPath();ctx.arc(0,0,22,0,Math.PI*2);ctx.fill();
  // 核心心脏
  ctx.shadowColor="#fff";ctx.shadowBlur=40;
  var heartG=ctx.createRadialGradient(0,0,1,0,0,9);
  heartG.addColorStop(0,"#fff");heartG.addColorStop(0.5,"#ff0");heartG.addColorStop(1,"#f80");
  ctx.fillStyle=heartG;
  ctx.beginPath();ctx.arc(0,0,8+Math.sin(st*0.07)*2,0,Math.PI*2);ctx.fill();
  // 能量脉冲波纹
  ctx.strokeStyle="rgba(255,100,255,"+(0.1+Math.sin(st*0.03)*0.06)+")";ctx.lineWidth=1.5;
  for(var t=0;t<3;t++){var pr=28+t*10+Math.sin(st*0.04+t)*3;ctx.beginPath();ctx.arc(0,0,pr,0,Math.PI*2);ctx.stroke();}
}
// ============================================================
// Form 5: 虚空海妖 (Void Kraken) - 深渊触手怪
// 形状：有机触手 + 虚空漩涡核心
// 颜色：深蓝/青色/紫色渐变
// 特征：多条发光触手、中央深渊之眼、虚空漩涡光环
// ============================================================
if(form==5){
  ctx.shadowColor="#0af";ctx.shadowBlur=40;
  // 虚空漩涡光环 - 外层旋转环
  ctx.strokeStyle="rgba(0,150,255,"+(0.15+Math.sin(st*0.03)*0.1)+")";ctx.lineWidth=3;
  ctx.beginPath();ctx.arc(0,0,52+Math.sin(st*0.04)*4,-st*0.015,-st*0.015+Math.PI*1.8);ctx.stroke();
  ctx.strokeStyle="rgba(100,0,255,"+(0.1+Math.sin(st*0.025+1)*0.08)+")";ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(0,0,58+Math.sin(st*0.035+2)*3,st*0.02,st*0.02+Math.PI*1.3);ctx.stroke();
  // 虚空漩涡内环 - 旋转能量流
  ctx.strokeStyle="rgba(0,200,255,"+(0.08+Math.sin(st*0.04)*0.06)+")";ctx.lineWidth=1.5;
  for(var v=0;v<3;v++){var vr=40+v*6+Math.sin(st*0.03+v)*4;ctx.beginPath();ctx.arc(0,0,vr,st*0.01*(v+1),st*0.01*(v+1)+Math.PI);ctx.stroke();}
  // 触手 - 8条发光触手从核心延伸
  ctx.shadowColor="#0af";ctx.shadowBlur=25;
  for(var t=0;t<8;t++){
    var ta=t*0.785+st*0.012+Math.sin(st*0.03+t)*0.15;
    var tr=28+Math.sin(st*0.05+t*2)*3;
    var len=48+Math.sin(st*0.04+t*1.3)*12;
    var col=Math.floor(100+Math.sin(st*0.06+t)*50);
    ctx.strokeStyle="rgba(0,"+col+",255,"+(0.4+Math.sin(st*0.05+t)*0.2)+")";
    ctx.lineWidth=6+Math.sin(st*0.06+t)*2;
    // 触手贝塞尔曲线 - 波浪游动
    ctx.beginPath();
    ctx.moveTo(Math.cos(ta)*tr,Math.sin(ta)*tr);
    var cp1x=Math.cos(ta+0.3+Math.sin(st*0.04+t)*0.2)*(tr+len*0.3)+Math.sin(st*0.05+t)*6;
    var cp1y=Math.sin(ta+0.3+Math.sin(st*0.04+t)*0.2)*(tr+len*0.3)+Math.cos(st*0.05+t)*6;
    var cp2x=Math.cos(ta+0.6+Math.sin(st*0.05+t)*0.15)*(tr+len*0.7)-Math.sin(st*0.06+t)*4;
    var cp2y=Math.sin(ta+0.6+Math.sin(st*0.05+t)*0.15)*(tr+len*0.7)+Math.cos(st*0.06+t)*4;
    var ex=Math.cos(ta+0.9+Math.sin(st*0.06+t)*0.1)*(tr+len);
    var ey=Math.sin(ta+0.9+Math.sin(st*0.06+t)*0.1)*(tr+len);
    ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,ex,ey);
    ctx.stroke();
    // 触手吸盘发光点
    ctx.shadowColor="#0ff";ctx.shadowBlur=12;
    ctx.fillStyle="rgba(0,255,255,"+(0.2+Math.sin(st*0.07+t)*0.15)+")";
    for(var s=0;s<4;s++){var sp=s/4;var sx=Math.cos(ta+sp*0.8)*(tr+len*sp);var sy=Math.sin(ta+sp*0.8)*(tr+len*sp);ctx.beginPath();ctx.arc(sx,sy,2+Math.sin(st*0.08+t+s)*0.5,0,Math.PI*2);ctx.fill();}
    // 触手尖端发光球
    ctx.shadowColor="#0ff";ctx.shadowBlur=25;
    ctx.fillStyle="rgba(100,255,255,"+(0.5+Math.sin(st*0.07+t)*0.3)+")";
    ctx.beginPath();ctx.arc(ex,ey,4+Math.sin(st*0.09+t)*1.5,0,Math.PI*2);ctx.fill();
  }
  // 深渊核心 - 漩涡状虚空之门
  ctx.shadowColor="#0af";ctx.shadowBlur=45;
  var gv=ctx.createRadialGradient(0,0,2,0,0,38);
  gv.addColorStop(0,"#fff");gv.addColorStop(0.1,"#0ff");gv.addColorStop(0.3,"#06f");gv.addColorStop(0.6,"#408");gv.addColorStop(0.85,"#206");gv.addColorStop(1,"#102");
  ctx.fillStyle=gv;
  ctx.beginPath();ctx.arc(0,0,34+Math.sin(st*0.05)*2,0,Math.PI*2);ctx.fill();
  // 漩涡螺旋纹理
  ctx.shadowBlur=0;
  ctx.strokeStyle="rgba(100,200,255,0.15)";ctx.lineWidth=1.5;
  for(var s=0;s<8;s++){var sa=s*0.785+st*0.025;ctx.beginPath();for(var r=2;r<34;r+=2){var rr=r+Math.sin(sa+r*0.3+st*0.05)*2;ctx.lineTo(Math.cos(sa+r*0.15)*rr,Math.sin(sa+r*0.15)*rr);}ctx.stroke();}
  // 深渊之眼
  ctx.shadowColor="#0ff";ctx.shadowBlur=40;
  var ge5=ctx.createRadialGradient(-3,-3,2,0,0,20);
  ge5.addColorStop(0,"#fff");ge5.addColorStop(0.2,"#0ff");ge5.addColorStop(0.5,"#08f");ge5.addColorStop(0.8,"#206");ge5.addColorStop(1,"#000");
  ctx.fillStyle=ge5;
  ctx.beginPath();ctx.arc(0,0,16+Math.sin(st*0.06)*2,0,Math.PI*2);ctx.fill();
  // 瞳孔 - 深渊裂隙
  ctx.shadowColor="#000";ctx.shadowBlur=10;
  ctx.fillStyle="#000";ctx.beginPath();ctx.ellipse(0,0,3,10+Math.sin(st*0.04)*2,0,0,Math.PI*2);ctx.fill();
  // 瞳孔高光
  ctx.shadowBlur=0;ctx.fillStyle="rgba(255,255,255,0.5)";ctx.beginPath();ctx.arc(-4,-5,2,0,Math.PI*2);ctx.fill();
  // 虚空能量辐射纹
  ctx.shadowColor="#0af";ctx.shadowBlur=15;
  for(var r=0;r<12;r++){var ra=r*0.523+st*0.008;var rLen=28+Math.sin(st*0.05+r)*4;ctx.strokeStyle="rgba(0,150,255,"+(0.15+Math.sin(st*0.06+r)*0.1)+")";ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(Math.cos(ra)*22,Math.sin(ra)*22);ctx.lineTo(Math.cos(ra)*rLen,Math.sin(ra)*rLen);ctx.stroke();}
  // 虚空触须小粒子 - 漂浮
  ctx.shadowColor="#0ff";ctx.shadowBlur=10;
  for(var p=0;p<10;p++){var pa=Math.random()*6.28;var pd=20+Math.random()*25;ctx.fillStyle="rgba(0,200,255,"+(0.1+Math.random()*0.2)+")";ctx.beginPath();ctx.arc(Math.cos(pa)*pd,Math.sin(pa)*pd,1+Math.random()*1.5,0,Math.PI*2);ctx.fill();}
}
// ============================================================
// Form 6: 机械泰坦 (Mech Titan) - 巨型战争机器
// 形状：机械装甲人形 + 重型武器系统
// 颜色：金/橙/红金属色
// 特征：肩部加农炮、旋转齿轮、胸口反应堆、导弹舱
// ============================================================
if(form==6){
  ctx.shadowColor="#f80";ctx.shadowBlur=40;
  // 背景热能光晕
  var hg=ctx.createRadialGradient(0,0,5,0,0,70);
  hg.addColorStop(0,"rgba(255,200,100,0.12)");hg.addColorStop(0.5,"rgba(200,80,0,0.06)");hg.addColorStop(1,"rgba(100,0,0,0)");
  ctx.fillStyle=hg;ctx.beginPath();ctx.arc(0,0,70,0,Math.PI*2);ctx.fill();
  // 肩部加农炮 - 左右各一
  ctx.shadowColor="#f80";ctx.shadowBlur=25;
  for(var t=0;t<2;t++){var side=t==0?-1:1;var aimAng=Math.sin(st*0.04)*0.2;
    ctx.fillStyle="rgba(200,100,20,0.8)";ctx.strokeStyle="rgba(255,200,50,0.4)";ctx.lineWidth=2;
    // 炮管主体
    ctx.save();ctx.translate(side*32,-5);ctx.rotate(side*aimAng);
    ctx.fillRect(-5,-14,10,22);
    ctx.strokeRect(-5,-14,10,22);
    // 炮口
    ctx.fillStyle="rgba(255,150,50,0.6)";ctx.fillRect(-6,-16,12,4);ctx.fillStyle="rgba(255,100,0,0.3)";ctx.fillRect(-4,-18,8,4);
    // 炮口能量充能
    ctx.shadowColor="#ff0";ctx.shadowBlur=20;
    ctx.fillStyle="rgba(255,200,0,"+(0.3+Math.sin(st*0.08+t)*0.2)+")";
    ctx.beginPath();ctx.arc(0,-18,4+Math.sin(st*0.09+t)*1.5,0,Math.PI*2);ctx.fill();
    ctx.restore();
    // 肩甲
    ctx.shadowColor="#f80";ctx.shadowBlur=15;
    ctx.fillStyle="rgba(180,100,30,0.7)";ctx.beginPath();ctx.arc(side*30,2,12,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,200,100,0.3)";ctx.beginPath();ctx.arc(side*30,2,8,0,Math.PI*2);ctx.fill();
  }
  // 旋转齿轮 - 左右胸口
  ctx.shadowColor="#fa0";ctx.shadowBlur=20;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    ctx.strokeStyle="rgba(255,180,50,"+(0.5+Math.sin(st*0.05)*0.2)+")";ctx.lineWidth=2;
    ctx.save();ctx.translate(side*18,6);
    for(var g=0;g<8;g++){var ga=g*0.785+st*0.025*side;var gr=9+Math.sin(st*0.06+g)*1;
      ctx.beginPath();ctx.moveTo(Math.cos(ga)*5,Math.sin(ga)*5);
      ctx.lineTo(Math.cos(ga)*gr,Math.sin(ga)*gr);
      ctx.lineTo(Math.cos(ga+0.2)*gr,Math.sin(ga+0.2)*gr);
      ctx.lineTo(Math.cos(ga+0.2)*5,Math.sin(ga+0.2)*5);
      ctx.closePath();ctx.fill();ctx.stroke();}
    // 齿轮中心
    ctx.shadowColor="#ff0";ctx.shadowBlur=15;
    ctx.fillStyle="rgba(255,200,50,"+(0.4+Math.sin(st*0.06+t)*0.2)+")";
    ctx.beginPath();ctx.arc(0,0,5,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  // 躯干 - 重型装甲
  ctx.shadowColor="#a40";ctx.shadowBlur=30;
  var gb6=ctx.createLinearGradient(-28,-20,28,25);
  gb6.addColorStop(0,"#fea");gb6.addColorStop(0.2,"#da0");gb6.addColorStop(0.5,"#a60");gb6.addColorStop(0.8,"#830");gb6.addColorStop(1,"#510");
  ctx.fillStyle=gb6;
  ctx.beginPath();
  ctx.moveTo(0,-28);ctx.lineTo(-15,-24);ctx.lineTo(-25,-8);ctx.lineTo(-28,4);ctx.lineTo(-24,14);ctx.lineTo(-18,22);ctx.lineTo(0,26);ctx.lineTo(18,22);ctx.lineTo(24,14);ctx.lineTo(28,4);ctx.lineTo(25,-8);ctx.lineTo(15,-24);
  ctx.closePath();ctx.fill();
  // 装甲板缝隙
  ctx.shadowBlur=0;ctx.strokeStyle="rgba(100,50,10,0.3)";ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(-10,-18);ctx.lineTo(-20,0);ctx.lineTo(-15,14);ctx.stroke();
  ctx.beginPath();ctx.moveTo(10,-18);ctx.lineTo(20,0);ctx.lineTo(15,14);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-5,-14);ctx.lineTo(5,-14);ctx.stroke();
  // 胸口反应堆 - 核能核心
  ctx.shadowColor="#ff0";ctx.shadowBlur=40;
  var rg=ctx.createRadialGradient(0,0,2,0,0,14);
  rg.addColorStop(0,"#fff");rg.addColorStop(0.2,"#ff0");rg.addColorStop(0.5,"#f80");rg.addColorStop(0.8,"#c40");rg.addColorStop(1,"#600");
  ctx.fillStyle=rg;
  ctx.beginPath();ctx.arc(0,2,12+Math.sin(st*0.07)*2,0,Math.PI*2);ctx.fill();
  // 反应堆能量环
  ctx.shadowColor="#fa0";ctx.shadowBlur=20;
  ctx.strokeStyle="rgba(255,200,50,"+(0.3+Math.sin(st*0.05)*0.2)+")";ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(0,2,16+Math.sin(st*0.04)*2,st*0.02,st*0.02+Math.PI*1.5);ctx.stroke();
  ctx.strokeStyle="rgba(255,150,0,"+(0.15+Math.sin(st*0.06+1)*0.1)+")";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.arc(0,2,20+Math.sin(st*0.05+1)*2,-st*0.015,-st*0.015+Math.PI*1.2);ctx.stroke();
  // 头部 - 战斗面甲
  ctx.shadowColor="#a40";ctx.shadowBlur=25;
  ctx.fillStyle="#a60";ctx.beginPath();
  ctx.moveTo(0,-38);ctx.lineTo(-14,-32);ctx.lineTo(-16,-26);ctx.lineTo(-10,-22);ctx.lineTo(10,-22);ctx.lineTo(16,-26);ctx.lineTo(14,-32);
  ctx.closePath();ctx.fill();
  // 面甲遮光
  ctx.fillStyle="#830";ctx.fillRect(-10,-32,20,3);
  // 眼部 - 红色扫描灯
  ctx.shadowColor="#f00";ctx.shadowBlur=25;
  ctx.fillStyle="rgba(255,50,0,"+(0.6+Math.sin(st*0.08)*0.3)+")";
  ctx.beginPath();ctx.arc(-5,-28,4,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(5,-28,4,0,Math.PI*2);ctx.fill();
  // 眼部扫描射线
  ctx.shadowColor="#f00";ctx.shadowBlur=10;
  ctx.strokeStyle="rgba(255,0,0,"+(0.15+Math.sin(st*0.06)*0.1)+")";ctx.lineWidth=1;
  for(var s=0;s<3;s++){var sa=-0.3+s*0.3+Math.sin(st*0.04)*0.1;ctx.beginPath();ctx.moveTo(-5,-28);ctx.lineTo(-5+Math.cos(sa)*40,Math.sin(sa)*40-28);ctx.stroke();
    ctx.beginPath();ctx.moveTo(5,-28);ctx.lineTo(5+Math.cos(sa)*40,Math.sin(sa)*40-28);ctx.stroke();}
  // 腿部装甲
  ctx.shadowColor="#a40";ctx.shadowBlur=20;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    ctx.fillStyle="rgba(160,90,30,0.7)";ctx.beginPath();
    ctx.moveTo(side*8,26);ctx.lineTo(side*14,40);ctx.lineTo(side*12,52);ctx.lineTo(side*6,52);ctx.lineTo(side*4,40);ctx.closePath();ctx.fill();
    // 腿部装甲条纹
    ctx.fillStyle="rgba(200,150,50,0.3)";ctx.fillRect(side*8-2,30,4,6);ctx.fillRect(side*9-2,38,4,6);}
  // 左右拳头 - 重型铁拳
  ctx.shadowColor="#f80";ctx.shadowBlur=20;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    var fistX=side*32+Math.sin(st*0.05)*2;
    var fistY=18+Math.sin(st*0.06+t)*2;
    ctx.fillStyle="rgba(200,150,50,0.8)";
    ctx.beginPath();ctx.arc(fistX,fistY,8+Math.sin(st*0.05+t)*0.5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,200,100,0.4)";ctx.beginPath();ctx.arc(fistX-side*2,fistY-2,4,0,Math.PI*2);ctx.fill();
    // 拳刺
    ctx.fillStyle="rgba(255,100,0,0.6)";
    ctx.beginPath();ctx.moveTo(fistX-side*3,fistY-8);ctx.lineTo(fistX-side*4,fistY-12);ctx.lineTo(fistX-side*5,fistY-6);ctx.closePath();ctx.fill();}
  // 导弹舱 - 肩后发射器
  ctx.shadowColor="#f80";ctx.shadowBlur=12;
  for(var t=0;t<4;t++){var side=t<2?-1:1;var idx=t%2;var mx=side*(36+idx*6);var my=-10+idx*8;
    ctx.fillStyle="rgba(100,60,20,0.6)";ctx.fillRect(mx-3,my-6,6,12);
    ctx.fillStyle="rgba(255,200,50,0.3)";ctx.fillRect(mx-2,my-4,4,8);
    ctx.fillStyle="rgba(255,100,0,"+(0.3+Math.sin(st*0.07+t)*0.2)+")";ctx.beginPath();ctx.arc(mx,my-6,2.5,0,Math.PI*2);ctx.fill();}
  // 能量管线 - 沿装甲流动
  ctx.shadowColor="#fa0";ctx.shadowBlur=8;
  ctx.strokeStyle="rgba(255,200,50,"+(0.15+Math.sin(st*0.05)*0.1)+")";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(-22,-5);ctx.lineTo(-15,5);ctx.lineTo(-8,0);ctx.lineTo(0,5);ctx.lineTo(8,0);ctx.lineTo(15,5);ctx.lineTo(22,-5);ctx.stroke();
  // 腿部喷射火焰
  ctx.shadowColor="#f80";ctx.shadowBlur=15;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    var ff=6+Math.random()*8;
    ctx.fillStyle="rgba(255,150,50,"+(0.3+Math.random()*0.3)+")";
    ctx.beginPath();ctx.moveTo(side*7+2,52);ctx.lineTo(side*9,52+ff);ctx.lineTo(side*11+2,52);ctx.closePath();ctx.fill();
    ctx.fillStyle="rgba(255,255,100,"+(0.2+Math.random()*0.2)+")";
    ctx.beginPath();ctx.moveTo(side*8,52);ctx.lineTo(side*9,52+ff*0.6);ctx.lineTo(side*10,52);ctx.closePath();ctx.fill();}
}
// ============================================================
// Form 7: 水晶蜂后 (Crystal Queen) - 晶簇女王
// 形状：对称水晶结构 + 蜂翼 + 悬浮晶石
// 颜色：粉/紫/白渐变
// 特征：六角形护盾、水晶翅膀、浮游晶簇、王冠、毒刺
// ============================================================
if(form==7){
  ctx.shadowColor="#f0f";ctx.shadowBlur=45;
  // 背景虹光晕
  var hg7=ctx.createRadialGradient(0,0,5,0,0,65);
  hg7.addColorStop(0,"rgba(255,100,255,0.1)");hg7.addColorStop(0.4,"rgba(200,50,200,0.05)");hg7.addColorStop(1,"rgba(100,0,100,0)");
  ctx.fillStyle=hg7;ctx.beginPath();ctx.arc(0,0,65,0,Math.PI*2);ctx.fill();
  // 蜂翼 - 四片水晶光翼
  ctx.shadowColor="#f0f";ctx.shadowBlur=40;
  for(var t=0;t<4;t++){
    var side=t<2?-1:1;var idx=t%2;
    var baseX=side*(14+idx*6);
    var baseY=-idx*6;
    var flap=Math.sin(st*0.06+t*1.5)*10;
    var wingSpan=35+idx*15+Math.sin(st*0.04+t)*5;
    var wingAngle=0.3+idx*0.4+Math.sin(st*0.05+t)*0.1;
    // 翅膀 - 半透明晶体薄膜
    ctx.fillStyle="rgba(200,100,255,"+(0.08+idx*0.04+Math.sin(st*0.03+t)*0.04)+")";
    ctx.beginPath();
    ctx.moveTo(baseX,baseY-2);
    ctx.lineTo(baseX+side*(wingSpan+flap),baseY-25-idx*10-Math.sin(st*0.05+t)*5);
    ctx.lineTo(baseX+side*(wingSpan*0.6+flap*0.5),baseY+8-idx*4);
    ctx.closePath();ctx.fill();
    // 下翅
    ctx.fillStyle="rgba(180,80,255,"+(0.06+idx*0.03+Math.sin(st*0.04+t+1)*0.03)+")";
    ctx.beginPath();
    ctx.moveTo(baseX,baseY+2);
    ctx.lineTo(baseX+side*(wingSpan*0.8+flap*0.4),baseY+20+idx*6+Math.sin(st*0.06+t)*4);
    ctx.lineTo(baseX+side*(wingSpan*0.4+flap*0.2),baseY+12+idx*3);
    ctx.closePath();ctx.fill();
    // 翅脉纹路
    ctx.shadowBlur=10;
    ctx.strokeStyle="rgba(255,150,255,"+(0.08+Math.sin(st*0.05+t)*0.05)+")";ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(baseX,baseY-1);
    ctx.lineTo(baseX+side*(wingSpan*0.6+flap*0.3),baseY-12-idx*5);ctx.stroke();
    ctx.beginPath();ctx.moveTo(baseX,baseY+1);
    ctx.lineTo(baseX+side*(wingSpan*0.5+flap*0.2),baseY+12+idx*4);ctx.stroke();
    // 翅尖光点
    ctx.shadowColor="#f0f";ctx.shadowBlur=20;
    ctx.fillStyle="rgba(255,200,255,"+(0.4+Math.sin(st*0.07+t)*0.2)+")";
    var tipX=baseX+side*(wingSpan+flap);
    var tipY=baseY-25-idx*10-Math.sin(st*0.05+t)*5;
    ctx.beginPath();ctx.arc(tipX,tipY,2.5+Math.sin(st*0.08+t)*0.5,0,Math.PI*2);ctx.fill();
  }
  // 浮游晶簇 - 环绕旋转的水晶碎片
  ctx.shadowColor="#f0f";ctx.shadowBlur=25;
  for(var t=0;t<6;t++){
    var ca=t*1.047+st*0.018;
    var cd=44+Math.sin(st*0.04+t)*6;
    var cx=Math.cos(ca)*cd;
    var cy=Math.sin(ca)*cd;
    // 菱形晶石
    var cSize=5+Math.sin(st*0.06+t)*2;
    ctx.fillStyle="rgba(255,100,255,"+(0.3+Math.sin(st*0.05+t)*0.15)+")";
    ctx.beginPath();
    ctx.moveTo(cx,cy-cSize);ctx.lineTo(cx+cSize*0.7,cy);ctx.lineTo(cx,cy+cSize);ctx.lineTo(cx-cSize*0.7,cy);
    ctx.closePath();ctx.fill();
    // 晶石核心亮点
    ctx.fillStyle="rgba(255,200,255,"+(0.5+Math.sin(st*0.07+t)*0.2)+")";
    ctx.beginPath();ctx.arc(cx-cSize*0.15,cy-cSize*0.15,cSize*0.25,0,Math.PI*2);ctx.fill();
  }
  // 六角形能量护盾 - 旋转蜂巢
  ctx.shadowColor="#f0f";ctx.shadowBlur=20;
  ctx.strokeStyle="rgba(200,100,255,"+(0.1+Math.sin(st*0.03)*0.08)+")";ctx.lineWidth=1.5;
  for(var h=0;h<6;h++){
    var ha=h*1.047+st*0.015;
    var hx=Math.cos(ha)*36;
    var hy=Math.sin(ha)*36;
    ctx.beginPath();
    for(var hi=0;hi<6;hi++){var hiA=hi*1.047+st*0.02;var hiR=7+Math.sin(st*0.05+h)*1;var px=hx+Math.cos(hiA)*hiR;var py=hy+Math.sin(hiA)*hiR;if(hi==0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
    ctx.closePath();ctx.stroke();
  }
  // 蜂后身体 - 水晶流线型
  ctx.shadowColor="#f0f";ctx.shadowBlur=45;
  var gb7=ctx.createRadialGradient(0,0,3,0,0,24);
  gb7.addColorStop(0,"#fff");gb7.addColorStop(0.2,"#fcf");gb7.addColorStop(0.5,"#d0f");gb7.addColorStop(0.8,"#808");gb7.addColorStop(1,"#406");
  ctx.fillStyle=gb7;
  ctx.beginPath();
  ctx.moveTo(0,-22);ctx.lineTo(-8,-18);ctx.lineTo(-20,-4);ctx.lineTo(-22,8);ctx.lineTo(-18,16);ctx.lineTo(0,22);ctx.lineTo(18,16);ctx.lineTo(22,8);ctx.lineTo(20,-4);ctx.lineTo(8,-18);
  ctx.closePath();ctx.fill();
  // 身体水晶纹路
  ctx.shadowBlur=0;
  ctx.strokeStyle="rgba(255,200,255,0.15)";ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(-6,-14);ctx.lineTo(-14,0);ctx.lineTo(-10,10);ctx.stroke();
  ctx.beginPath();ctx.moveTo(6,-14);ctx.lineTo(14,0);ctx.lineTo(10,10);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-3,-6);ctx.lineTo(3,-6);ctx.stroke();
  // 王冠 - 水晶尖顶
  ctx.shadowColor="#ff0";ctx.shadowBlur=30;
  ctx.fillStyle="rgba(255,200,100,0.7)";
  ctx.beginPath();ctx.moveTo(0,-32);ctx.lineTo(-3,-28);ctx.lineTo(-10,-26);ctx.lineTo(-7,-24);ctx.lineTo(0,-26);ctx.lineTo(7,-24);ctx.lineTo(10,-26);ctx.lineTo(3,-28);
  ctx.closePath();ctx.fill();
  // 王冠宝石
  ctx.shadowColor="#fff";ctx.shadowBlur=25;
  var cg=ctx.createRadialGradient(-1,-1,1,0,0,5);
  cg.addColorStop(0,"#fff");cg.addColorStop(0.3,"#ff0");cg.addColorStop(0.7,"#f80");cg.addColorStop(1,"#a00");
  ctx.fillStyle=cg;
  ctx.beginPath();ctx.arc(0,-30,4+Math.sin(st*0.07)*1,0,Math.PI*2);ctx.fill();
  // 蜂后腹部 - 带毒刺
  ctx.shadowColor="#f0f";ctx.shadowBlur=30;
  var gb7b=ctx.createLinearGradient(0,22,0,36);
  gb7b.addColorStop(0,"#c0f");gb7b.addColorStop(0.5,"#a0a");gb7b.addColorStop(1,"#608");
  ctx.fillStyle=gb7b;
  ctx.beginPath();ctx.moveTo(-6,22);ctx.lineTo(-10,28);ctx.lineTo(-8,34);ctx.lineTo(0,38);ctx.lineTo(8,34);ctx.lineTo(10,28);ctx.lineTo(6,22);
  ctx.closePath();ctx.fill();
  // 毒刺
  ctx.shadowColor="#f0f";ctx.shadowBlur=25;
  ctx.fillStyle="rgba(255,50,200,"+(0.7+Math.sin(st*0.08)*0.2)+")";
  ctx.beginPath();ctx.moveTo(0,38);ctx.lineTo(-4,42);ctx.lineTo(0,48+Math.sin(st*0.05)*2);ctx.lineTo(4,42);
  ctx.closePath();ctx.fill();
  // 毒刺尖端毒液
  ctx.shadowColor="#ff0";ctx.shadowBlur=20;
  ctx.fillStyle="rgba(255,200,0,"+(0.4+Math.sin(st*0.09)*0.3)+")";
  ctx.beginPath();ctx.arc(0,48+Math.sin(st*0.05)*2,2.5+Math.sin(st*0.1)*1,0,Math.PI*2);ctx.fill();
  // 腹部环状纹理 - 发光
  ctx.shadowBlur=10;
  ctx.strokeStyle="rgba(255,100,255,"+(0.2+Math.sin(st*0.05)*0.1)+")";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.ellipse(0,26,7,3,0,0,Math.PI*2);ctx.stroke();
  ctx.beginPath();ctx.ellipse(0,32,6,2.5,0,0,Math.PI*2);ctx.stroke();
  // 蜂后复眼 - 多面晶体眼
  ctx.shadowColor="#ff0";ctx.shadowBlur=20;
  for(var t=0;t<2;t++){var side=t==0?-1:1;
    ctx.fillStyle="rgba(255,200,50,"+(0.5+Math.sin(st*0.07+t)*0.3)+")";
    ctx.beginPath();ctx.arc(side*10,-14,5+Math.sin(st*0.06+t)*1,0,Math.PI*2);ctx.fill();
    // 瞳孔
    ctx.fillStyle="#400";ctx.beginPath();ctx.arc(side*10,-14,2.5,0,Math.PI*2);ctx.fill();
    // 高光
    ctx.fillStyle="rgba(255,255,255,0.4)";ctx.beginPath();ctx.arc(side*8,-16,1.5,0,Math.PI*2);ctx.fill();
  }
  // 触角 - 水晶天线
  ctx.shadowColor="#f0f";ctx.shadowBlur=15;
  ctx.strokeStyle="rgba(255,100,255,0.4)";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(-4,-26);ctx.quadraticCurveTo(-15,-40+Math.sin(st*0.06)*5,-12,-50+Math.sin(st*0.07)*3);ctx.stroke();
  ctx.beginPath();ctx.moveTo(4,-26);ctx.quadraticCurveTo(15,-40+Math.sin(st*0.06+1)*5,12,-50+Math.sin(st*0.07+1)*3);ctx.stroke();
  // 触角尖端光球
  ctx.shadowColor="#ff0";ctx.shadowBlur=20;
  ctx.fillStyle="rgba(255,200,100,"+(0.5+Math.sin(st*0.08)*0.2)+")";
  ctx.beginPath();ctx.arc(-12,-50+Math.sin(st*0.07)*3,3,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(12,-50+Math.sin(st*0.07+1)*3,3,0,Math.PI*2);ctx.fill();
  // 漂流感光粉 - 环绕粒子
  ctx.shadowColor="#f0f";ctx.shadowBlur=10;
  for(var p=0;p<12;p++){
    var pa=Math.random()*6.28;
    var pd=24+Math.random()*28;
    ctx.fillStyle="rgba(255,150,255,"+(0.06+Math.random()*0.1)+")";
    ctx.beginPath();ctx.arc(Math.cos(pa)*pd,Math.sin(pa)*pd,1+Math.random()*1.5,0,Math.PI*2);ctx.fill();
  }
}
}
