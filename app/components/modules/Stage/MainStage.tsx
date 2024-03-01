import RecentGames from "../RecentGames/RecentGames";
import styles from "./MainStage.module.scss";

const MainStage = () => {
  return (
    <section className={styles.mainStage}>
      <div>
        <h1 className={styles.headline}>Welcome to NBA Stats</h1>
      </div>
      <div className={styles.slideScore}>
        <RecentGames />
      </div>
    </section>
  );
};

export default MainStage;
