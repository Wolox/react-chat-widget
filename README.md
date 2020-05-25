# React Chat Widget
[![circle-ci](https://img.shields.io/circleci/project/github/Wolox/react-chat-widget.svg)](https://circleci.com/gh/Wolox/react-chat-widget)
[![npm](https://img.shields.io/npm/v/react-chat-widget.svg)](https://www.npmjs.com/package/react-chat-widget)

[![FEArmy](./assets/FEA_open_source_sm.png)](https://github.com/orgs/Wolox/teams/front-end-army/members)

## Sponsors

<div>
    <br/>
    <p align="center">
        <a href="https://getstream.io/chat/?utm_source=github&utm_medium=react-chat-widget&utm_campaign=sponsorship" target="_blank">
            <img src="https://i.imgur.com/oU7XYkk.png">
        </a>
    </p>
    <br>
    <div>
        <p align="center">
            A scalable <a href="https://getstream.io/chat/?utm_source=github&utm_medium=react-chat-widget&utm_campaign=sponsorship" target="_blank">Chat API/Server</a> written in Go
        </p>
    </div>
    <div>
        <p align="center">
            <a href="https://getstream.io/chat/get_started/?utm_source=github&utm_medium=react-chat-widget&utm_campaign=sponsorship" target="_blank">API Tour</a> | <a href="https://github.com/getstream/stream-sdks?utm_source=github&utm_medium=react-chat-widget&utm_campaign=sponsorship" target="_blank">SDKs</a> | <a href="https://getstream.io/chat/docs/?utm_source=github&utm_medium=react-chat-widget&utm_campaign=sponsorship" target="_blank">Docs</a>
        </p>
    </div>
</div>

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
import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
```

2- The only required prop you need to use is the `handleNewUserMessage`, which will receive the input from the user.

```js
import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;
```

3- Import the methods for you to add messages in the Widget. (See [messages](#messages))

```js
import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;
```

4- Customize the widget to match your app design! You can add both props to manage the title of the widget and the avatar it will use. Of course, feel free to change the styles the widget will have in the CSS

```js
import React from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
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

|prop|type|required|default value|description|
|---|--- |---     |---          |---        |
|**handleNewUserMessage**|(...args: any[]) => any|YES| |Function to handle the user input, will receive the full text message when submitted|
|**title**|string|NO|'Welcome'|Title of the widget|
|**subtitle**|string|NO|'This is your chat subtitle'|Subtitle of the widget|
|**senderPlaceHolder**|string|NO|'Type a message...'|The placeholder of the message input|
|**profileAvatar**|string|NO| |The profile image that will be set on the responses|
|**titleAvatar**|string|NO| |The picture image that will be shown next to the chat title|
|**showCloseButton**|boolean|NO|false|Show or hide the close button in full screen mode|
|**fullScreenMode**|boolean|NO|false|Allow the use of full screen in full desktop mode|
|**autofocus**|boolean|NO|true|Autofocus or not the user input|
|**launcher**|(handleToggle) => ElementType|NO||Custom Launcher component to use instead of the default|
|**handleQuickButtonClicked**|(...args: any[]) => any|NO||Function to handle the user clicking a quick button, will receive the 'value' when clicked.|
|**showTimeStamp**|boolean|NO|true|Show time stamp on messages|
|**chatId**|string|NO|'rcw-chat-container'|Chat container id for a11y|
|**launcherOpenLabel**|string|NO|'Open chat'|Alt value for the laucher when closed|
|**launcherCloseLabel**|string|NO|'Close chat'|Alt value for the laucher when open|
|**sendButtonAlt**|string|NO|'Send'|Send button alt for a11y purposes|
|**handleTextInputChange**|(event) => any|NO| |Prop that triggers on input change|
|**handleSubmit**|(event) => any|NO| |Prop that triggers when a message is submitted, used for custom validation|

#### Styles

To change the styles you need the widget to have, simply override the CSS classes wrapping them within the containers and add your own style to them! All classes are prefixed with `rcw-` so they don't override your other classes in case you are not hasing them. 
To override, you can do, for expample:

```css
.rcw-conversation-container > .rcw-header {
  background-color: red;
}

.rcw-message > .rcw-response {
  background-color: black;
  color: white;
}
```

That way, you can leave the JS clean and keep the styles within the CSS.

#### Messages

As of v3.0, messages now have an optional ID that can be added on creation.If you want to add new messages, you can use the following methods:

- **addResponseMessage**
  - params:
    - text: string
    - id: string (optional)
  - Method to add a new message written as a response to a user input.

- **addUserMessage**
  - params: 
    - text: string
    - id: string (optional)
  - This method will add a new message written as a user. Keep in mind it will not trigger the prop handleNewUserMessage()

- **addLinkSnippet**
  - params:
    - link
  - Method to add a link snippet. You need to provide this method with a link object, which must be in the shape of:
    ```js
    {
      title: 'My awesome link',
      link: 'https://github.com/Wolox/react-chat-widget',
      target: '_blank'
    }
    ```
  - By default, `target` value is `_blank` which will open the link in a new window.

- **renderCustomComponent**
  - params: 
    - component: Component to be render,
    - props: props the component needs,
    - showAvatar: boolean, default value: false; the component will be rendered with the avatar like the messages
  - Method to render a custom component inside the messages container. With this method, you can add whatever component you need the widget to have.

- **setQuickButtons**
  - params:
    - buttons: An array of objects with the keys `label` and `value`

**Markdown is supported for both the responses and user messages.**

#### Widget behavior

You can also control certain actions of the widget:

- **toggleWidget**
  - params: No params expected
  - This method is to toggle the widget at will without the need to trigger the click event on the launcher

- **toggleInputDisabled**
  - params: No params expected
  - Method to toggle the availability of the message input for the user to write on

- **toggleMsgLoader**
  - Toggles the message loader that shows as a "typing..." style.

- **deleteMessages***
  - params:
    - count: messages to delete counting from last to first
    - id: message id to delete
  - Delete messages that either have an id you previously set with the `addResponseMessage` or delete based on position or both of them. For example `deleteMessages(2, 'myId')` will delete the message that has the id `myId` and the previous message.

- **markAllAsRead**
  - Marks all response messages as read. The user messages doesn't have the read/unread property.

- **setBadgeCount**
  - params:
    - count: number
  - As of v3.0, the `badge` prop is being changed to be managed from within the Widget. This method is manually set the badge number.

#### Widget components

##### Custom Launcher

You can use a custom component for the Launcher if you need one that's not the default, simply use the **launcher** prop:

```js
import React from 'react';
import { Widget } from 'react-chat-widget';

...

function MyApp() {
  const getCustomLauncher = (handleToggle) =>
    <button onClick={handleToggle}>This is my launcher component!</button>

  return (
    <Widget
      ...
      launcher={handleToggle => getCustomLauncher(handleToggle)}
    />
  )
}
```

`getCustomLauncher()` is a method that will return the `Launcher` component as seen in the example. By default, the function passed by that prop, will receive the `handleToggle` parameter which is the method that will toggle the widget.

## About

This project is maintained by [Martín Callegari](https://github.com/mcallegari10) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)
