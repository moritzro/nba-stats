import { FC, use } from "react";
import { getGameStatsPlayers } from "@/utils/FetchGameStatsPlayers";
import styles from "./GamePlayerStats.module.scss";

type GameStatsPlayersProps = {
  id: number;
  team: string;
};

const GamePlayerStats: FC<GameStatsPlayersProps> = ({ id, team }) => {
  const data = use(getGameStatsPlayers(id));
  const homeTeam: any = [];
  const awayTeam: any = [];
  const teamId = data.response[0].team.id;

  data.response.map((item: any, index: number) => {
    if (item.team.id === teamId) {
      homeTeam.push(item);
    } else {
      awayTeam.push(item);
    }
  });

  return (
    <div>
      <table className={styles.playerStatsTable}>
        <thead>
          <tr className={styles.playerTableRow}>
            <th className={styles.playerTableHead}>Player</th>
            <th className={styles.playerTableHead}>Min</th>
            <th className={styles.playerTableHead}>FGM</th>
            <th className={styles.playerTableHead}>FGA</th>
            <th className={styles.playerTableHead}>FPG</th>
            <th className={styles.playerTableHead}>Reb</th>
            <th className={styles.playerTableHead}>Ast</th>
            <th className={styles.playerTableHead}>To</th>
            <th className={styles.playerTableHead}>Stl</th>
            <th className={styles.playerTableHead}>Blk</th>
            <th className={styles.playerTableHead}>Pts</th>
          </tr>
        </thead>
        <tbody>
          {team === "home"
            ? homeTeam.map((stats: any, index: number) => (
                <tr key={index}>
                  <td className={styles.playerTableCell}>
                    {stats.player.firstname} {stats.player.lastname}
                  </td>
                  <td className={styles.playerTableCell}>{stats.min}</td>
                  <td className={styles.playerTableCell}>{stats.fgm}</td>
                  <td className={styles.playerTableCell}>{stats.fga}</td>
                  <td className={styles.playerTableCell}>{stats.fgp}</td>
                  <td className={styles.playerTableCell}>{stats.totReb}</td>
                  <td className={styles.playerTableCell}>{stats.assists}</td>
                  <td className={styles.playerTableCell}>{stats.turnovers}</td>
                  <td className={styles.playerTableCell}>{stats.steals}</td>
                  <td className={styles.playerTableCell}>{stats.blocks}</td>
                  <td className={styles.playerTableCell}>{stats.points}</td>
                </tr>
              ))
            : awayTeam.map((stats: any, index: number) => (
                <tr key={index}>
                  <td className={styles.playerTableCell}>
                    {stats.player.firstname} {stats.player.lastname}
                  </td>
                  <td className={styles.playerTableCell}>{stats.min}</td>
                  <td className={styles.playerTableCell}>{stats.fgm}</td>
                  <td className={styles.playerTableCell}>{stats.fga}</td>
                  <td className={styles.playerTableCell}>{stats.fgp}</td>
                  <td className={styles.playerTableCell}>{stats.totReb}</td>
                  <td className={styles.playerTableCell}>{stats.assists}</td>
                  <td className={styles.playerTableCell}>{stats.turnovers}</td>
                  <td className={styles.playerTableCell}>{stats.steals}</td>
                  <td className={styles.playerTableCell}>{stats.blocks}</td>
                  <td className={styles.playerTableCell}>{stats.points}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamePlayerStats;
