document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const id=a.getAttribute('href');
    const el=document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
    if(window.innerWidth<901) document.getElementById('navLinks').style.display='none';
  })
})

function toggleMenu(){
  const n=document.getElementById('navLinks');
  n.style.display = (n.style.display==='flex') ? 'none':'flex';
  n.style.flexDirection='column';
  n.style.gap='12px';
}
