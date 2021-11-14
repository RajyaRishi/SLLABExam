import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo: any=[]

  constructor(private t:TodoServiceService) { }

  ngOnInit(): void {
    this.todo = this.t.getlist()
  }
}
