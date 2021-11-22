import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import close from '../../../../assets/clear-button.svg';
import openLauncher from '../../../../assets/launcher_button.svg';
import { setBadgeCount } from '../../../../store/actions';
import { GlobalState } from '../../../../store/types';
import Badge from './components/Badge';
import './style.scss';

type Props = {
  toggle: () => void;
  chatId: string;
  openLabel?: string;
  closeLabel?: string;
  closeImg?: string;
  openImg?: string;
  showBadge?: boolean;
}

function Launcher({ toggle, chatId, openImg, closeImg, openLabel, closeLabel, showBadge }: Props) {
  const dispatch = useDispatch();
  const { showChat, badgeCount } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    badgeCount: state.messages.badgeCount
  }));

  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(0));
  }

  return (
    <button type="button" className={cn('rcw-launcher', { 'rcw-hide-sm': showChat })} onClick={toggleChat} aria-controls={chatId}>
      {!showChat && showBadge && <Badge badge={badgeCount} />}
      {showChat ?
        <img src={closeImg || close} className="rcw-close-launcher" alt={openLabel} /> :
        <img src={openImg || openLauncher} className="rcw-open-launcher" alt={closeLabel} />
      }
    </button>
  );
}

export default Launcher;
