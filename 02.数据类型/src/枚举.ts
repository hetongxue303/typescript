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