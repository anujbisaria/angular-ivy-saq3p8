import { Component, VERSION } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddEditTaskComponent } from "../add-edit-task/add-edit-task.component";

@Component({
  selector: "my-daily-task-manager",
  templateUrl: "./daily-task-manager.component.html",
  styleUrls: ["./daily-task-manager.component.scss"]
})
export class DailyTaskManagerComponent {
  name = "Angular " + VERSION.major;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      width: "500px",
      height: "390px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
