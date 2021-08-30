// nav bar 
const hamburger = document.getElementById('menu');
const navList = document.getElementById('navList'); 
hamburger.addEventListener('click', e => {
  if(navList.style.display === "none"){
     navList.style.display = "block";
  } else {
    navList.style.display = 'none';
  }
});
