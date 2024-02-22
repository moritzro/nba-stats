import { FC, use } from "react";
import { getGameStats } from "@/utils/FetchGameStats";
import styles from "./GameStats.module.scss";

type GameStatsProps = {
  id: number,
}

const GameStats:FC<GameStatsProps> = ({ id }) => {
  const data = use(getGameStats(id))
  console.log(data.response)

  return (
    <section>
      <h1>GameStats</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
            <th>Rebounds</th>
            <th>Assists</th>
            <th>Blocks</th>
            <th>Turnovers</th>
            <th>FG%</th>
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
    </section>
  )
}

export default GameStats;