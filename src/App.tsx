import { Route, Router } from "@solidjs/router";
import { type Component, createUniqueId, lazy } from "solid-js";
import HomePage from "@/pages/HomePage";
import type { User } from "./types";

const SignInPage = lazy(() => import("@/pages/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));

export const user: User = {
  avatar: "https://avatars.githubusercontent.com/u/61299170?v=4",
  id: createUniqueId(),
  name: "Dyrits",
};

const App: Component = () => {
  return (
    <Router>
      <Route component={HomePage} path="/" />
      <Route component={SignInPage} path="/sign-in" />
      <Route component={SignUpPage} path="/sign-up" />
    </Router>
  );
};

export default App;
