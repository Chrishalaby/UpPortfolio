import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { RecommendComponent } from './recommend/recommend.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
