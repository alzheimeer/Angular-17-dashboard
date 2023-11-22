import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title [title]="labelName()"></app-title>
  @if(user()){
    <section>
      <img src="" alt="user()!.first_name" [srcset]="user()!.avatar">

      <div>
        <h3>{{user()!.first_name}}{{user()!.last_name}}</h3>
        <p>{{user()!.email}}</p>
      </div>
    </section>
  }@else {
    <p>Cargando ...</p>
  }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // toSignal toma un observable y regresa una señal
  user = toSignal(
    this.route.params.pipe(
       switchMap(({id}) => this.usersService.getUserById(id))
    )
  );


  labelName = computed(() => {
    const user = this.user();
    return user ? `${user.first_name} ${user.last_name}` : 'Cargando...';
  });



 }
