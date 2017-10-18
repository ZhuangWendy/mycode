suspendcode="<DIV id=lovexin1 style='background-color: white;Z-INDEX: 10; LEFT: 6px; POSITION: fixed; TOP: 15%; width: 150; height: 360px;'><img src='img/close.gif' onClick='javascript:window.hide()' width='150' height='28' border='0' vspace='3' alt='�رն������'><a href='http://www.makewing.com/lanren/' target='_blank'><img src='img/goodleft.jpg' width='150' height='328' border='0'></a></DIV>"
document.write(suspendcode);

suspendcode="<DIV id=lovexin2 style='background-color:#E0E0E0;Z-INDEX: 10; LEFT: 160px; POSITION: fixed; TOP: 15%; width: 150; height: 360px;'><img src='img/close.gif' onClick='javascript:window.hide()' width='150' height='28' border='0' vspace='3' alt='�رն������'><a href='http://www.makewing.com/lanren/' target='_blank'><img src='img/goodright.jpg' width='150' height='328' border='0'></a></DIV>"
document.write(suspendcode);

//flash��ʽ���÷���
//<EMBED src='flash.swf' quality=high  WIDTH=100 HEIGHT=300 TYPE='application/x-shockwave-flash' id=ad wmode=opaque></EMBED>

lastScrollY=0;
function heartBeat(){
diffY=document.body.scrollTop;
percent=.3*(diffY-lastScrollY);
if(percent>0)
  percent=Math.ceil(percent);
else 
  percent=Math.floor(percent);
//���������仯
document.all.lovexin1.style.pixelTop+=percent;
document.all.lovexin2.style.pixelTop+=percent;
lastScrollY=lastScrollY+percent;
//�ں������仯
lovexin1.style.left=document.body.scrollLeft+6;
lovexin2.style.left=document.body.scrollLeft+document.body.clientWidth-160;

}
function hide()  
{   
lovexin1.style.visibility="hidden"; 
lovexin2.style.visibility="hidden";
}
window.setInterval("heartBeat()",1);
