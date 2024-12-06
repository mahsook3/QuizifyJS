# quizifyjs

`quizifyjs` is a Node.js package that generates quizzes based on a given paragraph using Google Generative AI.

## Installation

To install the package, run:

```sh
npm install quizifyjs
```

## Usage

### Importing the Package

First, import the `generateQuiz` function from the `quizifyjs` package:

```javascript
const generateQuiz = require('quizifyjs');
```

### Generating a Quiz

To generate a quiz, call the `generateQuiz` function with the following parameters:
- `paragraph`: The paragraph based on which the quiz questions will be generated.
- `numberOfQuestions`: The number of questions to generate.
- `apiKey`: Your Google Generative AI API key.

#### Example

```javascript
const generateQuiz = require('quizifyjs');

const paragraph = "This is a sample paragraph for generating quiz questions.";
const numberOfQuestions = 5;
const apiKey = "YOUR_API_KEY_HERE"; 

generateQuiz(paragraph, numberOfQuestions, apiKey)
  .then(quiz => {
    console.log("Generated Quiz:", JSON.stringify(quiz, null, 2));
  })
  .catch(error => {
    console.error("Error generating quiz:", error);
  });
```

### Sample Output

The output will be a JSON object with the generated quiz questions, options, and correct answers. Here is an example of what the output might look like:

```json
{
  "questions": [
    {
      "question": "Question 1 based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question 1 goes here"
    },
    {
      "question": "Question 2 based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question 2 goes here"
    },
    {
      "question": "Question 3 based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question 3 goes here"
    },
    {
      "question": "Question 4 based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question 4 goes here"
    },
    {
      "question": "Question 5 based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question 5 goes here"
    }
  ]
}
```