type ScoreSetterProp = (newScore: number) => void;

type ScoresActionsType = {
  setPlayerScore: ScoreSetterProp;
  setBotScore: ScoreSetterProp;
};

export type ScoresStoreProps = {
  playerScore: number;
  botScore: number;
  actions: ScoresActionsType;
};
