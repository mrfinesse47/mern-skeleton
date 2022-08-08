import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoalForm from '../components/GoalForm';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>goals dashboard</p>
      </section>
      <GoalForm />
    </>
  );
};

export default Dashboard;
