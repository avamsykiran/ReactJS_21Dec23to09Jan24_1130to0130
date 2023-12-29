import { Fragment } from "react";
import Banner from "./Banner";
import FriendsList from "./FriendsList";

const App = () => (
  <Fragment>
    <Banner title="Friends Contact Manager" />
    <FriendsList />
  </Fragment>
);

export default App;
