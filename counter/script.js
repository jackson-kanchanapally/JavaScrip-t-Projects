const btns=document.querySelectorAll('.btn')
const v=document.querySelector('.value')
let count=0
console.log(btns)
btns.forEach(function (bt)
{
    
    bt.addEventListener('click',(e)=>{
        const s=e.currentTarget.classList
        console.log(e.currentTarget.classList)
        if(s.contains('decrease'))
        {
            count--
        }
        else if(s.contains('increase'))
        {
            count++
        }
        else{
            count=0
        }
        if(count>0)
        {
            v.style.color='green'
        }
        else if(count<0)
        {
            v.style.color='red'
        }
        else{
            v.style.color='white'
        }
        v.textContent=count
    })
})