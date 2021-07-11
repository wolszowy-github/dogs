import styles from "./App.module.scss";
import { DogList } from "./components/containers/DogList";

const App = () => (
  <div className={styles["App"]}>
    <DogList />
  </div>
);

export default App;
