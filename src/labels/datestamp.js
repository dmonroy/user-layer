import React from 'react'

class DatestampLabel extends React.Component {
  render(){
    var date = new Date(this.props.stamp);
    return(
      <span className="ul-datestamp">{date.toLocaleDateString()}</span>
    )
  }
}

export default DatestampLabel