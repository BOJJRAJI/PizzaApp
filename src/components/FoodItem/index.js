import Popup from 'reactjs-popup'
import {BsFillHandbagFill} from 'react-icons/bs'
import {RiMotorbikeFill} from 'react-icons/ri'
import {MdCancel} from 'react-icons/md'
import './index.css'

const FoodItem = props => {
  const {foodDetails} = props
  const {item, description, price} = foodDetails

  return (
    <Popup
      modal
      trigger={
        <>
          <li className="food-list">
            <div className="item-description-container">
              <p className="item">{item}</p>
              <p className="description">{description}</p>
            </div>
            <p className="price">{price}</p>
          </li>
          <hr className="line" />
        </>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="cancel-button-container">
            <button
              onClick={() => close()}
              type="button"
              className="popup-button"
            >
              <MdCancel />
            </button>
          </div>

          <div className="popup-card">
            <h1 className="Choose-service-heading">Choose A Services</h1>
            <div className="delivery-options-container">
              <div>
                <BsFillHandbagFill />
                <p className="pickup-para">Pickup</p>
              </div>
              <div>
                <RiMotorbikeFill />
                <p className="pickup-para">Delivery</p>
              </div>
            </div>
          </div>
        </>
      )}
    </Popup>
  )
}

export default FoodItem
