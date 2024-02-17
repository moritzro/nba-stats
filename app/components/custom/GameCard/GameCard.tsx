import { FC } from "react"
import styles from "./GameCard.module.scss"

interface GameCardProps {
    homeTeamLogo: string
    awayTeamLogo: string
    homeTeamName: string
    awayTeamName: string
    homeTeamScore: number
    awayTeamScore: number
    gameClock: string
    gameStatus: string
    gameTime: string
    gamePeriod: number
}

const GameCard: FC<GameCardProps> = ({ homeTeamLogo, awayTeamLogo, homeTeamName, awayTeamName, homeTeamScore, awayTeamScore, gameClock, gameStatus, gameTime, gamePeriod }) => {
    return (
        <div className={styles.gameCard}>
            <div className={styles.statusWrapper}>
                <div className={styles.gameStatusBubble} style={gameStatus === "live" ? { backgroundColor: "green" } : { backgroundColor: "red" }}></div>
                <p className={styles.gameStatus}>{gameStatus}</p>
            </div>
            <div className={styles.gameInfo}>
                <img src={awayTeamLogo} className={styles.teamLogo} alt={awayTeamName} />
                <div className={styles.gameStats}>
                    {gameStatus === "Not Started" && (
                        <>
                            <p>{gameTime}</p>
                        </>
                    )}
                    {gameStatus === "live" && (
                        <>
                            <p className={styles.gameScore}>{awayTeamScore} @ {homeTeamScore}</p>
                            <p className={styles.gameTime}>{gameClock} Q{gamePeriod}</p>
                        </>
                    )}
                    {gameStatus === "Finished" && (
                        <>
                            <p>{awayTeamScore} @ {homeTeamScore}</p>
                        </>
                    )}
                </div>
                <img src={homeTeamLogo} className={styles.teamLogo} alt={homeTeamName} />
            </div>
        </div>
    )
}


export default GameCard