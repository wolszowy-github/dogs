import styles from "./Image.module.scss";

interface IImageProps {
  imgSrc: string;
}

export const Image = ({ imgSrc }: IImageProps) => (
  <img className={styles["img"]} src={imgSrc} alt="" />
);
