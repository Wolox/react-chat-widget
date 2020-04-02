import React from 'react';
import { useSelector } from 'react-redux';

import Badge from './components/Badge';
import { GlobalState } from '../../../../store/types';

import './style.scss';

const openLauncher = require('../../../../../assets/launcher_button.svg') as string;
const close = require('../../../../../assets/clear-button.svg') as string;

type Props = {
  toggle: () => {},
  badge: number
}

function Launcher({ toggle, badge }: Props) {
  const chatOpened = useSelector((state: GlobalState) => state.behavior.showChat);

  return (
    <button type="button" className={chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher'} onClick={toggle}>
      <Badge badge={badge} />
      {chatOpened ?
        <img src={close} className="rcw-close-launcher" alt="" /> :
        <img src={openLauncher} className="rcw-open-launcher" alt="" />
      }
    </button>
  );
}

export default Launcher;
