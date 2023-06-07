
// var obj={
//     name:"aviral",
//     class:12,
//     sec:"A",
//     school:"jps"
// }
// console.log(obj.name);

// var favmovies=['a','b','c'];
// console.log(favmovies[2]);

// var obj={name:"aviral",
// class:12,
// sec:"A",
// school:"jps",
// favmovies:['a','b','v']
// }
// console.log(obj.favmovies[2]);

// var a=true;
// var b=false;
// console.log(a,b);

// var a=null;
// console.log(a);

//functions

// function avg(a,b){
// return (a+b)/2;
// }

// var c=avg(3,4);
// console.log(c);

// function license(x){
//     if(x>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var c=23;
// if(license(c)){
//     console.log("you can get license");
// }
// else{
//     console.log("you cannot get license");
// }

//input no from user

// var x=prompt("enter a no");
// console.log(x);


//loops

var arr=[1,2,3,4,5,6,77];
// console.log(arr.length);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//for each loop

arr.forEach(function(element,index){
    console.log(index+" "+element);
});