import React, { Component } from "react";
import PropTypes from "prop-types";

import send from "@assets/send_button.svg";
import micOn from "@assets/mic_off.png";
// import micOff from '@'
import "./style.scss";
class Sender extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
    this.input = React.createRef()
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleKeyPress = (e) => {
    const { message } = this.state    
    if(message && e.key === 'Enter'){
      this.props.sendMessage(message)
      this.setState({ message: '' })
    }
 
  }

  onClickButtonSend = () => {
    const { message } = this.state
    if(message){
      this.props.sendMessage(message)
    }
    this.setState({ message: '' })
  }

  render() {
    const {
      sendMessage,
      placeholder,
      disabledInput,
      autofocus,
      startRecording,
      stopRecording,
    } = this.props
    const { message } = this.state
    return (
      <div className="rcw-sender" onSubmit={sendMessage}>
        <input
          type="text"
          className="rcw-new-message"
          name="message"
          placeholder={placeholder}
          disabled={disabledInput}
          autoFocus={autofocus}
          autoComplete="off"
          onDrop={event.preventDefault}
          onDropOver={event.preventDefault}
          onD
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        {message ?
          //Mic Button
          <button onClick={this.onClickButtonSend} className="rcw-send sendButtonStyle">
            <img src={send} className="rcw-send-icon" alt="send" />
          </button> :
        
        //Send Button
          <button
            className="rcw-send  sendButtonStyle"
              onMouseDown={startRecording}
              onMouseUp={stopRecording}
            >
              <img src={micOn} className="rcw-mic-icon" alt="speak" />
          </button>
        }
      </div>
    )
  }
};

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func
};

export default Sender;