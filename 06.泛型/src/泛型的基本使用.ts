export default {}

/**
 * 不使用泛型
 */
let Test1 = (value: number, items: number): number[] => {
    return new Array(items).fill(value);
}

// 正常使用
let test1 = Test1(2, 3)
console.log(test1)

// 此时当我们传入一个string类型的值时 则会报错 因为此时已经指定了类型为number 不能接受其他类型的值
// let test1 = Test1("test1", 3)

/**
 * 使用泛型
 */
let Test2 = <T>(value: T, items: number): T[] => {
    return new Array(items).fill(value);
}

// 指定泛型类型为string
let test2 = Test2<string>("test2", 2)
console.log(test2)

// 指定泛型类型为number
let test3 = Test2<number>(3, 2)
console.log(test3)