let person={
    name: "siddharth",
    age: 20,
    "isStudent":false,
    greet: function (){
        console.log("welcome baby")
    },

};
person.job="web dev";
person[`age`]=18;
console.log(person.age);
console.log(person.name);
console.log(person[`isStudent`]);
console.log(person);
console.log(person.greet());
idType="studentId";
let student={
    [idType]:"A1234567",
    sname:"siddharth",
    sage:20,
    isstudent:true,
    greet:function(){
        console.log(
            `hey my ${idType} is ${student[idType]} and my name is ${student.sname}`
        );
       
    },
};
student.greet(); 

let obj={ id:5,name:"kodyfier"};
let obj1=obj;
obj1.name="siddharth";
console.log(obj1);
console.log("original obj",obj);


let obj2={ id:5,name:"kodyfier"};
let newobj=Object.assign({},obj2);
newobj.name="siddharth";
console.log(newobj);
console.log("original obj2",obj2);


const obj5={name:"sidd"};
const obj6={name:"sidd"};

const isEqual=obj5===obj6 ? true:false;
console.log(isEqual);

const product={
    id:1,
    name:"siddharth",
    price:1000,
    category:"computers",
    stock:10,
    description:"this is the computer product",
    image:"images will be added during the projects"

};
let keys=Object.keys(product);
console.log(keys);
let values=Object.values(product);
console.log(values);


Object.freeze(product);
product.id=2;
console.log(product.id);

 let objA={name:"siddharth",age:20};
 let obj























