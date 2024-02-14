import useCanvas from "../../hooks/useCanvas";
import styles from "./style.module.scss";

export const Canvas = (props: any) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas className={styles.canvas} ref={canvasRef} {...rest} />;
};
