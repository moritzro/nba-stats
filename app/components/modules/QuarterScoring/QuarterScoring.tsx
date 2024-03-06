import { FC, use } from "react";
import { getGame } from "@/utils/FetchGame";
import styles from "./QuarterScoring.module.scss";

type QuarterScoringProps = {
  id: number;
};

const QuarterScoring: FC<QuarterScoringProps> = ({ id }) => {
  const data = use(getGame(id));
  const match = data.response[0];
  return (
    <div className={styles.quarterScoring}>
      <table className={styles.quarterTable}>
        <thead>
          <tr>
            <th>Teams</th>
            {match.scores.visitors.linescore.map(
              (linescore: number, index: number) => (
                <th key={index}>
                  {index < 4 ? `Q${index + 1}` : `OT${index - 3}`}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{match.teams.visitors.code}</td>
            {match.scores.visitors.linescore.map(
              (linescore: number, index: number) => (
                <td key={index}>{linescore}</td>
              )
            )}
          </tr>
          <tr>
            <td>{match.teams.home.code}</td>
            {match.scores.home.linescore.map(
              (linescore: number, index: number) => (
                <td key={index}>{linescore}</td>
              )
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuarterScoring;
