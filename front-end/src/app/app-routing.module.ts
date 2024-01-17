import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MobileComponent } from './projects/mobile/mobile.component';
import { Angular1Component } from './projects/angular1/angular1.component';
import { AjaxComponent } from './projects/ajax/ajax.component';
import { Angular2Component } from './projects/angular2/angular2.component';
import { ToyOperatingSystemComponent } from './projects/toy-operating-system/toy-operating-system.component';
import { MultiThreadingComponent } from './projects/multi-threading/multi-threading.component';
import { CliCComponent } from './projects/cli-c/cli-c.component';
import { TcpUdpComponent } from './projects/tcp-udp/tcp-udp.component';
import { StdmComponent } from './projects/stdm/stdm.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Projects',
    component: ProjectsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Mobile',
    component: MobileComponent
  },
  {
    path: 'Angular-AJAX',
    component: Angular1Component
  },
  {
    path: 'AJAX',
    component: AjaxComponent
  },
  {
    path: 'Angular',
    component: Angular2Component
  },
  {
    path: 'OS',
    component: ToyOperatingSystemComponent
  },
  {
    path: 'Multi-threading',
    component: MultiThreadingComponent
  },
  {
    path: 'CLI',
    component: CliCComponent
  },
  {
    path: 'TCP-UDP',
    component: TcpUdpComponent
  },
  {
    path: 'STDM',
    component: StdmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
