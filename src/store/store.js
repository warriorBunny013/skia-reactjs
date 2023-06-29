import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Reducers/todoReducer';

export const store=configureStore({
    reducer:{
      todo:todoReducer
    }
  })
