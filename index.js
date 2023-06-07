
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

// var arr=[1,2,3,4,5,6,77];
// console.log(arr.length);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//for each loop

// arr.forEach(function(element,index){
//     console.log(index+" "+element);
// });

// while loop
// var j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do while loop

// var j=0;
// do{
//     console.log(j);
//     j--;
// }
// while(j>0);

//array methods
// var arr=[1,2,"aa"];
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.push(0,22);
// console.log(arr);
// arr.shift();                        //removes first element
// console.log(arr);

// var newarr=[3,2,4,1,5];
// newarr.sort();
// console.log(newarr);

// var newarr2=newarr.concat(arr);
// console.log((newarr2));

//string methods

// var s="hello how are you how";
// console.log(s.length);
// var s2="aa";
// var s3=s.concat(s2);
// console.log(s3);
// console.log(s.lastIndexOf("how"));
// console.log(s.slice(1,4));

//dates and time in js

// var mydate=new Date();
// console.log(mydate);
// var newdate=new Date("2 june 2003 14:20");
// console.log(newdate);
// var x=newdate.getDate();
// console.log(x);
// var y=newdate.getDay();
// console.log(y);
// var z=newdate.getMonth();
// console.log(z);
// var a=newdate.getHours();
// console.log(a);
// var b=newdate.getMinutes();
// console.log(b);
// var c=newdate.getSeconds();
// console.log(c);
// var d=newdate.getTime();
// console.log(d);
// var e=newdate.toLocaleTimeString();
// console.log(e);
// var f=newdate.toTimeString();
// console.log(f);
// newdate.setDate('3');
// console.log(newdate);
// newdate.setMonth("0");
// console.log(newdate);
// newdate.setFullYear("2014");
// console.log(newdate);