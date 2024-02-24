import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterParentComponent } from "./counter/counter-parent/counter-parent.component";
import { PostsListComponent } from "./posts/posts-list/post-list/posts-list.component";
import { AddPostComponent } from "./posts/posts-list/add-post/add-post.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        component: CounterParentComponent
    },
    {
        path: 'posts',
        component: PostsListComponent,
        children: [
            {
                path: 'add',
                component: AddPostComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}