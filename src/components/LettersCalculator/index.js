// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    numberOfLetters: 0,
  }

  newCalculate = each => {
    const lengthOfPhrase = each.target.value.length
    this.setState({
      numberOfLetters: lengthOfPhrase,
    })
  }
  render() {
    const {numberOfLetters} = this.state
    return (
      <div className="bg-main">
        <div className="bg-img sm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="bg-cal">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="pl">Enter the phrase</label>
          <br />
          <input
            placeholder="Enter the phrase"
            onChange={this.newCalculate}
            id="pl"
          />
          <br />
          <div className="bg-cont">
            <p className="col-h">No.of letters: {numberOfLetters}</p>
          </div>
        </div>
        <div className="bg-img lg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
