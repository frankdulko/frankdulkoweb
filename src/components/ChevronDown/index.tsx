import styles from './style.module.scss';
import Chevron from './chevron-down-icon.svg';

const ChevronDown = () => {

  return (
      <img className={styles.chevron} src={Chevron} alt="" />
  );
};

export default ChevronDown;
