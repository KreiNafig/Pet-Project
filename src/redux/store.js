import {configureStore} from '@reduxjs/toolkit'
import {text} from './slice/getText'

export const store = configureStore({
    reducer: {
        text
    }
})