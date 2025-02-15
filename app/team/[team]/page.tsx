import StageTeamDetails from "@/app/components/modules/StageTeamDetails/StageTeamDetails";
import TeamUpcomingGames from "@/app/components/modules/UpcomingGames/UpcomingGames";

const Team = async ({ params }: { params: Promise<{ team: number }> }) => {
  const teamId = (await params).team;
  return (
    <>
      <StageTeamDetails id={teamId} />
      <TeamUpcomingGames id={teamId} />
    </>
  );
};

export default Team;
