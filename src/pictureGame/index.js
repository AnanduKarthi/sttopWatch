import {Component} from 'react'

import NavBar from '../NavBar/index'

import PictureCard from '../PictureCard/index'

import PictureItem from '../pictureItem/index'

import './index.css'

class PictureImage extends Component {
  state = {
    selectedTab: 'FRUIT',
    isGameProgress: true,
    score: 0,
    selectedList: [],
    randumNum: 0,
  }

  selectTab = tabname => {
    this.setState({
      selectedTab: tabname,
    })
  }

  onCounterStop = () => {
    this.setState({
      isGameProgress: false,
    })
  }

  resetGame = () => {
    this.setState({
      isGameProgress: true,
      score: 0,
      selectedList: [],
      randumNum: 0,
    })
  }

  onSelectImage = idselect => {
    const {selectedList, randumNum} = this.state
    const {imagesList} = this.props
    const isCorrect = imagesList[randumNum].id !== idselect
    console.log(isCorrect)

    if (selectedList.includes(idselect) || isCorrect) {
      this.setState({
        isGameProgress: false,
      })
    } else {
      const lenOfList = imagesList.length

      const Num = Math.floor(Math.random() * lenOfList + 1)

      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, idselect],
        score: prevState.score + 1,
        randumNum: Num,
      }))
    }
  }

  getFiltererList = () => {
    const {imagesList} = this.props
    const {selectedTab} = this.state

    const filtererList = imagesList.filter(
      eachItem => eachItem.category === selectedTab,
    )
    return filtererList
  }

  RenderPictureGame = () => {
    const {imagesList} = this.props
    const {randumNum} = this.state

    const itemToDisplay = imagesList[randumNum]
    const {tabsList} = this.props

    const filtererList = this.getFiltererList()
    const {selectedTab} = this.state

    return (
      <div className="renderPicture-container">
        <div className="pictureGame-container">
          <img
            src={itemToDisplay.imageUrl}
            alt="match"
            className="match-image"
          />
        </div>
        <ul className="tabSelect-container">
          {tabsList.map(eachItem => (
            <PictureCard
              key={eachItem.tabId}
              tabDetails={eachItem}
              isSelected={selectedTab === eachItem.tabId}
              selectTab={this.selectTab}
            />
          ))}
        </ul>
        <ul className="pictureitem-container">
          {filtererList.map(eachItem => (
            <PictureItem
              key={eachItem.id}
              pictureList={eachItem}
              onSelectImage={this.onSelectImage}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderResult = () => {
    const {score} = this.state
    return (
      <div className="result-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>YOUR SCORE</p>
        <p>{score}</p>
        <button type="button" className="playAgain" onClick={this.resetGame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGameProgress, score} = this.state
    return (
      <div className="main-container">
        <NavBar
          isGameProgress={isGameProgress}
          onCounterStop={this.onCounterStop}
          score={score}
        />
        {isGameProgress && this.RenderPictureGame()}
        {!isGameProgress && this.renderResult()}
      </div>
    )
  }
}

export default PictureImage
