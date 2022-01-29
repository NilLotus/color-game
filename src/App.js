import React, {Component} from 'react';
import './App.css';
import Background from './Background/Background';
import ChangeBackgroundColor from './ChangeBackgroundColor/ChangeBackgroundColor';
import background from "./Background/Background";

class App extends Component {
    state = {
        color: 'gray',
        myInterval: null,
        userColor: null
    };

    randomColor = () => {
        // toString does two things:
        // 1.convert to string
        // 2.if it has a parameter convert the number to a number with given radix
        const randomNumber = Math.random().toString(16).substr(2, 6);
        const background = '#' + randomNumber;
        this.setState({
            color: background
        });
    }

    randomFromArray = () => {
        const colors = ['beige', 'gray', 'cadetblue', 'rosybrown', 'aquamarine', 'steelblue'];
        const selected = colors[Math.floor(Math.random() * 6)];
        this.setState({
            color: selected
        })
    }

    goCrazy = () => {
        // const setColorInterval = setInterval(this.randomColor, 1000);
        this.setState({
            myInterval: setInterval(this.randomColor, 200)
        })
    }
    stopCrazy = () => {
        clearInterval(this.state.myInterval)
    }
    userColor = (event) => {
        this.setState({
            userColor: event.target.value
        })
    }
    chooseInputColorHandler = () => {
        // It is checking the color that user entered is valid or not
        if (CSS.supports('color', this.state.userColor)) {
            this.setState({
                color: this.state.userColor
            })
        }
    }

    render() {
        const style = {
            backgroundColor: this.state.color
        }
        return (
            <div className="App" style={style}>
                <Background bg={this.state.color}/>
                <ChangeBackgroundColor
                    text='Click buttons to change random background color:'
                    firstOnclick={this.randomColor}
                    secondOnclick={this.randomFromArray}
                    innerFirstBtn='Random Color'
                    innerSecondBtn='Random from array'
                    inputType='hidden'
                    color={this.state.color}
                />
                <ChangeBackgroundColor
                    text='Click Go crazy, then stop it to change background color:'
                    firstOnclick={this.goCrazy}
                    secondOnclick={this.stopCrazy}
                    innerFirstBtn='Go crazy'
                    innerSecondBtn='Stop'
                    inputType='hidden'
                    color={this.state.color}
                />
                <ChangeBackgroundColor
                    text='Enter a valid color or hex color code, then click on button:'
                    changed={this.userColor}
                    firstOnclick={this.chooseInputColorHandler}
                    innerFirstBtn='Confirm'
                    hidden
                    color={this.state.color}
                    placeholder={'Enter your color'}
                />
            </div>
        );
    }
}

export default App;
