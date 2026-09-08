let pKP = document.querySelector('#pKP');
let pSGE = document.querySelector('#pSGE');
let pLT = document.querySelector('#pLT');
let pQ = document.querySelector('#pQ');

let verKP = document.querySelector('#verKP');
let verSGE = document.querySelector('#verSGE');
let verLT = document.querySelector('#verLT');
let verQ = document.querySelector('#verQ');

verKP.addEventListener('mouseover', ()=>{
    document.querySelector(".hidenKP").style.display = "block";
});
pKP.addEventListener('mouseout', ()=>{
    document.querySelector(".hidenKP").style.display = "none";
});

verSGE.addEventListener('mouseover', ()=>{
    document.querySelector(".hidenSGE").style.display = "block";
});
pSGE.addEventListener('mouseout', ()=>{
    document.querySelector(".hidenSGE").style.display = "none";
});

verLT.addEventListener('mouseover', ()=>{
    document.querySelector(".hidenLT").style.display = "block";
});
pLT.addEventListener('mouseout', ()=>{
    document.querySelector(".hidenLT").style.display = "none";
});

verQ.addEventListener('mouseover', ()=>{
    document.querySelector(".hidenQ").style.display = "block";
});
pQ.addEventListener('mouseout', ()=>{
    document.querySelector(".hidenQ").style.display = "none";
});