function timer() {
$("#start-timer").click(startTimer);
$("#stop-timer ").click(stopTimer);
 let hours=$("#hours").text();
 let min=$("#minutes").text();
 let sec=$("#seconds").text();
let run=false;
var timer=0
 function startTimer() {
    if(!run){
       run=true
    
    timer= setInterval(step, 1000)
    
    
    function step() {

       sec++
       $("#seconds").text(sec<10?("0"+ sec.toString()):sec)// ?-if, :-else
       if(sec>=60){
          min++;
          $("#minutes").text(min<10?("0"+ min.toString()):min)// ?-if, :-else
       sec=0;
       }
       if(min>=60){
          hours++;
          $("#hours").text(hours<10?("0"+ hours.toString()):hours)// ?-if, :-else
min=0;
       }
    }
 }
}
 function stopTimer() {
    if(run){
       run=false;
       clearInterval(timer)
    }
    
 }
}  