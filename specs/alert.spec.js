import AlertMessage from '@/components/alert-message'
import { mount } from '@vue/test-utils'

jest.useFakeTimers();

describe('lifecycle methods', () => {
  test('mounted assigns interval', () => {
    const wrapper = mount(AlertMessage);

    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  test('counter works', () => {
    const wrapper = mount(AlertMessage);

    expect(wrapper.vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(2);
  });

  test('instance gets destroyed', () => {
    // Spy needs to be created before the component is mounted
    const beforeDestroyedSpy = jest.spyOn(AlertMessage, 'beforeDestroy');
    const wrapper = mount(AlertMessage);

    // Setting the timer one second before the end
    wrapper.vm.counter = wrapper.vm.timer - 1;
    jest.advanceTimersByTime(1000);

    expect(beforeDestroyedSpy).toHaveBeenCalled();
  });
});