import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slice/ProductSlice'


export default configureStore({
  reducer: {
    counter:counterSlice,
  },
})