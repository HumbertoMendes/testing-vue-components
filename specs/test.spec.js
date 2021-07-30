import List from '@/components/list';
import TestComponent from '@/components/test';
import { mount } from '@vue/test-utils';

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('ListComponent', () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;

  wrapper.setData({ marvelMovies: [...movies, 'Endgame'] });
  expect(wrapper).toMatchSnapshot();
});