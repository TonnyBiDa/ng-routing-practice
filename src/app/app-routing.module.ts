import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {UserComponent} from './users/user/user.component';

const myRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},
  // when we add child route, we need to add router-outlet in the parent html of this child html.
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent},
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
  // set a not found url by using "**" in the path, Notice: the path: '**' need to be the last one of all paths.
];


@NgModule({
  imports: [
    RouterModule.forRoot(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
