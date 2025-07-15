import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

import { act, renderHook } from "@testing-library/react";

import { CardProps } from "src/types";

import { useBoardCardsStore, useHandsStore } from "src/store";

import { useMove } from "./useMove.ts";

vi.mock("src/store", () => ({
  useBoardCardsStore: vi.fn(),
  useHandsStore: vi.fn()
}));

const mockUseBoardCardsStore = useBoardCardsStore as unknown as Mock;
const mockUseHandsStore = useHandsStore as unknown as Mock;

describe("useMove", () => {
  let mockAddPlayerBoardCard: Mock;
  let mockAddBotBoardCard: Mock;
  let mockRemoveCardFromPlayerHand: Mock;
  let mockRemoveCardFromBotHand: Mock;

  const playerCard: CardProps = {
    _id: "player-card-1",
    name: "Player Card",
    type: "close",
    points: 10
  };

  const botCard: CardProps = {
    _id: "bot-card-1",
    name: "Bot Card",
    type: "range",
    points: 15
  };

  beforeEach(() => {
    mockAddPlayerBoardCard = vi.fn();
    mockAddBotBoardCard = vi.fn();
    mockRemoveCardFromPlayerHand = vi.fn();
    mockRemoveCardFromBotHand = vi.fn();

    mockUseBoardCardsStore.mockReturnValue({
      addPlayerBoardCard: mockAddPlayerBoardCard,
      addBotBoardCard: mockAddBotBoardCard
    });

    mockUseHandsStore.mockReturnValue({
      removeCardFromPlayerHand: mockRemoveCardFromPlayerHand,
      removeCardFromBotHand: mockRemoveCardFromBotHand,
      botHand: []
    });
  });

  describe("Player's moves", () => {
    it("allows player to move on player's turn", () => {
      const { result } = renderHook(() => useMove("player"));

      act(() => result.current.makeMove(playerCard));

      expect(mockAddPlayerBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddPlayerBoardCard).toHaveBeenCalledWith(playerCard);
      expect(mockRemoveCardFromPlayerHand).toHaveBeenCalledTimes(1);
      expect(mockRemoveCardFromPlayerHand).toHaveBeenCalledWith(playerCard._id);
    });

    it("blocks player from moving if it's not player's turn", () => {
      const { result } = renderHook(() => useMove("bot"));

      act(() => result.current.makeMove(playerCard));

      expect(mockAddPlayerBoardCard).not.toHaveBeenCalled();
      expect(mockRemoveCardFromPlayerHand).not.toHaveBeenCalled();
      expect(mockAddBotBoardCard).not.toHaveBeenCalled();
      expect(mockRemoveCardFromBotHand).not.toHaveBeenCalled();
    });
  });

  describe("Bot's moves", () => {
    it("automatically moves on bot's turn when bot has cards", () => {
      mockUseHandsStore.mockReturnValue({
        removeCardFromPlayerHand: mockRemoveCardFromPlayerHand,
        removeCardFromBotHand: mockRemoveCardFromBotHand,
        botHand: [botCard]
      });

      renderHook(() => useMove("bot"));

      expect(mockAddBotBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddBotBoardCard).toHaveBeenCalledWith(botCard);
      expect(mockRemoveCardFromBotHand).toHaveBeenCalledTimes(1);
      expect(mockRemoveCardFromBotHand).toHaveBeenCalledWith(botCard._id);
    });

    it("does not move if bot has no cards", () => {
      renderHook(() => useMove("bot"));

      expect(mockAddBotBoardCard).not.toHaveBeenCalled();
      expect(mockRemoveCardFromBotHand).not.toHaveBeenCalled();
    });
  });

  describe("Turn switching", () => {
    it("switches turn from player to bot after player moves", () => {
      mockUseHandsStore.mockReturnValue({
        removeCardFromPlayerHand: mockRemoveCardFromPlayerHand,
        removeCardFromBotHand: mockRemoveCardFromBotHand,
        botHand: [botCard]
      });

      const { result } = renderHook(() => useMove("player"));

      act(() => result.current.makeMove(playerCard));

      expect(mockAddPlayerBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddPlayerBoardCard).toHaveBeenCalledWith(playerCard);

      expect(mockAddBotBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddBotBoardCard).toHaveBeenCalledWith(botCard);
    });

    it("switches turn from bot to player after bot moves", () => {
      mockUseHandsStore.mockReturnValue({
        removeCardFromPlayerHand: mockRemoveCardFromPlayerHand,
        removeCardFromBotHand: mockRemoveCardFromBotHand,
        botHand: [botCard]
      });

      const { result } = renderHook(() => useMove("bot"));

      expect(mockAddBotBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddBotBoardCard).toHaveBeenCalledWith(botCard);
      expect(mockRemoveCardFromBotHand).toHaveBeenCalledTimes(1);
      expect(mockRemoveCardFromBotHand).toHaveBeenCalledWith(botCard._id);

      act(() => result.current.makeMove(playerCard));

      expect(mockAddPlayerBoardCard).toHaveBeenCalledTimes(1);
      expect(mockAddPlayerBoardCard).toHaveBeenCalledWith(playerCard);
      expect(mockRemoveCardFromPlayerHand).toHaveBeenCalledTimes(1);
      expect(mockRemoveCardFromPlayerHand).toHaveBeenCalledWith(playerCard._id);
    });
  });
});
