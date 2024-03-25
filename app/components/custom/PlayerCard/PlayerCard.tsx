import { FC } from "react";
import Image from "next/image";
import styles from "./PlayerCard.module.scss";

type PlayerCardProps = {
  playerImg: string;
  playerFirstName: string;
  playerLastName: string;
  jerseyNumber: number;
  position: string;
  college: string;
  country: string;
  height: string;
};

const PlayerCard: FC<PlayerCardProps> = ({
  playerImg,
  playerFirstName,
  playerLastName,
  jerseyNumber,
  position,
  college,
  country,
  height,
}) => {
  return (
    <div className={styles.playerCardContainer}>
      <button className={styles.playerCardFront}>
        <div className={styles.jerseyNumber}>{jerseyNumber}</div>
        <img
          src={playerImg}
          alt={`${playerFirstName} ${playerLastName}`}
          className={styles.playerImg}
        />
      </button>
      <div>
        <div>
          <p>{jerseyNumber}</p>
          <p>{position}</p>
        </div>
        <p>
          {playerFirstName} {playerLastName}
        </p>
      </div>
      <div className={styles.playerCardBack}>
        <p>{college}</p>
        <p>{country}</p>
        <p>{height}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
