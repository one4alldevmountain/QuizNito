import React, { Component } from 'react';
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';
import './GetQuizByPin.scss';



class GetQuizByPin extends Component {

    constructor() {
        super();


        this.state = {
            pinInput: '',

        }
    }


    handlePinChange = (pin) => {
        this.setState({
            pinInput: pin,
        })
    }
    handleSubmitPin = (event) => {
        event.preventDefault();


        this.props.history.push('/quiz/' + this.state.pinInput)
    }



    render() {

        return (<div>
            <div className="pin-form-parent">
                <div className="pin-container">
                    

                    <section className="pin-input-section">
                        <p className="pin-title">Enter Your Pin:</p>
                        <input
                            className="pin-input"
                            type="text"
                            value={this.state.pinInput}
                            onChange={(event) => { this.handlePinChange(event.target.value) }}
                        />
                        <button
                            className="pin-submit-btn"
                            type='submit'
                            onClick={(event) => this.handleSubmitPin(event)}
                        >
                            Submit
                        </button>
                    </section>
                </div>

               
            </div>
            </div>
        );
    }
}



export default GetQuizByPin;