
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface DoctorProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  clinic_name: string | null;
  clinic_address: string | null;
  phone_number: string | null;
  email: string | null;
  medical_degree: string | null;
  registration_number: string | null;
  specialization: string | null;
  years_of_experience: number | null;
  created_at: string;
  updated_at: string;
}

export const useDoctorProfile = () => {
  const [profile, setProfile] = useState<DoctorProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('doctor_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile');
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<DoctorProfile>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('doctor_profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('user_id', user.id);

      if (error) {
        console.error('Error updating profile:', error);
        toast.error('Failed to update profile');
        return;
      }

      toast.success('Profile updated successfully');
      fetchProfile(); // Refresh the profile data
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    updateProfile,
    refetchProfile: fetchProfile
  };
};
