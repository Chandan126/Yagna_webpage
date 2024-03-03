import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfilePictureDataComponent } from './profile-picture-data/profile-picture-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProfilePictureComponent,
    ProfilePictureDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
