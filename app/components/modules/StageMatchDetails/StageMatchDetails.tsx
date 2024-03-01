import { FC, use } from "react";
import { getGame } from "@/utils/FetchGame";
import { getFormattedDate } from "@/utils/GetDate";
import { MdOutlineStadium, MdOutlinePersonOutline } from "react-icons/md";
import styles from "./MatchDetails.module.scss";

type StageMatchDetailsProps = {
  id: number;
};

const StageMatchDetails: FC<StageMatchDetailsProps> = ({ id }) => {
  const data = use(getGame(id));
  const match = data.response[0];
  return (
    <div className={styles.stage}>
      <div className={styles.matchup}>
        <div className={styles.team}>
          <img
            src={match.teams.visitors.logo}
            alt={match.teams.visitors.logo}
            className={styles.logo}
          />
        </div>
        <div className={styles.info}>
          {match.status.long === "live" || match.status.long === "Finished" ? (
            <p className={styles.score}>
              {match.scores.visitors.points} : {match.scores.home.points}
            </p>
          ) : (
            <div className={styles.match}>
              <p className={styles.score}>@</p>
              <p className={styles.date}>
                {getFormattedDate(match.date.start)}
              </p>
            </div>
          )}
        </div>
        <div className={styles.team}>
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.logo}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.matchInfo}>
        <div className={styles.info}>
          <MdOutlineStadium />
          <p>{match.arena.name}</p>
        </div>
        {match.officials.map((official: string, index: number) => (
          <div className={styles.info} key={index}>
            <MdOutlinePersonOutline />
            <p>{official}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageMatchDetails;
