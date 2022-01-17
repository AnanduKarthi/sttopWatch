import './index.css'

const PictureCard = props => {
  const {tabDetails, isSelected, selectTab} = props
  const {tabId, displayText} = tabDetails

  const listClass = isSelected ? 'underline' : 'tab-button'

  const tabSelect = () => {
    selectTab(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" className={listClass} onClick={tabSelect}>
        {displayText}
      </button>
    </li>
  )
}

export default PictureCard
