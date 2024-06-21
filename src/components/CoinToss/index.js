// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    TotalCount: 0,
    HeadsCount: 0,
    TailsCount: 0,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickChangeCount = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      TotalCount: prevState.TotalCount + 1,
    }))
    const CheckingToss = tossResult === 0
    if (CheckingToss) {
      this.setState(prevState => ({
        ImageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        HeadsCount: prevState.HeadsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        ImageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        TailsCount: prevState.TailsCount + 1,
      }))
    }
  }

  render() {
    const {TotalCount, HeadsCount, TailsCount, ImageUrl} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="card-container">
            <h1 className="main-heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <img src={ImageUrl} alt="toss result" className="image" />
            <button
              type="button"
              className="btn"
              onClick={this.onClickChangeCount}
            >
              Toss Coin
            </button>
            <div className="count-div">
              <p className="count-para">Total: {TotalCount}</p>
              <p className="count-para">Heads: {HeadsCount}</p>
              <p className="count-para">Tails: {TailsCount}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
