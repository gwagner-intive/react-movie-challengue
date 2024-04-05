import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search component', () => {
    const mockHandleChange = jest.fn();
    const mockInputRef: any = { };

    test('renders without crashing', () => {
        render(<Search handleChange={mockHandleChange} inputRef={mockInputRef} isButtonDisabled={false} />);
        expect(screen.getByPlaceholderText('Search for a movie title...')).toBeInTheDocument();
    });

    test('disables "Search" button when isButtonDisabled is true', () => {
        render(<Search handleChange={mockHandleChange} inputRef={mockInputRef} isButtonDisabled={true} />);
        expect(screen.getByText('Search')).toBeDisabled();
    });

    test('calls handleChange when input field changes', () => {
        render(<Search handleChange={mockHandleChange} inputRef={mockInputRef} isButtonDisabled={false} />);
        fireEvent.change(screen.getByPlaceholderText('Search for a movie title...'), { target: { value: 'test' } });
        expect(mockHandleChange).toHaveBeenCalled();
    });

    test('calls handleChange when form is submitted', () => {
        render(<Search handleChange={mockHandleChange} inputRef={mockInputRef} isButtonDisabled={false} />);
        fireEvent.submit(screen.getByText('Search'));
        expect(mockHandleChange).toHaveBeenCalled();
    });
});