import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroService} 		from './services/hero.service';

// NgModule is a decorator function that takes a single metadata object whose properties describe the module 
@NgModule({
  // the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent
  ],
  // other modules whose exported classes are needed by component templates declared in this module.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
  providers: [HeroService],
  // the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
  bootstrap: [AppComponent]
})
//the subset of declarations that should be visible and usable in the component templates of other modules.
export class AppModule { }
// Launch an application by bootstrapping its root module. During development you're likely to bootstrap the AppModule in a main.ts file like this one.
