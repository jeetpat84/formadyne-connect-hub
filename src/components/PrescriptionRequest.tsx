
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  FileText, 
  Send, 
  AlertCircle,
  Calendar,
  User,
  Pill
} from 'lucide-react';
import { toast } from 'sonner';

const PrescriptionRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientWeight: '',
    medicalCondition: '',
    allergies: '',
    currentMedications: '',
    compoundType: '',
    activeIngredients: '',
    dosageForm: '',
    strength: '',
    quantity: '',
    instructions: '',
    urgency: 'standard',
    specialRequirements: '',
    pharmacyNotes: '',
    consentAcknowledged: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.patientName || !formData.compoundType || !formData.activeIngredients) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.consentAcknowledged) {
      toast.error('Please acknowledge patient consent');
      return;
    }

    // In a real implementation, this would submit to the backend
    toast.success('Prescription request submitted successfully!');
    console.log('Prescription request:', formData);
    
    // Reset form
    setFormData({
      patientName: '',
      patientAge: '',
      patientGender: '',
      patientWeight: '',
      medicalCondition: '',
      allergies: '',
      currentMedications: '',
      compoundType: '',
      activeIngredients: '',
      dosageForm: '',
      strength: '',
      quantity: '',
      instructions: '',
      urgency: 'standard',
      specialRequirements: '',
      pharmacyNotes: '',
      consentAcknowledged: false
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Prescription Request Form
        </CardTitle>
        <CardDescription>
          Submit a detailed compounding prescription request for your patient
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Patient Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
              <User className="h-5 w-5" />
              Patient Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  value={formData.patientName}
                  onChange={(e) => handleInputChange('patientName', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="patientAge">Age</Label>
                <Input
                  id="patientAge"
                  type="number"
                  value={formData.patientAge}
                  onChange={(e) => handleInputChange('patientAge', e.target.value)}
                  placeholder="35"
                  min="0"
                  max="150"
                />
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup
                  value={formData.patientGender}
                  onValueChange={(value) => handleInputChange('patientGender', value)}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientWeight">Weight (kg)</Label>
                <Input
                  id="patientWeight"
                  type="number"
                  value={formData.patientWeight}
                  onChange={(e) => handleInputChange('patientWeight', e.target.value)}
                  placeholder="70"
                  min="0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="medicalCondition">Medical Condition/Diagnosis</Label>
              <Textarea
                id="medicalCondition"
                value={formData.medicalCondition}
                onChange={(e) => handleInputChange('medicalCondition', e.target.value)}
                placeholder="Brief description of the condition being treated..."
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allergies">Known Allergies</Label>
                <Textarea
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  placeholder="List any known allergies or NKDA"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentMedications">Current Medications</Label>
                <Textarea
                  id="currentMedications"
                  value={formData.currentMedications}
                  onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                  placeholder="List current medications and dosages"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Prescription Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
              <Pill className="h-5 w-5" />
              Prescription Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="compoundType">Compound Type *</Label>
                <Select
                  value={formData.compoundType}
                  onValueChange={(value) => handleInputChange('compoundType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select compound type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="topical-cream">Topical Cream</SelectItem>
                    <SelectItem value="topical-gel">Topical Gel</SelectItem>
                    <SelectItem value="topical-ointment">Topical Ointment</SelectItem>
                    <SelectItem value="oral-capsule">Oral Capsule</SelectItem>
                    <SelectItem value="oral-solution">Oral Solution</SelectItem>
                    <SelectItem value="sublingual-tablet">Sublingual Tablet</SelectItem>
                    <SelectItem value="suppository">Suppository</SelectItem>
                    <SelectItem value="nasal-spray">Nasal Spray</SelectItem>
                    <SelectItem value="injection">Injection</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dosageForm">Dosage Form</Label>
                <Input
                  id="dosageForm"
                  value={formData.dosageForm}
                  onChange={(e) => handleInputChange('dosageForm', e.target.value)}
                  placeholder="e.g., Cream, Capsule, Solution"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="activeIngredients">Active Ingredients & Concentrations *</Label>
              <Textarea
                id="activeIngredients"
                value={formData.activeIngredients}
                onChange={(e) => handleInputChange('activeIngredients', e.target.value)}
                placeholder="e.g., Hydrocortisone 2.5%, Lidocaine 5%"
                rows={3}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="strength">Total Strength/Concentration</Label>
                <Input
                  id="strength"
                  value={formData.strength}
                  onChange={(e) => handleInputChange('strength', e.target.value)}
                  placeholder="e.g., 50mg/ml, 2.5% w/w"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  placeholder="e.g., 30g, 60 capsules, 100ml"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">Directions for Use</Label>
              <Textarea
                id="instructions"
                value={formData.instructions}
                onChange={(e) => handleInputChange('instructions', e.target.value)}
                placeholder="Apply twice daily to affected area, Take one capsule daily with food, etc."
                rows={3}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Additional Information
            </h3>

            <div className="space-y-2">
              <Label>Urgency Level</Label>
              <RadioGroup
                value={formData.urgency}
                onValueChange={(value) => handleInputChange('urgency', value)}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard (3-5 days)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent">Urgent (1-2 days)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stat" id="stat" />
                  <Label htmlFor="stat">STAT (Same day)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Preservative-free, sugar-free, specific base requirements, etc."
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pharmacyNotes">Notes for Pharmacy</Label>
              <Textarea
                id="pharmacyNotes"
                value={formData.pharmacyNotes}
                onChange={(e) => handleInputChange('pharmacyNotes', e.target.value)}
                placeholder="Any additional notes or special instructions for the compounding pharmacist"
                rows={2}
              />
            </div>

            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Checkbox
                id="consent"
                checked={formData.consentAcknowledged}
                onCheckedChange={(checked) => handleInputChange('consentAcknowledged', checked as boolean)}
              />
              <div className="space-y-1">
                <Label htmlFor="consent" className="text-sm font-medium cursor-pointer">
                  Patient Consent Acknowledgment *
                </Label>
                <p className="text-sm text-gray-600">
                  I confirm that the patient has been informed about the compounded medication, 
                  its benefits, risks, and alternatives, and has provided informed consent for this prescription.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Important Notice</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    All compounded medications are prepared according to USP 795/797 standards. 
                    Processing time varies based on complexity and urgency. The pharmacy will contact 
                    you if any clarifications are needed before compounding begins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Prescription Request
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                setFormData({
                  patientName: '',
                  patientAge: '',
                  patientGender: '',
                  patientWeight: '',
                  medicalCondition: '',
                  allergies: '',
                  currentMedications: '',
                  compoundType: '',
                  activeIngredients: '',
                  dosageForm: '',
                  strength: '',
                  quantity: '',
                  instructions: '',
                  urgency: 'standard',
                  specialRequirements: '',
                  pharmacyNotes: '',
                  consentAcknowledged: false
                });
                toast.success('Form cleared');
              }}
            >
              Clear Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PrescriptionRequest;
