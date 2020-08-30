import React from 'react';
// import Jeopardy from "../../components/jeopardy/Jeopardy"

function Display(props){
    
    // let category ="loading" 

    

    return (
        <div>
            
          {console.log(props.answer)}
          
        <strong>Score:</strong>
        {props.score}
        <br/>
          <strong>Question:</strong>
        {props.question}
        <br/>
        <strong>Value:</strong>
        {props.value}
        <br/>
        <strong>Category:</strong>
        {props.category}
        


        <form onSubmit={props.handleSubmit}>
        <div>

             <label htmlFor="userAnwser">Answer:</label>
            <input 
                type="text" 
                name="userAnswer" 
                value={props.userAnswer}
                onChange={props.handleChange}
            />

        </div>
        <button onClick={props.changeScore}>Submit Answer</button>
        </form>
    <div>{props.userAnswer}</div>

      </div>
    );

       
    
}
export default Display