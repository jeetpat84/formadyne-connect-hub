import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, Stethoscope } from 'lucide-react';
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
    setIsLoginOpen(false);
    setEmail('');
    setPassword('');
  };
  return <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 fixed w-full top-0 z-50">
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

        {isLoggedIn ? <div className="flex items-center space-x-4">
            <span className="text-blue-700 font-medium">Welcome, Dr. {doctorName}</span>
            <Button onClick={onLogout} variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              Logout
            </Button>
          </div> : <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Doctor Login
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2 text-blue-800">
                  <User className="h-5 w-5" />
                  <span>Doctor Portal Login</span>
                </DialogTitle>
              </DialogHeader>
              <Card>
                <CardHeader>
                  <CardDescription>
                    Please enter your credentials to access the doctor dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="doctor@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      <Lock className="h-4 w-4 mr-2" />
                      Login to Dashboard
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>}
      </div>
    </header>;
};
export default Header;