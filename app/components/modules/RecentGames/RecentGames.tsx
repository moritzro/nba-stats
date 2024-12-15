import { use } from "react";
import { getNbaGames } from "@/utils/FetchNextGames";
import { formatDate } from "@/utils/FormatDate";
import Link from "next/link";
import Image from "next/image";
import Game from "@/types/game";
import styles from "./RecentGames.module.scss";

const RecentGames = () => {
  const currentDate: Date = formatDate(new Date());
  const data = use(getNbaGames(currentDate, "2024"));

  return (
    <div>
      <div className={styles.matchesWrapper}>
        {data.results > 0 ? (
          data.response.map((game: Game, index: number) => (
            <Link
              key={index}
              className={styles.game}
              href={`matchup/${game.id}`}
            >
              <div className={styles.team}>
                <Image
                  src={game?.teams?.home.logo}
                  alt={game?.scores?.home.name}
                  height={100}
                  width={100}
                  className={styles.image}
                />
                <div>{game.scores.home.points}</div>
              </div>
              <div>:</div>
              <div className={styles.team}>
                <div> {game.scores.visitors.points}</div>
                <Image
                  src={game?.teams?.visitors.logo}
                  alt={game?.scores?.visitors.name}
                  height={100}
                  width={100}
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
