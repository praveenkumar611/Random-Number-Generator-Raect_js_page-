// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState({count: Math.floor(Math.random() * 101)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onClicked}>
            Generate
          </button>
          <p className="para1">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
