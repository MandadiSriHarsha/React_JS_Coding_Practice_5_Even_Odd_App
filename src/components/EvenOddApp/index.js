import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0, text: 'Count is Even'}

  increaseNumber = () => {
    let {value} = this.state
    let newValue
    let newText
    const randomNumber = Math.ceil(Math.random() * 100)
    value += randomNumber
    if (value % 2 === 0) {
      newText = 'Count is Even'
      newValue = value
    } else {
      newText = 'Count is Odd'
      newValue = value
    }
    this.setState({value: newValue, text: newText})
  }

  render() {
    const {value, text} = this.state
    return (
      <div className="bg-container">
        <div className="app-card">
          <h1 className="app-card-heading">
            Count <span>{value}</span>
          </h1>
          <p className="app-card-description-1">{text}</p>
          <button type="button" onClick={this.increaseNumber}>
            Increment
          </button>
          <p className="app-card-description-2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
