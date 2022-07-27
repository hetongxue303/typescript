export default {}

interface IUser {
    name: string

    (age: number): string

    out(): void
}

const getUser = (): IUser => {
    let user = <IUser>function (age: number) {
    }
    user.name = 'heTongXue'
    user.out = function () {

    }
    return user
}

let u = getUser()
u.name = 'test'
u(22)
u.out()