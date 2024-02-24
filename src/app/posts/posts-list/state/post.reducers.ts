import { Action, createReducer, on } from "@ngrx/store";
import { PostState, initialState } from "./post.state";
import { addPost } from "./post.actions";
import { state } from "@angular/animations";

const _postReducer = createReducer(initialState, 
    on(addPost, (state, action) => {

        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();

        return {
            ...state,
            posts: [...state.posts, post]
        }
    })
)


export function postsReducer(state: PostState | undefined, action: Action) {
    return _postReducer(state, action);
}