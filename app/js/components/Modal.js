import React from 'react';

export default class Modal extends React.Component {
  render(){
    let className = this.props.className || '' + ' modal'
    let style =  {display: 'none'}
    if(this.props.show){
      style.display = 'block'
      className += ' active'
    }else{
      className += ' hide'
    }
    if(this.props.willBeRemoved){
      return null
    }else{
      return (
        <div className={className} style={style}>
          <div className="content">
            {
              React.Children.map(this.props.children, child=>{
                return <div remove={this.remove}>{child}</div> 
              })
            }
          </div>
        </div>
      )
    } 
  }
}