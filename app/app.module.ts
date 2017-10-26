import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BrewListComponent }  from './brew-list.component';
import { NewBrewComponent }  from './new-brew.component';
import { EditBrewComponent }  from './edit-brew.component';
import { LevelPipe } from './level.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  BrewListComponent,
                  NewBrewComponent,
                  EditBrewComponent,
                  LevelPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
