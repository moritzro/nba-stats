import { FC, use } from "react";
import { getGameStats } from "@/utils/FetchGameStats";
import styles from "./GameStats.module.scss";

type GameStatsProps = {
  id: number;
};

const GameStats: FC<GameStatsProps> = ({ id }) => {
  const data = use(getGameStats(id));
  console.log(data.response);

  return (
    <section>
      <div className={styles.tableWrapper}>
        <table className={styles.statsTable}>
          <thead>
            <tr>
              <th className={styles.statsTH}>Team</th>
              <th className={styles.statsTH}>Points</th>
              <th className={styles.statsTH}>Rebounds</th>
              <th className={styles.statsTH}>Assists</th>
              <th className={styles.statsTH}>Blocks</th>
              <th className={styles.statsTH}>Turnovers</th>
              <th className={styles.statsTH}>FG%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.response[0].team.code}</td>
              <td>{data.response[0].statistics[0].points}</td>
              <td>{data.response[0].statistics[0].totReb}</td>
              <td>{data.response[0].statistics[0].assists}</td>
              <td>{data.response[0].statistics[0].blocks}</td>
              <td>{data.response[0].statistics[0].turnovers}</td>
              <td>{data.response[0].statistics[0].fgp}</td>
            </tr>
            <tr>
              <td>{data.response[1].team.code}</td>
              <td>{data.response[1].statistics[0].points}</td>
              <td>{data.response[1].statistics[0].totReb}</td>
              <td>{data.response[1].statistics[0].assists}</td>
              <td>{data.response[1].statistics[0].blocks}</td>
              <td>{data.response[1].statistics[0].turnovers}</td>
              <td>{data.response[1].statistics[0].fgp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GameStats;
