export default {}

/**
 * 在之前使用接口的方式
 */
// interface IPerson {
//     name: string
//     age: number
// }
//
// let person1: IPerson = {
//     name: 'test',
//     age: 20
// }
// console.log(person1)

/**
 * 泛型接口：在接口中不指定具体的类型 而使用泛型来代替
 * 泛型默认值：这里的默认值只是给定类型 并不能给具体的某个值
 */
interface IPerson<T1 = string, T2 = number> {
    name: T1
    age: T2
}

// 这里是使用的接口定义时的泛型默认值
let person1: IPerson = {
    name: 'test',
    age: 20
}
console.log(person1)

// 这里手动指定类型 此时会更加灵活
let person2: IPerson<number, string> = {
    name: 123,
    age: '22'
}
console.log(person2)