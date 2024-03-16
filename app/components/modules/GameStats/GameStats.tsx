import { FC, use } from "react";
import { getGameStats } from "@/utils/FetchGameStats";
import TeamStatsTable from "../../custom/TeamStatsTable/TeamStatsTable";
import { Statistic, GameStats } from "@/types/gameStats";
import Image from "next/image";
import styles from "./GameStats.module.scss";

type GameStatsProps = {
  id: number;
};

const GameStats: FC<GameStatsProps> = ({ id }) => {
  const data = use(getGameStats(id));

  return (
    <div className={styles.gameStats}>
      <div className={styles.statCategories}>
        <div>Points</div>
        <div>Rebounds</div>
        <div>Assists</div>
        <div>Blocks</div>
        <div>Turnovers</div>
        <div>FG%</div>
      </div>
      {data.response.map((team: GameStats, index: number) => {
        return (
          <div className={styles.statsWrapper} key={index}>
            <Image
              key={index}
              className={styles.teamLogo}
              src={team?.team?.logo}
              alt={team?.team?.name}
              height={100}
              width={100}
            />
            {team.statistics.map((stats: Statistic, index: number) => (
              <TeamStatsTable
                key={index}
                points={stats.points}
                rebounds={stats.totReb}
                assists={stats.assists}
                blocks={stats.blocks}
                turnovers={stats.turnovers}
                fgp={stats.fgp}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GameStats;
