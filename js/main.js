

    var disp = document.getElementById('display');


function calcDel(){
    disp.value=disp.value.slice(0, -1);
}



function calcRoot(){
    var rooted = document.getElementById('display').value;
    var a = Math.sqrt(rooted);
    document.getElementById('display').value= a;
}



function calcSquare(){
    var squr = document.getElementById('display').value;
    var b = squr*squr;
    document.getElementById('display').value= b;
}

var vnum = document.getElementById('vnum');
var btn= document.querySelectorAll('button');
var war = document.getElementById('warning');


    

btn[0].addEventListener('click',function(){
    vnum.innerText=parseInt(vnum.innerText)+1;
    if(parseInt(vnum.innerText)>=20 && parseInt(vnum.innerText)<=24){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='24px';
        war.style.fontWeight='600';
        war.innerHTML = 'Warning!'+'<br>'+'Your Position Up to Maximum Level.';
    }
    if(parseInt(vnum.innerText)>=25){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='30px';
        war.style.fontWeight='bold';
        war.style.color='red';
        war.innerHTML = 'STOP!';
        vnum.innerText='25';
    }
    if(parseInt(vnum.innerText)<=5 && parseInt(vnum.innerText)>=1){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='24px';
        war.style.fontWeight='600';
        war.innerHTML = 'Warning!'+'<br>'+'Your Position Down to Minimum Level.';
    }
    if(parseInt(vnum.innerText)<=0){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='30px';
        war.style.fontWeight='bold';
        war.style.color='red';
        war.innerHTML = 'STOP!';
        vnum.innerText='0';
    }
})
btn[1].addEventListener('click',function(){
    vnum.innerText=parseInt(vnum.innerText)-1;
    if(parseInt(vnum.innerText)<=5 && parseInt(vnum.innerText)>=1){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='24px';
        war.style.fontWeight='600';
        war.innerHTML = 'Warning!'+'<br>'+'Your Position Down to Minimum Level.';
    }
    if(parseInt(vnum.innerText)<=0){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='30px';
        war.style.fontWeight='bold';
        war.style.color='red';
        war.innerHTML = 'STOP!';
        vnum.innerText='0';
    }
    if(parseInt(vnum.innerText)>=20 && parseInt(vnum.innerText)<=24){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='24px';
        war.style.fontWeight='600';
        war.innerHTML = 'Warning!'+'<br>'+'Your Position Up to Maximum Level.';
    }
    if(parseInt(vnum.innerText)>=25){
        war.style.backgroundColor='yellow';
        war.style.padding='15px';
        war.style.borderRadius= '15px';
        war.style.width='300px';
        war.style.margin='auto';
        war.style.border='3px solid gray';
        war.style.fontSize='30px';
        war.style.fontWeight='bold';
        war.style.color='red';
        war.innerHTML = 'STOP!';
        vnum.innerText='25';
    }
})




var modal= document.getElementById('hide');
modal.style.display='none';

function hide(){
    modal.style.display='block';
}
function off(){
    modal.style.display='none';
}
