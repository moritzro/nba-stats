export type Statistic = {
  fastBreakPoints: number;
  pointsInPaint: number;
  biggestLead: number;
  secondChancePoints: number;
  pointsOffTurnovers: number;
  longestRun: number;
  points: number;
  fgm: number;
  fga: number;
  fgp: string;
  ftm: number;
  fta: number;
  ftp: string;
  tpm: number;
  tpa: number;
  tpp: string;
  offReb: number;
  defReb: number;
  totReb: number;
  assists: number;
  pFouls: number;
  steals: number;
  turnovers: number;
  blocks: number;
  plusMinus: string;
  min: string;
};

export type GameStatsTeam = {
  team: {
    id: number;
    name: string;
    nickname: string;
    code: string;
    logo: string;
  };
};

export type GameStats = {
  team: GameStatsTeam;
  statistics: Statistic[];
};
