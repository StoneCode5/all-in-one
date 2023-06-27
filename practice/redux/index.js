// TODO state的初始值怎么设置 null不兼容
class Store {
    constructor(reducer, initialState, dispatchWithMiddlewear) {
        this.state = null;
        this.reducer = reducer;
        // 其实可以用链表来设计，
        this.listeners = [];
        this.listenerCount = 0;
        if (initialState) {
            this.state = initialState;
        }
        else {
            this.state = reducer('', { type: '1' });
        }
        this.dispatchWithMiddlewear = dispatchWithMiddlewear;
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        if (this.dispatchWithMiddlewear) {
            this.dispatchWithMiddlewear({ getState: this.getState.bind(this), dispatch: this.dispatch.bind(this) }, this._dispatch.bind(this))(action);
        }
        else {
            this._dispatch(action);
        }
    }
    _dispatch(action) {
        console.log('11', this);
        // TODO 判断有问题 如果state为0 就不行
        if (this.state) {
            this.state = this.reducer(this.state, action);
            this.listeners.forEach((item) => {
                item.listener();
            });
        }
        else {
            throw Error('state not exit');
        }
    }
    subscribe(listener) {
        if (typeof listener === 'function') {
            // const currentIndex = this.listeners.length - 1
            const currentId = this.listenerCount += 1;
            this.listeners.push({
                id: this.listenerCount,
                listener
            });
            const unsubscribe = () => {
                const currentListenerIndex = this.listeners.findIndex((item) => item.id === currentId);
                if (~currentListenerIndex) {
                    this.listeners.splice(currentListenerIndex, 1);
                }
            };
            return unsubscribe;
        }
        return () => { };
    }
}
const Redux = {
    createStore(reducer, initialState, wrapedDispatch) {
        return new Store(reducer, initialState, wrapedDispatch);
    },
    combineReducers(reducersWithKeys) {
        // const _state:Record<string, unknown> = {}
        return function (state, action) {
            let _state = {};
            Object.entries(reducersWithKeys).forEach(([key, reducer]) => {
                _state[key] = reducer(state[key], action);
            });
            return _state;
        };
    },
    applyMiddleware(...args) {
        const middlewears = arguments;
        return (store, dispatch) => {
            for (let i = middlewears.length - 1; i >= 0; i--) {
                const middlewear = middlewears[i];
                dispatch = middlewear(store)(dispatch);
            }
            return dispatch;
        };
    }
};
function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0;
    }
    console.log('state', state);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
function calculate(state = 0, action) {
    switch (action.type) {
        case 'SUM':
            return action.payload[0] + action.payload[1];
            break;
        case 'REDUCE':
            state = action.payload[0] - action.payload[1];
            return state;
            break;
        default:
            return state;
            break;
    }
}
const reducers = Redux.combineReducers({
    counter,
    calculate
});
function loggiong1(store) {
    return function (next) {
        return function (action) {
            console.log('store', store);
            console.log('dispatch1 before', store.getState());
            const result = next(action);
            console.log('dispatch1 after', store.getState());
            return result;
        };
    };
}
function loggiong2(store) {
    return function (next) {
        return function (action) {
            console.log('dispatch2 before', store.getState());
            const result = next(action);
            console.log('dispatch2 after', store.getState());
            return result;
        };
    };
}
// const loggiong = (store) => (next) => (action) => {
//     console.log('dispatch1 before')
//     console.log('next', next)
//     console.log('this', this)
//     const result = next(action)
//     console.log('dispatch2 after')
//     return result
// }
const store = Redux.createStore(reducers, {
    counter: 0,
    calculate: 0,
}, Redux.applyMiddleware(loggiong1, loggiong2));
console.log(store.getState());
const unSub1 = store.subscribe(() => {
    console.log('sub1');
});
const unSub2 = store.subscribe(() => {
    console.log('sbu2');
});
unSub2();
store.subscribe(() => {
    console.log('sub3');
});
const sub4 = store.subscribe(() => {
    console.log('sub4');
});
unSub1();
store.dispatch({
    type: 'INCREMENT',
});
// store.dispatch({ type: 'SUM', payload: [3, 6] })
console.log(store.getState());
export {};
// const loggiong2 = (store) => (next) => (action) => {
//     console.log('dispatch3 before')
//     const result = next(action)
//     console.log('dispatch4 after')
//     return result
// }
// let dispatch = () => {
//     console.log('dispatch');
// }
// const apply = (func1, func2) => {
//     dispatch = func1('1')(dispatch)
//     dispatch = func2('1')(dispatch)
//     return dispatch
// }
// apply(loggiong, loggiong2)
