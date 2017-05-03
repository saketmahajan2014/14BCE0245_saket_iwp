var hits = 0;

var missed = 0;
 
function V2()
 {
    
alert("Welcome !!!!!!!!!!");
 }

function Shoot()
{
   
var bullet = document.getElementById("bullet");


bullet.offsetTop=330;
   
var target = document.getElementById("target");
   
bullet.style.visibility="inherit";
var bPos = 331;
  var t = setInterval(MoveBullet,5);
   
   
function MoveBullet()
   
{ 
     
if(bPos < 30)
     {
      
clearInterval(t); 
bullet.style.visibility="hidden";//I change visibility instead of display(as in the previous version) because if I don't display the bullet it won't move when click on left or right
      
missed++;}
     
else
     {//compare X and Y bullet position with the target position with some margin for each side
     
var sameX = bullet.offsetTop>=(target.offsetTop-30) && (bullet.offsetTop <=target.offsetTop+30);
     
 var sameY = (bullet.offsetLeft>=(target.offsetLeft-30) && (bullet.offsetLeft <=target.offsetLeft+30));
       
if(!(sameX && sameY))
       {//if it didn't hit the target we continue moving the bullet
       bPos -= 3;
        
bullet.style.top = bPos +"px";
       
 var yb = bPos + "px";      
       }
      
     //else if traps those cases that the X is the same and isolates it to only when the bullet is BELOW the target,      
        
else if(bPos>sameY+30)
      
 {
        
bPos -= 3;
        
bullet.style.top = bPos +"px";
        
var yb = bPos + "px";   
       
}
      
else
       
{ 
clearInterval(t);
//if it did hit the target we stop the movement, hide de bullet and show the explotion
   
bullet.style.visibility="hidden";
         
hits++;
        
 document.getElementById("explode").style.visibility="inherit";
        
//make it visible only for some time, then hide
         
setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       
}   
      
}
   
document.getElementById("score").innerHTML="Score: "+(hits*10); //increment or mantain the score number 
   
document.getElementById("lifeGreen").style.width=(100-missed*10)+"px"; //decrement the life bar acording to the amount of misses
   
check_hits();   
if ((100-missed*10)== 0)
   
{alert( " ): Game over :( \nYour final score is: "+(hits*10)+"\nIf you enjoyed please thumbs up (^-^)/" );
   
Reset();
   
}
   
}
  
 
};

function MoveLeft()

{ var me=document.getElementById("me");

var bullet= document.getElementById("bullet");
 
var top=(me.offsetLeft)-40;//set movement limit at 40pixels
  
var t= setInterval(MoveL,5);
  
function MoveL()
  
{ 
if(me.offsetLeft>top&&me.offsetLeft>40) 
{me.style.left=(me.offsetLeft-2)+"px";//MoveL is called every 10 miliseconds to move 2px to the left every time so it moves smoothly 
  
bullet.style.left=(bullet.offsetLeft-2)+"px"; 
}
//after it moved that amount of pixels we stop calling the function
  
else 
{
clearInterval(t);
}
}
 function check_hits()
{
	if(count==0)
	{
		if( hits>3){
		count=count+1;
		var w=alert("Congratulations You have 4 hits Speed will be increased.");
		target.style.animationDuration= "3s" ;
		document.getElementById("explode").style.animationDuration= "3s" ;
		}
	}
} 
};
function time(){
 var worker = new Worker('worker.js');
   worker.onmessage = function (event) {
     document.getElementById('result').textContent ="Time:"+ event.data;
   };
   missed=0;
   hits=0;
   Shoot();
   }
function MoveRight()
{ 
var me=document.getElementById("me");
var bullet= document.getElementById("bullet");
 
var top=(me.offsetLeft)+40;
  var t= setInterval(MoveR,10);
  
function MoveR()
  
{ 
if(me.offsetLeft<top&&me.offsetLeft<180) 
{
me.style.left=(me.offsetLeft+2)+"px"; bullet.style.left=(bullet.offsetLeft+2)+"px";  
}
  else
  {clearInterval(t);
}
}

}

function Custom()

{

var customize = document.getElementById("custom");
//if the text is Customize means that the table is not displayed

if(customize.innerHTML=="Customize")

{ 
document.getElementById("options").style.display="inherit";

target.style.visibility="hidden";

customize.innerHTML="Save";}
else
{Change(); 
document.getElementById("options").style.display="none";

target.style.visibility="inherit";

customize.innerHTML="Customize";
}

}


function Change()
{
//radio buttons

var playerA= document.getElementById("PA");

var playerB= document.getElementById("PB");

var playerC= document.getElementById("PC");

var targetA= document.getElementById("TA");

var targetB= document.getElementById("TB");

var targetC= document.getElementById("TC");

//images
var 
images=document.getElementsByTagName("img");

//elements to customize

var target = document.getElementById("target");

var player = document.getElementById("me");

document.getElementById("options").style.display="none";

//set selected player image 

if(playerA.checked)

{
player.src=images[6].src;
}
else if(playerB.checked)

{
player.src=images[7].src;
}

else if(playerC.checked)

{
player.src=images[8].src;
}


//set target selected image

if(targetA.checked)

{
target.src=images[9].src;
}

else if(targetB.checked)

{
target.src=images[10].src;
}

else if(targetC.checked)

{
target.src=images[11].src;
}


//go back to the game 
 
document.getElementById("options").style.display="none";

target.style.visibility="inherit";
}


//Reset the initial values

function Reset()

{    
document.getElementById("score").innerHTML="Score: 0";

document.getElementById("lifeGreen").style.width="100px";

hits =0;

missed=0;
}