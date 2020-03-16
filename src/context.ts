import { contextFactory } from './config/context';

import { GlobalState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<GlobalState, Action>(INITIAL_STATE);
