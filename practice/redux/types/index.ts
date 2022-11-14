import { func } from "./utils"

interface ActionOnlyType {
    type: string
}

type ActionAny = ActionOnlyType & {
    [index: string]: any
}

// TODO Action Type
export  type Action<T extends ActionOnlyType = ActionAny> = T

export type Listenners = {
    id: number
    listener: func
}
export type Reducer<T = unknown> = (state: T, action: Action) => T

export type ReducersWithKeys = {
    [index: string]:Reducer
}

