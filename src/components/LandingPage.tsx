import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Microscope, Shield, Clock, Users, Award, CheckCircle, Phone, Mail, MapPin, ArrowRight, Beaker, HeartHandshake, Star } from 'lucide-react';
const LandingPage = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Trusted by Healthcare Professionals Since 2010
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent leading-tight">
            Precision Compounding
            <br />
            <span className="text-4xl md:text-5xl">for Better Patient Care</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Formadyne Therapeutics delivers custom pharmaceutical solutions tailored to your patients&apos; unique needs. 
            Our state-of-the-art compounding pharmacy combines cutting-edge technology with personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
              <Microscope className="mr-2 h-5 w-5" />
              Start Compounding Orders
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Formadyne Therapeutics?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive compounding services with the highest standards of quality and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <CardTitle className="text-blue-900">USP 795 Compliant</CardTitle>
                <CardDescription>
                  Fully compliant with all FDA and USP standards for sterile and non-sterile compounding
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-blue-900">Rapid Turnaround</CardTitle>
                <CardDescription>
                  24-48 hour processing for most compounds with emergency same-day service available
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-purple-700" />
                </div>
                <CardTitle className="text-blue-900">Custom Formulations</CardTitle>
                <CardDescription>
                  Specialized in hormone therapy, pediatric, veterinary, and pain management compounds
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-gray-600 text-lg">
              Expert dermatological compounding solutions for your patients
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-sm">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dermatological Compounding</h3>
                <p className="text-gray-600">
                  Custom dermatological formulations tailored to specific skin conditions and patient needs, 
                  including topical treatments, creams, ointments, and specialized delivery systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Prescriptions Filled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Partner Physicians</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">Quality Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Indian Healthcare Professionals</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Formadyne has been instrumental in providing customized solutions for my patients. 
                  Their quality and turnaround time are exceptional."
                </p>
                <div className="font-semibold text-blue-900">Dr. Tanumay Ray Chaudhury, MD Derm</div>
                <div className="text-sm text-gray-500">Durgapur / Sydney</div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">"Formials formulations work quicker and more effectively than traditional formulations. Patient compliance and outcomes have improved"</p>
                <div className="font-semibold text-blue-900">Dr. Neha Fogla, MD Derm</div>
                <div className="text-sm text-gray-500">Mumbai</div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">"The personalized dermatological compounds from Formadyne have significantly improved treatment outcomes for patients with complex skin conditions."</p>
                <div className="font-semibold text-blue-900">Dr. Shekhar Neema, MD Derm</div>
                <div className="text-sm text-gray-500">Lucknow</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Contact our team for questions about compounding services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-blue-100">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+916363991580</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-100">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">admin@formial.in</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-100">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Austin Town, Bengaluru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Microscope className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">Formadyne Therapeutics</span>
          </div>
          <p className="text-blue-200 mb-4">
            Your trusted partner in precision compounding pharmacy
          </p>
          <div className="flex justify-center space-x-6 text-sm text-blue-300">
            <span>© 2024 Formadyne Therapeutics</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;