import { Component, createUniqueId, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";

import { User } from "./types";

import HomePage from "@/pages/HomePage";

const SignInPage = lazy(() => import("@/pages/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));


export const user: User = {
  id: createUniqueId(),
  name: "Dyrits",
  avatar: "https://avatars.githubusercontent.com/u/61299170?v=4"
};

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
    </Router>
  );
};

export default App;
