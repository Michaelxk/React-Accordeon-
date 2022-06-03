import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {


  const [questionList, setQuestion] = useState(data);

  return (
    <main className="container">
      <h3>Questions and Answers about login</h3>
      <section>
        {
          questionList.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })
        }
      </section>
      
    </main>
  ) 
}

export default App;
