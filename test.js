// let obj = {
//     a: 1,
//     get: function () {
//         return 2
//     }
// }

// let g = obj.get
// g.call({}, 1, 2, 3)
// g.apply({}, [1, 2, 3])


// function Product (name, price) {
//     this.name = name
//     this.price = price
// }

// function Food (name, price) {
//     Product.call(this.name, toy)
//     this.category = 'food'
// }

// function Toy (name, price) {
//     Product.call(this, name, price)
//     this.catrgory = 'toy'
// }

// let cheese = new Food('cheese', 10)
// let car = new Toy('car', 100)


// const animals = [
//     {
//         species: 'cat',
//         name: 'Tom'
//     },
//     {
//         species: 'dog',
//         name: 'Jen'
//     }
// ]

// for (let i = 0; i < animals.length; i++) {
//     (function (i) {
//         this.print = function () {
//             console.log('#' + i + ' ' + this.species + ' ' + this.name)
//         }
//         this.print()
//     }).call(animals[i], i)
// }

// var array = ['marshall', 'eminem']
// var elements = [1, 2, 3]
// array.push.apply(array, elements)
// console.log(array)

// let nums = [3, 12, 31, 24, 1, 25, 1]
// let max = Math.max.apply(null, nums)
// let min = Math.min.apply(null, nums)
// console.log(max, min)

this.x = 9 //this指向全局window对象

console.log(this.x)  //9
let mymodule = {
    x: 81,
    getX: function () {
        return this.x
    }
}

console.log(mymodule.getX())  //81

let retrieveX = mymodule.getX
console.log(retrieveX())   // 9 函数在全局作用域调用

//创建一个新函数，将this绑定到module对象

let boundGetX = retrieveX.bind(mymodule)
console.log(boundGetX());

