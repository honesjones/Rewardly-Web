
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Facebook } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login - in a real app, connect this to your auth system
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have been logged in successfully!",
      });
      navigate('/offers');
    }, 1500);
  };

  const handleGmailLogin = () => {
    toast({
      title: "Gmail Login",
      description: "Gmail login functionality would be integrated here",
    });
  };

  const handleFacebookLogin = () => {
    toast({
      title: "Facebook Login",
      description: "Facebook login functionality would be integrated here",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-rewardly-primary">Earnably</h1>
          <p className="text-gray-500 mt-1">Login to your account</p>
        </div>
        
        <Card className="border-gray-100 shadow-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-rewardly-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-rewardly-primary hover:bg-rewardly-secondary"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login with Email"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                onClick={handleGmailLogin}
                disabled={isLoading}
                className="border-gray-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Gmail
              </Button>
              <Button 
                variant="outline" 
                onClick={handleFacebookLogin}
                disabled={isLoading}
                className="border-gray-300"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-rewardly-primary hover:underline">
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
