import { Post } from "../../../models/post.model";

export interface PostState {
    posts: Post[];
}

export const initialState: PostState = {
    posts: [
        { id: '1', title:'TestTitle1', description: 'Sample Description 1'},
        { id: '2', title:'TestTitle2', description: 'Sample Description 2'},
    ]
}