import styles from "./List.module.scss";
import { Button } from "../Button/Button";

interface IListProps {
  listItems: string[];
  onListItemClick: () => void;
}

export const List = ({ listItems, onListItemClick }: IListProps) => (
  <ul className={styles["list"]}>
    {listItems.map((listItem) => (
      <li key={Math.random()}>
        <Button onClick={onListItemClick}>{listItem}</Button>
      </li>
    ))}
  </ul>
);
