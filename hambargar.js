let view = true;

function HamburgarScript(){
  
  if(view===true){
    HamBargarMenu.style.display='inline';
    header.style.height='400px'
    


    view=false;
  }
  else{
    if(view===false){
      HamBargarMenu.style.display='none';
      header.style.height='100px'
      view=true;
    }
    
    
  }
    
}