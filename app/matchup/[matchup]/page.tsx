import StageMatchDetails from "@/app/components/modules/StageMatchDetails/StageMatchDetails";
import GameStats from "@/app/components/modules/GameStats/GameStats";

const Matchup = ({ params: { matchup } }) => {
  return (
    <div>
      <StageMatchDetails id={matchup} />
      <GameStats id={matchup} />
    </div>
  );
};

export default Matchup;