import swapiGetter from "./swapiGetter.js";

//Different import directly form axios to avoid the mock.fn()
import mockAxios from 'axios';

jest.mock("axios", () => ({ 
    __esModule: true, //to avoid error as non function module
    default: {
        get: jest.fn().mockResolvedValue({data: { name: "Mock characterV3"}}),

    }
}));

describe('swapiGetter V3', () => {
    test('should return a name', async ()  => {
        const mockCall = jest.fn();

        const result = await swapiGetter(1);
        console.log(result);

        expect(result).toBe("Mock characterV3");
        expect(mockAxios.get).toHaveBeenCalled();
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});