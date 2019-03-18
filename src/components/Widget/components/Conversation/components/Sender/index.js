import React, { Component } from 'react';
import PropTypes from 'prop-types';
import send from "@assets/send_button.svg";
import micOn from "@assets/mic_off.png";
import "./style.scss";


class Sender extends Component {
  input = React.createRef();

  componentDidUpdate() {
    this.input.current.focus();
  }

  render() {
    const { sendMessage, placeholder, disabledInput, autofocus } = this.props;
    return (
      <form className="rcw-sender" onSubmit={sendMessage}>
        <input type="text" className="rcw-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" ref={this.input} />

        <button
          className="rcw-send"
          onMouseDown={this.props.startRecording}
          onMouseUp={this.props.stopRecording}
          onTouchStart={this.props.startRecording}
          onTouchEnd={this.props.stopRecording}
          onContextMenuCapture={event => event.preventDefault()}
        >
          {/* <img src={micOn} className="rcw-mic-icon" alt="speak" onContextMenu={event => { event.preventDefault(), event.stopPropagation() }} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>
        </button>
        <button type="submit" className="rcw-send">
          <img src={send} className="rcw-send-icon" alt="send" onContextMenu={event => event.preventDefault()} />
        </button>
      </form>
    );
  }

}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
  startRecording: PropTypes.func,
  stopRecording: PropTypes.func
};

export default Sender;
