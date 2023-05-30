import React from 'react';
import Form from './SignUp';

const App = () => {
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
  ];

  return (
    <div>
      <h1>Form Example</h1>
      <Form onSubmit={handleSubmit} fields={fields} />
    </div>
  );
};

export default App;
