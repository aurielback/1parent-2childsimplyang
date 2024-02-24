import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../../models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{

  postForm?: FormGroup ;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost() {
    const post: Post = {
      title: this.postForm?.value.title,
      description: this.postForm?.value.description
    };

    this.store.dispatch(addPost({ post }));
  }
}