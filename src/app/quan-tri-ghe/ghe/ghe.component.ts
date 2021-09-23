import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css'],
})
export class GheComponent implements OnInit {
  status: boolean = false;
  @Input() itemGhe!: itemGhe;
  @Output() emitStatus = new EventEmitter();
  constructor() {}
  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }

    this.emitStatus.emit(this.status);
  }
  ngOnInit(): void {}
}
interface itemGhe {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
