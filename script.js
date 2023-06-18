   document.getElementById("myButton").onclick = function login() {
        location.href = "/login.html";
    }
    function myfeature1() {
        var x = document.getElementById("featureId1");
        // const btn = document.getElementById('btn1');
        if (x.style.display === "block") {
            // btn.style.visibility = 'visible';
          x.style.display = "none";
        } else {
            // btn.style.visibility = 'hidden';
          x.style.display = "block";
        }
    }
      function myfeature2() {
        var x = document.getElementById("featureId2");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function myfeature3() {
        var x = document.getElementById("featureId3");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function booking() {
        let text = document.getElementById("booking").innerHTML;
        document.getElementById("booking").innerHTML =
        text.replace("Click On me!","Please wait few sec to be automatically redirected to booking page");
      }

      let menuTog = document.querySelector('.menu-toggle');
      let nav = document.querySelector(".nav");
      let navLeft = document.querySelector(".nav-left");
      let navRight= document.querySelector(".nav-right");
      let navLinks = Array.from(document.querySelector(".nav-link"));
     
      menuTog.addEventListener('click' ,()=>{
       menuTog.classList.toggle('active');
       navRight.classList.toggle('active');
      navLeft.classList.toggle('active');
       nav.classList.toggle('active');

       if(menuTog.classList.contains('active')){
           setTimeout(()=>{navRight.classList.add('active');

           },100)
for(let i=0;i<navLinks.length; i++){
    navLinks[i].classList.remove('active');
    setTimeout(()=>{
        navLinks[i].classList.add('active');
    }, i=100)
}


           }
       
      })