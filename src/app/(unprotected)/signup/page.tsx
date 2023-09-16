import Hero from '@/app/components/hero';
import SignUpForm from '@/app/components/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign Up',
  description: 'Create an account to access thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero className="h-[116vh]" type="static" src="/home-bg.jpg">
        <SignUpForm />
      </Hero>
    </div>
  );
}
