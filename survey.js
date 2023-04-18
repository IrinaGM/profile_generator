const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const surveyQuestions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let answers = [];

const survey = (questions, num) => {
  readline.question(questions[num] + " ", (answer) => {
    answers.push(answer);
    if (num < questions.length - 1) {
      survey(questions, num + 1);
    } else {
      console.log(
        `Here is your generated profile: \n${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`
      );
      readline.close();
    }
  });
};

survey(surveyQuestions, 0);
