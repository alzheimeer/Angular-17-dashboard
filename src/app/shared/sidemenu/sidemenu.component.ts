import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
          <div id="menu" class="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll">
            <div id="logo" class="my-4 px-6">
              <h1 class="text-lg md:text-2xl font-bold text-white">Dash<span class="text-blue-500">8</span>.</h1>
              <p class="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" class="px-6 py-10">
              <p class="text-slate-500">Welcome back,</p>
              <a href="#" class="inline-flex space-x-2 items-center">
                <span>
                  <img class="rounded-full w-8 h-8"
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                    alt="">
                </span>
                <span class="text-sm md:text-base font-bold">
                  Edward Tompson
                </span>
              </a>
            </div>
            <div id="nav" class="w-full px-6">


              @for(item of menuItems; track $index) {
                <a
                  [routerLink]="item.path"
                  routerLinkActive="bg-blue-800"
                  class="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">

                  <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 text-white">{{item.title}}</span>
                    <span class="text-sm  text-white/50 md:block">{{item.title}}</span>
                  </div>
                </a>
              }


            </div>
          </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

  menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))




 }
