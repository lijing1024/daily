// type of与 instance of
// function dateType() {
//     console.log('typeof(123)', typeof (123))
//     console.log('typeof("123")', typeof ('123'))
//     console.log('typeof([12,34])', typeof ([12, 34]))
//     console.log('typeof({name:"xiaoxiao"})', typeof ({ name: "xiaoxiao" }))
//     console.log('typeof(function(){})', typeof (function () { }))
//     console.log('typeof(/^abc/)', typeof (/^abc/))
//     console.log('typeof(null)', typeof (null))
//     console.log('typeof(undefined)', typeof (undefined))
//     console.log('typeof(null)', typeof (null))
//     console.log('typeof(true)', typeof (true))
// }
// dateType()
// A instanceof B
// function instance_of(A, B) {
//     var O = B.prototype;
//     P = A.__proto__;
//     while (true) {
//         // 已经找到顶层
//         if (P === null) return false;
//         if (O === P) return true;
//         P = P.__proto__;
//     }
// }

// instance_of({ name: 'xiaoxiao' }, Object)
var fn = function () { };
console.log('fn instanceof Object', fn instanceof Object)


// 对象都是通过函数创建的
console.log('typeof(Array)', typeof (Array))
console.log('typeof(Object)', typeof (Object))

function Fn() {
    Fn.prototype.name = 'xiaoxiao';
    Fn.prototype.getYear = function () {
        return '9999'
    }
}
var fn = new Fn();
console.log('fn.name', fn.name)
console.log('fn.getYear', fn.getYear)
console.log('fn.getYear()', fn.getYear())
console.log('Fn.prototype', Fn.prototype)
console.log('fn.__proto__', fn.__proto__)
console.log('====', Fn.prototype === fn.__proto__)
