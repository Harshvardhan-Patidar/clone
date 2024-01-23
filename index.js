var slideindex = 0;
showslide();

function showslide(){
    var i;
    var slide = document.getElementsByClassName("myslide");
    for(i=0; i<slide.length;i++){
        slide[i].style.display = "none";
    }
    slideindex++;
    if(slideindex>slide.length){
        slideindex = 1;
    }
    slide[slideindex-1].style.display="block";
    setTimeout(showslide,3000);
}
