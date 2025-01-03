import { FC, use } from "react";
import { getTeam } from "@/utils/FetchTeam";
import { getTeamStanding } from "@/utils/FetchTeamStanding";
import styles from "./StageTeamDetails.module.scss";

type StageTeamDetailsProps = {
  id: number;
};

const StageTeamDetails: FC<StageTeamDetailsProps> = ({ id }) => {
  const dataTeam = use(getTeam(id));
  const team = dataTeam.response[0];
  const dataTeamStanding = use(getTeamStanding(id));
  const teamStanding = dataTeamStanding?.response[0];
  return (
    <div className={styles.stage}>
      <img className={styles.teamLogo} src={team.logo} alt={team.name} />
      <div className={styles.teamInfoWrapper}>
        <p className={styles.teamInfo}>
          <strong>Rank</strong>
          {teamStanding.conference.rank}
        </p>
        <p className={styles.teamInfo}>
          <strong>W-L</strong>
          {teamStanding.win.total} - {teamStanding.loss.total}
        </p>
        <p className={styles.teamInfo}>
          <strong>Last 10</strong>
          {teamStanding.win.lastTen} - {teamStanding.loss.lastTen}
        </p>
      </div>
    </div>
  );
};

export default StageTeamDetails;
