'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signIn } from 'next-auth/react';

import { auth } from '@/lib/firebase';
import Form from '@/app/ui/form';

export default function SigUp() {
  const [error, setError] = useState<null | string>(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user.user, { displayName: firstName });
      signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/series',
      });
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error data-testid="error">{error}</Form.Error>}

      <Form.Base onSubmit={handleSignUp} method="POST">
        <Form.Input
          placeholder="First Name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <Form.Input
          placeholder="Email address"
          value={email}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit type="submit" data-testid="sign-in">
          Sign Up
        </Form.Submit>
      </Form.Base>
      <Form.Text>
        Already a user? <Form.Link href="/signin">Sign in now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
      </Form.TextSmall>
    </Form>
  );
}
