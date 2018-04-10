import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  // CATEGORY API CALLS
  // https://opentdb.com/api.php?amount=5&category={{randomCategory}}&difficulty=easy&type=multiple


}

$(document).ready(function() {

  let randomCategory = Math.floor(Math.random() * 24) + 9;

  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    console.log(response.results[0]);
    $("#results").text($("<div/>").html(response.results[0].question).text());
  }).fail(function(error) {
  console.log(error);
});

});
