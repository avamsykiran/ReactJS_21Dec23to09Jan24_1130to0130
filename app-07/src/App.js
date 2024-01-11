import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from "./components/Banner";
import FriendsList from "./components/FriendsList";
import Home from './components/Home';
import ContactUs from './components/ContactUs';

const App = () => (
  <BrowserRouter>
    <Banner title="Friends Contact Manager" />
    
    <Routes>
      <Route path="/" exact element={ <Home />} />
      <Route path="/contactUs" element={ <ContactUs />} />
      <Route path="/friends" element={ <FriendsList />} />
    </Routes>

  </BrowserRouter>
);

export default App;
