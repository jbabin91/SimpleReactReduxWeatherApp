'use strict'
import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // These two lines are equivalent to each other.
      // They both will concat the array state.
      // return state.concat([action.payload.data])
      return [action.payload.data, ...state]
  }
  return state
}
