// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputPhrase: '', count: 0}

  onChangeuserInput = event => {
    const {inputPhrase} = this.state
    this.setState({inputPhrase: event.target.value})
    this.setState({count: inputPhrase.length + 1})
  }

  render() {
    const {inputPhrase, count} = this.state
    return (
      <div className="letters-calculator-app">
        <div className="content-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="Enter the phrase" className="paragraph">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-phrase"
              onChange={this.onChangeuserInput}
              value={inputPhrase}
              id="Enter the phrase"
            />
            <p type="button" className="btn">
              No.of letters: {count}
            </p>
          </div>
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
