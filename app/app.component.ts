import { Component, ViewChild } from '@angular/core';
import { products } from './products';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddEvent, EditEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

const formGroup = dataItem => new FormGroup({
    'Discontinued': new FormControl(dataItem.Discontinued),
    'ProductID': new FormControl(dataItem.ProductID),
    'ProductName': new FormControl(dataItem.ProductName, Validators.required),
    'UnitPrice': new FormControl(dataItem.UnitPrice),
    'UnitsInStock': new FormControl(dataItem.UnitsInStock,
    Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    'disable': new FormControl(dataItem.disable),
 
});


@Component({
    selector: 'my-app',
    template: `
    <mat-card class="mat-elevation-z8" mat>
    <mat-card-header>
      <mat-card-title>Notifications</mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <kendo-grid [data]="gridData" [height]="410" >
            <kendo-grid-column field="ProductID" title="ID" width="60">
              <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
                <span>
              <a #anchor  [ngClass]="{'blink': dataItem.disable}" (click)="onClick(rowIndex, dataItem)">dfg</a>
          </span> 
              </ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
        </kendo-grid>

        <kendo-popup [anchor]="anchor" [anchorAlign]="anchorAlign" [popupAlign]="popupAlign" *ngIf="show" style="    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
top: 0px;">
        <div >
          <mat-card class="mat-card-notification">
                 
                    <mat-card-content>
                    <h3>FIS Capital Partner | </h3><br>
                    Action Required: Capital call<br>
                    Amount: $250000<br>
                    change Date: XXXXXXXXXXX<br>
                    Initiator: Jem<br>

                    <textarea class="text-area-full-width" matInput placeholder="Add note here.." ></textarea>
                    </mat-card-content>
                </mat-card>
        </div>
</kendo-popup>
         </mat-card-content>
 
  </mat-card>
   
      
    `,
     styles: [`
      .blink { background-color: blue; animation: blinker 1s linear infinite;  }       @keyframes blinker {
                100% {
                  opacity: 0;
                }
                },
                .overlay1 {
                      position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0px;
                }
                .k-popup {
                  width: 500px;
    float: right;
                }
                `
            ],
})
export class AppComponent {
   public state: State = {
        skip: 0,
        take: 10
    };
    public gridData: GridDataResult = process(products, this.state);
    

      @ViewChild(GridComponent) private grid: GridComponent;
   public formGroup: FormGroup;

    disable = true;
show = false;
  private anchorAlign: Align = { horizontal: "right", vertical: "bottom" };
    private popupAlign: Align = { horizontal: "left", vertical: "top" };

onClick(index: number, data:any){
  this.disable = !this.disable;
     this.show = !this.show;
     data.disable = false;
    this.gridData = process(products, this.state);
     console.log(index);
}
}
