let score=0
const cloud=document.querySelector('.cload')
const ob=document.querySelector('.ob')
const btn=document.querySelector('.start')
const sco=document.querySelector('#score')
const chara=document.querySelector('.chara')
const mount=document.querySelector('.mount')
const con=document.querySelector('.container')
const mask=document.querySelector('.mask')
let s=0
document.body.style.backgroundColor='red'
btn.addEventListener('click',()=>{
function jump(){
    if(chara.classList!='animate')
    {
    chara.classList.add('animate')
    setTimeout(()=>{
        chara.classList.remove('animate')
    },500)
}
}
const check=setInterval(()=>{
    const charb=parseInt(window.getComputedStyle(chara).getPropertyValue('bottom'))
    const obl=parseInt(window.getComputedStyle(ob).getPropertyValue('left'))
    if(obl<90&&obl>0&&charb<=5)
    {
        chara.style.backgroundImage="url('ostp.png')"
        // ob.style.animation='none'
        ob.style.display='none'
        mount.style.animation='none'
        cloud.style.animation='none'
        alert(`You Lost \nYour Score Is ${s}.`)
    }
    else{
       s=parseInt(score++/5)
    }
    if(s>=1000)
    {
        ob.style.animation='ob 1.8s infinite linear'
    }
    sco.textContent=`Score : ${s}`
},10)


document.addEventListener('keydown',(e)=>{jump()})

})

