
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  PlusCircle, 
  Clock, 
  CheckCircle, 
  Package, 
  CreditCard, 
  FileText, 
  User, 
  Calendar,
  DollarSign,
  Activity,
  TrendingUp,
  AlertCircle,
  Pill,
  Settings
} from 'lucide-react';
import { toast } from 'sonner';
import DoctorProfile from './DoctorProfile';
import PrescriptionRequest from './PrescriptionRequest';
import { useDoctorProfile } from '@/hooks/useDoctorProfile';

const DoctorDashboard = () => {
  const { profile, loading: profileLoading } = useDoctorProfile();
  const [selectedCompoundType, setSelectedCompoundType] = useState('');
  const [patientName, setPatientName] = useState('');
  const [dosage, setDosage] = useState('');
  const [instructions, setInstructions] = useState('');

  // Mock data for orders
  const recentOrders = [
    { id: 'ORD-001', patient: 'John Doe', compound: 'Hormone Therapy Cream', status: 'Completed', date: '2024-01-15', amount: '$125' },
    { id: 'ORD-002', patient: 'Jane Smith', compound: 'Pediatric Antibiotic', status: 'In Progress', date: '2024-01-14', amount: '$89' },
    { id: 'ORD-003', patient: 'Robert Johnson', compound: 'Pain Management Gel', status: 'Pending', date: '2024-01-13', amount: '$156' }
  ];

  const handleNewOrder = () => {
    if (!selectedCompoundType || !patientName || !dosage) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Order submitted successfully!');
    // Reset form
    setSelectedCompoundType('');
    setPatientName('');
    setDosage('');
    setInstructions('');
  };

  const handlePayment = (orderId: string, amount: string) => {
    // Simulate opening Stripe checkout in a new tab
    toast.success(`Processing payment of ${amount} for order ${orderId}`);
    // In a real implementation, this would open Stripe checkout
    window.open('https://checkout.stripe.com/demo', '_blank');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Get the doctor's display name
  const getDoctorDisplayName = () => {
    if (profileLoading) return '...';
    if (profile?.full_name) return profile.full_name;
    return 'Doctor';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Dr. {getDoctorDisplayName()}
          </h1>
          <p className="text-gray-600">Manage your compounding orders and track patient prescriptions</p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Processing time: 24-48h</p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">$2,340</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">98.5%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-blue-600 mt-2">Quality assurance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="new-order" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Quick Order
            </TabsTrigger>
            <TabsTrigger value="prescription-request" className="flex items-center gap-2">
              <Pill className="h-4 w-4" />
              Prescription
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Orders
                </CardTitle>
                <CardDescription>
                  Track the status of your recent compounding orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-blue-100 rounded-lg hover:bg-blue-50/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Pill className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{order.compound}</h4>
                          <p className="text-sm text-gray-600">Patient: {order.patient}</p>
                          <p className="text-xs text-gray-500">Order ID: {order.id}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(order.status)}
                        <p className="text-sm text-gray-600">{order.date}</p>
                        <p className="font-semibold text-blue-600">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-order">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Submit New Compounding Order
                </CardTitle>
                <CardDescription>
                  Create a new custom compound order for your patient
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Patient Name *</Label>
                    <Input
                      id="patient-name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter patient's full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="compound-type">Compound Type *</Label>
                    <Select value={selectedCompoundType} onValueChange={setSelectedCompoundType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select compound type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hormone-therapy">Hormone Replacement Therapy</SelectItem>
                        <SelectItem value="pain-management">Pain Management</SelectItem>
                        <SelectItem value="pediatric">Pediatric Formulation</SelectItem>
                        <SelectItem value="dermatology">Dermatological Compound</SelectItem>
                        <SelectItem value="veterinary">Veterinary Medicine</SelectItem>
                        <SelectItem value="other">Other (Custom)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage & Strength *</Label>
                    <Input
                      id="dosage"
                      value={dosage}
                      onChange={(e) => setDosage(e.target.value)}
                      placeholder="e.g., 50mg/ml, 2.5% cream"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 30ml, 60 capsules"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Any special formulation requirements, patient allergies, or additional notes..."
                    rows={4}
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Order Processing Information</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Standard processing time is 24-48 hours. Rush orders are available for critical cases.
                        All compounds are prepared according to USP 795/797 standards.
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={handleNewOrder} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Submit Order
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescription-request">
            <PrescriptionRequest />
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Management
                </CardTitle>
                <CardDescription>
                  Process payments for completed orders and manage billing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.filter(order => order.status === 'Completed').map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-green-100 rounded-lg bg-green-50/50">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{order.compound}</h4>
                          <p className="text-sm text-gray-600">Patient: {order.patient}</p>
                          <p className="text-xs text-gray-500">Completed: {order.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-bold text-green-600 text-lg">{order.amount}</p>
                        <Button 
                          onClick={() => handlePayment(order.id, order.amount)}
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {recentOrders.filter(order => order.status === 'Completed').length === 0 && (
                    <div className="text-center py-8">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No completed orders ready for payment</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Payment Information</h3>
                  <p className="text-sm text-blue-700">
                    Payments are processed securely through Stripe. You will be redirected to complete your payment.
                    All transactions are encrypted and HIPAA compliant.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <DoctorProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorDashboard;
