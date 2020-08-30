import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        // category: "",
      },
      
      score: 0,
      submitted: false,

      formData: {
        userAnswer: ''
    }
    }
  }

  
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }


  handleChange =(event) => {
    const formData = {...this.state.formData};
    formData[event.target.name] = event.target.value;

    this.setState({formData})
}

handleSubmit = (event)=> {
    event.preventDefault();

    this.setState({
        submitted: true
    });
}
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  changeScore=(event)=>{
   
      if(this.state.formData.userAnswer === this.state.data.answer){
          this.setState(prevstate => ({
            score: prevstate.score += this.state.data.value
          }))
        }else if (this.state.formData.userAnswer  === ''){
          this.setState(prevstate => ({
            score: prevstate.score 
          }))
        
      }else if(this.state.formData.userAnswer !== this.state.data.answer){
        this.setState(prevstate => ({
          score: prevstate.score -= this.state.data.value
        }))
      }
      this.getNewQuestion()
  }



  //display the results on the screen
  render() {
    let category ="loading"
    
    if(this.state.data.category && this.state.data.category.title){
        
      category = this.state.data.category.title
   }

    return(
      <Display 
      score={this.state.score} 
      question={this.state.data.question} 
      value={this.state.data.value} 
      answer={this.state.data.answer} 
      userAnswer={this.state.formData.userAnswer}
      category={category}
      // title={category}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      changeScore={this.changeScore}
      />
    )
  }
}
export default Jeopardy;