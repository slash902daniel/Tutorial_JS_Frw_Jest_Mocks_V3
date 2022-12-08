import swapiGetter from "./swapiGetter.js";

//Different import directly form axios to avoid the mock.fn()
import mockAxios from 'axios';

jest.mock("axios");
//mockAxios.get.mockImplementation(() => Promise.resolve()); example without data
mockAxios.get.mockImplementation(() => Promise.resolve({data: { name: "Mock characterV1"}})); //Example resolving the value

describe('swapiGetter V1', () => {
    test('should return a name', async ()  => {
        const mockCall = jest.fn();

        const result = await swapiGetter(1);
        console.log(result);

        expect(result).toBe("Mock characterV1");
        expect(mockAxios.get).toHaveBeenCalled();
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});