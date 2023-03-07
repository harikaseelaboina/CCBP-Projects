// Write your code here
import React, {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cas: 2000}

  amount = value => {
    this.setState(prevState => ({
      cas: prevState.cas - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {cas} = this.state

    return (
      <center>
        <div>
          <div>
            <p> Sarah Williams</p>
          </div>

          <div>
            <p>Your Balance {cas}</p>
          </div>

          <div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(item => (
                <DenominationItem
                  key={item.id}
                  details={item}
                  amount={this.amount}
                />
              ))}
            </ul>
          </div>
        </div>
      </center>
    )
  }
}

export default CashWithdrawal
