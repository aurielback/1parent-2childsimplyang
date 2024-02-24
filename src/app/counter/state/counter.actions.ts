import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction(
    'customIncrement',
     props<{count: number | undefined}>()
);

export const changeMessage = createAction(
    'changeMessage',
    props<{message: string | undefined}>()
);