let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;
        console.log("btn is ",buttonText)
        if(buttonText=='x')
        {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else if(buttonText=='del')
        {
            screen.value=screen.value.slice(0,-1);
            screenValue=screen.value
        }
        else if(buttonText=='CE')
        {
            screen.value='';
            screenValue='';
        }
        else if(buttonText=='√')
        {
            screen.value=Math.sqrt(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })
}