import { FC, use } from "react";
import { getGame } from "@/utils/FetchGame";
import { getFormattedDate } from "@/utils/GetDate";
import { MdOutlineStadium, MdOutlinePersonOutline } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
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
          <Link href={"#"} className={styles.teamLink}>
            <p className={styles.name}>{match?.teams?.visitors.name}</p>
            <Image
              src={match?.teams?.visitors.logo}
              alt={match?.teams?.visitors.logo}
              height={100}
              width={100}
              unoptimized
              className={styles.logo}
            />
          </Link>
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
          <Link href={"#"} className={styles.teamLink}>
            <Image
              src={match?.teams?.home.logo}
              alt={match?.teams?.home.logo}
              height={100}
              width={100}
              unoptimized
              className={styles.logo}
            />
            <p className={styles.name}>{match?.teams?.home.name}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StageMatchDetails;
