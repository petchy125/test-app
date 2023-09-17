'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import { auth } from '@/lib/firebase';
import Form from '@/app/container/form';

export default function SignUp() {
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: firstName });
      signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/series',
      });
    } catch (error) {
      setError(error.message);
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
          onChange={({ target }) => setEmail(target.value)}
        />
        <Form.Input
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit type="submit" data-testid="sign-up">
          Sign Up
        </Form.Submit>
      </Form.Base>
      <Form.Text>
        Already a user? <Form.Link href="/signin">Sign in now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
      </Form.TextSmall>
    </Form>
  );
}
