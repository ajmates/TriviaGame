var panel = $("#quiz"); 

var questions = [{
	question: "What year was Forrest Gump released?",
	answers: ["1990", "1999", "1994", "1991"], 
	correctAnswer: "1994"
}, {
  question: "Which soundtrack featured the Looney Tunes?",
  answers: ["Titanic", "Space Jam", "Toy Story", "They never recorded a soundtrack"], 
  correctAnswer: "Space Jam"
}, {
  question: "Who said 'There's no crying in baseball.' in A League of Their Own?",
  answers: ["Jimmy Dugan", "Shirley Baker", "Dottie Hinson", "There is crying in baseball."], 
  correctAnswer: "Jimmy Dugan"
}, {
  question: "What movie '...can't handle the truth'?",
  answers: ["Home Alone", "Jerry Maguire", "Ghost", "A Few Good Men"], 
  correctAnswer: "A Few Good Men"
}, {
  question: "Which Disney animated film was first ever on DVD?",
  answers: ["Hercules", "Mulan", "Toy Story", "Lion King"], 
  correctAnswer: "Mulan"
}, {
  question: "What was Adam Sandler's occupation in Big Daddy?",
  answers: ["tollbooth worker", "Hooter's cook", "unemployed", "judge"], 
  correctAnswer: "tollbooth worker"
}, {
  question: "Which 90's movie has the best-selling soundtrack of all time?",
  answers: ["Titanic", "Lion King", "The Bodyguard", "Pretty Woman"], 
  correctAnswer: "The Bodyguard"
}, {
  question: "'Keep the change, ya (blank).'",
  answers: ["dumb kid", "filthy animal", "kind sir", "silly boy"], 
  correctAnswer: "filthy animal"
}]; 

var timer; 
var game = {
	correct: 0,
	wrong: 0,
	counter: 90,

	countdown: function(){
		game.counter--; 
		$("counter-numbers").html(game.counter);
		if (game.counter === 0) {
			console.log("Times Up!"); 
			game.done(); 
		}
	},
	start: function() {
		timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>90</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});