import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    constructor(private httpClient: HttpClient) {
    }

    valid() {
        this.get();
    }

    invalid() {
        this.get('12');
    }

    private get(endpoint = '') {
        this.httpClient.get(`https://jsonplaceholder.typicode.com/users${endpoint}`)
            .subscribe(success => {
                    console.log('Successfully Completed');
                    console.log(success);
                }
            );
    }
}
