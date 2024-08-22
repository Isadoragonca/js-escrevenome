function setup() {
    createCanvas(555, 555);
    background("white");
  }
  
  function draw() {
    
    stroke("red");
    fill("purple");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {   
      rect(mouseX, mouseY, 20, 35);
    }  
  }
  