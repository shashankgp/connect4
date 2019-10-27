import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  fillcolor1() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor2() {
    var a2 = document.getElementById("a2");
    var currentClass = a2.className;
    a2.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor3() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor4() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor5() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor6() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolor7() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
  fillcolorb1() {
    var a1 = document.getElementById("a1");
    var currentClass = a1.className;
    a1.className = currentClass == "defaultclass" ? "redclass" : "blueclass";
  }
}
