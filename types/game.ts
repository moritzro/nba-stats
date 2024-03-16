export type Game = {
  id: number;
  league: string;
  season: number;
  date: {
    start: string;
    end: string;
    duration: string;
  };
  stage: number;
  status: {
    clock: null | string;
    halftime: boolean;
    short: 3;
    long: string;
  };
  periods: {
    current: number;
    total: number;
    endOfPeriod: boolean;
  };
  arena: {
    name: string;
    city: string;
    state: string;
    country: string;
  };
  teams: {
    visitors: {
      id: number;
      name: string;
      nickname: string;
      code: string;
      logo: string;
    };
    home: {
      id: number;
      name: string;
      nickname: string;
      code: string;
      logo: string;
    };
  };
  scores: {
    visitors: {
      win: number;
      loss: number;
      series: {
        win: number;
        loss: number;
      };
      lineScore: {
        0: string;
        1: string;
        2: string;
        3: string;
      };
      points: number | string | any;
    };
    home: {
      win: number;
      loss: number;
      series: {
        win: number;
        loss: number;
      };
      lineScore: {
        0: string;
        1: string;
        2: string;
        3: string;
      };
      points: number;
    };
  };
  officials: {
    0: string;
    1: string;
    2: string;
  };
  timesTied: number;
  leadChanges: number;
  nugget: null | string | number | any;
};
