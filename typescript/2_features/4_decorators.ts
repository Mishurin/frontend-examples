function log(target: any, key: string, value: any) {
    console.log('transforming...')
    return {
        value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    };
}

class C {
    @log
    foo(n: number) {
        return n * 2;
    }
}

let instance = new C();
console.log(instance.foo(5));
