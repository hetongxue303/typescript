export default {}

// 接口基础定义
interface IUser {
    name: string
    age: number
    gender?: '男' | '女' | '保密'
}

// 接口基础使用
let User: IUser = {
    name: 'heTongXue',
    age: 22,
    gender: '男'
}

console.log(User)
console.log(User.name)
console.log(User.age)
console.log(User.gender)

// 接口在函数中的使用
const UserInfo = ({name, age}: IUser): void => {
    console.log(`我是'${name},今年${age}岁`)
}

// 使用函数
UserInfo(User)