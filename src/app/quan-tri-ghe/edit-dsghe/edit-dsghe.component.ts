import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css'],
})
export class EditDSGheComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) DSgheCom!: DanhSachGheComponent;
  constructor() {}
  themGheParent(...thamso: any[]) {
    let gheDuocThem: itemGhe = {
      TenGhe: thamso[0],
      SoGhe: parseInt(thamso[1]),
      Gia: parseInt(thamso[2]),
      TrangThai: thamso[3],
    };
    this.DSgheCom.ThemGhe(gheDuocThem);
  }
  ngOnInit(): void {}
}
interface itemGhe {
  TenGhe: string;
  SoGhe: number;
  Gia: number;
  TrangThai: boolean;
}
