import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import UserProfile from './pages/UserProfile';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
