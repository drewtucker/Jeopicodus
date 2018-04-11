import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { Question } from '../models/question.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public categoryArray:string[] = [];

  public cat1Array:Question[] = [];
  public cat2Array:Question[] = [];
  public cat3Array:Question[] = [];
  public cat4Array:Question[] = [];
  public cat5Array:Question[] = [];

  constructor() { }

  ngOnInit() {
  }

}

const gameBoard:GameBoardComponent = new GameBoardComponent();


//COLUMN 1 API CALL
$(document).ready(function() {

  var nums = [0,1,2,3];
  var gen_nums = [];

  function in_array(array, el) {
    for(var i = 0 ; i < array.length; i++)
    if(array[i] == el) return true;
    return false;
  }

  function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
      gen_nums.push(rand);
      return rand;
    }
    return get_rand(array);
  }


  //******** API CALL #1 - FIRST COLUMN *******
  let promise1 = new Promise(function(resolve, reject) {
    let randomCategory = Math.floor(Math.random() * 24) + 9;
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
    console.log(body);
    $("#category-one").text(body.results[0].category);


  $("#category-one-question-one").click(function() {
    let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

    let numArr = [0, 1, 2, 3];
    let answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
    $("#question-box").text(question);
    for(let i = 0; i < 4; i ++)
    {
      $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
    }
  });

  $("#category-one-question-two").click(function() {

    let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

    let numArr = [0, 1, 2, 3];
    let answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
    $("#question-box").text(question);
    for(let i = 0; i < 4; i ++)
    {
      $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
    }
  });

  $("#category-one-question-three").click(function() {

    let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

    let numArr = [0, 1, 2, 3];
    let answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
    $("#question-box").text(question);
    for(let i = 0; i < 4; i ++)
    {
      $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
    }
  });

  $("#category-one-question-four").click(function() {

    let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

    let numArr = [0, 1, 2, 3];
    let answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
    $("#question-box").text(question);
    for(let i = 0; i < 4; i ++)
    {
      $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
    }
  });

  $("#category-one-question-five").click(function() {

    let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

    let numArr = [0, 1, 2, 3];
    let answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
    $("#question-box").text(question);
    for(let i = 0; i < 4; i ++)
    {
      $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
    }
  });
});

//******** API CALL #2 - SECOND COLUMN *******

let promise2 = new Promise(function(resolve, reject) {
  let randomCategory = Math.floor(Math.random() * 24) + 9;

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
  let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-two-question-two").click(function() {

  let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-two-question-three").click(function() {

  let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-two-question-four").click(function() {

  let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-two-question-five").click(function() {

  let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});
});


//******** API CALL #3 - THIRD COLUMN *******

let promise3 = new Promise(function(resolve, reject) {
  let randomCategory = Math.floor(Math.random() * 24) + 9;

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
  let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-three-question-two").click(function() {

  let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-three-question-three").click(function() {

  let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-three-question-four").click(function() {

  let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-three-question-five").click(function() {

  let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});
});

//******** API CALL #4 - FOURTH COLUMN *******

let promise4 = new Promise(function(resolve, reject) {
  let randomCategory = Math.floor(Math.random() * 24) + 9;

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
  let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-four-question-two").click(function() {

  let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-four-question-three").click(function() {

  let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-four-question-four").click(function() {

  let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-four-question-five").click(function() {

  let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});
});


//******** API CALL #5 - FIFTH COLUMN *******

let promise5 = new Promise(function(resolve, reject) {
  let randomCategory = Math.floor(Math.random() * 24) + 9;

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
  let question = body.results[0].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[0].correct_answer, body.results[0].incorrect_answers[0], body.results[0].incorrect_answers[1], body.results[0].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-five-question-two").click(function() {

  let question = body.results[1].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[1].correct_answer, body.results[1].incorrect_answers[0], body.results[1].incorrect_answers[1], body.results[1].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-five-question-three").click(function() {

  let question = body.results[2].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[2].correct_answer, body.results[2].incorrect_answers[0], body.results[2].incorrect_answers[1], body.results[2].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-five-question-four").click(function() {

  let question = body.results[3].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[3].correct_answer, body.results[3].incorrect_answers[0], body.results[3].incorrect_answers[1], body.results[3].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});

$("#category-five-question-five").click(function() {

  let question = body.results[4].question.replace(/&#039;|&quot;|&eacute;|&ldquo;/g, '"');

  let numArr = [0, 1, 2, 3];
  let answers = [body.results[4].correct_answer, body.results[4].incorrect_answers[0], body.results[4].incorrect_answers[1], body.results[4].incorrect_answers[2]];
  $("#question-box").text(question);
  for(let i = 0; i < 4; i ++)
  {
    $('#answer' + numArr[i]).text(answers[get_rand(nums)]);
  }
});
});

$(".frame").each(function(index) {
  $(this).on("click", function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
  });
});
});

    //
    // $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    //
    //   for(let i = 0; i < response.results.length; i++)
    //   {
    //     let newQuestion = new Question(response.results[i].category,response.results[i].question, response.results[i].correct_answer, response.results[i].incorrect_answers)
    //   }
    //   let question1 = new Question(response.results[0].category, response.results[0].question, response.results[0].correct_answer, response.results[0].incorrect_answers);
    //   gameBoard.cat1Array.push(question1);
    //
    //   let question2 = new Question(response.results[1].category, response.results[1].question, response.results[1].correct_answer, response.results[1].incorrect_answers);
    //   gameBoard.cat1Array.push(question2);
    //
    //
    //   let question3 = new Question(response.results[2].category, response.results[2].question, response.results[2].correct_answer, response.results[2].incorrect_answers);
    //   gameBoard.cat1Array.push(question3);
    //
    //
    //   let question4 = new Question(response.results[3].category, response.results[3].question, response.results[3].correct_answer, response.results[3].incorrect_answers);
    //   gameBoard.cat1Array.push(question4);
    //
    //
    //   let question5 = new Question(response.results[4].category, response.results[4].question, response.results[4].correct_answer, response.results[4].incorrect_answers);
    //   gameBoard.cat1Array.push(question5);
    //
    //   $("#category-one").text($("<div/>").html(question1.category).text());
    //   gameBoard.categoryArray.push(response.results[0].category);
    //   // console.log(gameBoard.categoryArray);
    // }).fail(function(error) {
    // });




    // let squares = document.getElementsByClassName("frame");
    // for(var i = 0; i < squares.length; i ++)
    // {
    //   squares[i].addEventListener("click")
    // }
    //
    // $('#category-one-question-one').click(function() {
    //   $('.transbox').hide();
    //   $('.wrapperAnswer').show();
    //   $('#question-box').text($("<div/>").html(gameBoard.cat1Array[0].question).text());
    //   $("#answer-option-one").text(gameBoard.cat1Array[0].choices[0]);
    //   $("#answer-option-two").text(gameBoard.cat1Array[0].choices[1]);
    //   $("#answer-option-three").text(gameBoard.cat1Array[0].choices[2]);
    //   $("#answer-option-four").text(gameBoard.cat1Array[0].answer);
    // });
    //
    // $('#category-one-question-two').click(function() {
    //   $('.transbox').hide();
    //   $('.wrapperAnswer').show();
    //   $('#question-box').text($("<div/>").html(gameBoard.cat1Array[1].question).text());
    //   $("#answer-option-one").text(gameBoard.cat1Array[1].choices[0]);
    //   $("#answer-option-two").text(gameBoard.cat1Array[1].answer);
    //   $("#answer-option-three").text(gameBoard.cat1Array[1].choices[2]);
    //   $("#answer-option-four").text(gameBoard.cat1Array[1].choices[1]);
    // });
    //
    // $('#category-one-question-three').click(function() {
    //   $('.transbox').hide();
    //   $('.wrapperAnswer').show();
    //   $('#question-box').text($("<div/>").html(gameBoard.cat1Array[2].question).text());
    //   $("#answer-option-two").text(gameBoard.cat1Array[2].choices[0]);
    //   $("#answer-option-one").text(gameBoard.cat1Array[2].answer);
    //   $("#answer-option-three").text(gameBoard.cat1Array[2].choices[2]);
    //   $("#answer-option-four").text(gameBoard.cat1Array[2].choices[1]);
    // });
    //
    // $('#category-one-question-four').click(function() {
    //   $('.transbox').hide();
    //   $('.wrapperAnswer').show();
    //   $('#question-box').text($("<div/>").html(gameBoard.cat1Array[3].question).text());
    //   $("#answer-option-one").text(gameBoard.cat1Array[3].choices[0]);
    //   $("#answer-option-three").text(gameBoard.cat1Array[3].answer);
    //   $("#answer-option-two").text(gameBoard.cat1Array[3].choices[2]);
    //   $("#answer-option-four").text(gameBoard.cat1Array[3].choices[1]);
    // });
    //
    // $('#category-one-question-five').click(function() {
    //   $('.transbox').hide();
    //   $('.wrapperAnswer').show();
    //   $('#question-box').text($("<div/>").html(gameBoard.cat1Array[4].question).text());
    //   $("#answer-option-two").text(gameBoard.cat1Array[4].choices[0]);
    //   $("#answer-option-one").text(gameBoard.cat1Array[4].answer);
    //   $("#answer-option-three").text(gameBoard.cat1Array[4].choices[2]);
    //   $("#answer-option-four").text(gameBoard.cat1Array[4].choices[1]);
    // });



  //COLUMN 2 API CALL
  //
  // $(document).ready(function() {
  //   let randomCategory = Math.floor(Math.random() * 24) + 9;
  //   $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //     if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  //     {
  //       $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //         $("#category-two").text($("<div/>").html(response.results[0].category).text());
  //         gameBoard.categoryArray.push(response.results[0].category);
  //         console.log(gameBoard.categoryArray);
  //       }).fail(function(error) {
  //       });
  //     }
  //     else{
  //       $("#category-two").text($("<div/>").html(response.results[0].category).text());
  //       gameBoard.categoryArray.push(response.results[0].category);
  //       console.log(gameBoard.categoryArray);
  //     }
  //   }).fail(function(error) {
  //     console.log(error);
  //   });
  // });
  //
  //
  // //COLUMN 3 API CALL
  //
  // $(document).ready(function() {
  //   let randomCategory = Math.floor(Math.random() * 24) + 9;
  //   $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //     if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  //     {
  //       $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //         $("#category-three").text($("<div/>").html(response.results[0].category).text());
  //         gameBoard.categoryArray.push(response.results[0].category);
  //         console.log(gameBoard.categoryArray);
  //       }).fail(function(error) {
  //       });
  //     }
  //     else{
  //       $("#category-three").text($("<div/>").html(response.results[0].category).text());
  //       gameBoard.categoryArray.push(response.results[0].category);
  //       console.log(gameBoard.categoryArray);
  //     }
  //   }).fail(function(error) {
  //     console.log(error);
  //   });
  // });
  //
  //
  // //COLUMN 4 API CALL
  //
  // $(document).ready(function() {
  //   let randomCategory = Math.floor(Math.random() * 24) + 9;
  //   $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //     if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  //     {
  //       $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //         $("#category-four").text($("<div/>").html(response.results[0].category).text());
  //         gameBoard.categoryArray.push(response.results[0].category);
  //         console.log(gameBoard.categoryArray);
  //       }).fail(function(error) {
  //       });
  //     }
  //     else{
  //       $("#category-four").text($("<div/>").html(response.results[0].category).text());
  //       gameBoard.categoryArray.push(response.results[0].category);
  //       console.log(gameBoard.categoryArray);
  //     }
  //   }).fail(function(error) {
  //     console.log(error);
  //   });
  // });
  //
  //
  // //COLUMN 5 API CALL
  //
  // $(document).ready(function() {
  //   let randomCategory = Math.floor(Math.random() * 24) + 9;
  //   $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //     if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  //     {
  //       $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
  //         $("#category-five").text($("<div/>").html(response.results[0].category).text());
  //         gameBoard.categoryArray.push(response.results[0].category);
  //         console.log(gameBoard.categoryArray);
  //       }).fail(function(error) {
  //       });
  //     }
  //     else{
  //       $("#category-five").text($("<div/>").html(response.results[0].category).text());
  //       gameBoard.categoryArray.push(response.results[0].category);
  //       console.log(gameBoard.categoryArray);
  //     }
  //   }).fail(function(error) {
  //     console.log(error);
  //   });
  // });
