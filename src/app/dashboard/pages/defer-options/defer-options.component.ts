import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    HeavyLoadersFastComponent
  ],
  template: `
  <app-title title="Defer Triggers" />

  <h1 class="text-xl">Intercacciones</h1>

  <section>
    <hr class="my-2">
    @defer(on interaction){
      <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
        <span>On Interactions</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
        click en el div
      </div>
    }

  </section>

  <section>
    <hr class="my-2">
    <button #btnInteraction class="p-2 bg-blue-500 hover:bg-blue-700 transition-all rounded text-white my-2">
      Click me
    </button>
    @defer(on interaction(btnInteraction)){
      <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
        <span>On Interactions</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
        placeholder div
      </div>
    }

  </section>

  <section>
    <hr class="my-2">
    @defer(on hover()){
      <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
        <span>On Interactions</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
        placeholder div
      </div>
    }

  </section>


  <section>
    <hr class="my-2">
    @defer(on immediate()){
      <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
        <span>On immediate</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
        placeholder div
      </div>
    }

  </section>
  <section>
    <hr class="my-2">
    @defer(on timer(2000)){
      <app-heavy-loaders-fast cssClass="bg-green-500 h-20">
        <span>On timer</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
        2 segundos
      </div>
    }

  </section>
  <section>
    <hr class="my-2">
    @defer(on hover; prefetch on idle){
      <app-heavy-loaders-fast cssClass="bg-red-500 h-20">
        <span>On hover, idle</span>
      </app-heavy-loaders-fast>
    }@placeholder {
      <div class="w-full h-20 bg-purple-100">
       Hover
      </div>
    }

  </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferOptionsComponent {


 }
