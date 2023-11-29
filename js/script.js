//Training Hiapo
action1.addEventListener('click', diplayTraining);

function diplayTraining(){
    if(descrip1.style.visibility === 'visible'){
        descrip1.style.visibility = 'hidden'
    }else{
        descrip1.style.visibility = 'visible';
    }
}
//Training Count
action1.addEventListener('click', trainingCount);
  function trainingCount(){
     trainScore.innerHTML++;
}

//Demographics Hiapo
action2.addEventListener('click', displayDemo);

function displayDemo(){
    if(descrip2.style.visibility === 'visible'){
        descrip2.style.visibility = 'hidden'
    }else{
        descrip2.style.visibility = 'visible';
    }
}
//Demographic Count
action2.addEventListener('click', demoCount);
  function demoCount(){
     demoScore.innerHTML++;
}

//Olonā Hiapo
action3.addEventListener('click', displayOlona);

function displayOlona(){
    if(descrip3.style.visibility === 'visible'){
        descrip3.style.visibility = 'hidden'
    }else{
        descrip3.style.visibility = 'visible';
    }
}
//Olonā Count
action3.addEventListener('click', olonaCount);
  function olonaCount(){
     olonaScore.innerHTML++;
}

//display outcomes
action4.addEventListener('click', displayOutcomes);

function displayOutcomes(){
    if(descrip4.style.visibility === 'visible'){
        descrip4.style.visibility = 'hidden'
    }else{
        descrip4.style.visibility = 'visible';
    }
}
//Outcomes Count
action4.addEventListener('click', outcomesCount);
  function outcomesCount(){
     outcomesScore.innerHTML++;
}
