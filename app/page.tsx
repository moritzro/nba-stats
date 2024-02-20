import MainStage from "./components/Modules/Stage/MainStage";
import ConferenceStandings from "./components/modules/ConferenceStandings/ConferenceStandings";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <MainStage />
      <section className={styles.sectionConferenceStandings}>
        <ConferenceStandings headline="Eastern Conference" conference="east" />
        <ConferenceStandings headline="Western Conference" conference="west" />
      </section>
    </div>
  );
}
