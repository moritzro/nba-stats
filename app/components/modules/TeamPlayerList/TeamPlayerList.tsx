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
  const uniquePlayers = data?.response.filter(item => {
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
        jerseyNumber={23}
        position={item.pos}
      />
    ))}
    </div>
  );
};

export default TeamPlayerList;
