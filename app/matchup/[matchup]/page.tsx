import StageMatchDetails from "@/app/components/modules/StageMatchDetails/StageMatchDetails";
import GameStats from "@/app/components/modules/GameStats/GameStats";
import QuarterScoring from "@/app/components/modules/QuarterScoring/QuarterScoring";
import GamePlayerStats from "@/app/components/modules/GamePlayerStats/GamePlayerStats";
import styles from "./page.module.scss";

type MatchupParams = {
  params: {
    matchup: number;
  };
};

const Matchup = ({ params: { matchup } }: MatchupParams) => {
  return (
    <div>
      <StageMatchDetails id={matchup} />
      <div className={styles.gameInfoWrapper}>
        <QuarterScoring id={matchup} />
        <GameStats id={matchup} />
        <GamePlayerStats id={matchup} team={"home"} />
        <GamePlayerStats id={matchup} team={"away"} />
      </div>
    </div>
  );
};

export default Matchup;
