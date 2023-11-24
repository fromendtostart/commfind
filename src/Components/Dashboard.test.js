import { render, waitFor, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
    // Ensure that the component renders without throwing an error
  });
  // Add more tests as needed for different aspects of the component
});
