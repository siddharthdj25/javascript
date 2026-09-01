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
        studemt.greet();
    },



};
   student.greet();