import StageMatchDetails from "@/app/components/modules/StageMatchDetails/StageMatchDetails";
import GameStats from "@/app/components/modules/GameStats/GameStats";
import QuarterScoring from "@/app/components/modules/QuarterScoring/QuarterScoring";

const Matchup = ({ params: { matchup } }) => {
  return (
    <div>
      <StageMatchDetails id={matchup} />
      <QuarterScoring id={matchup} />
      <GameStats id={matchup} />
    </div>
  );
};

export default Matchup;