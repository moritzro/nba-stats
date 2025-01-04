import { FC } from "react";
import Image from "next/image";
import styles from "./PlayerCard.module.scss";

type PlayerCardProps = {
  playerImg: string;
  playerFirstName: string;
  playerLastName: string;
  jerseyNumber: number;
  position: string;
  teamLogo: string;
  teamName: string;
  playerPoints: number;
  playerTotReb: number;
  playerAssists: number;
  playerBlocks: number;
  playerSteals: number;
};

const PlayerCard: FC<PlayerCardProps> = ({
  playerImg,
  playerFirstName,
  playerLastName,
  jerseyNumber,
  position,
  teamLogo,
  teamName,
  playerPoints,
  playerTotReb,
  playerAssists,
  playerBlocks,
  playerSteals,
}) => {
  return (
    <div className={styles.playerCardContainer}>
      <div className={styles.playerCardInner}>
        <button className={styles.playerCardFront}>
          <div className={styles.jerseyNumber}>{jerseyNumber}</div>
          <img
            src={playerImg}
            alt={`${playerFirstName} ${playerLastName}`}
            className={styles.playerImg}
            />
          <div className={styles.playerInfo}>
            <div>
              <p className={styles.jerseyNumberSmall}>{jerseyNumber}</p>
              <p className={styles.position}>{position}</p>
            </div>
            <p className={styles.playerName}>
              <span className={styles.firstName}>{playerFirstName}</span>
              <span className={styles.lastName}>{playerLastName}</span>
            </p>
            <img
              src={teamLogo}
              alt={teamName}
              className={styles.teamLogoPlayer}
              />
          </div>
        </button>
        <div className={styles.playerCardBack}>
          <p>Points: {playerPoints}</p>
          <p>Rebounds: {playerTotReb}</p>
          <p>Assists: {playerAssists}</p>
          <p>Blocks: {playerBlocks}</p>
          <p>Steals: {playerSteals}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
