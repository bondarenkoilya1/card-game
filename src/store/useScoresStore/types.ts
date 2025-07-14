type ScoreSetterProp = (newScore: number) => void;

export type ScoresStoreProps = {
  playerScore: number;
  setPlayerScore: ScoreSetterProp;
  botScore: number;
  setBotScore: ScoreSetterProp;
};
