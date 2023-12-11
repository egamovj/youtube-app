/** @format */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Aside,
  Navbar,
  Main,
  VideoPage,
  SearchPage,
  Login,
  Register,
} from "./components";
import {
  PrivateRoute,
  History,
  Library,
  LikedVideos,
  Shorts,
  Subscriptions,
  WatchLater,
  YourVideos,
} from "./components/sidebarPages";
import { auth } from "./components/auth/firebase";
import { GlobalState } from "./context/GlobalState";

const Router = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  });

  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar user={user} />
        <Aside />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route
            path='/register'
            element={user ? <Navigate to={"/privateroute"} /> : <Register />}
          />
          <Route
            path='/login'
            element={user ? <Navigate to={"/privateroute"} /> : <Login />}
          />
          <Route
            path='/privateroute'
            element={user ? <PrivateRoute /> : <Navigate to={"/login"} />}
          />
          <Route path='/history' element={<History />} />
          <Route path='/library' element={<Library />} />
          <Route path='/likedvideos' element={<LikedVideos />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='/yourvideos' element={<YourVideos />} />
          <Route path='/search' element={<SearchPage />} />
          <Route
            path='/video/:id/:title/:time/:userName/:viewCount'
            element={<VideoPage />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default Router;
