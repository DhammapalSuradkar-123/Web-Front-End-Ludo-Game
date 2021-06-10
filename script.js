// Ludo Home Page
var a = document.getElementsByClassName("a");
var i,j;

for(i = 0; i < a.length; i++){
  a[i].addEventListener("click", function(){
    for (j = 0; j < a.length; j++) {
      a[j].classList.remove('active');
    }
    this.classList.add("active");
  });
}
