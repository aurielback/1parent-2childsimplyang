import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './app/counter/state/counter.reducer';
import { routes } from './app/app.routes';
import { AppRoutingModule } from './app/app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { postsReducer } from './app/posts/posts-list/state/post.reducers';
import { appReducer } from './app/store/app.state';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      StoreModule.forRoot(appReducer),
      AppRoutingModule,
      HttpClientModule 
    ),
  ]
}).catch(err => console.error(err));