import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
import themeReducer from "./themeSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
    theme: themeReducer,
  },
});

export default appStore;
