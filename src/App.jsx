import React from 'react';
import TourList from './components/TourList';

function App() {
    return (
        <div className="container">
            <h1 className="display-3 text-center my-3">Tour List</h1>
            <div className="row">
                <TourList />
            </div>
        </div>
    );
}

export default App;
