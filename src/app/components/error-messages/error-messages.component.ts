import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {
  @Input() errors: any;
  constructor() {}

  ngOnInit() {}
}
