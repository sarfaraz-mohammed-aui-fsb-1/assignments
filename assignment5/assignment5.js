

//1.
var number = prompt("enter number: ")
console.log(number*=number);

//2. 
var time = parseInt(prompt ("enter time of day"));
if(time >=6 && time < 12){
  console.log("it is time for breakfast");
} else if (time >= 12 && time<16){
  console.log("it is time for lunch");
} else if (time>= 16 && time <20){
  console.log("it is time for dinner");
}else {
  console.log("it is time to sleep");
}

//3.
var number = parseInt(prompt("enter number:"));
console.log(number);
if (number % 2 == 0){
  console.log("even number ");
}else {
  console.log("odd number");
}

//4.
var name; 
var vowel_count = 0;
var consonant_count = 0;

function findvowels(name,vowel_count,consonant_count){
for (var i = 0; i<name.length; i++){
  console.log(name[i]);
  if (name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u"){
    vowel_count++;
  } else {
    consonant_count++
  }
}
console.log("Vowels:",vowel_count)
console.log("Consonant:", consonant_count)
}
console.log(findvowels("avinash",vowel_count,consonant_count));

//5. 
var number = parseInt(prompt("enter number:"));
console.log(typeof number);
for(var i=1; i<=10; i++){
  console.log(number * i);
}