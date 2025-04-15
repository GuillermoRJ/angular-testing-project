import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: string[] = [];
  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    console.log('Adding task:', task);
    
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }


  respuesta:string="";
  actualizacion:string="";
}
