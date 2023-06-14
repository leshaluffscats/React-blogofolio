import './App.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import SignIn from '../SignIn/SignIn';
import Success from '../Success/Success';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import PostContent from '../PostContent/PostContent';
import WithThemeContext from '../ThemeContext/ThemeContext';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
import ForgottenPassword from '../ForgottenPassword/ForgottenPassword';
import NewPassword from '../ForgottenPassword/NewPassword';
import AddPost from '../AddPost/AddPost';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';


function App() {

  return (
    <div className="App">
      <Router>
        <WithThemeContext>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgottenPassword />} />
            <Route path='/password/reset/confirm/:uid/:token' element={<NewPassword />} />
            <Route path='/activate/:uid/:token' element={<Success />} />
            <Route path='/post/:id' element={<PostContent />} />
            <Route path='/add-post' element={<AddPost />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Main />} />
          </Routes>
          <Footer />
        </WithThemeContext>
      </Router>
    </div>
  );
}

export default App;
