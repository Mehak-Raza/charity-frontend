import React, {Component} from 'react';
import addDonation from './sources/donationSource.js'

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      funds: props.funds,
      amount: 1000,
    };
  }

  componentWillReceiveProps(props) {
    const item = {
      id: props.id,
      name: props.name,
      funds: props.funds,
      amount: props.amount,
    };
    this.setState({ id, name, funds, amount });
  }

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  }



  donateAmount = () => {
    const payload = {
      sender: 1,
      charity_name: this.state.name,
      amount: this.state.amount,
    };

    addDonation(payload).then(data => {
      this.setState({
        funds: data.fund_raised,
        amount: 1000,
      });
    });

  }
  render() {
    const {
      name,
      amount,
      funds
    } = this.state;
    return (
      <ul>
        <li>{name}</li>
        <li>{funds}</li>
        <input
          value={amount}
          type="number"
          step="1000"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Donate"
          onClick={this.donateAmount}
        />
      </ul>
    );
  }
}
export default ListItem;
