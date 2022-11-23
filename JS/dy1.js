// const temp = 10;
// const myObj = {
//     temp: 20,
//     func:function() {
//         console.log(this.temp);
//     }
// }

// myObj.func();
// var yourObj = { temp: 30 };
// myObj.func.apply(yourObj);



// var myObj2 = {
//     temp1: 20,
//     func: () => {
//         console.log(this);
//         console.log(this.temp1);
//     },

//     getTemp:function(){
//         console.log(this.temp1);
//     }
  
// }

// myObj2.func();
// myObj2.getTemp();

// var obj = {
//     name:'ahao',
//     age:'23'
// }
 
// function func(){
//     console.log(this);       // 打印 this 的指向
//     console.log(arguments);  // 打印传递的参数
// }
 
// // 通过 call 改变 this 指向
// func.call(obj,1,2,3);   
 
// // 通过 apply 改变 this 指向
// func.apply(obj,[1,2,3]);
 
// // 通过 bind 改变 this 的指向
// let A = func.bind(obj,1,2,3);
// A();


