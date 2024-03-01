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
      <div>{points}</div>
      <div>{rebounds}</div>
      <div>{assists}</div>
      <div>{blocks}</div>
      <div>{turnovers}</div>
      <div>{fgp}</div>
    </>
  );
};

export default TeamStatsTable;
