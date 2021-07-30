import Temperature from '@/components/temperature'
import { mount } from '@vue/test-utils'

describe('computed', () => {
  test('celsius', () => {
    const { vm } = mount(Temperature);

    // 0 degrees in celsius
    expect(vm.celsius).toBe(0);

    // 23 degrees in celsius
    vm.degrees = 23;
    expect(vm.celsius).toBe(23);
  });

  test('fahrenheit', () => {
    const { vm } = mount(Temperature);

    // 0 degrees in fahrenheit
    expect(vm.fahrenheit).toBe(32);

    // 16 degrees in fahrenheit
    vm.degrees = 16;
    expect(vm.fahrenheit).toBe(60.8);
  });
});

describe('watcher', () => {
  test('temp', () => {
    const wrapper = mount(Temperature, {
      propsData: {
        temp: 40,
      }
    });
    const { vm } = wrapper;

    // 0 degrees in fahrenheit
    expect(vm.degrees).toBe(40);
    expect(vm.type).toBe('celsius');
    
    wrapper.setProps({
      temp: '50f'
    });

    vm.$nextTick(() => {
      expect(vm.degrees).toBe(50);
      expect(vm.type).toBe('fahrenheit');
    });
  });
});