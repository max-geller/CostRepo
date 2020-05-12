import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hci-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  email: string;
  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
