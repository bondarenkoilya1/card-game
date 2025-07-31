type GameActionsType = {
  setIsPlaying: (newStatus: boolean) => void;
};

export type GameStoreProps = {
  isPlaying: boolean;
  actions: GameActionsType;
};
