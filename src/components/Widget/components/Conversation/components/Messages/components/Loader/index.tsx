import cn from 'classnames';

import './styles.scss';

type Props = {
  typing: boolean;
}

function Loader({ typing }: Props) {
  return (
    <div className={cn('rcw-loader', { active: typing })}>
      <div className="rcw-loader-container">
        <span className="rcw-loader-dots"></span>
        <span className="rcw-loader-dots"></span>
        <span className="rcw-loader-dots"></span>
      </div>
    </div>
  );
}

export default Loader;
