import {Component} from 'react'
import Popup from 'reactjs-popup'
import {
  BsPersonCircle,
  BsHeart,
  BsInstagram,
  BsFacebook,
  BsFillHandbagFill,
} from 'react-icons/bs'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdCancel,
} from 'react-icons/md'
import {CiFacebook} from 'react-icons/ci'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {GiKnifeFork} from 'react-icons/gi'
import {RiMotorbikeFill} from 'react-icons/ri'
import TabItem from './components/TabItem'
import FoodItem from './components/FoodItem'
import StandardItems from './components/StandardItems'
import './App.css'

const tabsList = [
  {tabId: 'SPECIALS', display: 'Specials'},
  {tabId: 'CLASSICRANGE', display: 'Classic Range'},
  {tabId: 'VEGETARUAN', display: 'Vegetarian'},
  {tabId: 'CHICKEN', display: 'Chicken'},
  {tabId: 'MEAT', display: 'Meat'},
  {tabId: 'SEAFOOD', display: 'Seafood'},
  {tabId: 'STANDARDSIDES', display: 'Standard Sides'},
  {tabId: 'CLASSICSIDES', display: 'Classic Sides'},
  {tabId: 'FAVORITESIDES', display: 'Favorite Sides'},
  {tabId: 'PASTAS', display: 'Pastas'},
  {tabId: 'DRINKS', display: 'Drinks'},
  {tabId: 'DESSERTS', display: 'Desserts'},
]

const data = [
  {
    id: 1,
    category: 'MEAT',
    item: 'Melting Hot Pizza',
    description:
      'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
    price: '$16.50',
  },
  {
    id: 2,
    category: 'MEAT',
    item: 'Moroccans Lamb Pizza',
    description:
      'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
    price: '$16.50',
  },
  {
    id: 3,
    category: 'MEAT',
    item: 'Bacon and Mushroom Pizza',
    description:
      'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
    price: '$16.50',
  },
  {
    id: 4,
    category: 'MEAT',
    item: 'BBQ Beef and Bacon Pizza',
    description: 'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
    price: '$16.50',
  },
  {
    id: 5,
    category: 'MEAT',
    item: 'Hawaiian Pizza',
    description: 'tomato base, ham slices, pineapple, Mozzarella, bacon',
    price: '$16.50',
  },
  {
    id: 6,
    category: 'MEAT',
    item: 'Italian Pizza',
    description:
      'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
    price: '$16.50',
  },
  {
    id: 7,
    category: 'MEAT',
    item: 'Spicy Roasted Beef Pizza',
    description:
      'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
    price: '$16.50',
  },
  {
    id: 8,
    category: 'MEAT',
    item: 'Meat Supreme Pizza',
    description:
      'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
    price: '$16.50',
  },
  {
    id: 8,
    category: 'MEAT',
    item: 'Meat Lovers Pizza',
    description:
      'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
    price: '$16.50',
  },
  {
    id: 9,
    category: 'MEAT',
    item: 'Meaty Boyz Pizza',
    description:
      'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
    price: '$16.50',
  },
  {
    id: 10,
    category: 'MEAT',
    item: 'The Meat Platter Pizza',
    description:
      'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
    price: '$16.50',
  },
  {
    id: 11,
    category: 'MEAT',
    item: 'Mexican Pizza',
    description: '',
    price: '$16.50',
  },
  {
    id: 12,
    category: 'MEAT',
    item: 'Peri Peri Lamb',
    description:
      'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
    price: '$16.50',
  },
  {
    id: 13,
    category: 'MEAT',
    item: 'Beef & kransky Pizza',
    description:
      'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
    price: '$16.50',
  },
  {
    id: 14,
    category: 'MEAT',
    item: 'Siciliano Pizza',
    description:
      'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
    price: '$16.50',
  },
]

const seaFood = [
  {
    id: 15,
    category: 'SEAFOOD',
    item: 'Jamaican Jerk Prawns Pizza',
    description:
      'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
    price: '$16.50',
  },
  {
    id: 16,
    category: 'SEAFOOD',
    item: 'Creamy Prawns and Bacon Pizza',
    description:
      'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
    price: '$16.50',
  },
  {
    id: 17,
    category: 'SEAFOOD',
    item: 'Garlic Prawns Pizza',
    description: 'garlic salt, onion, capsicum, prawns, black pepper, oregano',
    price: '$16.50',
  },
  {
    id: 18,
    category: 'SEAFOOD',
    item: 'Prawn and Bacon Pizza',
    description:
      'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
    price: '$16.50',
  },
  {
    id: 19,
    category: 'SEAFOOD',
    item: 'Salmon and Feta Pizza',
    description:
      'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
    price: '$16.50',
  },
  {
    id: 20,
    category: 'SEAFOOD',
    item: 'Pesto Prawns Pizza',
    description:
      'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
    price: '$16.50',
  },
  {
    id: 21,
    category: 'SEAFOOD',
    item: 'Seafood Supreme',
    description:
      'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
    price: '$16.50',
  },
]

const standardSides = [
  {
    id: 1,
    category: 'STANDARDSIDES',
    item: 'Garlic Bread',
    price: '$5.00',
  },
  {
    id: 2,
    category: 'STANDARDSIDES',
    item: 'Chips',
    price: '$5.00',
  },
  {
    id: 3,
    category: 'STANDARDSIDES',
    item: 'Wedges',
    price: '$5.00',
  },
  {
    id: 4,
    category: 'STANDARDSIDES',
    item: 'Potato Hash Bites',
    price: '$5.00',
  },
  {
    id: 5,
    category: 'STANDARDSIDES',
    item: 'Curly Fries',
    price: '$5.00',
  },
]

const classicSides = [
  {
    id: 1,
    category: 'CLASSICSIDES',
    item: 'Desi Fries',
    price: '$7.00',
  },
  {
    id: 2,
    category: 'CLASSICSIDES',
    item: 'Cheesy Garlic Bread',
    price: '$7.00',
  },
  {
    id: 3,
    category: 'CLASSICSIDES',
    item: 'Spicy Garlic Bread',
    price: '$7.00',
  },
  {
    id: 4,
    category: 'CLASSICSIDES',
    item: 'Cheesy Wedges',
    price: '$7.00',
  },
  {
    id: 5,
    category: 'CLASSICSIDES',
    item: 'Cheesy Bacon Chips',
    price: '$7.00',
  },
  {
    id: 6,
    category: 'CLASSICSIDES',
    item: 'Kumara Fries',
    price: '$7.00',
  },
]

const favoriteSides = [
  {
    id: 1,
    category: 'FAVORITESIDES',
    item: 'Spicy Chicken Wings',
    price: '$12.00',
  },
  {
    id: 2,
    category: 'FAVORITESIDES',
    item: 'Spicy Tandoori Bites',
    price: '$12.00',
  },
  {
    id: 3,
    category: 'FAVORITESIDES',
    item: 'BBQ Chicken Wings',
    price: '$12.00',
  },
  {
    id: 4,
    category: 'FAVORITESIDES',
    item: 'BBQ Pork Ribs',
    price: '$12.00',
  },
  {
    id: 5,
    category: 'FAVORITESIDES',
    item: 'Cheesy Jalapeno Bites',
    price: '$12.00',
  },
  {
    id: 6,
    category: 'FAVORITESIDES',
    item: 'Mac and Cheese Bites',
    price: '$12.00',
  },
  {
    id: 7,
    category: 'FAVORITESIDES',
    item: 'Buffalo Wings',
    price: '$12.00',
  },
]

const pastas = [
  {
    id: 1,
    category: 'PASTAS',
    item: 'Beef Lasagne',
    price: '$13.00',
  },
  {
    id: 2,
    category: 'PASTAS',
    item: 'Chicken and Bacon Fettuccine',
    price: '$13.00',
  },
]

const drinks = [
  {
    id: 1,
    category: 'DRINKS',
    item: 'Coke Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 2,
    category: 'DRINKS',
    item: 'Coke Zero Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 3,
    category: 'DRINKS',
    item: 'Sprite Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 4,
    category: 'DRINKS',
    item: 'Fanta Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 5,
    category: 'DRINKS',
    item: 'L&P Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 6,
    category: 'DRINKS',
    item: 'Lift Can',
    description: '330ml',
    price: '$2.50',
  },
  {
    id: 7,
    category: 'DRINKS',
    item: 'Coke 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 8,
    category: 'DRINKS',
    item: 'Coke Zero 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 9,
    category: 'DRINKS',
    item: 'Sprite 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 10,
    category: 'DRINKS',
    item: 'Fanta 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 11,
    category: 'DRINKS',
    item: 'L&P 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 12,
    category: 'DRINKS',
    item: 'Lift 1.5L',
    description: 'Bottle',
    price: '$4.50',
  },
  {
    id: 13,
    category: 'DRINKS',
    item: 'Classic Ginger beer (Schweppes)',
    description: '',
    price: '$4.00',
  },
  {
    id: 14,
    category: 'DRINKS',
    item: 'Orange & Mango Sparkling',
    description: '440ml',
    price: '$4.00',
  },
  {
    id: 15,
    category: 'DRINKS',
    item: 'Apple Orange & Mango',
    description: 'Organic Juice 275Ml',
    price: '$4.00',
  },
  {
    id: 16,
    category: 'DRINKS',
    item: 'Apple & Blackcurrant',
    description: 'Organic Juice 275Ml',
    price: '$4.00',
  },
  {
    id: 17,
    category: 'DRINKS',
    item: 'Schweppes Lemonade',
    description: '330ml',
    price: '$4.00',
  },
  {
    id: 18,
    category: 'DRINKS',
    item: 'Pump Water',
    description: '750Ml',
    price: '$3.50',
  },
]

const desserts = [
  {
    id: 1,
    item: 'Ben & Jerry Chocolate Chip Cookie Dough',
    description:
      'Vanilla ice cream with chunks of chocolate chip cookie dough.',
    price: '$4.99',
  },
  {
    id: 2,
    item: 'BEN & JERRYS Chewy Gooey Cookie',
    description:
      'Milk Chocolate & coconut ice cream with fudge flakes, shortbread cookies & caramel l swirl.',
    price: '$12.99',
  },
  {
    id: 3,
    item: 'BEN & JERRYS Fudge Brownie.',
    description: 'Chocolate ice cream with fudge brownies.',
    price: '$12.99',
  },
  {
    id: 4,
    item: 'BEN & JERRYS The Tonight Dough',
    description:
      'Caramel & Chocolate ice cream with chocolate cookie swirls & Chunks of chocolate chip cookie dough & Peanut butter cookie dough.',
    price: '$12.99',
  },
  {
    id: 5,
    item: 'BEN & JERRYS Chocolate Chip Cookie Dough',
    description:
      'Vanilla ice cream with chunks of chocolate chip cookie dough.',
    price: '$12.99',
  },
  {
    id: 6,
    item: 'MAGNUM Luxe salted Caramel',
    description:
      'vanilla flavoured ice cream,Rich salted caramel sauce and chocolate shards in a cracking milk chocolate shell.',
    price: '$12.99',
  },
  {
    id: 7,
    item: 'MAGNUM Classic',
    description:
      'Vanilla flavoured dairy ice cream with chocolate shards in a cracking chocolate shell.',
    price: '$12.99',
  },
]

const specials = [
  {
    id: 1,
    item: 'Just Sides',
    description: 'Any 2 Standard Sides',
    price: '$9.00',
  },
  {
    id: 2,
    item: 'Single Meal',
    description: '1 x Signature Range Pizza plus 2 x Standard Sides',
    price: '$24.00',
  },
  {
    id: 3,
    item: 'Mixed Meal',
    description:
      '1 x Signature Range Pizza, 1 x Classic Range Pizza plus 2 x Standard Sides',
    price: '$37.00',
  },
  {
    id: 4,
    item: 'Twin Meal',
    description: '2 x Signature Range Pizza plus 2 x Standard Sides',
    price: '$40.00',
  },
  {
    id: 5,
    item: 'Half & Half Pizza',
    description: '',
    price: '$16.50',
  },
  {
    id: 6,
    item: 'Signature Trio',
    description: '3 x Signature Range Pizzas',
    price: '$47.00',
  },
  {
    id: 7,
    item: 'Classic Trio',
    description: '3 x Classic Range Pizzas',
    price: '$38.00',
  },
]

const classicRange = [
  {
    id: 1,
    item: 'Cheese Lovers Pizza',
    description: 'tomato base, Mozzarella',
    price: '$13.50',
  },
  {
    id: 2,
    item: 'Margherita Pizza',
    description: 'tomato base, Mozzarella, tomatoes, basil',
    price: '$13.50',
  },
  {
    id: 3,
    item: 'Crunchy Veg Pizza',
    description:
      'tomato base, onion, garlic, black pepper, jalapenos, tomatoes, coriander, Mozzarella, capsicum, black olives',
    price: '$13.50',
  },
  {
    id: 4,
    item: 'Pepperoni Pizza',
    description: 'tomato base, pepperoni, Mozzarella',
    price: '$13.50',
  },
  {
    id: 5,
    item: 'Ham and Cheese Pizza',
    description: 'tomato base, ham, Mozzarella',
    price: '$13.50',
  },
  {
    id: 6,
    item: 'Tuna and Pineapple Pizza',
    description: 'tomato base, onion, garlic, tuna, pineapple, mayonnaise',
    price: '$13.50',
  },
  {
    id: 7,
    item: 'Chicken BBQ Pizza',
    description:
      'Tomato Base , Onion , Mozzarella,Chicken , BBQ Sauce , Capsicum.',
    price: '$13.50',
  },
  {
    id: 8,
    item: 'Chicken & Cheese Pizza',
    description: 'Tomato Base ,Chicken , Mozzarella',
    price: '$13.50',
  },
]
const vegetarian = [
  {
    id: 1,
    item: 'Veg Delight Pizza',
    description: 'Veg Triple Sauce Pizza',
    price: '$16.50',
  },
  {
    id: 2,
    item: 'Veg Triple Sauce Pizza',
    description:
      'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
    price: '$16.50',
  },
  {
    id: 3,
    item: 'Pesto Corn Pizza',
    description:
      'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
    price: '$16.50',
  },
  {
    id: 4,
    item: 'Veg Supreme Pizza',
    description:
      'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
    price: '$16.50',
  },
  {
    id: 5,
    item: 'Butter Paneer Pizza',
    description:
      'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
    price: '$16.50',
  },
  {
    id: 6,
    item: 'Peri Peri Paneer Pizza',
    description:
      'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
    price: '$16.50',
  },
  {
    id: 7,
    item: 'Chilli Paneer Pizza',
    description:
      'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
    price: '$16.50',
  },
  {
    id: 8,
    item: 'Spicy Paneer Pasand Pizza',
    description:
      'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
    price: '$16.50',
  },
  {
    id: 9,
    item: 'Spicy Corn Deluxe Pizza',
    description:
      'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños .',
    price: '$16.50',
  },
  {
    id: 10,
    item: 'Creamy Mushroom Pizza',
    description:
      'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
    price: '$16.50',
  },
  {
    id: 11,
    item: 'Paneer Tadka',
    description:
      'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
    price: '$16.50',
  },
]

const chicken = [
  {
    id: 1,
    item: 'Apricot Chicken Pizza',
    description:
      'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
    price: '$16.50',
  },
  {
    id: 2,
    item: 'Butter Chicken Pizza',
    description:
      'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
    price: '$16.50',
  },
  {
    id: 3,
    item: 'Cajun Chicken Pizza',
    description:
      'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
    price: '$16.50',
  },
  {
    id: 4,
    item: 'Chicken Triple Sauce Pizza',
    description:
      'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
    price: '$16.50',
  },
  {
    id: 5,
    item: 'Chipotle Chicken Pizza',
    description:
      'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
    price: '$16.50',
  },
  {
    id: 6,
    item: 'Cranberry Chicken & Camembert Pizza',
    description:
      'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
    price: '$16.50',
  },
  {
    id: 7,
    item: 'Chilli Chicken Pizza',
    description:
      'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
    price: '$16.50',
  },
  {
    id: 8,
    item: 'Peri Peri Chicken Pizza',
    description:
      'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
    price: '$16.50',
  },
  {
    id: 9,
    item: 'Pesto Chicken Pizza',
    description:
      'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
    price: '$16.50',
  },
  {
    id: 10,
    item: 'Bacon and Alfredo Chicken Pizza',
    description:
      'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
    price: '$16.50',
  },
  {
    id: 11,
    item: 'Satay Chicken Pizza',
    description:
      'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
    price: '$16.50',
  },
  {
    id: 12,
    item: 'Tandoori Chicken Pizza',
    description:
      'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
    price: '$16.50',
  },
  {
    id: 13,
    item: 'BBQ Chicken & Bacon',
    description:
      'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
    price: '$16.50',
  },
]

class App extends Component {
  state = {
    isIconChange: false,
    isTimingShow: false,
    activeTabId: tabsList[0].tabId,
  }

  changeIconShow = () => {
    this.setState(prevState => ({isIconChange: !prevState.isIconChange}))
  }

  changeShowTimings = () => {
    this.setState(prevState => ({isTimingShow: !prevState.isTimingShow}))
  }

  deliveryFeeAndOrder = () => (
    <div className="deliveryfee-order-container">
      <h1 className="fee-heading">Delivery Fee</h1>
      <p className="price">$9.99</p>

      <h1 className="fee-heading">Minimum Order</h1>
      <p className="price">No Minimum Order</p>
    </div>
  )

  showSpecialTimings = () => (
    <div className="special-openings-container">
      <p className="day">07/03/2023</p>
      <p className="time">Closed</p>
    </div>
  )

  renderSmallDevicesTabList = () => {
    const {activeTabId} = this.state
    return (
      <div className="small-devises-tabs-main-container">
        <ul className="small-devices-tabs-container">
          {tabsList.map(tab => (
            <TabItem
              key={tab.id}
              tabDetails={tab}
              changeTabId={this.changeTabId}
              isActive={tab.tabId === activeTabId}
            />
          ))}
        </ul>
      </div>
    )
  }

  changeTabId = id => {
    this.setState({activeTabId: id})
  }

  renderTabLists = () => {
    const {activeTabId} = this.state
    console.log(activeTabId)
    return (
      <div className="tabs-main-container">
        <ul className="tabs-container">
          {tabsList.map(tab => (
            <TabItem
              key={tab.id}
              tabDetails={tab}
              changeTabId={this.changeTabId}
              isActive={tab.tabId === activeTabId}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderFoodItems = () => {
    const {activeTabId} = this.state

    return (
      <div className="display-food-items-container">
        <h1 className="category-name">Specials</h1>
        <ul className="food-items-container">
          {specials.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Classic Range</h1>
        <ul className="food-items-container">
          {classicRange.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Vegetarian</h1>
        <p className="category-para">Signature Range</p>
        <ul className="food-items-container">
          {vegetarian.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Chicken</h1>
        <p className="category-para">Signature Range</p>
        <ul className="food-items-container">
          {chicken.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Meat</h1>
        <p className="category-para">Signature Range</p>
        <ul className="food-items-container">
          {data.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Seafood</h1>
        <p className="category-para">Signature Range</p>
        <ul className="food-items-container">
          {seaFood.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Standard Sides</h1>

        <ul className="food-items-container">
          {standardSides.map(food => (
            <StandardItems foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Classic Sides</h1>
        <ul className="food-items-container">
          {classicSides.map(food => (
            <StandardItems foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Favorite Sides</h1>
        <ul className="food-items-container">
          {favoriteSides.map(food => (
            <StandardItems foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Pastas</h1>
        <ul className="food-items-container">
          {pastas.map(food => (
            <StandardItems foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Drinks</h1>
        <ul className="food-items-container">
          {drinks.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>

        <h1 className="category-name">Desserts</h1>
        <ul className="food-items-container">
          {desserts.map(food => (
            <FoodItem foodDetails={food} key={food.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderFoodsItemsContainer = () => {
    const {activeTabId} = this.state

    return (
      <div className="tabs-items-order-container">
        {this.renderTabLists()}
        {this.renderFoodItems()}
        {this.renderOrderOnlineCard()}
      </div>
    )
  }

  renderOrderOnlineCard = () => (
    <div className="order-online-card">
      <GiKnifeFork className="knife-icons" />
      <h1 className="ready-to-eat-heading">Ready To Eat?</h1>

      <Popup
        modal
        trigger={
          <button className="order-online-button" type="button">
            Order Online
          </button>
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
      <p className="order-online-para">No contact delivery available</p>
    </div>
  )

  render() {
    const {isIconChange, isTimingShow} = this.state
    return (
      <div className="bg-container">
        <nav className="nav-container">
          <img
            src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
            alt="logo"
            className="icon"
          />

          <div className="favourite-login-container">
            <Popup
              modal
              trigger={
                <div className="favourite-container">
                  <p className="favourite-name">Favourite</p>
                  <BsHeart className="person-icon" />
                </div>
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
                  <div className="login-popup-container">
                    <BsPersonCircle className="login-person-icon" />
                    <p className="popup-name">Login / Signup</p>
                    <p className="save-popup-text">
                      Save your orders & details
                    </p>
                    <input className="email-input" placeholder="You E-mail" />
                    <br />
                    <button type="button" className="continue-button">
                      Continue
                    </button>
                    <br />
                    <button type="button" className="facebook-button">
                      <BsFacebook /> Login With Facebook
                    </button>
                    <p className="save-popup-text">
                      By proceeding, you are accepting our
                    </p>
                    <p className="terms-conditions-text">terms & conditions</p>
                  </div>
                </>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <div className="login-container">
                  <p className="favourite-name">Login / Sign Up</p>
                  <BsPersonCircle className="person-icon" />
                </div>
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
                  <div className="login-popup-container">
                    <BsPersonCircle className="login-person-icon" />
                    <p className="popup-name">Login / Signup</p>
                    <p className="save-popup-text">
                      Save your orders & details
                    </p>
                    <input className="email-input" placeholder="You E-mail" />
                    <br />
                    <button type="button" className="continue-button">
                      Continue
                    </button>
                    <br />
                    <button type="button" className="facebook-button">
                      <BsFacebook /> Login With Facebook
                    </button>
                    <p className="save-popup-text">
                      By proceeding, you are accepting our
                    </p>
                    <p className="terms-conditions-text">terms & conditions</p>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </nav>

        {this.renderSmallDevicesTabList()}
        <div className="banner-container">
          <img
            src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
            alt="logo"
            className="center-icon"
          />
          <h1 className="logo-heading">GLEN EDEN</h1>
        </div>

        {this.renderFoodsItemsContainer()}

        <div className="services-hours-location-container">
          <div className="services-card">
            <div className="bag-heading-container">
              <div className="cart-container">
                <BsFillHandbagFill className="bag-icon" />
              </div>
              <h1 className="services-heading">Services</h1>
            </div>
            <p className="text-para">Pickup</p>

            <div className="delivery-container">
              <p className="text-delivery">Delivery</p>
              {isIconChange ? (
                <MdOutlineKeyboardArrowUp
                  className="arrow-icon"
                  onClick={this.changeIconShow}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="arrow-icon"
                  onClick={this.changeIconShow}
                />
              )}
            </div>
            {isIconChange && this.deliveryFeeAndOrder()}
          </div>

          <div className="openinghours-container">
            <div className="bag-heading-container">
              <div className="cart-container">
                <AiOutlineClockCircle className="bag-icon" />
              </div>
              <h1 className="services-heading">Opening Hours</h1>
            </div>
            <div className="day-time-container">
              <p className="day">Monday</p>
              <p className="time">03:00 pm - 11:00 pm</p>
            </div>
            <div className="day-time-container">
              <p className="day">Tuesday</p>
              <p className="time">11:00 am - 11:00 pm</p>
            </div>
            <div className="day-time-container">
              <p className="day">Wednesday</p>
              <p className="time">11:00 am - 11:00 pm</p>
            </div>
            <div className="day-time-container">
              <p className="day">Thursday</p>
              <p className="time">11:00 am - 11:00 pm</p>
            </div>
            <div className="day-time-container">
              <p className="day">Friday</p>
              <p className="time">11:00 am - 11:00 pm</p>
            </div>
            <div className="day-time-container">
              <p className="day">Saturday</p>
              <p className="time">11:00 am - 11:00 pm</p>
            </div>
            <div className="sunday-container">
              <div className="sunday-time-container">
                <p className="day">Sunday</p>
                <p className="time">11:00 am - 11:00 pm</p>
              </div>
              <div className="special-openings-container">
                <p className="day">Special Opening Hours</p>
                {isTimingShow ? (
                  <MdOutlineKeyboardArrowUp
                    className="arrow-icon"
                    onClick={this.changeShowTimings}
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className="arrow-icon"
                    onClick={this.changeShowTimings}
                  />
                )}
              </div>
            </div>
            {isTimingShow && this.showSpecialTimings()}
          </div>

          <div className="location-card">
            <div className="bag-heading-container">
              <div className="cart-container">
                <IoLocationSharp className="bag-icon" />
              </div>
              <h1 className="services-heading">Location</h1>
            </div>
            <p className="location-para">
              5/182 West Coast Road, Glen Eden, Auckland 0602, New Zealand
            </p>
            <button type="button" className="map-button">
              View Map
            </button>
            <p className="location-para">Phone</p>
            <p className="location-para">09 600 1116</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="icons-container">
            <a href="/" target="__blank__">
              <BsFacebook className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/pizzaboyz.gleneden/"
              target="__blank__"
            >
              <BsInstagram className="footer-icon" />
            </a>
          </div>
          <hr className="hr-line" />
          <p className="footer-heading">
            Powered By <span className="span1">Book N Order</span> -
            <span className="span2"> Terms & Conditions </span>
          </p>
        </div>
      </div>
    )
  }
}

export default App
