import React from 'react';
import PropTypes from 'prop-types';

import send from '@assets/send_button.svg';
import micOn from '@assets/mic_off.png';
// import micOff from '@'
import './style.scss';
const Sender = ({ sendMessage, placeholder, disabledInput, autofocus, startRecording, stopRecording }) =>
  <form className="rcw-sender" onSubmit={sendMessage}>
    <input type="text" className="rcw-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" />
    <button type="submit" className="rcw-send">
      <img src={send} className="rcw-send-icon" alt="send"  />
    </button>
    <button className="btn" >
    <img src={micOn} className="rcw-mic-on" alt="speak" onMouseDown={cxstartRecording} onMouseUp={stopRecording}></img>
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
  startRecording:PropTypes.func,
  stopRecording:PropTypes.func
};

export default Sender;
