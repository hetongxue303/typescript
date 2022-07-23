export default {}

enum Gender {
    Boy, Girl
}

let value: Gender

value = Gender.Boy   // 结果：0
value = Gender.Girl  // 结果：1

// 枚举类型本质是数值类型 只要赋数值都不会报错
value = 100
value = 200

// 默认会一上一个为主 依次+1
enum Gender1 {
    Boy = 10,
    Girl
}

let value1: Gender

value1 = Gender.Boy   // 结果：10
value1 = Gender.Girl  // 结果：11