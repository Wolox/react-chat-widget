import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import Badge from './components/Badge';
import { GlobalState } from '../../../../store/types';

import './style.scss';

const openLauncher = require('../../../../../assets/launcher_button.svg') as string;
const close = require('../../../../../assets/clear-button.svg') as string;

type Props = {
  toggle: () => void,
  badge: number
}

function Launcher({ toggle, badge }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);

  return (
    <button type="button" className={cn('rcw-launcher', { 'rcw-hide-sm': showChat })} onClick={toggle}>
      <Badge badge={badge} />
      {showChat ?
        <img src={close} className="rcw-close-launcher" alt="" /> :
        <img src={openLauncher} className="rcw-open-launcher" alt="" />
      }
    </button>
  );
}

export default Launcher;
