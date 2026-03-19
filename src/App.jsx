import { useState } from 'react';
import HomePage   from './pages/HomePage';
import JobsPage   from './pages/JobsPage';
import DetailPage from './pages/DetailPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleNavigate = (route, data = null) => {
    setCurrentRoute(route);
    if (data) setSelectedJob(data);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':    return <HomePage onNavigate={handleNavigate} />;
      case 'jobs':    return <JobsPage onNavigate={handleNavigate} />;
      case 'detail':  return <DetailPage job={selectedJob} onBack={() => setCurrentRoute('jobs')} />;
      case 'shop':    return <ShopPage />;
      case 'profile': return <ProfilePage />;
      default:        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  );
}