import Popup from 'reactjs-popup'
import {MdCancel} from 'react-icons/md'
import './index.css'

const StandardItems = props => {
  const {foodDetails} = props
  const {item, price} = foodDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <>
            <li className="food-list">
              <p className="item">{item}</p>
              <p className="price">{price}</p>
            </li>
            <hr className="line" />
          </>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-card">
            <button
              onClick={() => close()}
              type="button"
              className="popup-button"
            >
              <MdCancel />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default StandardItems
