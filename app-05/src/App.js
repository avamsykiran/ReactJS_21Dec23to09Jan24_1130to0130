import { Fragment } from "react";
import Banner from "./components/Banner";
import FriendsList from "./components/FriendsList";

const App = () => (
  <Fragment>
    <Banner title="Friends Contact Manager" />
    <FriendsList />
  </Fragment>
);

export default App;
