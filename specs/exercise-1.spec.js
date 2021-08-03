import UserList from '@/components/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';

describe('component', () => {
  test('component renders the users', () => {
    const users = [...Array(3)].map(() => name.findName());
    const wrapper = mount(UserList, {
      propsData: {
        users,
      },
    });

    const liList = wrapper.findAll('li');
  
    users.forEach((user, index) => {
      expect(liList.at(index).text()).toBe(user);
    });
  });

  test('component filters a user', async () => {
    const users = [
      'Diane Clegg',
      'Phillipa Mercado',
      'Sadia Sloan',
      'Areeba Perez',
      'Alexandra Mckay',
      'Edward Sargent',
      'Gemma Estrada',
      'Darien Reid',
      'Ayman Caldwell',
      'Amelia-Lily Ortiz',
    ];
    const wrapper = mount(UserList, {
      propsData: {
        users,
      },
    });

    const input = wrapper.find('input');
    input.element.value = 'ar';
    // trigger is an async method
    await input.trigger('input');

    const liList = wrapper.findAll('li');
  
    users.forEach(() => {
      expect(liList.length).toBe(3);
    });
  });
});