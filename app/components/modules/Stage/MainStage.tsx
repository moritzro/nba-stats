import { use } from "react";
import { getNbaGames } from "@/utils/FetchNextGames";
import { formatDate } from "@/utils/FormatDate";
import { formatTime } from "@/utils/FormatTime";
import { getFormattedDate } from "@/utils/GetDate";
import GameCard from "../../custom/GameCard/GameCard";
import styles from "./MainStage.module.scss";

const MainStage = () => {
  const currentDate: any = formatDate(new Date());
  const data = use(getNbaGames(currentDate, "2023"));

  return (
    <section className={styles.mainStage}>
      <div>
        <h1 className={styles.headline}>Welcome to NBA Stats</h1>
      </div>
      <div>
        <h2 className={styles.matchesHeadline}>Todays Games:</h2>
        <div className={styles.matchesWrapper}>
          {data.results > 0 ? (
            data.response.map((game: any, index: number) => (
              <GameCard
                key={index}
                homeTeamLogo={game.teams.home.logo}
                awayTeamLogo={game.teams.visitors.logo}
                homeTeamName={game.teams.home.name}
                awayTeamName={game.teams.visitors.name}
                homeTeamScore={game.scores.home.points}
                awayTeamScore={game.scores.visitors.points}
                gameClock={game.status.clock}
                gamePeriod={game.periods.current}
                gameStatus={game.status.long}
                gameTime={formatTime(game.date.start)}
                gameDate={getFormattedDate(game.date.start)}
              />
            ))
          ) : (
            <>
              <h2>No games today!</h2>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainStage;
