import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeMessage, customIncrement, decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action): any => {
        return {
            ...state,
            counter: action.count
        }
    }),
    on(changeMessage, (state, action): any => {
        return {
            ...state,
            message: action.message
        }
    })
);

export function counterReducer(state: { counter: number, message: string } | undefined, action: Action) {
    return _counterReducer(state, action);
} 