import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import {
  PageRegistrationSection,
  PageRegistrationTitle,
  PageRegistrationLabel,
  PageRegistrationInput,
  PageRegistrationBtn,
} from './Register.styled';
// import { NavLink } from 'react-router-dom';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <PageRegistrationSection>
      <PageRegistrationTitle>
        Please enter your registration details
      </PageRegistrationTitle>
      <form onSubmit={handleSubmit}>
        <PageRegistrationLabel>
          Name
          <PageRegistrationInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Enter your name"
            required
            value={name}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Email
          <PageRegistrationInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationLabel>
          Password
          <PageRegistrationInput
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </PageRegistrationLabel>
        <PageRegistrationBtn type="submit">Register</PageRegistrationBtn>
      </form>
    </PageRegistrationSection>
  );
}
