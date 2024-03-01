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
      <span>{points}</span>
      <span>{rebounds}</span>
      <span>{assists}</span>
      <span>{blocks}</span>
      <span>{turnovers}</span>
      <span>{fgp}</span>
    </>
  );
};

export default TeamStatsTable;
