import styles from "./style.module.scss";

type LinkButtonProps = {
  text?: string;
  url: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ text, url }) => {
  return (
    <a className={styles["link-button"]} target="_blank" href={url}>
      {text}
    </a>
  );
};

export default LinkButton;
