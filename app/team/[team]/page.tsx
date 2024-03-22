import StageTeamDetails from "@/app/components/modules/StageTeamDetails/StageTeamDetails";
import TeamPlayerList from "@/app/components/modules/TeamPlayerList/TeamPlayerList";

const Team = ({ params: { team } }) => {
  return (
    <>
      <StageTeamDetails id={team} />
      <TeamPlayerList id={team} />
    </>
  );
};

export default Team;
