import { Component, OnInit, Input } from "@angular/core";
import { Result } from "../result";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input()
  result: Result;
  flatResult: string;
  constructor() {}

  ngOnInit(): void {
    this.flatten();
  }

  flatten(): void {
    this.flatResult = JSON.stringify(this.result);
  }
}
