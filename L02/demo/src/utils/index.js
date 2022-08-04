
let fun1 = function () {

    console.log("我是方法1");
}

let fun2 = function () {

    console.log("我是方法1");
}
let num1 = 100

//知识点2：可以在定义时导出。
export let num2 = 200

let obj1 = {
    name: '张三',
    age: 30
}

let obj2 = {
    name: '关尽',
    age: 20

}
//知识点1：导出需要向外暴露的成员。
// export {
//     fun2,
//     num1,
//     obj2
// }

//在导出成员时，可以指定一个成员默认导出，注意：只能有一个默认导出。
//没有名字如果接收。
export default{
    name:'吴变化',
    age:30

}