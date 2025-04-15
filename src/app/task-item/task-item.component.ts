import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() tasks: any;
  @Input() string: string = "";
  @Output() newTask = new EventEmitter<void>();

  addTask(task: string) {
    this.tasks.addTask(this.string);
    this.updateTask();
    this.string = "";
  }
  
  
  updateTask() {
    this.newTask.emit();
  }

  deleteTask(task: string) {}
}
