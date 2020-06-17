/*var str1 = "Hello ";
var str2 = "world!";
var res = str2.concat(str1);
console.log(res);
*/
//1.
function concatName(name1, name2){

    console.log(name2.concat(name1));
  }
  concatName("first", "last");
  concatName("John", "Doe");
  concatName("Mary", "Jane");
  
  //2. 
  
  function flipBool(value)
  {
    let flipbool;
  switch(value){
    case 'true':
    flipbool=0;
    break;
    case 'false':
    flipbool=1;
    break;
    case '1':
    flipbool=0;
    break;
    case '0':
    flipbool=1
    break;
  }
  return flipbool
  }
  flipBool("true");
  flipBool("false");
  flipBool("1");
  flipBool("0");
  
  //3
  
  function reverse1(array){
    
    return array.reverse();
  
  }
  
  reverse1([1,2,3,4]);
  reverse1([9,9,2,3,4]);
  reverse1([]);
  
  //4.
  function getLastItem(array){
    return array.slice(-1);
  }
  getLastItem([1,2,3]);
  getLastItem(["cat", "dog", "duck"]);
  getLastItem([true, false, true]);

  


  
  //6.
function concatArray(array1, array2){

    console.log(array1.concat(array2));
  }
  concatArray([1, 3, 5], [2, 6, 8]); 
  concatArray([7, 8], [10, 9, 1, 1, 2]);
  concatArray([4, 5, 1], [3, 3, 3, 3, 3]);
  

  //7.
  function checkSquareAndCube(a,b){
    return Math.sqrt(a)== Math.cbrt(b)
  }
  console.log(checkSquareAndCube(4,8));
  console.log(checkSquareAndCube(16,48));
  console.log(checkSquareAndCube(9,27));

  //8. 
  function getMultipliedArr (array){
    return array.map(x=>x*2);
  }
  
  getMultipledArr([2,5,3]);
  getMultipliedArr([1,86,-5]);
  getMultipliedArr([5,382,0]);

  //9.
  var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
   
    let rs = (obj) =>{
      for (let i = 0; i <obj.length; i++){
        console.log(obj[i]);
        if (obj[i].readingStatus === true){
          console.log("Alread read ${obj[i].author} by ${obj[i].title}")
        }
        else {
          console.log("You still need to read ${obj[i].title} by ${obj[i].author}"
          );
        }
      }
    }
    rs(library);

//10.
var library = [
  {
  title: 'The Road Ahead',
  author: 'Bill Gates',
  libraryID: 1254
  },
  {
  title: 'Walter Isaacson',
  author: 'Steve Jobs',
  libraryID: 4264
  },
  {
  title: 'Mockingjay: The Final Book of The Hunger Games',
  author: 'Suzanne Collins',
  libraryID: 3245
  }];
 
 let sortArr = (arr) =>{
   return arr.map(ele => Object.keys(ele).sort().reduce((res, key)=>{
 res[key] = ele[key]
 return res
   }, {}))
 
 }
 console.log(sortArr(library));
 


  <body>
    <header>
    <nav class="container d-flex flex-row justify-content-between">/*display flex*/
      <h2>EAt Well</h2>
      <input type="text"></input>
      <button class="btn btn-outline-dark">Sign Up</button>
    </nav>
    </header>
    <main>
    </main>
    <footer>
    </footer>
  </body>