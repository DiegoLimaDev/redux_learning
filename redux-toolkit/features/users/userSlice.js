const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
    loading:false,
    users: [],
    error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> res.data.map((e)=>e.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
            console.log(state.users)
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
            console.log(state.error)
        });
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers