const h2 = document.querySelector("h2");

function handleWindowResize(){
    const width = window.innerWidth;
    //h2.style.color ="white";

    let blue = "bg-blue";
    let purple ="bg-purple";
    let yellow = "bg-yellow";
  
    /*
    if (width < 600){
        document.body.style.backgroundColor = "blue";
    }else if(width >= 600 && width <900) {
        document.body.style.backgroundColor = "purple";
    }else {
        document.body.style.backgroundColor ="yellow";
    }
};*/
   
        //if (width < 700){
            document.body.classList.toggle(blue, width<700);
       // } else if(width >= 700 && width <1000){

            document.body.classList.toggle(purple, width >=700 && width <1000) 
            //document.body.classList.add(purple); 
        //}else{
            document.body.classList.toggle(yellow, width >=1000 ); 
            //document.body.classList.add(yellow);         
        //}    
    
   
};

window.addEventListener("resize", handleWindowResize);

