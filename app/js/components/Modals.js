import React from 'react';

export default class Modals extends React.Component {
  render(){
    return (
      <div className="m-modal">
        <p>两种modal:弹出框和确认框</p>
        <div className="m-modal-btn">
          <div className="u-btn">alert</div>
          <div className="u-btn">confirm</div>
        </div>
      </div>
    )
  }
}