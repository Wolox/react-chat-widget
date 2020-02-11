import React, { Component } from "react";
import PropTypes from "prop-types";

import send from "@assets/send_button.svg";

import "./style.scss";

class Sender extends Component {
  input = React.createRef();

  componentDidUpdate() {
    this.input.current.focus();
  }

  render() {
    const {
      sendMessage,
      placeholder,
      disabledInput,
      autofocus,
      sendButtonAlt
    } = this.props;
    return (
      <form className="rcw-sender" onSubmit={sendMessage}>
        <input
          type="text"
          className="rcw-new-message"
          name="message"
          placeholder={placeholder}
          disabled={disabledInput}
          autoFocus={autofocus}
          autoComplete="off"
          ref={this.input}
        />
        <button type="submit" className="rcw-send">
          <img src={send} className="rcw-send-icon" alt={sendButtonAlt} />
        </button>
      </form>
    );
  }
}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  sendButtonAltTypes: PropTypes.bool,
  sendButtonAlt: PropTypes.string
};

export default Sender;
