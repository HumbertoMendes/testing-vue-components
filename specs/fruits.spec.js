import  FruitBasket from '@/components/fruit-basket'
import { mount } from '@vue/test-utils'

describe('transverse', () => {
  test('can add fruits to basket with DOM', () => {
    const wrapper = mount(FruitBasket);
    const { vm } = wrapper;

    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Expecting list's elements to be 0, since it's empty
    expect(wrapper.findAll('li').length).toBe(0);

    const fruit = 'banana';
    input.element.value = fruit;

    // Trigger Vue's input method
    input.trigger('input');
    expect(wrapper.vm.fruit).toBe(fruit);

    // Trigger Vue's click method
    button.trigger('click');
    expect(wrapper.vm.fruit).toBe('');
    
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining([fruit]));

    vm.$nextTick(() => {
      // Expecting list's elements to be 1, since banana was added to it
      expect(wrapper.findAll('li').length).toBe(1);
    });
  });
})