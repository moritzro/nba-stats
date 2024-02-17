import { FC, use } from "react";
import { GET } from "@/utils/Fetch";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import Link from "next/link";
import styles from "./ConferenceStandings.module.scss";

interface ConferenceStandingsProps {
  headline: string;
  conference: string;
}

const ConferenceStandings: FC<ConferenceStandingsProps> = ({
  headline,
  conference,
}) => {
  const data = use(
    GET(
      `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&conference=${conference}`
    )
  );

  return (
    <div>
      <h1 className={styles.headline}>{headline} </h1>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className={styles.th}>Rank</th>
            <th className={styles.th}>Team</th>
            <th className={styles.th}>Streak</th>
          </tr>
        </thead>
        <tbody>
          {data.response.map((item: any, index: any) => (
            <tr key={index}>
              <td className={styles.rankColumn}>{item.conference.rank}</td>
              <td className={styles.logoName}>
                <img
                  src={item.team.logo}
                  alt={item.team.name}
                  className={styles.logo}
                />
                <Link href="#" className={styles.name}>
                  {item.team.name}
                </Link>
              </td>
              <td className={styles.streakColumn}>
                <div className={styles.flexWrapper}>
                  {item.streak}
                  {item.winStreak ? (
                    <GoArrowUpRight className={styles.up} />
                  ) : (
                    <GoArrowDownRight className={styles.down} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConferenceStandings;
