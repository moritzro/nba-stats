import StageMatchDetails from "@/app/components/modules/StageMatchDetails/StageMatchDetails";

const Matchup = ({ params: { matchup } }) => {
  return (
    <div>
      <StageMatchDetails id={matchup} />
    </div>
  );
};

export default Matchup;

