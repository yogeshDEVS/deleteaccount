import React, { useState } from 'react';
import './AccountDeleteRequest.css';

const AccountDeleteRequest = () => {
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Email:', email);
    console.log('Captcha:', captcha);
    alert('Your account has been deleted.');
  };

  return (
    <div className="account-delete-request">
      <h2>One2One-Appointfix App</h2>
      <h2>Account Delete Request</h2>
      <div className="instructions">
        <h3>How to delete your data?</h3>
        <p>1. Enter your username or email id used in the app</p>
        <h3>What information is deleted?</h3>
        <p>1. All information regarding your account is deleted.</p>
        <p>2. All content created has to be deleted by the user.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group captcha-group">
          <div className="captcha-code">{captchaCode}</div>
          <button type="button" onClick={handleRefreshCaptcha}>Refresh</button>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="delete-account-button">Delete Account 🗑️</button>
        <footer className="footer">
        <p>Customer Support:</p>
        <p>Email: <a href="mailto:one2one.ds@gmail.com">one2one.ds@gmail.com</a></p>
        <p>Phone number: <a href="tel:+447799200500">+44 7799200500</a></p>
      </footer>
      </form>
    </div>
  );
};

export default AccountDeleteRequest;
