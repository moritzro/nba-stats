import MainStage from "./components/Modules/Stage/MainStage";
import ConferenceStandings from "./Components/Modules/ConferenceStandings/ConferenceStandings";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <MainStage />
      <section className={styles.section}>
        <ConferenceStandings headline="Eastern Conference" conference="east" />
        <ConferenceStandings headline="Western Conference" conference="west" />
      </section>
    </div>
  );
}
