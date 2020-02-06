import React from 'react';
import { Modal, ModalCloseButton, ModalTitle, ArrowButton, DateButton, DateButtonDay, DateButtonDate, StyledSelect, BlueButton } from './style.jsx'


const availableTime = [ // time text to be shown in select element
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
];

class ModalTT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      active: 0,
      leftDate: ['', ''],
      centerDate: ['', ''],
      rightDate: ['', ''],
      leftArrow: false,
      rightArrow: true,
    };

    this.newDatesOnClick = this.newDatesOnClick.bind(this);
    this.compute3Dates = this.compute3Dates.bind(this);
    this.chooseDateOnClick = this.chooseDateOnClick.bind(this);
  }

  componentDidMount() {
    this.compute3Dates();
  }

  compute3Dates() { // get 3 date values to be shown on modal
    const today = new Date();
    let leftDay = new Date(today);
    let centerDay = new Date(today);
    let rightDay = new Date(today);

    leftDay.setDate(today.getDate() + this.state.index);
    centerDay.setDate(today.getDate() + this.state.index + 1);
    rightDay.setDate(today.getDate() + this.state.index + 2);

    const leftArray = [leftDay.toString().substring(0,3), leftDay.toString().substring(4,10).replace(/0\B/, '')];
    const centerArray = [centerDay.toString().substring(0,3), centerDay.toString().substring(4,10).replace(/0\B/, '')];
    const rightArray = [rightDay.toString().substring(0,3), rightDay.toString().substring(4,10).replace(/0\B/, '')];
    
    this.setState({leftDate: leftArray, centerDate: centerArray, rightDate: rightArray});
  }

  newDatesOnClick(e) { // to slide navigation bar when arrow on navigation bar is clicked
    const clicked = e.target;

    if(this.state.index === 0 && clicked.innerHTML.includes('chevron_left')) {
      /*  do nothing when left arrow buton is clicked even when it cannot go left  */
    } else if(this.state.index === 7 && clicked.innerHTML.includes('chevron_right')) {
      /*  do nothing when right arrow buton is clicked even when it cannot go right  */
    } else {
      const newIndex = (clicked.innerHTML.includes('chevron_left')) ? (this.state.index - 1) : (this.state.index + 1);
      this.setState((state) => {
        state.index = newIndex;

        state.leftArrow = (newIndex !== 0);
        state.rightArrow = (newIndex !== 7);

        return state
      });
      
      this.compute3Dates(); // compute new date based on the index;
    }
  }

  chooseDateOnClick(e) {
    const clicked = e.target;
    if(clicked.classList[2] === 'leftDate' || clicked.parentElement.classList[2] === 'leftDate') {
      const newActive = this.state.index;
      this.setState({active: newActive});
    }

    if(clicked.classList[2] === 'centerDate' || clicked.parentElement.classList[2] === 'centerDate') {
      const newActive = this.state.index + 1;
      this.setState({active: newActive});
    }

    if(clicked.classList[2] === 'rightDate' || clicked.parentElement.classList[2] === 'rightDate') {
      const newActive = this.state.index + 2;
      this.setState({active: newActive});
    }
  }

  render() {
    return (
      <Modal id='summaryModal' w='400px' h='280px'>

        <ModalCloseButton className='material-icons closeIcon' w='400px' onClick={this.props.hideModalOnclick}>close</ModalCloseButton>

        <ModalTitle>Visit this home</ModalTitle>

        <div style={{padding: '0px 20px 15px 20px'}}>
          <div style={{marginRight: '10%', marginLeft: '10%', width: '80%'}}>
            <ArrowButton canmove={this.state.leftArrow} onClick={this.newDatesOnClick}><i className='material-icons'>chevron_left</i></ArrowButton>
            
            <DateButton className="leftDate" clicked={(this.state.index === this.state.active)} onClick={this.chooseDateOnClick}><DateButtonDay>{this.state.leftDate[0]}</DateButtonDay><DateButtonDate>{this.state.leftDate[1]}</DateButtonDate></DateButton>
            
            <DateButton className="centerDate" clicked={(this.state.index + 1 === this.state.active)} onClick={this.chooseDateOnClick}><DateButtonDay>{this.state.centerDate[0]}</DateButtonDay><DateButtonDate>{this.state.centerDate[1]}</DateButtonDate></DateButton>
            
            <DateButton className="rightDate" clicked={(this.state.index + 2 === this.state.active)} onClick={this.chooseDateOnClick}><DateButtonDay>{this.state.rightDate[0]}</DateButtonDay><DateButtonDate>{this.state.rightDate[1]}</DateButtonDate></DateButton>
            
            <ArrowButton canmove={this.state.rightArrow} onClick={this.newDatesOnClick}><i className='material-icons'>chevron_right</i></ArrowButton>
          </div>

          <StyledSelect>
            {availableTime.map((ele, i) => {
              return (<option key={i} value={ele}>{ele}</option>);
            })}
          </StyledSelect>

          <BlueButton style={{marginRight: '10%', marginLeft: '10%', width: '80%'}}>Request this time</BlueButton>
        </div>

      </Modal>
    );
  }
}

ModalTT.propTypes = {
  hideModalOnclick: PropTypes.func
}

export default ModalTT;