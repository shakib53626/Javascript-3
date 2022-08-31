

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



function love(){
    var yourname = document.getElementById('yn').value;
    var lovename = document.getElementById('ln').value;

    if(yourname.length<=3){
        alert("Enter at Minimum 4 Characters in Your Name");
    }
    if(lovename.length<=3){
        alert("Enter at Minimum 4 Characters in Lover Name");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById('printr').innerHTML = yourname + ' AND ' +lovename+ " = " + random+ "% of love";
    }
    if(random<=30){
        document.getElementById('lovecoment').innerHTML= 'Fake RelationShip';
    }
    else if(random>30 && random<=60){
        document.getElementById('lovecoment').innerHTML='Good RelationShip';
    }
    else if(random>60 && random<=90){
        document.getElementById('lovecoment').innerHTML='Better RelationShip';
    }
    else{
        document.getElementById('lovecoment').innerHTML='Wow Wow RelationShip';
    }
}





let btnRef = document.querySelectorAll(".button-option");
let winningPattern=[[0,1,2], [ 0,3,6], [2,5,8], [6,7,8], [3,4,5], [1,4,7], [0,4,8],[2,4,8]];

let xTurn =true;
let count = 0;  


btnRef.forEach((element)=>{
    element.addEventListener("click",() =>{
        if(xTurn){
            xTurn=false;
            element.innerText="x";
            element.disabled = true;
        }
        else{
            xTurn = true;
            element.innerText="o";
            element.disabled = true;
        }
    })
})



function updateClock(){
            // Time and date object......
        var date = new Date();
        var day = date.getDay();
        var month = date.getMonth();
        var correntDate = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        document.getElementById('priods').innerText = 'AM';
        if(hour == 0){
            hour = 12;
        }
        if(hour > 12){
            hour = hour -12;
            document.getElementById('priods').innerText = 'PM';

        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length<digits; n= 0+n);
            return n;
        }


        if(day == 0){
            document.getElementById('dayname').innerText = 'Sunday';
        }
        else if(day == 1){
            document.getElementById('dayname').innerText = 'Monday';
        }
        else if(day == 2){
            document.getElementById('dayname').innerText = 'Tuesday';
        }
        else if(day == 3){
            document.getElementById('dayname').innerText = 'Wednesday';
        }
        else if(day == 4){
            document.getElementById('dayname').innerText = 'Thursday';
        }
        else if(day == 5){
            document.getElementById('dayname').innerText = 'Friday';
        }
        else{
            document.getElementById('dayname').innerText = 'Saterday';
        }

        // month....


        if(month == 0){
            document.getElementById('month').innerText = 'January';
        }
        else if(month == 1){
            document.getElementById('month').innerText = 'February';
        }
        else if(month == 2){
            document.getElementById('month').innerText = 'March';
        }
        else if(month == 3){
            document.getElementById('month').innerText = 'April';
        }
        else if(month == 4){
            document.getElementById('month').innerText = 'May';
        }
        else if(month == 5){
            document.getElementById('month').innerText = 'June';
        }
        else if(month == 6){
            document.getElementById('month').innerText = 'July';
        }
        else if(month == 7){
            document.getElementById('month').innerText = 'August';
        }
        else if(month == 8){
            document.getElementById('month').innerText = 'September';
        }
        else if(month == 9){
            document.getElementById('month').innerText = 'October';
        }
        else if(month == 10){
            document.getElementById('month').innerText = 'November';
        }
        else{
            document.getElementById('month').innerText = 'December';
        }


        document.getElementById('daynum').innerText = correntDate.pad(2);
        document.getElementById('year').innerText = year;



        document.getElementById('hour').innerText = hour.pad(2);
        document.getElementById('minutes').innerText = minutes.pad(2);
        document.getElementById('seconds').innerText = seconds.pad(2);
}


function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}