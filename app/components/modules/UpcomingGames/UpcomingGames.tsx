import { FC, use } from "react";
import { getTeamUpcomingGames } from "@/utils/FetchTeamUpcomingGames";
import GameCard from "../../custom/GameCard/GameCard";
import styles from "./UpcomingGames.module.scss";

type TeamUpcomingGamesProps = {
  id: number;
};

const TeamUpcomingGames: FC<TeamUpcomingGamesProps> = ({ id }) => {
  const data = use(getTeamUpcomingGames(id));
  const dateToday = new Date();
  const timestamp = dateToday.getTime();
  let games = [];
  data.response.map((game: any, index: number) => {
    const gameStartDate = new Date(game.date.start);
    if (gameStartDate.getTime() > timestamp) {
      games.push(game);
    }
  });
  const nextGames = games.slice(0, 5);
  return (
    <div className={styles.scheduleContainer}>
      {nextGames.map((game) => (
        <GameCard
          homeTeamLogo={game.teams.home.logo}
          awayTeamLogo={game.teams.visitors.logo}
          homeTeamName={game.teams.home.name}
          awayTeamName={game.teams.visitors.name}
          homeTeamScore={game.scores.home.points}
          awayTeamScore={game.scores.visitors.points}
          gameClock={game.status.clock}
          gameStatus={game.status.long}
          gameTime={game.scores.home.points}
          gamePeriod={game.periods.current}
          gameDate={game.date.start}
          gameId={game.id}
        />
      ))}
      <div className={styles.scheduledGame}></div>
    </div>
  );
};

export default TeamUpcomingGames;
