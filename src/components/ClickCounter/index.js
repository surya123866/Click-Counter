import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevCount => ({count: prevCount.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevCount => ({count: prevCount.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <br />
          <span className="count">{count}</span> Times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <div>
          {' '}
          <button className="button" onClick={this.onIncrease} type="button">
            Click Me!
          </button>
          <button className="button" onClick={this.onDecrement} type="button">
            UnClick!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
