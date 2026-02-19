import { OpenAIApiService } from '../src/providers/openai/openai-core.js';

describe('OpenAIApiService constructor', () => {
    test('adds Authorization header when OPENAI_API_KEY is provided', () => {
        const service = new OpenAIApiService({
            OPENAI_API_KEY: 'sk-test-key',
            OPENAI_BASE_URL: 'http://127.0.0.1:8080/v1'
        });

        expect(service).toBeTruthy();
        expect(service.axiosInstance.defaults.headers.Authorization).toBe('Bearer sk-test-key');
    });

    test('omits Authorization header when OPENAI_API_KEY is empty', () => {
        const service = new OpenAIApiService({
            OPENAI_API_KEY: '',
            OPENAI_BASE_URL: 'http://127.0.0.1:8080/v1'
        });

        expect(service).toBeTruthy();
        expect(service.axiosInstance.defaults.headers.Authorization).toBeUndefined();
    });

    test('throws when OPENAI_BASE_URL is missing', () => {
        expect(() => {
            new OpenAIApiService({
                OPENAI_API_KEY: 'sk-test-key'
            });
        }).toThrow('OpenAI Base URL is required for OpenAIApiService.');
    });
});
