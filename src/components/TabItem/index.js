import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, isActive} = props
  const {display, tabId} = tabDetails
  const styles = isActive ? 'active-tab' : 'normal-tab'

  const onchangeTabId = () => {
    changeTabId(tabId)
  }

  return (
    <li>
      <button className={styles} type="button" onClick={onchangeTabId}>
        {display}
      </button>
    </li>
  )
}

export default TabItem
