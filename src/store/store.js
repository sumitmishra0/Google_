import {createStore} from 'redux'

import {SearchReducer} from './reducer'

export const store = createStore(SearchReducer)

console.log("first State of store",store.getState());
