const GoogleGenerativeAI = require("@google/generative-ai").GoogleGenerativeAI;

async function generateQuiz(paragraph, numberOfQuestions, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let prompt = `Generate a quiz with ${numberOfQuestions} questions in JSON format based on the following paragraph: ${paragraph} The quiz should have the following structure: { "questions": [`;

  for (let i = 0; i < numberOfQuestions; i++) {
    prompt += `{
      "question": "Question ${i + 1} based on the paragraph goes here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_answer": "Correct answer for question ${i + 1} goes here"
    },`;
  }

  prompt = prompt.slice(0, -1); 
  prompt += `] }`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  console.log("Raw response text:", text);

  const cleanText = text.replace(/```json\n|\n```|\\/g, "");

  console.log("Cleaned response text:", cleanText);

  try {
    const quiz = JSON.parse(cleanText);
    return quiz;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    throw error;
  }
}

module.exports = generateQuiz;