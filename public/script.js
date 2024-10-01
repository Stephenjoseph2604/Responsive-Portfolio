// const navlinks=document.querySelectorAll('.navlink');


// navlinks.forEach((navlink,index)=>{

//    navlink.addEventListener('click',()=>{

//    navlinks.forEach(nl=>nl.classList.remove('active'));

//    navlink.classList.add('active');

//    });
    

// });

let sections =document.querySelectorAll('section');
let navlinks2=document.querySelectorAll('header nav a');

window.onscroll=()=>{
   sections.forEach(sec =>{
      let top=window.scrollY;
      let offset=sec.offsetTop - 150;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');

      if(top >= offset && top < offset+height){
         navlinks2.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
         });
      }

   });
}
const menuIcon=document.getElementById('menu-icon');
const navbar=document.getElementById('navbar');
menuIcon.addEventListener('click',()=>{
   navbar.style.right=0;
    
});
navbar.addEventListener('click',()=>{
   navbar.style.right="-50%";
  

});