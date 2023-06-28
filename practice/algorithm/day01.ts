
interface test {
    a: string
}

function A(params: test) {
    console.log(params.a)
    setTimeout(() => {
        console.log('a', params.a);
        setTimeout(() => {
            console.log('b', params.a)
        }, 1000)
            ;

    }, 1000)
}
A({
    a: '1'
})