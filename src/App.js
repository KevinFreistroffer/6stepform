import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './components/Header/index.js';
import Step1 from './components/Step1/index.js';

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
    if (this.state.currentStep !== 6) {
      this.setState(prevState => {
        const newStep = prevState.currentStep + 1;

        return { currentStep: newStep }
      });
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
        {currentStep === 1 && <Step1 nextStep={this.nextStep}></Step1>}
      </div>
    );
  }
}  


export default App;
