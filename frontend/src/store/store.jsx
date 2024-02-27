import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slice/slice'

const Store = configureStore({
    reducer: {
        user: UserSlice
    }
})

export default Store