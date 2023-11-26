import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

describe('useCounter', () => {
	test('should render initial count', () => {
		const { result } = renderHook(useCounter);

		expect(result.current.count).toBe(0);
	});

	test('should increment the count', () => {
		const { result } = renderHook(useCounter);
		act(() => result.current.handleIncrement());
		expect(result.current.count).toBe(1);
	});
});
