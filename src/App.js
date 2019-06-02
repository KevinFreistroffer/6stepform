import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './components/Header/index.js';
import Step1 from './components/Step1/index.js';
import Step2 from './components/Step2/index.js';

export class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      headerDate: 'November 23, 2019456',
      currentStep: 1,
      step1: {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        isValid: false
      }
    };
  }

  nextStep = () => {
    console.log(`nextStep`);
    if (this.state.currentStep !== 6) {
      this.setState({
        currentStep: this.state.currentStep + 1
      }, () => console.log(this.state.currentStep));
    }
  };

  previousStep = () => {
    if (this.state.currentStep !== 1) {
      this.setState(prevState => {
        const newStep = prevState.currentStep - 1;

        return { currentStep: newStep }
      });
    }
  };

  render() {
    const { currentStep } = this.state;

    return (
      <div className="App">   
        <HeaderComponent 
          date={this.state.headerDate}>
        </HeaderComponent>
        <Step2 nextStep={this.nextStep}></Step2>
      {/*
              {currentStep === 1 && <Step1 nextStep={this.nextStep}></Step1>}
        {currentStep === 2 && <Step2 nextStep={this.nextStep}></Step2>} 
      */}
      </div>
    );
  }
}  


export default App;
