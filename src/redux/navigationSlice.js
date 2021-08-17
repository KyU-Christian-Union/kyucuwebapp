import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeDrawer: false,
  userDrawer: true,
  xs: true,
  // Determines if to show chat sidenav and main chat window
  showBoth: false,
  showChatNav: true
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleHomeDrawer: state => {
      state.homeDrawer = !state.homeDrawer;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleHomeDrawer } = navigationSlice.actions;

export default navigationSlice.reducer;
