var numSquare= 6
var square=document.querySelectorAll(".square")
var displayColor = document.querySelector(".displayColor")
var message = document.querySelector("#message")
var h1 = document.querySelector(".h1")
var reset = document.querySelector("#reset")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
var modeBtn =  document.querySelectorAll(".mode")

var colors= generateRandomColors(6)

 /*  [
    "rgb(250, 0, 0)",
    "rgb(250, 250, 0)",
    "rgb(250, 0, 250)",
    "rgb(0, 250, 0)",
    "rgb(150, 250, 100)",
    "rgb(250, 200, 250)",
]  */
var pickedColor=colors[pickedRandomColor()]

displayColor.textContent=pickedColor
//===========<<<<<<<<<<<<<mode btn for easy and hard btn>>>>>>>>==========

for(var i=0; i<modeBtn.length; i++){
  modeBtn[i].addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    this.classList.add("selected");
    h1.style.backgroundColor="#4682b4"

    //checking the button which one is clicked
    
    if(this.textContent==="easy"){
      numSquare=3;
    }else{
      numSquare=6;
    }

    colors=generateRandomColors(numSquare);
    pickedColor=colors[pickedRandomColor()]
    displayColor.textContent= pickedColor;

    for(var i=0; i<square.length; i++){
      if(colors[i]){
        square[i].style.backgroundColor=colors[i]
        square[i].style.display="block"
      }else{
        square[i].style.display="none"
        
      }
    }
  })
}


// //=======================================easy btn

// easyBtn.addEventListener("click",function(){
//   numSquare=3
//   this.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   h1.style.backgroundColor="#4682b4"

//   colors=generateRandomColors(numSquare)
//   pickedColor=colors[pickedRandomColor()]
//   displayColor.textContent=pickedColor

//    for(var i=0; i<square.length; i++){
//      if(colors[i]){
//       square[i].style.backgroundColor=colors[i]
//      }else{
//      square[i].style.display="none";
//      }
//    }
   
// })


// ========================================hard btn

// hardBtn.addEventListener("click",function(){
//   this.classList.add("selected");
//  easyBtn.classList.remove("selected")
//   h1.style.backgroundColor="#4682b4";
//    numSquare=6
//   colors=generateRandomColors(numSquare)
//   pickedColor=colors[pickedRandomColor()]
//   displayColor.textContent=pickedColor;

//   for(var i=0; i<square.length; i++){
//     console.log(colors[i])
//     square[i].style.backgroundColor=colors[i]
//     square[i].style.display="block";
//   }
   
// })

//==========================================reset button
reset.addEventListener("click",function(){
  colors= generateRandomColors(numSquare)

  pickedColor=colors[pickedRandomColor()]

  displayColor.textContent=pickedColor
  h1.style.backgroundColor="#4682b4"
  this.textContent="New colors";
  for(var i =0 ;i <square.length; i++){
    square[i].style.backgroundColor=colors[i]
  }
}) 

for(var i=0; i<square.length; i++){
    // console.log(square[i]);
      square[i].style.backgroundColor = colors[i];
      
      square[i].addEventListener("click",function(){

        var choosenColor=this.style.backgroundColor;
        console.log(pickedColor,choosenColor)
        if(choosenColor === pickedColor){
           // alert("you are win")
           message.textContent= "currect"
           h1.style.backgroundColor=pickedColor;
           matchColor(pickedColor);
           reset.textContent="play again"
        }else{
            message.textContent= "try again"
            this.style.backgroundColor="#435858";
        }
      })
}

function matchColor(color){
  for(var i=0; i<square.length ;i++){
    square[i].style.backgroundColor = color;
  }
}
function pickedRandomColor(){
   return Math.floor(Math.random()*colors.length)
}

//------------------------------------------ generate random color
function generateRandomColors(number){
   
  //crreate random array
  var color=[]
  for(var i =0; i<number; i++){
    //generate color "rgb(250, 250, 250)"
     randomColor( )
    color.push(randomColor())
  }
  return color;
}
function randomColor(){
  var r =Math.floor(Math.random()* 256)
  var g =Math.floor(Math.random()* 256)
  var b =Math.floor(Math.random()* 256)
  return "rgb"+"("+r+", "+g+", "+b+")";
}