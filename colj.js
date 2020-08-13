var y=document.querySelectorAll(".square");
var ar=ranc(6);
var z=colpic();
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var track=1;
var x=document.querySelector("#pick");
x.textContent=z;
   easy.addEventListener("click",function()
{
easy.classList.add("selected");
hard.classList.remove("selected");
		 ar=ranc(3);
		 z=colpic();
		for (var i = 0; i <y.length; i++) {
		y[i].style.background=ar[i];
		}
		for(var i=3;i<6;i++)
		{
			y[i].style.background="black";
			y[i].classList.remove("square");
		}
		x.textContent=z;
		e.style.background="steelblue";
		g.textContent="New Colors"
		track=0;
		d.textContent="";

});
  hard.addEventListener("click",function()
{
hard.classList.add("selected");
easy.classList.remove("selected");
		 ar=ranc(6);
		 z=colpic();
		for (var i = 0; i <y.length; i++) {
			y[i].classList.add("square");
		y[i].style.background=ar[i];

		}
		track=1;
		x.textContent=z;
		e.style.background="steelblue";
		g.textContent="New Colors"
		d.textContent="";

});
for (var i= 0;i<y.length;i++) {
y[i].style.background=ar[i];
}
var d=document.querySelector("#co");
var e=document.querySelector("h1");
for(var i=0;i<y.length;i++)
{
	y[i].addEventListener("click",function()
	{
		var t=this.style.background;
		
		if(t===z)
			{
				d.textContent="Correct";
				for (var j= 0;j<y.length;j++) 
             y[j].style.background=z;
                 e.style.background=z;
                 g.textContent="Play Again";
			}
		else
		{
			d.textContent="Wrong";
			this.style.background="black";
		}
	});
}
var g=document.querySelector("button");
g.addEventListener("click",function()
	{
		if(track)
		{
		 ar=ranc(6);
		 z=colpic();
		for (var i = 0; i <y.length; i++) {
		y[i].style.background=ar[i];
		}
		x.textContent=z;
		e.style.background="steelblue";
		g.textContent="New Colors";
		d.textContent="";
	}
	else
	{
		 ar=ranc(3);
		 z=colpic();
		for (var i = 0; i <y.length; i++) {
		y[i].style.background=ar[i];
		}
		x.textContent=z;
		e.style.background="steelblue";
		g.textContent="New Colors";
		d.textContent="";
	}
	});
function colpic()
{
	var p=Math.floor(Math.random()*ar.length);
	return ar[p];
}
function ranc(num)
{
	var arr=[];
for(var i=0;i<num;i++)
{
	arr.push(zz());
}
return arr;
}
function zz()
{
	var r=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var y=Math.floor(Math.random()*256);
	return "rgb(" +r+", "+b+", "+y+ ")";
}