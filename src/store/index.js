import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter ++
        },
        decrement(state) {
            state.counter --
        },
        increase(state, action) {
            state.counter *= action.payload
        },
        divide(state) {
            state.counter = Math.sqrt(state.counter).toFixed(5)
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logOut(state) {
            state.isAuthenticated = false;
        },
    }
})

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;