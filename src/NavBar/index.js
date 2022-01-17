import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  state = {count: 60}

  componentDidMount() {
    this.countDown = setInterval(this.tick, 1000)
  }

  clearTimerInterval = () => clearInterval(this.countDown)

  tick = () => {
    const {isGameProgress, onCounterStop} = this.props
    const {count} = this.state
    if (isGameProgress && count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    } else {
      onCounterStop()
      this.clearTimerInterval()
    }
  }

  render() {
    const {count} = this.state
    const {score} = this.props
    return (
      <ul className="nav-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="web-logo"
          />
        </li>

        <li className="score-container">
          <p className="nav-text">{`Score:${score}`}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="web-logo"
          />
          <p className="nav-text">{`${count} sec`}</p>
        </li>
      </ul>
    )
  }
}

export default NavBar
