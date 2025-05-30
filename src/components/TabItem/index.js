// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabButtonClicked = () => {
    onClickTabItem(tabId)
  }

  const activeTabButtonClass = isActive ? 'active-tab-button' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeTabButtonClass}`}
        onClick={tabButtonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
