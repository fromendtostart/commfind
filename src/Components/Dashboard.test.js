import { render, waitFor, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';

//no support for import yet for mock api
const axios = require('axios');

jest.mock('axios');

const mockXmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
                        <ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
                            <Name>commfind</Name><Prefix></Prefix><KeyCount>2</KeyCount><MaxKeys>1000</MaxKeys><IsTruncated>false</IsTruncated>
                                <Contents>
                                    <Key>cfa1.png</Key>
                                    <LastModified>2023-11-11T17:25:55.000Z</LastModified><ETag>&quot;4ef32f1d18b2166ab8b18bf007648af1&quot;</ETag>
                                    <Size>27515</Size><StorageClass>STANDARD</StorageClass>
                                </Contents>
                                <Contents>
                                    <Key>cfa3.png</Key>
                                    <LastModified>2023-11-11T16:45:42.000Z</LastModified><ETag>&quot;043605c103231b1231e4424e50cd11f4&quot;</ETag>
                                    <Size>24073</Size><StorageClass>STANDARD</StorageClass>
                                </Contents>
                        </ListBucketResult>`;


describe('Dashboard Component', () => {

  it('renders when api is working properly', () => {

    axios.get.mockResolvedValue({ data: mockXmlResponse });
    render(<Dashboard />);
  });

  it('fetches data and renders images', async () => {
    axios.get.mockResolvedValue({ data: mockXmlResponse });

    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(2);
    });
  });

});
