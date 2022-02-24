import { combineReducers } from "redux";

import posts from './posts'
import Auth from "./auth";

export default combineReducers({posts, Auth})