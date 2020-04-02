import React from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from 'src/store/types';
import { AnyFunction } from 'src/utils/types';

import './style.scss';

type Props = {
  onQuickButtonClicked?: AnyFunction;
}

function QuickButtons({ onQuickButtonClicked }: Props) {
  const buttons = useSelector((state: GlobalState) => state.quickButtons.quickButtons);

  const getComponentToRender = (button) => {
    const ComponentToRender = button.component;
    return (
      <ComponentToRender
      onQuickButtonClicked={onQuickButtonClicked}
      button={button}
      />
      );
    }
    
  if (!buttons.length) {
    return null;
  }

  return (
    <div className="quick-buttons-container">
      <ul className="quick-buttons">
        {buttons.map((button, index) =>
            <li className="quick-list-button" key={index}>
              {getComponentToRender(button)}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default QuickButtons;
