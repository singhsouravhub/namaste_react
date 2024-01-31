

const users = [{ firstName: 'akash', lastName: 'Gausrav', age: 30 },
{ firstName: 'sourav', lastName: 'kumar', age: 30 },
{ firstName: 'meena', lastName: 'singh', age: 55 },
{ firstName: 'dashrath', lastName: 'singh', age: 61 }
]
//let a="Hello bhai kaise ho";
// olleh iahb esiak oh

// let arr=a.split(' ').map(function(e){
//    return e.split('').reverse().join('')
// }).join(' ')



// var a1=[1,2,3,4,5]
// //console.log(a1.reverse());


// function reverser(aa){
//     debugger
//     let ar=[];
//     for(let q=aa?.length-1;q>=0;q--){
//         ar.push(aa[q])
//     }
//     return ar;

// }

// console.log("reverse",reverser(a1));

// var number = 1234;

// function reverser(aa) {
//     debugger
//     let ar = 0;
//     while (aa > 0) {
//         var r = aa % 10;
//         ar = ar * 10 + r;
//         aa = Math.floor(aa / 10)
//     }

//     return ar

// }

// console.log("reverse", reverser(number));


// var string = "my name is ram";

//Making first char of the string as caps 
// var final = string.split(' ').map(e => {
//     return e.charAt(0).toUpperCase() + e.substring(1)
// }).join(' ')

// console.log('final', final)


// 

//promise.all ---> parallel calling the api if any fail it will return the result that time only(fail fast)
//promise.allsettled ---> it will return all the promise to settle still all the api to finished 
//promise.race---> it will return very fast time only fast error or fast settle . it will not wait for any 
// 
//promise.any---> it will return fast api should settle first .(success seeking for first success)

// use settled word in promise 

//here thre example

//P1: Api call also

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 success'), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2 success'), 2000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 success'), 1000)
// })
// Promise.all([p1, p2, p3]).then((e) => console.log(e))


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p1 success'), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2 success'), 2000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 success'), 1000)
// })
// Promise.allSettled([p1, p2, p3]).then((e) => console.log(e))

//return the array of object
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p1 success'), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2 success'), 2000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p3 success'), 1000)
// })
// Promise.race([p1, p2, p3]).then((e) => console.log(e))



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p1 success'), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2 success'), 2000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p3 success'), 1000)
// })
//  Promise.any([p1, p2, p3]).then((e) => console.log(e))


//PROTOTYPE InHerits

// let arr=["akash","sourav"]
// let object={
//     name:'akash',
//     city:'jamshedpur',
//     getIntro:function(){
//         console.log(this.name+' '+this.city)
//     }
// }

// // object.getIntro();


// let object2={
//     name:'sourav'
// }


// object2.__proto__=object;//object2 inherit the properties of object parents 


Function.prototype.mybind=function(){
    console.log('hello')
}

function fun(){

}
