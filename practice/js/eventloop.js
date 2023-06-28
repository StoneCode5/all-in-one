
function test() {
    let a = 1
    a += 2
    for (let i = 0; i < 100000000; i++) {
        a += i
    }
    console.log('func', a, new Date().getTime() )
}

console.log('1', new Date().getTime())
let result = 2
setTimeout(() => {
    console.log('out', new Date().getTime());
}, 0);
for (let index = 0; index < 100000000; index++) {
    result += 2
}
console.log('end', new Date().getTime());
test()

/**
 * 1 1678957720416
end 1678957720652
func 4999999950000003 1678957720728
out 1678957720729
 */
// 会等到所有同步任务完成