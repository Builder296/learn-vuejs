import Vue from 'vue'
import Home from '@/components/Home'

xdescribe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container h1').textContent)
      .toEqual('Welcome! Kessirin')
  })
})
