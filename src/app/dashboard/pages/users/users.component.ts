import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule
  ],
  template: `
  <app-title title="Listado De Usuarios"></app-title>

  <ul>
    @for (user of usersServices.users(); track user.id){
      <li class="flex items-center my-2 cursor-pointer">
        <img
            [srcset]="user.avatar"
            [alt]="user.first_name"
            class="rounded w-14"
          />
        <a
          [routerLink]="['/dashboard/user', user.id]"
          class="mx-5 hover: underline"
        >
          {{user.first_name}} {{user.last_name}}
        </a>
      </li>
    }@empty {
      Esperando Data
    }
  </ul>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {

  public usersServices = inject( UsersService);



 }
