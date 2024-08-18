const container=document.getElementById('grid-container');
function createGrid(squaresnum){
    container.innerHTML = '';
    const squareSize=960/squaresnum;


for(let i=0;i<squaresnum*squaresnum;i++)
{
    const div=document.createElement('div');
    div.classList.add('grid-square');
    div.style.width=`${squareSize}px`;
    div.style.height=`${squareSize}px`;
    div.addEventListener('mouseenter',() =>{
        div.classList.add('hovered');
    });
    container.appendChild(div);
}}
const button=document.getElementById('button');
button.addEventListener('click', ()=> {
    let squaresnum;
    do{
        squaresnum=parseInt(prompt("how many squares?"),10);}
        while(isNaN(squaresnum)|| squaresnum<1 || squaresnum>100);
        createGrid(squaresnum);
});
