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

  const randomCategory = Math.floor(Math.random() * 24) + 9;

  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {

  console.log(response);
    $("#category-one").text($("<div/>").html(response.results[0].category).text());

  }).fail(function(error) {
  console.log(error);
});

});

$(document).ready(function() {

  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    if(response.results[0].category === ($("#category-one").val()))
    {
      alert("DUPLICATE!!");
    }
    else
    {
      $("#category-two").text($("<div/>").html(response.results[0].category).text());

    }


  }).fail(function(error) {
  console.log(error);
});
});

$(document).ready(function() {

  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    $("#category-three").text($("<div/>").html(response.results[0].category).text());

  }).fail(function(error) {
  console.log(error);
});
});

$(document).ready(function() {

  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    $("#category-four").text($("<div/>").html(response.results[0].category).text());

  }).fail(function(error) {
  console.log(error);
});
});

$(document).ready(function() {

  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    $("#category-five").text($("<div/>").html(response.results[0].category).text());

  }).fail(function(error) {
  console.log(error);
});
});
