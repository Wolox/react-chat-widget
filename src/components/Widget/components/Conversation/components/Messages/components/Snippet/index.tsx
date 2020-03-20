import React from 'react';

import './styles.scss';

function Snippet(props: any) {
  return (
    <div className="rcw-snippet">
      <h5 className="rcw-snippet-title">
        { props.message.title }
      </h5>
      <div className="rcw-snippet-details">
        <a href={props.message.link} target={props.message.target} className="rcw-link">
          { props.message.link }
        </a>
      </div>
    </div>
  );
}

export default Snippet;
