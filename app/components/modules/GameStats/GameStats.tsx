import { FC, use } from "react";
import { getGameStats } from "@/utils/FetchGameStats";
import TeamStatsTable from "../../custom/TeamStatsTable/TeamStatsTable";
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
      {data.response.map((team: any, index: number) => {
        return (
          <div className={styles.statsWrapper} key={index}>
            <img
              key={index}
              className={styles.teamLogo}
              src={team.team.logo}
              alt={team.team.name}
            />
            {team.statistics.map((stats: any, index: number) => (
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
