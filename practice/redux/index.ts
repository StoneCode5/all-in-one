// TODO state的初始值怎么设置 null不兼容

// TODO 开发一个libarary的脚手架与流程

import { Action, Listenners, ReducersWithKeys } from "./types";
import { func } from "./types/utils";

class Store<T> {
    private state: T | null
    private reducer: (state: T, action: Action) => T
    private listeners: Listenners[]
    private listenerCount: number

    constructor(reducer: (state: T, action?: Action) => T, initialState: T) {
        this.state = null
        this.reducer = reducer
        // 其实可以用链表来设计，
        this.listeners = []
        this.listenerCount = 0
        if (initialState) {
            this.state = initialState
        } else {
            // this.state = reducer('', {type; '1'})
        }
    }

    getState() {
        return this.state
    }

    dispatch(action: Action) {
        // TODO 判断有问题 如果state为0 就不行
        if (this.state) {
            this.state = this.reducer(this.state, action)
            this.listeners.forEach((item) => {
                item.listener()
            })
        } else {
            throw Error('state not exit')
        }
    }

    subscribe(listener: func) {
        if (typeof listener === 'function') {

            // const currentIndex = this.listeners.length - 1
            const currentId = this.listenerCount += 1
            this.listeners.push({
                id: this.listenerCount,
                listener
            })

            const unsubscribe = () => {
                const currentListenerIndex = this.listeners.findIndex((item) => item.id === currentId)
                
                if (~currentListenerIndex) {
                    this.listeners.splice(currentListenerIndex, 1)
                }
            }

            return unsubscribe
        }
        return () => {}
    }
}

const Redux = {
    createStore<T>(reducer: any, initialState: T) {
        return new Store(reducer, initialState)
    },
    combineReducers(reducersWithKeys:ReducersWithKeys) {
        const _state:Record<string, unknown> = {}
        Object.entries(reducersWithKeys).forEach(([key, reducer]) => {
            // TODO 这里用空字符串可能有问题， 开发者也可能会使用‘’？
            _state[key] = reducer('', {type: ''})
        })
    },

    applyMiddleware() {

    }
}

function counter(state: any, action: any) {
    if (typeof state === 'undefined') {
        return 0
    }
    console.log('state', state);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = Redux.createStore(counter, 1)

const unSub1 = store.subscribe(() => {
    console.log('sub1');
    
})

const unSub2 = store.subscribe(() => {
    console.log('sbu2');
})

unSub2()

store.subscribe(() => {
    console.log('sub3');
})

const sub4 = store.subscribe(() => {
    console.log('sub4');
})

unSub1()

store.dispatch({
    type: 'INCREMENT',
})



