import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalsService';

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalsSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: { reset: (state) => initialState },
});

export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;
