import { Component } from '@angular/core';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent 
{
    employees:Employee[]=[{"id":1,"firstName":"Prasad","lastName":"Poojary","dob":new Date('1999-10-30'),"salary":1200,"email":"prasad@poojary.com"},
                         {"id":1,"firstName":"Mahesh","lastName":"Kulal","dob":new Date('1999-03-29'),"salary":2000,"email":"mahesh@kulal.com"},
                         {"id":1,"firstName":"Byte","lastName":"Buddy","dob":new Date('1999-10-23'),"salary":300,"email":"byte@buddy.com"},
                         {"id":1,"firstName":"Eshwar","lastName":"Ediga","dob":new Date('1999-11-14'),"salary":4400,"email":"Eshwar@ediga.com"}];
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
