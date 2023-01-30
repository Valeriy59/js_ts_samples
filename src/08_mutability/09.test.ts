function incAge(u: UserType) {
    u.age++
}

test('big test', () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {title: "Minsk"}
    }

    incAge(user)

    expect(user.age).toBe(33)

// передаем ссылку на объект в другую переменную
    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {

    let users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Dimych",
            age: 32
        }
    ]
// передаем ссылку на объект в другую переменную
    let admins = users

    admins.push({name: "Tri", age: 12})

    expect(users[2]).toEqual({name: "Tri", age: 12})
})

test("value type test", () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = 101
})


test('big test', () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {title: "Minsk"}
    }

    let addr = user.address

    let user2: UserType = {
        name: "Nata",
        age: 22,
        address: user.address
    }

    user2.address.title = "Moscow"

    expect(user.address.title).toBe("Moscow")
})