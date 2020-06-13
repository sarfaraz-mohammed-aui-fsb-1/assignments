//1.
function addition(x,y){
    console.log( x+y);
  }
  
  addition(3,2);
  addition(-3, -6);
  addition (7,3);
  
  //2.
  function convert(minutesToSeconds){
    console.log(minutesToSeconds*60);
  }
  convert(5);
  convert(3);
  convert(2);
  
  //3.
  function addition(x){
    console.log(x+=1);
  
  }
  addition(0);
  addition(9);
  addition(-3);
  
  //4.
  function triArea(base,height){
    console.log((base*height)/2);
  }
  triArea (3,2);
  triArea(7,4);
  triArea(10,10);
  
  /*//5.
  function and(a,b){
    var a = false; 
    var b = false;
  if (a==b &&)
  
  }
  }
  */
  //6. 
  function nextEdge (side1,side2){
    console.log((side1+side2)-1);
  }
  nextEdge(8,10);
  nextEdge (5,7);
  nextEdge(9,2);
  
  //7. 
  function remainder(x,y){
    console.log(x%y);
  }
  remainder(1,3);
  remainder(3,4);
  remainder(-9, 45);
  remainder (5,5);
  remainder(11,3);
  
  //8.
  function footballPoints(wins,draws, losses){
    console.log( (wins*3)+(draws*1)+(losses*0));
  }
  footballPoints(3,4,2);
  footballPoints(5,0,2);
  footballPoints(0,0,1);
  
  //9.
  function lessThan100(x,y){
    var sum;
    sum = x + y 
    if (sum < 100){
      console.log("true");
    } else {
      console.log("false");
    }
    return;
  }
  lessThan100(22,15);
  lessThan100(83,34);
  
  //10.
  function isSameNum(x,y){
    if (x==y){
      console.log("true");
    } else {
      console.log("false");
    }
    return;
  }
  isSameNum(4,8);
  isSameNum(2,2);
  isSameNum(2,"2");
  
  //11.
  function animals(chicken, cows, pigs){
    console.log((chicken*2)+(cows*4)+(pigs*4));
  }
  animals(2,3,5);
  animals(1,2,3);
  animals(5,2,8);
  
  //12.
  function convert(hours,minutes){
      return((3600*hours) + (60*minutes));
  
  }
  
  convert(1,3);
  convert(2,0);
  convert(0,0);
  
  //13.
  function stringInt(x){
    return parseInt(x);
  }
  stringInt("6");
  stringInt("1000");
  stringInt("12");
  
  //14. 
  function comp(x,y){
    return (x.length==y.length)
  }
  comp("AB", "CD");
  comp("ABC", "DE");
  comp("hello", "edabit");
  
  //15. 
  function dividesEvenly(a,b){
    if ( a%b === 0){
     
      console.log("true");
  
    } else {
      console.log("false");
    }
    return;
  }
  dividesEvenly(98,7);
  dividesEvenly(85,4);
  