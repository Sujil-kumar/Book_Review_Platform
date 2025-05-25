import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { getUser, updateUser } from '../api';
import './UserProfile.css';

const UserProfile = () => {
  const { user, setUser } = useContext(AppContext);
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getUser(user._id).then(res => setForm(res.data));
    }
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    updateUser(user._id, form)
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Enter your email"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
    </form>
  );
};

export default UserProfile;
