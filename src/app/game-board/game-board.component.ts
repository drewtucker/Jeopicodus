import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { Question } from '../models/question.model';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';
import _ from 'lodash';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
}
// const gameBoard:GameBoardComponent = new GameBoardComponent();
//COLUMN 1 API CALL
$(document).ready(function() {
  let audio = new Audio('../../assets/Jeopardy - Think Music.mp3');
  let thisScore;
  let answers;
  let correctAnswer;
  const score = {
    score1:200,
    score2:400,
    score3:600,
    score4:800,
    score5:1000
  }
  let currentGame = new Game();
  $("#playerOneName").text(currentGame.playerOne);
  $("#playerTwoName").text(currentGame.playerTwo);
  $("#playerOneScore").text(currentGame.playerOneScore);
  $("#playerTwoScore").text(currentGame.playerTwoScore);
  // var currentGame = new Game();
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    // currentGame = new Game($("#player1name").val(), $("#player2name").val());
    this.playerOneName = $("#player1Name").val();
    this.playerTwoName = $("#player2Name").val();

  });
  var nums = [0,1,2,3];
  var catNums = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
  var gen_nums = [];
  function in_array(array, el) {
    for(var i = 0 ; i < array.length; i++)
    if(array[i] == el) return true;
    return false;
  }
  let i = 0;
  function get_rand(array) {
    console.log(i++)
    let rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
      gen_nums.push(rand);
      return rand;
    }
    return get_rand(array);
  }
  function randomQuestions(num) {
    return _.shuffle(num);
  }


  //******** API CALL #1 - FIRST COLUMN *******
  let promise1 = new Promise(function(resolve, reject) {
    let randomCategory = get_rand(catNums);
    let request = new XMLHttpRequest();
    let url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`;
    request.onload = function() {
      if(request.status === 200) {
        resolve(request.response);
        console.log(request.status);
      }
      else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();

  });
  promise1.then(function(response: any) {
    let body = JSON.parse(response);
    console.log(body.results)
    $("#category-one").text(body.results[0].category);


    $("#category-one-question-one").click(function() {
      thisScore = score.score1;

      let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

      let numArr = [0, 1, 2, 3];
      answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
      $("#question-box").text(question);
      correctAnswer = answers[0]
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-one-question-two").click(function() {
      thisScore = score.score2;
      let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-one-question-three").click(function() {
      thisScore = score.score3;
      let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-one-question-four").click(function() {
      thisScore = score.score4
      let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-one-question-five").click(function() {
      thisScore = score.score5;
      let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });
  });

  //******** API CALL #2 - SECOND COLUMN *******

  let promise2 = new Promise(function(resolve, reject) {
    let randomCategory = get_rand(catNums);;
    let request = new XMLHttpRequest();
    let url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`;
    request.onload = function() {
      if(request.status === 200) {
        resolve(request.response);
        console.log(request.status);
      }
      else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();

  });
  promise2.then(function(response: any) {
    let body = JSON.parse(response);
    console.log(body);
    $("#category-two").text(body.results[0].category);


    $("#category-two-question-one").click(function() {
      thisScore = score.score1;
      let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-two-question-two").click(function() {
      thisScore = score.score2;
      let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-two-question-three").click(function() {
      thisScore = score.score3;
      let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-two-question-four").click(function() {
      thisScore = score.score4
      let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-two-question-five").click(function() {
      thisScore = score.score5;
      let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });
  });


  //******** API CALL #3 - THIRD COLUMN *******
  let promise3 = new Promise(function(resolve, reject) {
    let randomCategory = get_rand(catNums);;
    let request = new XMLHttpRequest();
    let url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`;
    request.onload = function() {
      if(request.status === 200) {
        resolve(request.response);
        console.log(request.status);
      }
      else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();

  });
  promise3.then(function(response: any) {
    let body = JSON.parse(response);
    console.log(body);
    $("#category-three").text(body.results[0].category);


    $("#category-three-question-one").click(function() {
      thisScore = score.score1;
      let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-three-question-two").click(function() {
      thisScore = score.score2;
      let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-three-question-three").click(function() {
      thisScore = score.score3;
      let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-three-question-four").click(function() {
      thisScore = score.score4
      let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-three-question-five").click(function() {
      thisScore = score.score5;
      let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });
  });

  //******** API CALL #4 - FOURTH COLUMN *******

  let promise4 = new Promise(function(resolve, reject) {
    let randomCategory = get_rand(catNums);;
    let request = new XMLHttpRequest();
    let url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`;
    request.onload = function() {
      if(request.status === 200) {
        resolve(request.response);
        console.log(request.status);
      }
      else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();

  });
  promise4.then(function(response: any) {
    let body = JSON.parse(response);
    console.log(body);
    $("#category-four").text(body.results[0].category);


    $("#category-four-question-one").click(function() {
      thisScore = score.score1;
      let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-four-question-two").click(function() {
      thisScore = score.score2;
      let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-four-question-three").click(function() {
      thisScore = score.score3;
      let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-four-question-four").click(function() {
      thisScore = score.score4
      let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-four-question-five").click(function() {
      thisScore = score.score5;
      let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });
  });


  //******** API CALL #5 - FIFTH COLUMN *******

  let promise5 = new Promise(function(resolve, reject) {
    let randomCategory = get_rand(catNums);;
    let request = new XMLHttpRequest();
    let url = `https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`;
    request.onload = function() {
      if(request.status === 200) {
        resolve(request.response);
        console.log(request.status);
      }
      else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();

  });
  promise5.then(function(response: any) {
    let body = JSON.parse(response);
    console.log(body);
    $("#category-five").text(body.results[0].category);


    $("#category-five-question-one").click(function() {
      thisScore = score.score1;
      let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-five-question-two").click(function() {
      thisScore = score.score2;
      let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-five-question-three").click(function() {
      thisScore = score.score3;
      let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-five-question-four").click(function() {
      thisScore = score.score4
      let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });

    $("#category-five-question-five").click(function() {
      thisScore = score.score5;
      let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');
      let numArr = [0, 1, 2, 3];
      answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
      correctAnswer = answers[0]
      $("#question-box").text(question);
      answers = randomQuestions(answers)
      for(let i = 0; i < 4; i ++)
      {
        $('#answer' + numArr[i]).text(answers[i]);
      }
    });
  });
  $(".frame-answer").click((e)=> {
    if(correctAnswer === $(e.target).text()) { //TRUE
      alert("CORRECT")
      if(currentGame.playerOneTurn) {
        currentGame.playerOneScore += thisScore;
      } else if(currentGame.playerTwoTurn) {
        currentGame.playerTwoScore += thisScore;
      }
    } else {
      alert("FALSE, correct answer: " + answers[0]);
      if(currentGame.playerOneTurn) { //FALSE
        currentGame.playerOneScore -= thisScore;
      } else if(currentGame.playerTwoTurn) {
        currentGame.playerTwoScore -= thisScore;
      }
    }
    currentGame.changePlayer();
    if(currentGame.playerOneScore < 0) currentGame.playerOneScore = 0;
    if(currentGame.playerTwoScore < 0) currentGame.playerTwoScore = 0;
    $("#playerOneScore").text(currentGame.playerOneScore);
    $("#playerTwoScore").text(currentGame.playerTwoScore);
    $('.transbox').show();
    $('.wrapperAnswer').hide();
    audio.pause();
  })


  $("#skipButton").click(function(){
    currentGame.changePlayer();
});

  // CLICK FUNCTION FOR HIDING/SHOWING QUESTION SCREEN //
  $(".frame").each(function(index) {
    $(this).on("click", function() {
      $('.transbox').hide();
      $('.wrapperAnswer').show();
      $(this).text("");
      audio.play();
    });
  });
});
