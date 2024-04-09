import { FC, use } from "react";
import { getTeamPlayers } from "@/utils/FetchTeamPlayers";
import PlayerCard from "../../custom/PlayerCard/PlayerCard";
import styles from "./TeamPlayerList.module.scss";

type TeamPlayerListProps = {
  id: number;
};

const TeamPlayerList: FC<TeamPlayerListProps> = ({ id }) => {
  const data = use(getTeamPlayers(id));

  return (
    <>
      <PlayerCard
        playerImg={
          "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=200&h=146"
        }
        playerFirstName={"LeBron"}
        playerLastName={"James"}
        jerseyNumber={23}
        position={"SF"}
        college={"No College"}
        country={"US"}
        height={"6 Foot 9 Inches"}
      />
    </>
  );
};

export default TeamPlayerList;
