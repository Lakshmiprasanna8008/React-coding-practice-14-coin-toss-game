// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  clicking = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {total, heads, tails, image} = this.state
    return (
      <div className="whole-container">
        <div className="inner-container">
          <h1>Coin Toss Game</h1>
          <p className="second-heading">Heads (or) Tails</p>
          <img src={image} alt="toss result" />
          <br />
          <button type="button" onClick={this.clicking}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
