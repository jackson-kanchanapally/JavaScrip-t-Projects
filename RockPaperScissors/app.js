const comp=document.getElementById('computer-choice')
const userc=document.getElementById('user-choice')
const resd=document.getElementById('result')
const posc=document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let gameover=new Audio()

posc.forEach(p=>p.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userc.textContent=userChoice
    ran()
   getResult()
}))
function ran()
{
    const ranNum=Math.floor(Math.random()*3)+1
    if(ranNum===1)
    {
        computerChoice='rock'
    }
    if(ranNum===2)
    {
        computerChoice='paper'
    }
    if(ranNum===3)
    {
        computerChoice='scissors'
    }
    comp.textContent=computerChoice
}

function getResult()
{
    if(computerChoice===userChoice)
    {
        result='Its A Draw'
        resd.style.color=''
        document.body.style.backgroundColor=''
    }
    if(computerChoice==='rock' && userChoice==='paper')
    {
        result='You Win'
    }
    if(computerChoice==='rock'&&userChoice==='scissors')
    {
        result='You Lost'
    }
    if(computerChoice==='paper'&&userChoice==='rock')
    {
        result='You Lost'
    }
    if(computerChoice==='paper'&&userChoice==='scissors')
    {
        result='You Win'
    }
    if(computerChoice==='scissors'&&userChoice==='paper')
    {
        result='You Lost'
    }
    if(computerChoice==='scissors'&&userChoice==='rock')
    {
        result='You Win'
    }
    resd.textContent=result
    if(result==='You Lost')
    {
        resd.style.color='red'
        document.body.style.backgroundColor='red'
    }
    if(result==='You Win'){
        resd.style.color='green'
        document.body.style.backgroundColor='green'
    }
}