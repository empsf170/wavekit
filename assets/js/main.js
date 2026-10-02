
document.addEventListener("DOMContentLoaded",()=>{
 const n=document.querySelector(".navbar"),t=document.querySelector(".top");
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
 const s=()=>{n?.classList.toggle("scrolled",scrollY>25);t?.classList.toggle("show",scrollY>450)};
 addEventListener("scroll",s,{passive:true});s();
 t?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
 document.querySelectorAll(".contact-form").forEach(f=>f.addEventListener("submit",e=>{
   e.preventDefault();const m=f.querySelector(".form-msg");m.textContent="Thanks — your message has been received.";m.classList.remove("d-none")
 }));
 const play=document.querySelector(".audio-dock .play");
 play?.addEventListener("click",()=>{play.textContent=play.textContent==="▶"?"Ⅱ":"▶";});
});
