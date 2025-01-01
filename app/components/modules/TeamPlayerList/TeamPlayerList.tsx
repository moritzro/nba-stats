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

  return (
    <>
    {data?.response.map((item: TeamPlayerList, index: number) => (
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
    </>
  );
};

export default TeamPlayerList;
