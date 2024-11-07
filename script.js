let open_btn=document.querySelector(".open-btn");

let close_btn=document.querySelector(".close-icon");



let navbar=document.querySelector("header nav");

open_btn.addEventListener("click",function()
{
      navbar.style.right="0";
});

close_btn.addEventListener("click",function()
{
    navbar.style.right="-100%";

});

navbar.addEventListener("click",function()
{
    navbar.style.right="-100%";

});

// navabr part end



// animaton start

//  show-animate class name

let section=document.querySelectorAll("section");

window.onscroll = () =>{
    section.forEach(sec => {
        
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;

        if(top >= offset && top < offset + height){

            sec.classList.add("show-animate");

        }else{

            sec.classList.remove("show-animate");
        }


    })


}








// animaton end













