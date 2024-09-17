import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProfilePage from './components/ProfilePage';
import NotificationPage from './components/NotificationPage';
import GroupPage from './components/Group/GroupPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/group" element={<GroupPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
