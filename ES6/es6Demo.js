//局部变量建议使用let
var funcs = [];

function es6Function() {
    //for循环用var输出10次10  
    // for (var i = 0; i < 10; i++) {
    //     funcs.push(function() { console.log(i) })
    // }
    // funcs.forEach(function(func) {
    //     func()
    // })
    //  用block闭包保存变量
    // for (var i = 0; i < 10; i++) {
    //     funcs.push(
    //       (function(value) {
    //         return function() {
    //             console.log(value)
    //         }
    //     })(i)
    //   )
    // }
    // funcs.forEach(function(func) {
    //     func()
    // })
    //  用let输出0123456789 
    for (let i = 0; i < 10; i++) {
        funcs.push(function () {
            console.log(i)
        })
    }
    funcs.forEach(func => func())


}

// let规定用于全局变量 var规定用于顶层对象(window)属性
let b = "b";
var c = "c";

function es6Function1() {
    //  document.getElementById("contentText").innerHTML =  "顶层对象属性用var:" + window.c;
    //（那么用let申明的全局变量就无法用顶层对象属性访问）
    document.getElementById("contentText").innerHTML = "全局变量用let:" + window.b;
}



//symbol用法
function es6Function2() {
    let mySymbol = Symbol();
    // 第一种写法
    let a = {
        a: 3,
        b: 4
    };
    a[mySymbol] = 'Hello!';
    document.getElementById("contentText").innerHTML = "symbol用法:" + a[mySymbol] + a['b'] + a.a;
}


//变量的解构赋值
function es6Function3() {
    let [foo, [
        [bar], baz
    ], d = 4] = [1, [
        [2], 3
    ]];
    document.getElementById("contentText").innerHTML = "变量的解构赋值：" + foo + bar + baz + d;
}

//对象的解构赋值
function es6Function4() {

    let {
        bar: b,
        foo
    } = {
        bar: "bbb",
        foo: "aaa"
    };
    document.getElementById("contentText").innerHTML = "对象的解构赋值：" + b + foo;
}

//遍历的几种方式：

//forEach 变量数组
// arr1.forEach(function(v,i,a){ ... }); 语句
// forEach()函数一般只能用于数组，功能是从头到尾把数组遍历一遍。有三个参数分别是：数组元素，元素的索引，数组本身

//for in 遍历集合、遍历对象属性 
// for (var l in document.links){
//     alert(l.href);
// }
// var obj = {a: 1, b: 2};
// for (var i in obj) {
//     alert("key:" + i + ", value:" + obj[i]);  
// }

//for of遍历集合、数组 高性能。性能比for in方式高，而且更安全，因为for in会遍历子对象中的所有方法，如果要严格得用has的什么函数判断是否有方法。 


//set数据类型
function es6Function5() {
    const s = new Set();
    // add(value)：添加某个值，返回 Set 结构本身。
    // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    // has(value)：返回一个布尔值，表示该值是否为Set的成员。
    // clear()：清除所有成员，没有返回值。
    // size大小
    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
    for (const i of s) {
        console.log(i);
    }
}

//map
function es6Function6() {
    // 上面代码使用 Map 结构的set方法，将对象o当作m的一个键，
    //然后又使用get方法读取这个键，接着使用delete方法删除了这个键。
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);

    map.size // 2
    map.has('name') // true
    map.get('name') // "张三"
    map.has('title') // true
    map.get('title') // "Author"

    const m = new Map();
    m.set("d", 'ds');
    m.set("c", 'nah');
    m.has("c") // true
    m.delete("c")
    m.has("c") // false
    m.clear;
    m.size;
}


// 函数
function es6Function7() {
    var people = (name = "小结", age = 18) => {
        const fullName = `${name}今年${age}岁,待字闺中，任君采摘哟~~~`;
        return fullName
    }
    document.getElementById("contentText").innerHTML = people("张飞");
}

//对象
function es6Function8() {
//对象声明

    //ES5
    // function people(name, age) {
    //     return {
    //         name: name,
    //         age: age
    //     };
    // }
    // const people = {
    //     name: 'lux',
    //     getName: function() {
    //         console.log(this.name)
    //     }
    // }
    //ES6
    // function people(name, age) {
    //     return {
    //         name,
    //         age
    //     };
    // }
    // const people = {
    //     name: 'lux',
    //     getName () {
    //         console.log(this.name)
    //     }
    // }

    //对象复制
    let objA = { name: 'cc', age: 18 }
    let objB = { address: 'beijing' }
    let objC = {} // 这个为目标对象
    let obj = Object.assign(objC, objA, objB)

    // 我们将 objA objB objC obj 分别输出看看
    console.log(objA)   // { name: 'cc', age: 18 }
    console.log(objB) // { address: 'beijing' }
    console.log(objC) // { name: 'cc', age: 18, address: 'beijing' }
    console.log(obj) // { name: 'cc', age: 18, address: 'beijing' }
     
    objA = {name:'小王',age:20,gridfriend:'菲菲'}
    console.log(objC);//这里输出的值依然是{ name: 'cc', age: 18, address: 'beijing' } 


}
