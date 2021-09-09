export enum RickActionTypes {
  FETCH_CHARACTER = "FETCH_CHARACTER",
  FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS",
  FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR",
  FETCH_CHARACTER_INFO = "FETCH_CHARACTER_INFO",
  FETCH_CHARACTER_FILTERS = "FETCH_CHARACTER_FILTERS"
}

export interface RickFilters {
  name: string | undefined;
  type: string | undefined;
  status: string | undefined;
  species: string | undefined;
  gender: string | undefined;
}

interface FetchRickAction {
  type: RickActionTypes.FETCH_CHARACTER;
}

interface FetchRickSuccess {
  type: RickActionTypes.FETCH_CHARACTER_SUCCESS;
  payload: any[];
}

interface FetchRickError {
  type: RickActionTypes.FETCH_CHARACTER_ERROR;
  payload: string;
}
interface FetchRickInfo {
  type: RickActionTypes.FETCH_CHARACTER_INFO;
  payload: any;
}

interface FetchRickFilters {
  type: RickActionTypes.FETCH_CHARACTER_FILTERS;
  payload: RickFilters;
}

export interface RickState {
  character: any[];
  loading: boolean;
  error: null | string;
  info: any;
  filters: RickFilters;
}

export type RickAction =
  | FetchRickAction
  | FetchRickSuccess
  | FetchRickError
  | FetchRickInfo
  | FetchRickFilters
