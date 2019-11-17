import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public turn: number = 1;
  public winvar: number = -1;

  fillcol1() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a1 = document.getElementById("a1");
    var currentClassa1 = a1.className;
    var b1 = document.getElementById("b1");
    var currentClassb1 = b1.className;
    var c1 = document.getElementById("c1");
    var currentClassc1 = c1.className;
    var d1 = document.getElementById("d1");
    var currentClassd1 = d1.className;
    var e1 = document.getElementById("e1");
    var currentClasse1 = e1.className;
    var f1 = document.getElementById("f1");
    var currentClassf1 = f1.className;

    if (
      this.winvar == -1 &&
      currentClassa1 == "defaultclass" &&
      currentClassb1 == "defaultclass" &&
      currentClassc1 == "defaultclass" &&
      currentClassd1 == "defaultclass" &&
      currentClasse1 == "defaultclass" &&
      currentClassf1 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f1.className = currentClassf1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        f1.className = currentClassf1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa1 == "defaultclass" &&
      currentClassb1 == "defaultclass" &&
      currentClassc1 == "defaultclass" &&
      currentClassd1 == "defaultclass" &&
      currentClasse1 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e1.className = currentClasse1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        e1.className = currentClasse1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa1 == "defaultclass" &&
      currentClassb1 == "defaultclass" &&
      currentClassc1 == "defaultclass" &&
      currentClassd1 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d1.className = currentClassd1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        d1.className = currentClassd1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa1 == "defaultclass" &&
      currentClassb1 == "defaultclass" &&
      currentClassc1 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c1.className = currentClassc1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        c1.className = currentClassc1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa1 == "defaultclass" &&
      currentClassb1 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b1.className = currentClassb1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        b1.className = currentClassb1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa1 == "defaultclass") {
      if (this.turn == 1) {
        a1.className = currentClassa1 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        a1.className = currentClassa1 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }

  fillcol2() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a2 = document.getElementById("a2");
    var currentClassa2 = a2.className;
    var b2 = document.getElementById("b2");
    var currentClassb2 = b2.className;
    var c2 = document.getElementById("c2");
    var currentClassc2 = c2.className;
    var d2 = document.getElementById("d2");
    var currentClassd2 = d2.className;
    var e2 = document.getElementById("e2");
    var currentClasse2 = e2.className;
    var f2 = document.getElementById("f2");
    var currentClassf2 = f2.className;

    if (
      this.winvar == -1 &&
      currentClassa2 == "defaultclass" &&
      currentClassb2 == "defaultclass" &&
      currentClassc2 == "defaultclass" &&
      currentClassd2 == "defaultclass" &&
      currentClasse2 == "defaultclass" &&
      currentClassf2 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f2.className = currentClassf2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";
        this.turn = this.turn + 1;
      } else {
        f2.className = currentClassf2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa2 == "defaultclass" &&
      currentClassb2 == "defaultclass" &&
      currentClassc2 == "defaultclass" &&
      currentClassd2 == "defaultclass" &&
      currentClasse2 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e2.className = currentClasse2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e2.className = currentClasse2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa2 == "defaultclass" &&
      currentClassb2 == "defaultclass" &&
      currentClassc2 == "defaultclass" &&
      currentClassd2 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d2.className = currentClassd2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d2.className = currentClassd2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa2 == "defaultclass" &&
      currentClassb2 == "defaultclass" &&
      currentClassc2 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c2.className = currentClassc2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c2.className = currentClassc2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa2 == "defaultclass" &&
      currentClassb2 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b2.className = currentClassb2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b2.className = currentClassb2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa2 == "defaultclass") {
      if (this.turn == 1) {
        a2.className = currentClassa2 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a2.className = currentClassa2 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }

  fillcol3() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a3 = document.getElementById("a3");
    var currentClassa3 = a3.className;
    var b3 = document.getElementById("b3");
    var currentClassb3 = b3.className;
    var c3 = document.getElementById("c3");
    var currentClassc3 = c3.className;
    var d3 = document.getElementById("d3");
    var currentClassd3 = d3.className;
    var e3 = document.getElementById("e3");
    var currentClasse3 = e3.className;
    var f3 = document.getElementById("f3");
    var currentClassf3 = f3.className;

    if (
      this.winvar == -1 &&
      currentClassa3 == "defaultclass" &&
      currentClassb3 == "defaultclass" &&
      currentClassc3 == "defaultclass" &&
      currentClassd3 == "defaultclass" &&
      currentClasse3 == "defaultclass" &&
      currentClassf3 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f3.className = currentClassf3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        f3.className = currentClassf3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa3 == "defaultclass" &&
      currentClassb3 == "defaultclass" &&
      currentClassc3 == "defaultclass" &&
      currentClassd3 == "defaultclass" &&
      currentClasse3 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e3.className = currentClasse3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e3.className = currentClasse3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa3 == "defaultclass" &&
      currentClassb3 == "defaultclass" &&
      currentClassc3 == "defaultclass" &&
      currentClassd3 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d3.className = currentClassd3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d3.className = currentClassd3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa3 == "defaultclass" &&
      currentClassb3 == "defaultclass" &&
      currentClassc3 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c3.className = currentClassc3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c3.className = currentClassc3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa3 == "defaultclass" &&
      currentClassb3 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b3.className = currentClassb3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b3.className = currentClassb3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa3 == "defaultclass") {
      if (this.turn == 1) {
        a3.className = currentClassa3 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a3.className = currentClassa3 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }
  fillcol4() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a4 = document.getElementById("a4");
    var currentClassa4 = a4.className;
    var b4 = document.getElementById("b4");
    var currentClassb4 = b4.className;
    var c4 = document.getElementById("c4");
    var currentClassc4 = c4.className;
    var d4 = document.getElementById("d4");
    var currentClassd4 = d4.className;
    var e4 = document.getElementById("e4");
    var currentClasse4 = e4.className;
    var f4 = document.getElementById("f4");
    var currentClassf4 = f4.className;

    if (
      this.winvar == -1 &&
      currentClassa4 == "defaultclass" &&
      currentClassb4 == "defaultclass" &&
      currentClassc4 == "defaultclass" &&
      currentClassd4 == "defaultclass" &&
      currentClasse4 == "defaultclass" &&
      currentClassf4 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f4.className = currentClassf4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        f4.className = currentClassf4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa4 == "defaultclass" &&
      currentClassb4 == "defaultclass" &&
      currentClassc4 == "defaultclass" &&
      currentClassd4 == "defaultclass" &&
      currentClasse4 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e4.className = currentClasse4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e4.className = currentClasse4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa4 == "defaultclass" &&
      currentClassb4 == "defaultclass" &&
      currentClassc4 == "defaultclass" &&
      currentClassd4 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d4.className = currentClassd4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d4.className = currentClassd4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa4 == "defaultclass" &&
      currentClassb4 == "defaultclass" &&
      currentClassc4 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c4.className = currentClassc4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c4.className = currentClassc4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa4 == "defaultclass" &&
      currentClassb4 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b4.className = currentClassb4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b4.className = currentClassb4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa4 == "defaultclass") {
      if (this.turn == 1) {
        a4.className = currentClassa4 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a4.className = currentClassa4 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }
  fillcol5() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a5 = document.getElementById("a5");
    var currentClassa5 = a5.className;
    var b5 = document.getElementById("b5");
    var currentClassb5 = b5.className;
    var c5 = document.getElementById("c5");
    var currentClassc5 = c5.className;
    var d5 = document.getElementById("d5");
    var currentClassd5 = d5.className;
    var e5 = document.getElementById("e5");
    var currentClasse5 = e5.className;
    var f5 = document.getElementById("f5");
    var currentClassf5 = f5.className;

    if (
      currentClassa5 == "defaultclass" &&
      currentClassb5 == "defaultclass" &&
      currentClassc5 == "defaultclass" &&
      currentClassd5 == "defaultclass" &&
      currentClasse5 == "defaultclass" &&
      currentClassf5 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f5.className = currentClassf5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        f5.className = currentClassf5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa5 == "defaultclass" &&
      currentClassb5 == "defaultclass" &&
      currentClassc5 == "defaultclass" &&
      currentClassd5 == "defaultclass" &&
      currentClasse5 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e5.className = currentClasse5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e5.className = currentClasse5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa5 == "defaultclass" &&
      currentClassb5 == "defaultclass" &&
      currentClassc5 == "defaultclass" &&
      currentClassd5 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d5.className = currentClassd5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d5.className = currentClassd5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa5 == "defaultclass" &&
      currentClassb5 == "defaultclass" &&
      currentClassc5 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c5.className = currentClassc5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c5.className = currentClassc5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa5 == "defaultclass" &&
      currentClassb5 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b5.className = currentClassb5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b5.className = currentClassb5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa5 == "defaultclass") {
      if (this.turn == 1) {
        a5.className = currentClassa5 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a5.className = currentClassa5 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }
  fillcol6() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a6 = document.getElementById("a6");
    var currentClassa6 = a6.className;
    var b6 = document.getElementById("b6");
    var currentClassb6 = b6.className;
    var c6 = document.getElementById("c6");
    var currentClassc6 = c6.className;
    var d6 = document.getElementById("d6");
    var currentClassd6 = d6.className;
    var e6 = document.getElementById("e6");
    var currentClasse6 = e6.className;
    var f6 = document.getElementById("f6");
    var currentClassf6 = f6.className;

    if (
      currentClassa6 == "defaultclass" &&
      currentClassb6 == "defaultclass" &&
      currentClassc6 == "defaultclass" &&
      currentClassd6 == "defaultclass" &&
      currentClasse6 == "defaultclass" &&
      currentClassf6 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f6.className = currentClassf6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        f6.className = currentClassf6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa6 == "defaultclass" &&
      currentClassb6 == "defaultclass" &&
      currentClassc6 == "defaultclass" &&
      currentClassd6 == "defaultclass" &&
      currentClasse6 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e6.className = currentClasse6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e6.className = currentClasse6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa6 == "defaultclass" &&
      currentClassb6 == "defaultclass" &&
      currentClassc6 == "defaultclass" &&
      currentClassd6 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d6.className = currentClassd6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d6.className = currentClassd6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa6 == "defaultclass" &&
      currentClassb6 == "defaultclass" &&
      currentClassc6 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c6.className = currentClassc6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c6.className = currentClassc6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa6 == "defaultclass" &&
      currentClassb6 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b6.className = currentClassb6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b6.className = currentClassb6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa6 == "defaultclass") {
      if (this.turn == 1) {
        a6.className = currentClassa6 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a6.className = currentClassa6 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }
  fillcol7() {
    var container = document.getElementById("arrowcontainer");
    var currentClasscontainer = container.className;

    var a7 = document.getElementById("a7");
    var currentClassa7 = a7.className;
    var b7 = document.getElementById("b7");
    var currentClassb7 = b7.className;
    var c7 = document.getElementById("c7");
    var currentClassc7 = c7.className;
    var d7 = document.getElementById("d7");
    var currentClassd7 = d7.className;
    var e7 = document.getElementById("e7");
    var currentClasse7 = e7.className;
    var f7 = document.getElementById("f7");
    var currentClassf7 = f7.className;

    if (
      currentClassa7 == "defaultclass" &&
      currentClassb7 == "defaultclass" &&
      currentClassc7 == "defaultclass" &&
      currentClassd7 == "defaultclass" &&
      currentClasse7 == "defaultclass" &&
      currentClassf7 == "defaultclass"
    ) {
      if (this.turn == 1) {
        f7.className = currentClassf7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        f7.className = currentClassf7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa7 == "defaultclass" &&
      currentClassb7 == "defaultclass" &&
      currentClassc7 == "defaultclass" &&
      currentClassd7 == "defaultclass" &&
      currentClasse7 == "defaultclass"
    ) {
      if (this.turn == 1) {
        e7.className = currentClasse7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        e7.className = currentClasse7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa7 == "defaultclass" &&
      currentClassb7 == "defaultclass" &&
      currentClassc7 == "defaultclass" &&
      currentClassd7 == "defaultclass"
    ) {
      if (this.turn == 1) {
        d7.className = currentClassd7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        d7.className = currentClassd7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa7 == "defaultclass" &&
      currentClassb7 == "defaultclass" &&
      currentClassc7 == "defaultclass"
    ) {
      if (this.turn == 1) {
        c7.className = currentClassc7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        c7.className = currentClassc7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (
      this.winvar == -1 &&
      currentClassa7 == "defaultclass" &&
      currentClassb7 == "defaultclass"
    ) {
      if (this.turn == 1) {
        b7.className = currentClassb7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        b7.className = currentClassb7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    } else if (this.winvar == -1 && currentClassa7 == "defaultclass") {
      if (this.turn == 1) {
        a7.className = currentClassa7 = "redclass";
        container.className = currentClasscontainer = "bluecontainer";

        this.turn = this.turn + 1;
      } else {
        a7.className = currentClassa7 = "blueclass";
        container.className = currentClasscontainer = "redcontainer";
        this.turn = this.turn - 1;
      }
    }
    this.wincondition();
  }
  wincondition() {
    var a1 = document.getElementById("a1");
    var currentClassa1 = a1.className;
    var b1 = document.getElementById("b1");
    var currentClassb1 = b1.className;
    var c1 = document.getElementById("c1");
    var currentClassc1 = c1.className;
    var d1 = document.getElementById("d1");
    var currentClassd1 = d1.className;
    var e1 = document.getElementById("e1");
    var currentClasse1 = e1.className;
    var f1 = document.getElementById("f1");
    var currentClassf1 = f1.className;

    var a2 = document.getElementById("a2");
    var currentClassa2 = a2.className;
    var b2 = document.getElementById("b2");
    var currentClassb2 = b2.className;
    var c2 = document.getElementById("c2");
    var currentClassc2 = c2.className;
    var d2 = document.getElementById("d2");
    var currentClassd2 = d2.className;
    var e2 = document.getElementById("e2");
    var currentClasse2 = e2.className;
    var f2 = document.getElementById("f2");
    var currentClassf2 = f2.className;

    var a3 = document.getElementById("a3");
    var currentClassa3 = a3.className;
    var b3 = document.getElementById("b3");
    var currentClassb3 = b3.className;
    var c3 = document.getElementById("c3");
    var currentClassc3 = c3.className;
    var d3 = document.getElementById("d3");
    var currentClassd3 = d3.className;
    var e3 = document.getElementById("e3");
    var currentClasse3 = e3.className;
    var f3 = document.getElementById("f3");
    var currentClassf3 = f3.className;

    var a4 = document.getElementById("a4");
    var currentClassa4 = a4.className;
    var b4 = document.getElementById("b4");
    var currentClassb4 = b4.className;
    var c4 = document.getElementById("c4");
    var currentClassc4 = c4.className;
    var d4 = document.getElementById("d4");
    var currentClassd4 = d4.className;
    var e4 = document.getElementById("e4");
    var currentClasse4 = e4.className;
    var f4 = document.getElementById("f4");
    var currentClassf4 = f4.className;

    var a5 = document.getElementById("a5");
    var currentClassa5 = a5.className;
    var b5 = document.getElementById("b5");
    var currentClassb5 = b5.className;
    var c5 = document.getElementById("c5");
    var currentClassc5 = c5.className;
    var d5 = document.getElementById("d5");
    var currentClassd5 = d5.className;
    var e5 = document.getElementById("e5");
    var currentClasse5 = e5.className;
    var f5 = document.getElementById("f5");
    var currentClassf5 = f5.className;

    var a6 = document.getElementById("a6");
    var currentClassa6 = a6.className;
    var b6 = document.getElementById("b6");
    var currentClassb6 = b6.className;
    var c6 = document.getElementById("c6");
    var currentClassc6 = c6.className;
    var d6 = document.getElementById("d6");
    var currentClassd6 = d6.className;
    var e6 = document.getElementById("e6");
    var currentClasse6 = e6.className;
    var f6 = document.getElementById("f6");
    var currentClassf6 = f6.className;

    var a7 = document.getElementById("a7");
    var currentClassa7 = a7.className;
    var b7 = document.getElementById("b7");
    var currentClassb7 = b7.className;
    var c7 = document.getElementById("c7");
    var currentClassc7 = c7.className;
    var d7 = document.getElementById("d7");
    var currentClassd7 = d7.className;
    var e7 = document.getElementById("e7");
    var currentClasse7 = e7.className;
    var f7 = document.getElementById("f7");
    var currentClassf7 = f7.className;

    if (
      (currentClassa1 == "redclass" &&
        currentClassb1 == "redclass" &&
        currentClassc1 == "redclass" &&
        currentClassd1 == "redclass") ||
      (currentClassb1 == "redclass" &&
        currentClassc1 == "redclass" &&
        currentClassd1 == "redclass" &&
        currentClassd1 == "redclass") ||
      (currentClassc1 == "redclass" &&
        currentClassd1 == "redclass" &&
        currentClasse1 == "redclass" &&
        currentClassf1 == "redclass") ||
      (currentClassa2 == "redclass" &&
        currentClassb2 == "redclass" &&
        currentClassc2 == "redclass" &&
        currentClassd2 == "redclass") ||
      (currentClassb2 == "redclass" &&
        currentClassc2 == "redclass" &&
        currentClassd2 == "redclass" &&
        currentClassd2 == "redclass") ||
      (currentClassc2 == "redclass" &&
        currentClassd2 == "redclass" &&
        currentClasse2 == "redclass" &&
        currentClassf2 == "redclass") ||
      (currentClassa3 == "redclass" &&
        currentClassb3 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd3 == "redclass") ||
      (currentClassb3 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClassd3 == "redclass") ||
      (currentClassc3 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClasse3 == "redclass" &&
        currentClassf3 == "redclass") ||
      (currentClassa4 == "redclass" &&
        currentClassb4 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd4 == "redclass") ||
      (currentClassb4 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClassd4 == "redclass") ||
      (currentClassc4 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClasse4 == "redclass" &&
        currentClassf4 == "redclass") ||
      (currentClassa5 == "redclass" &&
        currentClassb5 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd5 == "redclass") ||
      (currentClassb5 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd5 == "redclass" &&
        currentClassd5 == "redclass") ||
      (currentClassc5 == "redclass" &&
        currentClassd5 == "redclass" &&
        currentClasse5 == "redclass" &&
        currentClassf5 == "redclass") ||
      (currentClassa6 == "redclass" &&
        currentClassb6 == "redclass" &&
        currentClassc6 == "redclass" &&
        currentClassd6 == "redclass") ||
      (currentClassb6 == "redclass" &&
        currentClassc6 == "redclass" &&
        currentClassd6 == "redclass" &&
        currentClassd6 == "redclass") ||
      (currentClassc6 == "redclass" &&
        currentClassd6 == "redclass" &&
        currentClasse6 == "redclass" &&
        currentClassf6 == "redclass") ||
      (currentClassa7 == "redclass" &&
        currentClassb7 == "redclass" &&
        currentClassc7 == "redclass" &&
        currentClassd7 == "redclass") ||
      (currentClassb7 == "redclass" &&
        currentClassc7 == "redclass" &&
        currentClassd7 == "redclass" &&
        currentClassd7 == "redclass") ||
      (currentClassc7 == "redclass" &&
        currentClassd7 == "redclass" &&
        currentClasse7 == "redclass" &&
        currentClassf7 == "redclass") ||
      (currentClassc1 == "redclass" &&
        currentClassd2 == "redclass" &&
        currentClasse3 == "redclass" &&
        currentClassf4 == "redclass") ||
      (currentClassb1 == "redclass" &&
        currentClassc2 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClasse4 == "redclass") ||
      (currentClassc2 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClasse4 == "redclass" &&
        currentClassf5 == "redclass") ||
      (currentClassa1 == "redclass" &&
        currentClassb2 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd4 == "redclass") ||
      (currentClassb2 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClasse5 == "redclass") ||
      (currentClassc3 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClasse5 == "redclass" &&
        currentClassf6 == "redclass") ||
      (currentClassa2 == "redclass" &&
        currentClassb3 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd5 == "redclass") ||
      (currentClassb3 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd5 == "redclass" &&
        currentClasse6 == "redclass") ||
      (currentClassc4 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClasse6 == "redclass" &&
        currentClassf7 == "redclass") ||
      (currentClassa3 == "redclass" &&
        currentClassb4 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd6 == "redclass") ||
      (currentClassb4 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd6 == "redclass" &&
        currentClasse7 == "redclass") ||
      (currentClassa4 == "redclass" &&
        currentClassb5 == "redclass" &&
        currentClassc6 == "redclass" &&
        currentClassd7 == "redclass") ||
      (currentClassc7 == "redclass" &&
        currentClassd6 == "redclass" &&
        currentClasse5 == "redclass" &&
        currentClassf4 == "redclass") ||
      (currentClassb7 == "redclass" &&
        currentClassc6 == "redclass" &&
        currentClassd5 == "redclass" &&
        currentClasse4 == "redclass") ||
      (currentClassc6 == "redclass" &&
        currentClassd5 == "redclass" &&
        currentClasse4 == "redclass" &&
        currentClassf3 == "redclass") ||
      (currentClassa7 == "redclass" &&
        currentClassb6 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd4 == "redclass") ||
      (currentClassb6 == "redclass" &&
        currentClassc5 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClasse3 == "redclass") ||
      (currentClassc5 == "redclass" &&
        currentClassd4 == "redclass" &&
        currentClasse3 == "redclass" &&
        currentClassf2 == "redclass") ||
      (currentClassa6 == "redclass" &&
        currentClassb5 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd3 == "redclass") ||
      (currentClassb5 == "redclass" &&
        currentClassc4 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClasse2 == "redclass") ||
      (currentClassc4 == "redclass" &&
        currentClassd3 == "redclass" &&
        currentClasse2 == "redclass" &&
        currentClassf1 == "redclass") ||
      (currentClassa5 == "redclass" &&
        currentClassb4 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd2 == "redclass") ||
      (currentClassb4 == "redclass" &&
        currentClassc3 == "redclass" &&
        currentClassd2 == "redclass" &&
        currentClasse1 == "redclass") ||
      (currentClassa4 == "redclass" &&
        currentClassb3 == "redclass" &&
        currentClassc2 == "redclass" &&
        currentClassd1 == "redclass")
    ) {
      this.winvar = 1;
      alert("red won");
    } else {
      this.winvar = -1;
      alert("blue won");
    }
  }
}
