import StageTeamDetails from "@/app/components/modules/StageTeamDetails/StageTeamDetails";

type TeamParams = {
  params: {
    team: number;
  };
};

const Team = ({ params: { team } }: TeamParams) => {
  return <StageTeamDetails id={team} />;
};

export default Team;
