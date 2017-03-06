import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courses: Add_course[];

  
  constructor() { 
    this.courses= [
     {text: 'Course1'},
     {text: 'Course2'},
     {text: 'Course3'}
    ];
  }
  
 saveCourse(newCourse: String) {
   this.courses.push({
      text: newCourse
    });
  }
  }

export class Add_course {
  text: String;
}