const intr = document.querySelector('.intrD');
const inputT = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
const toDo = document.querySelector('.toDo');


inputT.addEventListener('click', ()=>{
intr.classList.add('colNew');

document.body.style.backgroundImage = "url('sand.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
})

btn.addEventListener('click',()=>{
    const list = document.createElement('li');
    list.classList.add('dotted');
    list.innerText = inputT.value;
    inputT.value = '';
    toDo.appendChild(list);  

list.addEventListener('click', ()=>{
    list.classList.add('clicked');
})

list.addEventListener('dblclick', ()=>{ 
    toDo.removeChild(list);
})
})

