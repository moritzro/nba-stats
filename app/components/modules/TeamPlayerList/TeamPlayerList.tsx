import { FC, use } from "react";
import { getTeamPlayers } from "@/utils/FetchTeamPlayers";
import { TeamPlayerList } from "@/types/playerStats";
import PlayerCard from "../../custom/PlayerCard/PlayerCard";
import styles from "./TeamPlayerList.module.scss";

type TeamPlayerListProps = {
  id: number;
};

const TeamPlayerList: FC<TeamPlayerListProps> = ({ id }) => {
  const data = use(getTeamPlayers(id));

  const seenIds = new Set();
  const uniquePlayers = data?.response.filter((item: any) => {
    if (seenIds.has(item.player.id)) {
      return false; // Skip duplicate player
    }
    seenIds.add(item.player.id);
    return true; // Include unique player
  });
  
  return (
    <div className={styles.playerContainer}>
    {uniquePlayers.map((item: TeamPlayerList, index: number) => (
      <PlayerCard
        key={index}
        playerImg={
          "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=200&h=146"
        }
        playerFirstName={item.player.firstname}
        playerLastName={item.player.lastname}
        jerseyNumber={Math.round(Math.random() * (99 - 0))} // Random Number since API doesn't provide Jersey Number
        position={item.pos}
        teamLogo={item.team.logo}
        teamName={item.team.name}
        playerPoints={item.points}
        playerAssists={item.assists}
        playerBlocks={item.blocks}
        playerSteals={item.steals}
        playerTotReb={item.totReb}
      />
    ))}
    </div>
  );
};

export default TeamPlayerList;
