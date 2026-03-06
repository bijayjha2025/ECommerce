import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Loader2   } from 'lucide-react';

const Login = () => {
 const [isLogin, setIsLogin] = useState(true);

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (!email || !password || (!isLogin && !name)) {
    setError('Please fill in all fields.');
    return;
  }

  setLoading(true);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    localStorage.setItem('auth_token', 'mock_token_123');
    localStorage.setItem('user_name', isLogin ? 'User' : name);

    navigate('/');
    } catch (err) {
      setError('An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
   setIsLogin(!isLogin);
   setError('');
   setName('');
   setPassword('');
  };

  return (
   <div className="min-h-[80vh] flex items-center justify-center -mt-10 sm:-mt-20 px-4">
    <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-white/20 backdrop-blur-md border border-[var(--gold-light)]/30 shadow-[0_8px_32px_0_rgba(184,134,11,0.2)]">
    
    <div className="text-center mb-8">
     <h2 className="text-3xl font-serif text-[var(--ink)] mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
     <div className="w-16 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full"></div>
      <p className="mt-4 text-[var(--ink)]/70 text-sm">{isLogin ? 'Enter your details to access your account' : 'Sign up to explore exclusive collections'}</p>
     </div>

     {error && (
      <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm text-center">{error}</div>
     )}

     <form className="space-y-5" onSubmit={handleSubmit}>
      {!isLogin && (
       <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <User className="h-5 w-5 text-[var(--gold-dark)]" /></div>
         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-[#fff8e7]/80 border border-[var(--gold)]/30 rounded-lg text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all" required={!isLogin} disabled={loading} />
        </div>
        )}

       <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <Mail className="h-5 w-5 text-[var(--gold-dark)]" /></div>
         <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-[#fff8e7]/80 border border-[var(--gold)]/30 rounded-lg text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all" required disabled={loading} />
       </div>

       <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <Lock className="h-5 w-5 text-[var(--gold-dark)]" /></div>
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-[#fff8e7]/80 border border-[var(--gold)]/30 rounded-lg text-[var(--ink)] placeholder-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all" required disabled={loading} />
       </div>

       {isLogin && (
       <div className="flex justify-between items-center text-sm pt-1">
       <label className="flex items-center text-[var(--ink)]/80 cursor-pointer hover:text-[var(--gold-dark)] transition-colors">
        <input type="checkbox" className="mr-2 accent-[var(--gold)]" disabled={loading} />Remember me</label>
        <button type="button" className="font-medium text-[var(--gold-dark)] hover:text-[var(--ink)] transition-colors">Forgot password?</button>
       </div>
      )}

      <button type="submit" disabled={loading} className="mt-2 w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[var(--cream)] bg-[var(--ink)] hover:bg-[var(--gold-dark)] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)] transition-all duration-300 group">
       {loading ? ( <Loader2 className="animate-spin h-5 w-5" />
       ) : (
       <>
        {isLogin ? 'Sign In' : 'Sign Up'}
         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
       </>
      )}
      </button>
     </form>

     <div className="mt-8 text-center text-sm text-[var(--ink)]/70">
      {isLogin ? "Don't have an account? " : "Already have an account? "}
      <button onClick={toggleAuthMode} disabled={loading} className="font-medium text-[var(--gold-dark)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 disabled:opacity-70">
       {isLogin ? 'Create one' : 'Sign in'}
      </button>
     </div>
    </div>
   </div>
  )
}

export default Login