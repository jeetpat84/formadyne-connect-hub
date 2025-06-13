
import { useState } from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import DoctorDashboard from '@/components/DoctorDashboard';
import { toast } from 'sonner';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctorName, setDoctorName] = useState('');

  const handleLogin = (email: string, password: string) => {
    // Simple mock authentication - in real app, this would connect to a backend
    if (email && password) {
      setIsLoggedIn(true);
      // Extract name from email for demo purposes
      const name = email.split('@')[0].replace(/[^a-zA-Z]/g, '');
      setDoctorName(name.charAt(0).toUpperCase() + name.slice(1));
      toast.success('Login successful! Welcome to your dashboard.');
    } else {
      toast.error('Please enter valid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDoctorName('');
    toast.success('Logged out successfully');
  };

  return (
    <div className="min-h-screen">
      <Header 
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        doctorName={doctorName}
        onLogout={handleLogout}
      />
      
      {isLoggedIn ? (
        <DoctorDashboard doctorName={doctorName} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Index;
