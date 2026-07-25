
//console.log("hello!");
//arthmatic operator
/*let a = 5;
let b = 2;
console.log("a = ",a, "& b =",b);
console.log("a + b =",a + b);
++a;
console.log("++a =",++a)
console.log("a =",a);*/

//assisment operator
/*let a = 5;
let b = 2;
a *= 4;
console.log("a =",a);*/
//comparesion operator
/*let a = 5;
let b = 2;
console.log("a == b",a == b);*/

//logical operator
/*let a = 5;
let b = 2;
let con1 = a > b;

console.log("!(con1) =",!(con1));*/

//conditional statement
//odd or even
/*let num=7;
if(num % 2 === 0 ){
    console.log(num, "is even");
} else{
    console.log(num,"is odd");
}*/
//pratice question
 /*let num = prompt("enter a number");
 if(num % 5 === 0){
    console.log(num,"is multiple of 5");
 }else{
    console.log(num,"is not multiple of 5");
 }*/
//2 question
/*let score=95;
let grade;

if (score>=90 && score<=100){
    grade = "a";
}else if (score>=70 && score<=80){
    grade = "b";

}else if (score>=50 && score<=60){
    grade ="d";
}else {
    grade = "f";
}
console.log("acc to your score , your grade :" , grade );*/
//loops
/*for(i=1; i<=5; i++){
console.log("lucky");
}
//sum of 1to5
let sum = 0;
for(i=1; i<=5; i++){
    sum=sum +i;
}
console.log("sum",sum);*/
/*let i =1;
while(i<=5){
console.log("i",i);
i++;
}*/
/*let i=1;
do{
    console.log("i",i);
    i++;
} while(i<=5);*/
 /*let str="luckychad";
 let size=0;
 for(let i of str){
    console.log("i",i);
    size++;
 }*/
/*let student={
    name:"naveen/jindal",
    age:15,
    rank:5,
    ispass:true,

};
for(let i in student){
    console.log("i",i,"vaule=",student[i]);
}*/
//pratice question
/*let i;
for(let i=1; i<=100; i++){
    if (i%2 === 0){
        console.log("i",i);
    }
}*/
/*let guessnum =7;
let usernum = prompt("guess the number :");
while(usernum !=guessnum){
  usernum = prompt(" you enter wrong number try again :"); 
}
console.log("conguralutions you guess the number");*/
/*let fullname = prompt("enter a full name without space");
let username ="@"+fullname + fullname.length;
console.log(username);*/
//array
/*let marks =[85, 97,44,37,76,60];
let sum =0;
for(let x of marks){
    sum += x;
}
let avg = sum/marks.length;
console.log(`avg marks of class = ${avg}`);*/
/*let items =[250,645,300,900,50];
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i]-offer;
}
console.log(items);*/
/*let companies =["bloomberg","microsoft","uber","google","ibm","netflix"]
companies.push("amazon");*/
/*function countvowels(str) {
    let count = 0;
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
        }
    }
    return count;
}*/
/*const countvow = (str) =>{
    let count = 0;
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
count++;
        }
    }
    return count;
}*/
/*let marks = [87 , 99 , 97 ,69 ,77]
let toppers =  marks.filter ((val) => {
    return val>90;
})
console.log(toppers)*/
 /*let n = prompt ("enter a number :");
let arr =[];
for( let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);
 let factorial = arr.reduce( (pre , cur) =>{
    return pre * cur;
})
console.log(factorial);*/
/*let div = document.querySelector("div");
console.dir(div);*/
/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);
 h2.innerText = h2.innerText + "from apna collge";*/
 /*let divs = document.querySelectorAll(".box");
 let idx = 1;

 for( let div of divs ){
    div.innerText = ` new unique value ${idx}`;
    idx++;

 }*/
/*let newbtn = document.createElement("button");
newbtn.innerText = "click me";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);*/

//tic tac toe game
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector(".new");
let msg = document.querySelector(".msggg");
let msgcontaner = document.querySelector(".msg-container");

let turno = true;
const winpattterns = [
    [0, 1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontaner.classList.add("hide");
}
boxes.forEach( (box) =>{
    box.addEventListener("click" , () =>{
       console.log("box was clickd");
    if ( turno){
        
        box.innerText = "0";
        turno = false;
    } else{
        
        box.innerText = "x";
        turno = true ;
    }
    box.disabled = true;
    
    checkwinner();
    });
});
const disabledboxes =  () => {
    for ( let box of boxes){
        box.disabled = true;
    }
};
const enableboxes =  () => {
    for ( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
msgg.innerText = `Congratulations Winner is ${winner}`;
msgcontaner.classList.remove("hide") ;
disabledboxes ();
};
const checkwinner = ( ) => {
    
    for ( let pattern of winpattterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
if (pos1val === pos2val && pos2val === pos3val){
    console.log("winner",pos1val);
    showWinner(pos1val);
}
        }
        
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);












