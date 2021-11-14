//Enhanced object literals trong javasript ES6
// 1. Dinh ngia key: value trong object
//2 dinh nghia method cho object
// 3 dinh nghia key cho ebject du
// var name = 'javascript';
// var price = 1000;
// var course = {
//     name : name,
//     price:price,
// };
// console.log(course);
// dinh nghia ngan gon key: value
var name = 'javascript';
var price = 1000;
var course = {
    name,
    price
};
console.log(course);
// dinh nghia method
// var name = 'javascript';
// var price = 1000;
// var course = {
//     name,
//     price,
//     getName: function() {
//         return name;
//     }
// };
// console.log(course.getName());
// dinh nghia method bo luon cai function
var name = 'javascript';
var price = 1000;
var course = {
    name,
    price,
    getName() {
        return name;
    }
};
console.log(course.getName());
//dinh nghia key cho object duoi daang bien
var fieldName = 'new-name';
var fieldPrice = 'new-price';
const coursee = {
    [fieldName] : 'javascript',
    [fieldPrice]:1000,
}
console.log(coursee);
// rest parameters ... (con lai)
// function logger(a,b,...params) {
//     console.log(params);

// }
// logger(1,2,3,4);

function logger({name, age,...rest}){
    console.log(name);
    console.log(age);
    console.log(rest);
    
}
logger (
    {
        name : 'python',
        age:18,
        lastName:'Huynh',
    }
)
function arr([a,b,...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}
arr([ 1 , 2 , 3 , 4 , 5 ,6]);
//10 spread noi bo may cai ngoac 
var array = ['python','html','css'];
var array2=['Reactjs','Dart'];
var array3 = [...array,...array2];
console.log(array3);
var object = {
    namee:'hung',
    last:'huynh',

}
var object1 = {
    age:19,
}
var object2 = {
    ...object,...object1
}
console.log(object2);
//destructuring ( phan ra )
var arrayy= ['php' ,'java','pyhon'];
var [a,b,c]=arrayy;
console.log(a,b,c);
const ulR = React.ceac

