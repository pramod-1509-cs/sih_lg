// src/components/Quiz.jsx
import React, { useState } from 'react';
import './Quiz.css'
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Define your quiz questions and options here
 /*
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'Berlin', 'London'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    // Add more questions here
  ]; */

  const quizData = [
    {
      question: 'Imagine you are a young child in India. Which fundamental right protects you from being forced to work in hazardous conditions?',
      options: [
        'Right to Equality',
        'Right to Freedom',
        'Right against Exploitation',
        'Right to Education',
      ],
      correctAnswer: 'Right to Equality',
    },
    {
      question: 'Your right to education is backed by which powerful article of the Constitution of India?',
      options: [
        'Article 21A: Right to Education',
        'Article 19(1)(a): Freedom of Speech and Expression',
        'Article 15(1): Prohibition of Discrimination',
        'Article 32: Remedies for Enforcement of Rights',
      ],
      correctAnswer: 'Article 21A: Right to Education',
    },
    {
      question: 'According to the Constitution of India, until what age should the State provide free and compulsory education to children?',
      options: [
        'Until the age of 13',
        'Until the age of 14',
        'Until the age of 15',
        'Until the age of 16',
      ],
      correctAnswer: 'Until the age of 14',
    },
    {
      question: 'Where is the Headquarter of National Commission for Protection of Child Rights?',
      options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
      correctAnswer: 'New Delhi',
    },
    {
      question: 'Which is below phone number for Child line?',
      options: ['1091', '1090', '1291', '1098'],
      correctAnswer: '1098',
    },
    {
      question: 'Which international Organisation works for the development and protection of child rights?',
      options: [
        'International Red Cross',
        'United Nations',
        'UNICEF',
        'ECPAT',
      ],
      correctAnswer: 'UNICEF',
    },
    {
      question: 'Which is the abbreviation of "UNICEF"?',
      options: [
        'United Nations International Children\'s Emergency Fund',
        'United Nations International Children\'s Education Fund',
        'United Nations International Children\'s Foundation',
        'None of the above',
      ],
      correctAnswer: 'United Nations International Children\'s Emergency Fund',
    },
    {
      question: 'What is minimum age of marriage of male and female in India?',
      options: ['M-18, F-18', 'M-18, F-21', 'M-21, F-18', 'M-21, F-21'],
      correctAnswer: 'M-21, F-21',
    },
    {
      question: 'What is the punishment of a male adult marrying a child?',
      options: ['2 years', '5 years', 'Fine only', '1 year'],
      correctAnswer: '2 years',
    },
    {
      question: 'As per section 76, The Juvenile Justice (Care and Protection of Children) Act, 2015, whoever employs or uses any child for the purpose of begging or causes any child to beg shall be punishable with',
      options: ['5 years imprisonment', '3 years imprisonment', '1 years imprisonment', 'Fine only'],
      correctAnswer: '5 years imprisonment',
    },
  ];
  

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      // Increase the score if the answer is correct
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-container">
    {currentQuestion < quizData.length ? (
      <div className="question-container">
        <h1 className="quiz-title">Quiz</h1>
        <h2 className="question-number">Question {currentQuestion + 1}</h2>
        <p className="question-text">{quizData[currentQuestion].question}</p>
        <div className="options-container">
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="quiz-complete">
        <h1>Quiz Complete!</h1>
        <p>Your Score: {score}</p>
      </div>
    )}
  </div>
  );
};

export default Quiz;
