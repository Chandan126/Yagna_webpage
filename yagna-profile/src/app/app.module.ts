import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfilePictureDataComponent } from './profile-picture-data/profile-picture-data.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeBuildComponent } from './resume-build/resume-build.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProfilePictureComponent,
    ProfilePictureDataComponent,
    AboutMeComponent,
    ResumeBuildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
