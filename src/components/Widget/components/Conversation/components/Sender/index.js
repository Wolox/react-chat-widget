import React from 'react';
import PropTypes from 'prop-types';
import { CHAT_ERRORS } from 'constants';

import send from 'assets/send_button.svg';
import micOn from 'assets/microphone.svg';
import micOff from 'assets/microphone-slash.svg';
import './style.scss';

export default class Sender extends React.Component {
  state = {
    recognizing: false,
    icon: micOn,
    color: 'blue',
    interim_transcript: '',
    final_transcript: '',
    ignore_onend: null,
    start_timestamp: null
  };

  componentDidMount() {
    const { onSpeechError } = this.props;
    const firstChar = /\S/;
    function capitalize(s) {
      return s.replace(firstChar, m => m.toUpperCase());
    }

    function upgrade() {
      onSpeechError(CHAT_ERRORS.UPGRADE);
    }


    if (!('webkitSpeechRecognition' in window)) {
      upgrade();
    } else {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.setState({
          recognizing: true
        });
      };

      this.recognition.onerror = (event) => {
        if (event.error === 'no-speech') {
          onSpeechError(CHAT_ERRORS.NO_SPEECH);
          if (this.state.recognizing) {
            this.setState({
              recognizing: false,
              icon: micOn
            });
            this.recognition.stop();
            return;
          }
        }
        if (event.error === 'audio-capture') {
          onSpeechError(CHAT_ERRORS.AUDIO_CAPTURE);
        }
        if (event.error === 'not-allowed') {
          if (event.timeStamp - this.state.start_timestamp < 100) {
            onSpeechError(CHAT_ERRORS.NOT_ALLOWED_LESS_100);
          } else {
            onSpeechError(CHAT_ERRORS.NOT_ALLOWED);
          }
        }
        if (event.error) this.setState({ ignore_onend: true });
      };

      this.recognition.onend = () => {
        this.setState({
          recognizing: false,
          icon: micOn
        });
      };

      this.recognition.onresult = (event) => {
        if (!event.results) {
          this.recognition.onend = null;
          this.recognition.stop();
          upgrade();
          return;
        }
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.setState({
              final_transcript: this.state.final_transcript + event.results[i][0].transcript
            });
          } else {
            this.setState({
              interim_transcript: this.state.interim_transcript + event.results[i][0].transcript
            });
          }
        }
        const finalTranscriptOutput = capitalize(this.state.final_transcript);

        this.props.onSendMessageVoice(finalTranscriptOutput);
      };
    }
  }
  startButton = (event) => {
    const { onSpeechError } = this.props;
    if (!('webkitSpeechRecognition' in window) && !this.state.recognizing) {
      onSpeechError(CHAT_ERRORS.UPGRADE);
    } else {
      if (this.state.recognizing) {
        this.setState({
          recognizing: false,
          icon: micOn
        });
        this.recognition.stop();
        return;
      }
      this.setState({
        final_transcript: '',
        ignore_onend: false,
        start_timestamp: event.timeStamp,
        recognizing: true,
        icon: micOff
      });
      this.recognition.lang = 'en-US';
      this.recognition.start();
    }
  };

  render() {
    const { sendMessage, placeholder, disabledInput } = this.props;
    return (
      <form className="sender" onSubmit={sendMessage}>
        <input type="text" className="new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus autoComplete="off" />
        <button onClick={this.startButton} className="send" id="audio">
          {<img src={this.state.icon} style={{ fill: this.state.color }} className="send-icon" alt="send" />}
        </button>
        <button type="submit" className="send">
          <img src={send} className="send-icon" alt="send" />
        </button>
      </form>
    );
  }
}


Sender.propTypes = {
  sendMessage: PropTypes.func,
  onSendMessageVoice: PropTypes.func,
  onSpeechError: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool
};

