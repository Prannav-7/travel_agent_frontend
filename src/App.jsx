import { useState, useEffect } from 'react';
import { ClerkProvider, useUser } from '@clerk/clerk-react';
import NetflixIntro from './components/NetflixIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Destinations from './components/Destinations';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const { isSignedIn, user } = useUser();

  // Sync user to MongoDB after authentication
  useEffect(() => {
    const syncUserToMongoDB = async () => {
      if (isSignedIn && user) {
        try {
          const response = await fetch('/api/users/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clerkId: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              firstName: user.firstName,
              lastName: user.lastName,
              imageUrl: user.imageUrl,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('✅ User synced to MongoDB:', data.message);
          } else {
            console.error('❌ Failed to sync user to MongoDB');
          }
        } catch (error) {
          console.error('❌ Error syncing user:', error);
        }
      }
    };

    syncUserToMongoDB();
  }, [isSignedIn, user]);

  return (
    <>
      {showIntro && <NetflixIntro onComplete={() => setShowIntro(false)} />}

      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Destinations />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AppContent />
    </ClerkProvider>
  );
}

export default App;
