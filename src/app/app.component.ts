import { ChangeDetectionStrategy, ChangeDetectorRef, Compiler, Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    @use 'sass:map';

      h1{
        color: red;
        font-weight: map-get($weights , 'light' );
      }


    `
  ],
  // styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'jasmine-test';

  constructor() {

  }

}
