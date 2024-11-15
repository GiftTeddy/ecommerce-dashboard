import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  paginate(array: any[], pageSize: number, pageNumber: number) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
}
