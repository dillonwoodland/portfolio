import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobileComponent } from './projects/mobile/mobile.component';
import { Angular1Component } from './projects/angular1/angular1.component';
import { AjaxComponent } from './projects/ajax/ajax.component';
import { Angular2Component } from './projects/angular2/angular2.component';
import { ToyOperatingSystemComponent } from './projects/toy-operating-system/toy-operating-system.component';
import { MultiThreadingComponent } from './projects/multi-threading/multi-threading.component';
import { CliCComponent } from './projects/cli-c/cli-c.component';
import { StdmComponent } from './projects/stdm/stdm.component';
import { TcpUdpComponent } from './projects/tcp-udp/tcp-udp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    MobileComponent,
    Angular1Component,
    AjaxComponent,
    Angular2Component,
    ToyOperatingSystemComponent,
    MultiThreadingComponent,
    CliCComponent,
    StdmComponent,
    TcpUdpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
