import StageTeamDetails from "@/app/components/modules/StageTeamDetails/StageTeamDetails";

const Team = ({ params: { team } }) => {
  return <StageTeamDetails id={team} />;
};

export default Team;
