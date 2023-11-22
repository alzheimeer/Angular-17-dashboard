import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `

    <app-title [title]="currentFramework()" />

    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {

  currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }


  constructor(){
    setTimeout(() => {
      // forma 1
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))
      // forma 2
      // this.frameworkAsSignal.update(value => {
      //   value.name = 'React';
      //   return {...value}
      // })
      console.log('Hecho');
    }, 3000);
  }
 }
