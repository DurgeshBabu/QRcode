import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenerateQR from '../generateQR';
import { describe, it } from 'node:test';

describe('GenerateQR Component', () => {
    it('renders input fields and buttons', () => {
        const { getByPlaceholderText, getByText } = render(<GenerateQR />);
    
        const inputField = getByPlaceholderText('Enter text for QR code ');
        const saveButton = getByText('Save QR code');
        const searchInputField = getByPlaceholderText('Search for saved QR codes');
        const searchButton = getByText('Search');
    
        expect(inputField).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
        expect(searchInputField).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
    });

    it('updates text input fields correctly', () => {
        const { getByPlaceholderText } = render(<GenerateQR />);

        const inputField = getByPlaceholderText('Enter text for QR code ');
        const searchInputField = getByPlaceholderText('Search for saved QR codes');

        fireEvent.change(inputField, { target: { value: 'New QR Text' } });
        fireEvent.change(searchInputField, { target: { value: 'Search Text' } });

        expect(inputField).toHaveValue('New QR Text');
        expect(searchInputField).toHaveValue('Search Text');
    });
});
