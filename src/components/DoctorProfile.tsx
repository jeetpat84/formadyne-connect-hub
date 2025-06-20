
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Save, Loader2 } from 'lucide-react';
import { useDoctorProfile } from '@/hooks/useDoctorProfile';

const DoctorProfile = () => {
  const { profile, loading, updateProfile } = useDoctorProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    clinic_name: '',
    clinic_address: '',
    phone_number: '',
    medical_degree: '',
    registration_number: '',
    specialization: '',
    years_of_experience: ''
  });

  // Initialize form data when profile is loaded
  React.useEffect(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || '',
        clinic_name: profile.clinic_name || '',
        clinic_address: profile.clinic_address || '',
        phone_number: profile.phone_number || '',
        medical_degree: profile.medical_degree || '',
        registration_number: profile.registration_number || '',
        specialization: profile.specialization || '',
        years_of_experience: profile.years_of_experience?.toString() || ''
      });
    }
  }, [profile]);

  const handleSave = async () => {
    const updates = {
      ...formData,
      years_of_experience: formData.years_of_experience ? parseInt(formData.years_of_experience) : null
    };
    
    await updateProfile(updates);
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || '',
        clinic_name: profile.clinic_name || '',
        clinic_address: profile.clinic_address || '',
        phone_number: profile.phone_number || '',
        medical_degree: profile.medical_degree || '',
        registration_number: profile.registration_number || '',
        specialization: profile.specialization || '',
        years_of_experience: profile.years_of_experience?.toString() || ''
      });
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="ml-2">Loading profile...</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Doctor Profile
        </CardTitle>
        <CardDescription>
          Manage your professional information and clinic details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name</Label>
            {isEditing ? (
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="Dr. John Smith"
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.full_name || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            {isEditing ? (
              <Select
                value={formData.specialization}
                onValueChange={(value) => setFormData({ ...formData, specialization: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-medicine">General Medicine</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="endocrinology">Endocrinology</SelectItem>
                  <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.specialization || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="clinic_name">Clinic/Hospital Name</Label>
            {isEditing ? (
              <Input
                id="clinic_name"
                value={formData.clinic_name}
                onChange={(e) => setFormData({ ...formData, clinic_name: e.target.value })}
                placeholder="City General Hospital"
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.clinic_name || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            {isEditing ? (
              <Input
                id="phone_number"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                placeholder="+1 (555) 123-4567"
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.phone_number || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="medical_degree">Medical Degree</Label>
            {isEditing ? (
              <Input
                id="medical_degree"
                value={formData.medical_degree}
                onChange={(e) => setFormData({ ...formData, medical_degree: e.target.value })}
                placeholder="MD, MBBS, DO, etc."
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.medical_degree || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="registration_number">Medical Registration Number</Label>
            {isEditing ? (
              <Input
                id="registration_number"
                value={formData.registration_number}
                onChange={(e) => setFormData({ ...formData, registration_number: e.target.value })}
                placeholder="REG123456"
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.registration_number || 'Not set'}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="years_of_experience">Years of Experience</Label>
            {isEditing ? (
              <Input
                id="years_of_experience"
                type="number"
                value={formData.years_of_experience}
                onChange={(e) => setFormData({ ...formData, years_of_experience: e.target.value })}
                placeholder="5"
                min="0"
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded border text-gray-900">
                {profile?.years_of_experience ? `${profile.years_of_experience} years` : 'Not set'}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="clinic_address">Clinic/Hospital Address</Label>
          {isEditing ? (
            <Textarea
              id="clinic_address"
              value={formData.clinic_address}
              onChange={(e) => setFormData({ ...formData, clinic_address: e.target.value })}
              placeholder="123 Medical Center Drive, City, State, ZIP"
              rows={3}
            />
          ) : (
            <div className="p-2 bg-gray-50 rounded border text-gray-900 min-h-[80px]">
              {profile?.clinic_address || 'Not set'}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              Edit Profile
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorProfile;
