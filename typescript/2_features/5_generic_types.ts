function identity<T>(arg: T): T {
    return arg;
}

let some: number = identity(5);