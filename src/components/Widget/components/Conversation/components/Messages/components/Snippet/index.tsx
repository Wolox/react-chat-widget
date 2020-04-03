import React from 'react';

import { Message, Link } from 'src/store/types';

import './styles.scss';

type Props = {
  message: Link;
}

function Snippet({ message }: Props) {
  return (
    <div className="rcw-snippet">
      <h5 className="rcw-snippet-title">{message.title}</h5>
      <div className="rcw-snippet-details">
        <a href={message.link} target={message.target} className="rcw-link">
          {message.link}
        </a>
      </div>
    </div>
  );
}

export default Snippet;
