export default {}

// 举例(不使用函数重载时，会有跟多代码冗余)
function Func1(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString()
    } else {
        return a
    }
}

console.log(Func1(10, 10))
console.log(Func1('10', '10'))

// 参数类型不同
function Func(a: number, b: number): number
function Func(a: string, b: string): string
function Func(a: number, b: string): string
function Func(a: any, b: any): any {
    return a + b
}

console.log(Func(10, 20))       // 结果：30
console.log(Func('10', '20'))   // 结果：1020
console.log(Func(100, '20'))    // 结果：10020

// 参数数量不同
function val(a: number): any
function val(a: number, b: string): any
function val(a: any, b?: any): any {
    return a + b
}

val(10)           // 结果：10
val(10, '20')  // 结果：1020