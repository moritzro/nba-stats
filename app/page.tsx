import MainStage from "./components/modules/Stage/MainStage";
import ConferenceStandings from "./components/modules/ConferenceStandings/ConferenceStandings";
import RecentNews from "./components/modules/RecentNews/RecentNews";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <MainStage />
      <section className={styles.sectionConferenceStandings}>
        <ConferenceStandings headline="Eastern Conference" conference="east" />
        <ConferenceStandings headline="Western Conference" conference="west" />
      </section>
      <RecentNews />
    </div>
  );
}
