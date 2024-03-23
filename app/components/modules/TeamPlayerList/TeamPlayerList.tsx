import { FC, use } from "react";
import { getTeamPlayers } from "@/utils/FetchTeamPlayers";
import Link from "next/link";
import styles from "./TeamPlayerList.module.scss";

type TeamPlayerListProps = {
  id: number;
};

const TeamPlayerList: FC<TeamPlayerListProps> = ({ id }) => {
  const data = use(getTeamPlayers(id));

  return (
    <div className={styles.tableWrapper}>
      <h2 className={styles.tableHeadline}>Roster</h2>
      <table className={styles.playerTable}>
        <thead>
          <th>No</th>
          <th>Name</th>
          <th>Pos</th>
        </thead>
        <tbody>
          {data.response.map((player: any, index: number) => (
            <tr key={index}>
              <td className={styles.playerTableCell}>
                {player.leagues.standard.jersey !== null
                  ? player.leagues.standard.jersey
                  : "00"}
              </td>
              <td className={styles.playerTableCell}>
                <Link href="#">
                  {player.firstname} {player.lastname}
                </Link>
              </td>
              <td className={styles.playerTableCell}>
                {player.leagues.standard.pos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamPlayerList;
