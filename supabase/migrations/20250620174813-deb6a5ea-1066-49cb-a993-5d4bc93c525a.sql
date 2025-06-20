
-- Create doctor profiles table
CREATE TABLE public.doctor_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  full_name TEXT,
  clinic_name TEXT,
  clinic_address TEXT,
  phone_number TEXT,
  email TEXT,
  medical_degree TEXT,
  registration_number TEXT,
  specialization TEXT,
  years_of_experience INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.doctor_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for doctor profiles
CREATE POLICY "Doctors can view their own profile" 
  ON public.doctor_profiles 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Doctors can insert their own profile" 
  ON public.doctor_profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Doctors can update their own profile" 
  ON public.doctor_profiles 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create function to handle new doctor profile creation
CREATE OR REPLACE FUNCTION public.handle_new_doctor()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.doctor_profiles (user_id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

-- Create trigger to automatically create doctor profile on user signup
CREATE TRIGGER on_auth_user_created_doctor
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_doctor();
