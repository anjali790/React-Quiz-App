import React, { useState } from 'react';

import './quizApp.css';

export function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            questionText: 'What is not a wind instrument?',
            answerOptions: [
                { answerText: 'Oboe', isCorrect: false },
                { answerText: 'Trombone', isCorrect: false },
                { answerText: 'Viola', isCorrect: true },
                { answerText: 'Duduk', isCorrect: false },
            ],
        },
        {
            questionText: 'What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?',
            answerOptions: [
                { answerText: 'The Dream Team', isCorrect: false },
                { answerText: 'Demolition', isCorrect: true },
                { answerText: 'The Bushwhackers', isCorrect: false },
                { answerText: 'The British Bulldogs', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of these is NOT a player class in Team Fortress 2?',
            answerOptions: [
                { answerText: 'Healer', isCorrect: true },
                { answerText: 'Demoman', isCorrect: false },
                { answerText: 'Pyro', isCorrect: false },
                { answerText: 'Spy', isCorrect: false },
            ],
        },
        {
            questionText: 'How many studio albums have the duo Daft Punk released?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '5', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '4', isCorrect: true },
            ],
        },
    ];

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}