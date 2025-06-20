
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, Stethoscope, UserPlus } from 'lucide-react';

interface HeaderProps {
  onLogin: (email: string, password: string) => void;
  isLoggedIn: boolean;
  doctorName?: string;
  onLogout: () => void;
}

const Header = ({
  onLogin,
  isLoggedIn,
  doctorName,
  onLogout
}: HeaderProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
    setIsAuthOpen(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // For now, we'll treat signup the same as login (mock authentication)
    onLogin(email, password);
    setIsAuthOpen(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Formadyne
            </h1>
            <p className="text-sm text-blue-600 font-medium">Therapeutics Pharmacy</p>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-blue-700 font-medium">Welcome, Dr. {doctorName}</span>
            <Button onClick={onLogout} variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              Logout
            </Button>
          </div>
        ) : (
          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Doctor Portal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2 text-blue-800">
                  <User className="h-5 w-5" />
                  <span>Doctor Portal Access</span>
                </DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardDescription>
                        Sign in to access your doctor dashboard
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email Address</Label>
                          <Input 
                            id="login-email" 
                            type="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder="doctor@example.com" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="login-password">Password</Label>
                          <Input 
                            id="login-password" 
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                            required 
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                          <Lock className="h-4 w-4 mr-2" />
                          Login to Dashboard
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="signup">
                  <Card>
                    <CardHeader>
                      <CardDescription>
                        Create a new doctor account to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email Address</Label>
                          <Input 
                            id="signup-email" 
                            type="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder="doctor@example.com" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <Input 
                            id="signup-password" 
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            placeholder="Create a password" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            value={confirmPassword} 
                            onChange={e => setConfirmPassword(e.target.value)} 
                            placeholder="Confirm your password" 
                            required 
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Create Account
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
};

export default Header;
