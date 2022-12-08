import swapiGetter from "./swapiGetter.js";

//Different import directly form axios to avoid the mock.fn()
import mockAxios from 'axios';

jest.mock("axios");

//This shows a similiar to V1, but with a shorthand version to avoid the promise
mockAxios.get.mockResolvedValue(({data: {name: "Mock characterV2"}})); //Example resolving the value

describe('swapiGetter V2', () => {
    test('should return a name', async ()  => {
        const mockCall = jest.fn();

        const result = await swapiGetter(1);
        console.log(result);

        expect(result).toBe("Mock characterV2");
        expect(mockAxios.get).toHaveBeenCalled();
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});