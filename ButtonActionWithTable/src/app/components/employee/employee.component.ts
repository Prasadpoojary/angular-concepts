import { Component } from '@angular/core';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent 
{
    employee:Employee={"id":1,"firstName":"Prasad","lastName":"Poojary","dob":new Date('1999-10-23'),"salary":1000,"email":"prasad@poojary.com"};
    showEdit:boolean=false;


    EditEmp()
    {
        this.showEdit=true;
    }

    UpdateEmp()
    {
        this.showEdit=false;
    }
}
