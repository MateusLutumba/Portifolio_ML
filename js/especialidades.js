//
let html = document.querySelector('#html5');
let css = document.querySelector('#css3');
let js = document.querySelector('#js');
let react = document.querySelector('#react');
let git = document.querySelector('#git');
let github = document.querySelector('#github');
let node = document.querySelector('#node');
let php = document.querySelector('#php');
let mysql = document.querySelector('#mysql');
//html
html.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaHTML = document.querySelector('#tecnologiaHTML');
    tecnologiaHTML.classList.remove("esconderHTML");
    tecnologiaHTML.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
html.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaHTML = document.querySelector('#tecnologiaHTML');
    tecnologiaHTML.classList.add("esconderHTML");
});

//CSS
css.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaCSS = document.querySelector('#tecnologiaCSS');
    tecnologiaCSS.classList.remove("esconderCSS");
    tecnologiaCSS.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
css.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaCSS = document.querySelector('#tecnologiaCSS');
    tecnologiaCSS.classList.add("esconderCSS");
});

//JavaScript
js.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaJS = document.querySelector('#tecnologiaJS');
    tecnologiaJS.classList.remove("esconderJS");
    tecnologiaJS.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
js.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaJS = document.querySelector('#tecnologiaJS');
    tecnologiaJS.classList.add("esconderJS");
});

//Git
git.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaGit = document.querySelector('#tecnologiaGit');
    tecnologiaGit.classList.remove("esconderGit");
    tecnologiaGit.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
git.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaGit = document.querySelector('#tecnologiaGit');
    tecnologiaGit.classList.add("esconderGit");
});

//Git
github.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaGitHub = document.querySelector('#tecnologiaGitHub');
    tecnologiaGitHub.classList.remove("esconderGitHub");
    tecnologiaGitHub.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
github.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaGitHub = document.querySelector('#tecnologiaGitHub');
    tecnologiaGitHub.classList.add("esconderGitHub");
});

//PHP
php.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaPHP = document.querySelector('#tecnologiaPHP');
    tecnologiaPHP.classList.remove("esconderPHP");
    tecnologiaPHP.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
php.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaPHP = document.querySelector('#tecnologiaPHP');
    tecnologiaPHP.classList.add("esconderPHP");
});

//MySQL
mysql.addEventListener('mouseover', ()=>{
    document.querySelector(".questao").style.display = "none";
    let tecnologiaMySQL = document.querySelector('#tecnologiaMySQL');
    tecnologiaMySQL.classList.remove("esconderMySQL");
    tecnologiaMySQL.style.cssText = "line-height: 2rem; font-size: 1.5rem; text-align: center; margin: 3.5rem 0;";
});
mysql.addEventListener('mouseout', ()=>{
    document.querySelector(".questao").style.display = "block";
    let tecnologiaMySQL = document.querySelector('#tecnologiaMySQL');
    tecnologiaMySQL.classList.add("esconderMySQL");
});