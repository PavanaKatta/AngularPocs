import { Component, Input } from '@angular/core';
@Component({
    selector: 'overlay-app',
    template: `
      <span>
              <button #anchor kendoButton [icon]="'folder'" [primary]="true" [ngClass]="{'blink': input.ProductID > 3 && disable}" (click)="onClick()"></button>
      </span> 
    

 <kendo-popup [anchor]="anchor" [anchorAlign]="anchorAlign" [popupAlign]="popupAlign" *ngIf="show" class="overlay">
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

    `,
      styles: [`
      .blink { background-color: blue; animation: blinker 1s linear infinite;  }       
      @keyframes blinker { 100% { opacity: 0; } }
      .overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  z-index: 10;
  top: 0px !important;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}`
            ],
})

export class OverlayComponent{
@Input() input;
disable = true;
show = false;
  private anchorAlign: Align = { horizontal: "right", vertical: "bottom" };
    private popupAlign: Align = { horizontal: "left", vertical: "top" };

onClick(){
  this.disable = !this.disable;
     this.show = !this.show;
}
}