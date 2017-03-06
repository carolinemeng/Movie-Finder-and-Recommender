import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {CoursesService} from '../courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
  
 
})
export class CoursesComponent implements OnInit {
    title = "The title of courses page";
    newCourse = 'Sample course';
    Course: CoursesService;
    
    courses;
    constructor(courseService: CoursesService) {
    this.Course = courseService;
    }
    
    ngOnInit() {
    }
    saveCourse() {
    this.Course.saveCourse(this.newCourse);
    this.newCourse= '';
  }
}
