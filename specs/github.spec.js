import GithubCard from '@/components/github-card'
import { mount } from '@vue/test-utils'

const globalFetch = global.fetch;

// Reassigning global.fetch after all tests;
afterAll(() => {
  global.fetch = globalFetch;
});

describe('methods', () => {
  test('composeUrl', () => {
    const { composeUrl } = GithubCard.methods;
    const username = 'humbertomendes';
    expect(composeUrl(username)).toBe(`https://api.github.com/users/${username}`);
  });

  test('fetchData', async () => {
    const mockData = 'GITHUB DATA';
    const jsonMock = jest.fn().mockResolvedValue(mockData);
    
    // Setting global fetch
    global.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    });

    const wrapper = mount(GithubCard);
    const username = 'humbertomendes';
    wrapper.setData({ username });

    // This method is required to kickoff test
    await wrapper.vm.fetchData();

    expect(global.fetch).toHaveBeenCalledWith(`https://api.github.com/users/${username}`);
    expect(jsonMock).toHaveBeenCalled();
    expect(wrapper.vm.data).toBe(mockData);
  });
});
