import React, {Component} from 'react';
import ListItem from './listItemCmp.jsx';
import getCharitiesList from './sources/charitySource.js';

class Charity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
    };
  }

  componentDidMount() {
    this.getCharity();
  }


  getCharity(){
    getCharitiesList().then(data => {
      if (data && data.length) {
        const tempList = [];
        data.forEach(charityObj => {
          const item = <ListItem
            id={charityObj._id}
            name={charityObj.name}
            funds={charityObj.fund_raised}
            amount={charityObj.amount}
          />
          tempList.push(item);
        });
        this.setState({ charityList: tempList });
      }
    });
  }




  render() {
    const listItems = this.state.charityList;
    return (
      <div>
        <h1>Charities</h1>
        {listItems}
      </div>
    );
  }
}
export default Charity;
