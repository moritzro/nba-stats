import { FC } from "react";
import Link from "next/link";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  homeTeamLogo: string;
  awayTeamLogo: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
  gameClock: string;
  gameStatus: string;
  gameTime: string;
  gamePeriod: number;
  gameDate: string;
  gameId: number;
}

const GameCard: FC<GameCardProps> = ({
  homeTeamLogo,
  awayTeamLogo,
  homeTeamName,
  awayTeamName,
  homeTeamScore,
  awayTeamScore,
  gameClock,
  gameStatus,
  gameTime,
  gamePeriod,
  gameDate,
  gameId,
}) => {
  return (
    <Link href={`/matchup/${gameId}`}>
      <div className={styles.gameCard}>
        <div className={styles.statusWrapper}>
          <div
            className={styles.gameStatusBubble}
            style={
              gameStatus === "live"
                ? { backgroundColor: "green" }
                : gameStatus === "Scheduled"
                ? { backgroundColor: "orange" }
                : { backgroundColor: "red" }
            }
          ></div>
          <p className={styles.gameStatus}>{gameStatus}</p>
        </div>
        <div className={styles.gameInfo}>
          <img
            src={awayTeamLogo}
            className={styles.teamLogo}
            alt={awayTeamName}
          />
          <div className={styles.gameStats}>
            {gameStatus === "Scheduled" && (
              <>
                <p>{gameTime}</p>
                <p className={styles.date}>{gameDate}</p>
              </>
            )}
            {gameStatus === "live" && (
              <>
                <p className={styles.gameScore}>
                  {awayTeamScore} @ {homeTeamScore}
                </p>
                <p className={styles.gameTime}>
                  {gameClock} Q{gamePeriod}
                </p>
              </>
            )}
            {gameStatus === "Finished" && (
              <>
                <p>
                  {awayTeamScore} @ {homeTeamScore}
                </p>
              </>
            )}
          </div>
          <img
            src={homeTeamLogo}
            className={styles.teamLogo}
            alt={homeTeamName}
          />
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
