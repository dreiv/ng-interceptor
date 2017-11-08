import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>hello world!</h1>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
