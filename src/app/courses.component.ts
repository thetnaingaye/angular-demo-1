import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title | uppercase }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <table>
            <tr>
                <td attr.colspan="{{colSpan}}">test</td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
        <button class="btn" [class.btn-primary]="isActive" 
            [style.backgroundColor]="isActive ? 'blue':'while'"
            (click)="onSave($event)">Save</button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        `
})
export class CoursesComponent {

    title = "List of courses";
    courses;
    colSpan = 2;
    isActive = true;
    email = "me@example.com";

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onSave($event){
        console.log('button was clicked',$event);
        // $event.stopPropagation();
    }
    
    onDivClicked(){
        console.log("div was clicked");
    }

    onKeyUp(){
      console.log(this.email);
    }
}