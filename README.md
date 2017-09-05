# react-chat-widget
[![circle-ci](https://img.shields.io/circleci/project/github/Wolox/react-chat-widget.svg)](https://circleci.com/gh/Wolox/react-chat-widget)
[![npm](https://img.shields.io/npm/v/react-chat-widget.svg)](https://www.npmjs.com/package/react-chat-widget)
## Features

- Plain text message UI
- Snippet style for links (only as responses for now)
- Fully customizable
- Easy to use

![demonstration](./assets/chat-demonstration.gif)

## Installation

#### npm
```bash
npm install --save react-chat-widget
```

#### yarn
```bash
yarn add react-chat-widget
```

## Usage

1- Add the Widget component to your root component

```js
import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
```

2- The only required prop you need to use is the `handleNewUserMessage`, which will receive the input from the user.

```js
import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';

class App extends Component {
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    );
  }
}

export default App;
```

3- Import the methods for you to add messages in the Widget. (See [messages](#messages))

```js
import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.sendMessage}
        />
      </div>
    );
  } 
}

export default App;
```

4- Customize the widget to match your app design! You can add both props to manage the title of the widget, the avatar it will use and of course the styles it will have.

```js
import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from './logo.svg';

const widgetStyles = {
  header: {
    backgroundColor: '#334588'
  },
  launcher: {
    backgroundColor: '#334588'
  },
  message: {
    backgroundColor: '#cdd8ec'
  },
  snippet: {
    info: {
      borderLeft: '2px solid #cdd8ec'
    }
  }
}

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.sendMessage}
          stylesInjected={widgetStyles}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  } 
}

export default App;
```

## API

#### Props

- **title:** (PropTypes.string) Title of the widget
- **subtitle:** (PropTypes.string) Subtitle of the widget
- **senderPlaceHolder:** (PropTypes.string) The placeholder of the message input
- **profileAvatar:** (PropTypes.string.isRequired) The profile image that will be set on the responses
- **stylesInjected:** (Proptypes.object) The styles to be injected, see [styles](#styles)
- **handleNewUserMessage:** (PropTypes.func.isRequired) Function to handle the user input, will receive the full text message when submitted

#### Styles

To inject styles you need to use the prop **stylesInjected**, and send an object with the following options:

```js
{
  header: PropTypes.object, // Styles for the header section
  launcher: PropTypes.object, // Styles for the launcher
  message: PropTypes.object, // Styles for the user messages
  avatar: PropTypes.object, // Styles for the avatar picture
  messagesContainer: PropTypes.object, // Styles for the messages container - where you can see the messages
  responses: PropTypes.object, // Styles for the response messages, this will also affect the snippets
  snippet: PropTypes.shape({ //Styles for the snippet message. You can only change the styles of the info section (where the actual link is)
    info: PropTypes.object 
  })
};
```

#### Messages

In order to add new messages, you are provided with the methods:

```js
// This method will add a message written as a user. Keep in mind it will not trigger the prop handleNewUserMessage()
addUserMessage(text);

// This method will add a message written as a response
addResponseMessage(text);

// This method will add a link snippet
addLinkSnippet(link);
```

The parammeter `text` is the plain string you want to add as a response/user message.

For the method `addLinkSnippet(link)`, the link object has to be like:

```js
{
  title: 'My awesome link',
  link: 'https://github.com/Wolox/react-chat-widget'
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## About

This project is maintained by [Martín Callegari](https://github.com/mcallegari10) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## License

**react-chat-widget** is available under the MIT [license](LICENSE).

    Copyright (c) 2017 Martín Callegari <martin.callegari@wolox.com.ar>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.