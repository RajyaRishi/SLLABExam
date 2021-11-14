import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {

  todo: any=[]

  constructor(private t:TodoServiceService) { }

  ngOnInit(): void {
    this.todo = this.t.getlist()
  }

}
