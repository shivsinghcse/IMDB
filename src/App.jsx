import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import WatchList from './components/WatchList';

function App() {
    return (
        <>
            <Navbar />

            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="*" element={<h1>Page Not Found...</h1>} />
            </Routes>
        </>
    );
}

export default App;
