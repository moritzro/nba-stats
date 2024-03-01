import { use } from "react";
import { getNbaGames } from "@/utils/FetchNextGames";
import { formatDate } from "@/utils/FormatDate";
import Link from "next/link";
import styles from "./RecentGames.module.scss";

const RecentGames = () => {
  const currentDate: any = formatDate(new Date());
  const data = use(getNbaGames(currentDate, "2023"));

  return (
    <div>
      <div className={styles.matchesWrapper}>
        {data.results > 0 ? (
          data.response.map((game: any, index: number) => (
            <Link
              key={index}
              className={styles.game}
              href={`matchup/${game.id}`}
            >
              <div className={styles.team}>
                <img
                  src={game.teams.home.logo}
                  alt={game.scores.home.name}
                  className={styles.image}
                />
                <div>{game.scores.home.points}</div>
              </div>
              <div>:</div>
              <div className={styles.team}>
                <div> {game.scores.visitors.points}</div>
                <img
                  src={game.teams.visitors.logo}
                  alt={game.scores.visitors.name}
                  className={styles.image}
                />
              </div>
            </Link>
          ))
        ) : (
          <>
            <h2>No games today!</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentGames;
