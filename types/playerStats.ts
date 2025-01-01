export type TeamPlayerList = {
  player: {
    id: number;
    firstname: string;
    lastname: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  pos: string;
  min: string;
  fgp: string;
  ftp: string;
  tpp: string;
  totReb: number;
  assists: number;
  turnovers: number;
  blocks: number;
  plusMinus: string;
};
