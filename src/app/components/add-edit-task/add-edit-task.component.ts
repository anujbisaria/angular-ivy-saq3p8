import { Component, Inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "my-add-edit-task",
  templateUrl: "./add-edit-task.component.html",
  styleUrls: ["./add-edit-task.component.scss"]
})
export class AddEditTaskComponent implements OnInit {
  selectedDate = new Date();
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      id: new FormControl(Math.floor(Math.random() * 6 + 1)),
      taskTitle: new FormControl("", Validators.required),
      description: new FormControl(),
      priority: new FormControl(),
      date: new FormControl(new Date())
    });
    console.log(this.data);
  }

  get taskTitle(): AbstractControl {
    return this.taskForm.get("taskTitle");
  }
  onSelect(event) {
    this.selectedDate = event;
    this.taskForm.get("date").patchValue(event);
  }
}
