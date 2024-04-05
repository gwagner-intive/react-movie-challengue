import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../hooks/useDebounce';

jest.useFakeTimers();

describe('useDebounce hook', () => {
    test('returns the initial value immediately', () => {
        const { result } = renderHook(() => useDebounce('test', 1000));
        expect(result.current).toBe('test');
    });

    test('returns the updated value after the specified delay', () => {
        const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
            initialProps: { value: 'test', delay: 1000 }
        });

        rerender({ value: 'updated', delay: 1000 });
        expect(result.current).toBe('test');

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(result.current).toBe('updated');
    });
});