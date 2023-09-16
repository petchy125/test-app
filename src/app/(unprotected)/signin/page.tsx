import Hero from '@/app/components/hero';
import SignInForm from '@/app/components/sigin-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign In',
  description: 'Sign in to see thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg" className="h-[116vh]">
        <SignInForm />
      </Hero>
    </div>
  );
}
