import getNumbers from '../utils/getNumbers';
import checkPlayerBet from '../utils/checkPlayerBet';

const initialState = {
  game: false,
  won: false,
  turn: 1,
  numbers: getNumbers(),
  bets: [],
  score: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'onoff':
      return { ...state, game: !state.game };
    case 'getNewNumbers':
      return { ...state, numbers: getNumbers() };
    case 'playerGuess':
      const playerResult = checkPlayerBet(action.bet, state.numbers);
      if (playerResult[0] === 3 && playerResult[0] === playerResult[1]) {
        return { ...state, score: playerResult, won: true };
      }
      return {
        ...state,
        bets: action.bet,
        turn: state.turn + 1,
        score: playerResult,
      };
    default:
      return state;
  }
};

export default rootReducer;
