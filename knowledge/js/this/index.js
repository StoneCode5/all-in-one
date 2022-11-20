// 验证传


function a(next) {
    console.log('a this is', this);
    next()
}

function b() {
    console.log('b this is');
    console.log(this.state)
}

const obj = {
    state: 1,
    a
}

obj.a(b)

 
var a = 20;
var obj2 = {
    a: 10,
    c: this.a + 20,
    fn: function (f) {
        f()
        return this.a;
    }
}

function log () {
    'use strict';
    console.log('log',this.a);
}

obj2.fn(log)