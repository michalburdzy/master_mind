import getNumbers from '../utils/getNumbers';
import checkPlayerBet from '../utils/checkPlayerBet';
import {
  ON,
  OFF,
  GET_NEW_NUMBERS,
  PLAYER_BET,
  SET_PLAYER_NAME,
  SURRENDER,
  RESTART_GAME
} from '../actions/actionTypes';

const initialState = {
  game: false,
  win: null,
  power: false,
  turn: 1,
  numbers: getNumbers(),
  bets: [],
  score: [],
  startTime: null,
  player_name: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON:
      return { ...state, power: true, turn: 1, startTime: Date.now() };
    case OFF:
      return { ...initialState };
    case SET_PLAYER_NAME: {
      return { ...state, game: true, playerName: action.playerName };
    }
    case GET_NEW_NUMBERS:
      return { ...state, numbers: getNumbers() };
    case PLAYER_BET:
      const playerResult = checkPlayerBet(action.bet, state.numbers);
      if (playerResult[0] === 3 && playerResult[0] === playerResult[1]) {
        localStorage.setItem('result', Date.now() - state.startTime);
        return { ...state, score: playerResult, win: true };
      }
      return {
        ...state,
        bets: action.bet,
        turn: state.turn + 1,
        score: playerResult
      };
    case SURRENDER:
      return { ...state, win: false, startTime: null };
    case RESTART_GAME:
      return {
        ...state,
        turn: 1,
        numbers: getNumbers(),
        win: null,
        startTime: Date.now()
      };
    default:
      return state;
  }
};

export default rootReducer;
