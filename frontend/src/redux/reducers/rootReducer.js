import { combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'

const rootReducer =combineReducers({
   cities:citiesReducer,
   itinerary: itineraryReducer,
   user:userReducer
})

export default rootReducer