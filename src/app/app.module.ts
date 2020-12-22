import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DailyTaskManagerComponent } from "./components/daily-task-manager/daily-task-manager.component";
import { AddEditTaskComponent } from "./components/add-edit-task/add-edit-task.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [AppComponent, DailyTaskManagerComponent, AddEditTaskComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddEditTaskComponent]
})
export class AppModule {}
