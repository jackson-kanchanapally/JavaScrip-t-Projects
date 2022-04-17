const review=[
    {id:1,
    name:'Vitalik',
    job:'Block Chain developer',
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VitalikButerinProfile.jpg/375px-VitalikButerinProfile.jpg"},
    {id:2,
    name:'Jake',
    job:'Web Developer',
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/10.14.12DuncanRouleauByLuigiNovi.jpg/330px-10.14.12DuncanRouleauByLuigiNovi.jpg"},
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    

]
const img=document.getElementById('person-img')
const author=document.getElementById('author')
const job=document.getElementById('job')
const info=document.getElementById('info')

const pb=document.querySelector('.prev-btn')
const nb=document.querySelector('.next-btn')
const rb=document.querySelector('.random-btn')
let currentItem=0
window.addEventListener('DOMContentLoaded',()=>{
    Show(currentItem)
})
function Show(p){
    const item=review[p]
    img.src=item.img
    author.textContent=item.name
    job.textContent=item.job
}

nb.addEventListener('click',()=>{
    currentItem++
    
    if(currentItem > review.length-1)
    {
        currentItem=0
    }
    Show(currentItem)
})
pb.addEventListener('click',()=>{
    currentItem--
    if(currentItem<0)
    {
        currentItem=review.length-1
    }
    Show(currentItem)

})
rb.addEventListener('click',()=>{
    currentItem=Math.floor(Math.random()*review.length)
    Show(currentItem)
})