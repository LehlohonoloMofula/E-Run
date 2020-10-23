import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'error404',
    template: `
    <h1>{{errorMessage}}</h1>
    `,
    styles : []
})
export class Error404Component {
    title: string = 'Error 404';
    errorMessage: string = 'Page Not Found'

}