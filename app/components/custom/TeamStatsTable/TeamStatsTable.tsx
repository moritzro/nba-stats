import { FC } from "react";
import styles from "./TeamStatsTable.module.scss";

type TeamStatsProps = {
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
  turnovers: number;
  fgp: string;
};

const TeamStatsTable: FC<TeamStatsProps> = ({
  points,
  rebounds,
  assists,
  blocks,
  turnovers,
  fgp,
}) => {
  return (
    <>
      <td>{points}</td>
      <td>{rebounds}</td>
      <td>{assists}</td>
      <td>{blocks}</td>
      <td>{turnovers}</td>
      <td>{fgp}</td>
    </>
  );
};

export default TeamStatsTable;
