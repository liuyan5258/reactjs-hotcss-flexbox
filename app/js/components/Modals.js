import React from 'react';
import Modal from './Modal';

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlertModal: false,
      showConfirmModal: false
    }
    this.handleModal = this.handleModal.bind(this)

  }

  // 操作对话框
  handleModal(status, type, isconfirm, other){
    let modalType
    switch(type){
      case 'alert':
        modalType = 'showAlertModal'
        break;
      case 'confirm':
        modalType = 'showConfirmModal'
        break;  
    }
    const modal = {
      Modal: modalType 
    }
    this.setState({
      [modal['Modal']]: status
    })

    if(isconfirm == "ok"){
      // 通常会在这里调接口
      // do something
      console.log("confirmed ok!")
    }
  }

  render(){
    return (
      <div className="m-modal">
        <p>两种modal:弹出框和确认框</p>
        <div className="m-modal-btn">
          <div className="u-btn" onClick={this.handleModal.bind(this,true,'alert')}>alert</div>
          <div className="u-btn" onClick={this.handleModal.bind(this,true,'confirm')}>confirm</div>
        </div>

        <Modal show={this.state.showAlertModal}>
          <div className="m-modal-box">
            <p>这是一个警告框!</p>
            <div className="btn-box">
              <div className="u-btn" onClick={this.handleModal.bind(this,false,'alert')}>ok</div>
            </div>
          </div>
        </Modal>

        <Modal show={this.state.showConfirmModal}>
          <div className="m-modal-box">
            <p>这是一个确认框!</p>
            <div className="btn-box">
              <div className="u-btn" onClick={this.handleModal.bind(this,false,'confirm','no')}>no</div>
              <div className="u-btn" onClick={this.handleModal.bind(this,false,'confirm','ok')}>ok</div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}