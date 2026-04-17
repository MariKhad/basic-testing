// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn),
}));

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const mockCreate = jest.fn();
    const mockGet = jest.fn().mockResolvedValue({ data: 'test data' });
    mockCreate.mockReturnValue({ get: mockGet });
    
    (axios.create as jest.Mock) = mockCreate;
    
    await throttledGetDataFromApi('/test');
    
    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const mockGet = jest.fn().mockResolvedValue({ data: 'test data' });
    const mockCreate = jest.fn().mockReturnValue({ get: mockGet });
    
    (axios.create as jest.Mock) = mockCreate;
    
    await throttledGetDataFromApi('/users');
    
    expect(mockGet).toHaveBeenCalledWith('/users');
  });

  test('should return response data', async () => {
    const expectedData = { id: 1, name: 'John' };
    const mockGet = jest.fn().mockResolvedValue({ data: expectedData });
    const mockCreate = jest.fn().mockReturnValue({ get: mockGet });
    
    (axios.create as jest.Mock) = mockCreate;
    
    const result = await throttledGetDataFromApi('/users/1');
    
    expect(result).toEqual(expectedData);
  });
});
