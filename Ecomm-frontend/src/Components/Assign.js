import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
  // do not modify the questions or answers below
  const [currentQuestionsindex, setCurrentQuestionIndex]=useState(0);
  const [selectedOption, setSelectedOption]=useState(null);
  const [feedback,setFeedback]=useState('');
  const [score,setScore]=useState(0);



  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const handleOptionChange=(option)=>{
    setSelectedOption(option)
  }

const handleSubmit=()=>{
  const currentQuestion=questions[currentQuestionsindex];
  if(selectedOption === currentQuestion.correct){
  setScore(score + 1);
  setFeedback('correct!')
  }
   else{
  setFeedback('Incorrect!')
  }
  
  
  // if there is a next question then we can pass on

  if(currentQuestionsindex + 1 < questions.length){
  setCurrentQuestionIndex(currentQuestionsindex + 1);
  setSelectedOption(null);
  }else{
  setFeedback(`Quiz completed ! your score is ${score} out of ${questions.length}!`);
  }
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
      {questions[currentQuestionsindex].question}
      </div>
      <div style={style.options}>
      {questions[currentQuestionsindex].options.map((option,index)=>(
      <div key={index}>
      <input 
      type="radio"
      id={`options${index + 1}`}
      name="options"
      value={option}
      checked={selectedOption === option}
      onChange={()=>handleOptionChange(option)}
      />
  <label htmlFor={`option${index + 1}`}>{option}</label>
      </div>
      ))}
      </div>
      <button style={style.button} id="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}></div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<QuizApp />);