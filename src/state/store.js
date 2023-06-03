import { configureStore} from '@reduxjs/toolkit'
import classesReducer from './classes'
import scheduledClassesReducer from './scheduledclasses'
import credentialsReducer from './credentials'

export const store = configureStore({
    reducer: {
        classes : classesReducer,
        scheduledclasses: scheduledClassesReducer,
        credentials: credentialsReducer
    }
});

