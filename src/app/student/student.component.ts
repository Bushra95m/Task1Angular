import { Component } from '@angular/core';
interface student{
  name:string;
  email:string;
  marks:number;
  studentId:number;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student:student[]=[
 
    { name: 'Bushra', email: 'Bushra@gmail.com', marks: 55,studentId:1 },
    { name: 'Asma', email: 'Asma@gmail.com', marks: 30 ,studentId:2},
    { name: 'Mohammed', email: 'Mohammed@gmail.com', marks: 65,studentId:3 },
    { name: 'Reem', email: 'Reem@gmail.com', marks: 40 ,studentId:4},
    { name: 'Bushra', email: 'Bushra@gmail.com', marks: 95,studentId:5},
    { name: 'Abeer', email: 'Abeer@gmail.com', marks: 100 ,studentId:6},
    { name: 'Ali', email: 'Ali@gmail.com', marks: 65,studentId:7 },
    { name: 'Fatma', email: 'Fatma@gmail.com', marks: 10 ,studentId:8},


  ];
}
