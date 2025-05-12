
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mail, Facebook } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginPage: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Google login functionality would be integrated here",
    });
    // Simulate successful login
    setTimeout(() => navigate('/offers'), 1500);
  };

  const handleFacebookLogin = () => {
    toast({
      title: "Facebook Login",
      description: "Facebook login functionality would be integrated here",
    });
    // Simulate successful login
    setTimeout(() => navigate('/offers'), 1500);
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-6">
      {/* Logo and Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Earnably</h1>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Earn Free Gift Cards</h2>
        <p className="text-xl md:text-2xl text-white/90">Fast, Easy & Reliable Online Rewards</p>
      </div>

      {/* Features List */}
      <div className="w-full max-w-md mb-12">
        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white text-lg">Complete Offers, Surveys & Tasks</p>
        </div>

        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white text-lg">Free PayPal Cash and Gift Cards</p>
        </div>

        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white text-lg">Competitive Payout Rates</p>
        </div>

        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white text-lg">1000+ Instant Rewards</p>
        </div>
      </div>

      {/* Login Buttons */}
      <div className="w-full max-w-md space-y-4">
        <Button 
          onClick={handleGoogleLogin}
          className="w-full h-14 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-md flex items-center justify-center space-x-2"
          variant="outline"
        >
          <Mail className="w-6 h-6 text-red-500" />
          <span className="text-lg">Sign in with Google</span>
        </Button>
        
        <Button 
          onClick={handleFacebookLogin}
          className="w-full h-14 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md flex items-center justify-center space-x-2"
        >
          <Facebook className="w-6 h-6" />
          <span className="text-lg">Sign in with Facebook</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
