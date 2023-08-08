import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  title = 'Students Marks'; 

  userList: any[] = [
    { name: 'Ashjan', email: 'ashjan@email.com', mark: 80},
    { name: 'Amal', email: 'amal@email.com', mark: 42},
  ]

}

