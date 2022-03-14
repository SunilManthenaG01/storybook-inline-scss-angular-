import { ChangeDetectionStrategy, ChangeDetectorRef, Compiler, Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    @use 'sass:map';
    $weights: ("light": 300, "medium": 500);
      h1{
        font-weight: map-get($weights , 'light' );
      }


    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'jasmine-test';

  constructor() {

  }

}
