import { FC, use } from "react";
import { GET } from "@/utils/Fetch";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
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
      <h2 className={styles.headline}>{headline} </h2>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className={styles.th}>Rank</th>
            <th className={styles.th}>Team</th>
            <th className={styles.th}>W-L</th>
            <th className={styles.th}>Streak</th>
          </tr>
        </thead>
        <tbody>
          {data?.response
            .sort((a: any, b: any) => {
              if (a.conference.rank < b.conference.rank) {
                return -1;
              }
            })
            .map((item: any, index: any) => (
              <tr key={index}>
                <td className={styles.rankColumn}>{item.conference.rank}</td>
                <td className={styles.logoName}>
                  <Image
                    src={item?.team?.logo}
                    alt={item?.team?.name}
                    height={100}
                    width={100}
                    className={styles.logo}
                  />
                  <Link href="#" className={styles.name}>
                    {item.team.name}
                  </Link>
                </td>
                <td className={styles.winLossColumn}>
                  {item.win.total} - {item.loss.total}
                </td>
                <td className={styles.streakColumn}>
                  <div className={styles.flexWrapper}>
                    {item.streak}
                    {item.winStreak ? (
                      <IoIosArrowUp className={styles.up} />
                    ) : (
                      <IoIosArrowDown className={styles.down} />
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
