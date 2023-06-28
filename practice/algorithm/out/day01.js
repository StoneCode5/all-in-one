function A(params) {
    console.log(params.a);
    setTimeout(function () {
        console.log('a', params.a);
        setTimeout(function () {
            console.log('b', params.a);
        }, 1000);
    }, 1000);
}
A({
    a: '1'
});
//# sourceMappingURL=day01.js.map