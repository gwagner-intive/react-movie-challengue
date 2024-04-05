import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination component', () => {
    const mockHandlePageChange = jest.fn();

    test('renders without crashing', () => {
        render(<Pagination currentPage={1} totalPages={1} handlePageChange={mockHandlePageChange} />);
        expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
    });

    test('disables "Previous" button when currentPage is 1', () => {
        render(<Pagination currentPage={1} totalPages={5} handlePageChange={mockHandlePageChange} />);
        expect(screen.getByText('Previous')).toBeDisabled();
    });

    test('disables "Next" button when currentPage is equal to totalPages', () => {
        render(<Pagination currentPage={5} totalPages={5} handlePageChange={mockHandlePageChange} />);
        expect(screen.getByText('Next')).toBeDisabled();
    });

    test('displays correct page count', () => {
        render(<Pagination currentPage={3} totalPages={5} handlePageChange={mockHandlePageChange} />);
        expect(screen.getByText('Page 3 of 5')).toBeInTheDocument();
    });
});