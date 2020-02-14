import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {
  @Input('var-filho') varFilho:string;
  @Output() paraPai = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onClickParaPai(){
    this.paraPai.emit();
  }

}
