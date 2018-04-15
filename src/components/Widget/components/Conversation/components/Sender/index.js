import React from 'react';
import PropTypes from 'prop-types';

import send from 'assets/send_button.svg';
import micOn from 'assets/microphone.svg';
import micOff from 'assets/microphone-slash.svg';
import './style.scss';

export default class Sender extends React.Component {
  constructor() {
    super();
    this.state = {
      recognizing: false,
      icon: micOn,
      color: 'blue',
      interim_transcript: '',
      final_transcript: '',
      ignore_onend: null,
      start_timestamp: null
    };
  }
  componentDidMount() {
    const two_line = /\n\n/g;
    const one_line = /\n/g;
    function linebreak(s) {
      return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
    }

    const first_char = /\S/;
    function capitalize(s) {
      return s.replace(first_char, m => m.toUpperCase());
    }

    function upgrade() {
      console.log('Web Speech API is not supported by this browser. Upgrade to Chrome version 25 or later.');
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
        console.log('Speak now.');
      };

      this.recognition.onerror = (event) => {
        console.error(event.error);
        if (event.error === 'no-speech') {
          console.error('No speech was detected. You may need to adjust your microphone settings');
          this.setState({
            ignore_onend: true
          });
        }
        if (event.error === 'audio-capture') {
          console.error('No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.');
          this.setState({
            ignore_onend: true
          });
        }
        if (event.error === 'not-allowed') {
          if (event.timeStamp - this.state.start_timestamp < 100) {
            console.log(event.timeStamp - this.state.start_timestamp);
            console.error('Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream');
          } else {
            console.error('Permission to use microphone was denied.');
          }
          this.setState({
            ignore_onend: true
          });
        }
      };

      this.recognition.onend = () => {
        console.log('testtt');
        this.setState({
          recognizing: false,
          icon: micOn
        });
        if (this.state.ignore_onend) {
          return;
        }
        if (!this.state.final_transcript) {
          console.log('Click on the microphone icon and begin speaking for as long as you like.');
        }
      };

      this.recognition.onresult = (event) => {
        if (typeof (event.results) === 'undefined') {
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
        const final_transcript_output = capitalize(this.state.final_transcript);

        this.props.onSendMessageVoice(final_transcript_output);

        console.log(final_transcript_output);
      };
    }
  }
  startButton = (event) => {
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

    console.log('Click the "Allow" button above to enable your microphone.');
    console.log(event.timeStamp);
  };

  render() {
    const { sendMessage, placeholder, disabledInput } = this.props;
    return (
      <form className="sender" onSubmit={sendMessage}>
        <input type="text" className="new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus autoComplete="off" />
        <button onClick={this.startButton} className="send" id="audio">
          { <img src={this.state.icon} style={{ fill: this.state.color }} className="send-icon" alt="send" /> }
        </button>
        <button type="submit" className="send">
          <img src={send} className="send-icon" alt="send" />
        </button>
      </form>
    );
  }
}


Sender.propTypes = {
  audio: PropTypes.func,
  onSendMessageVoice: PropTypes.func,
  isRecording: PropTypes.bool,
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool
};

