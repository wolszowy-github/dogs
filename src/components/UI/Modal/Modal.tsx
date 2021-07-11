import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

interface IModalProps {
  onCloseModal: () => void;
  onImgLoad: () => void;
  imgSrc: string;
}

export const Modal = ({ onCloseModal, onImgLoad, imgSrc }: IModalProps) => (
  <div className={styles["modal"]}>
    <Image imgSrc={imgSrc} />
    <div className={styles["btn-container"]}>
      <Button onClick={onCloseModal}>Close</Button>
      <Button onClick={onImgLoad}>Random Doge</Button>
    </div>
  </div>
);
