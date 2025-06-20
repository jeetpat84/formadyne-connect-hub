
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import DoctorDashboard from '@/components/DoctorDashboard';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { toast } from 'sonner';

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error('Login failed: ' + error.message);
        return;
      }

      toast.success('Login successful! Welcome to your dashboard.');
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        toast.error('Sign up failed: ' + error.message);
        return;
      }

      toast.success('Sign up successful! Please check your email to confirm your account.');
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error('Logout failed: ' + error.message);
        return;
      }
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header 
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        isLoggedIn={!!user}
        onLogout={handleLogout}
      />
      
      {user ? (
        <DoctorDashboard />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Index;
