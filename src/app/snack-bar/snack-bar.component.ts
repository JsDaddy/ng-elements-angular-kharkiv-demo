import { MatSnackBar } from '@angular/material';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  encapsulation: ViewEncapsulation.Native
})
export class SnackBarComponent  {
  @Input('message')
  public set message(value: string) {
    this.snackBar.open(value, 'Undo', {
      duration: 5000,
    });
  }

  public constructor(public snackBar: MatSnackBar) {}
}
