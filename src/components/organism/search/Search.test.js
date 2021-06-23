import React from 'react';
import {shallow} from 'enzyme';
import Search from './Search';

describe('Pruebas de search',()=>{
    const wrapper = shallow(<Search></Search>);
    test('debe mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    })
    test("El innput debe cambiar", ()=>{
        const input = wrapper.find('input');
        const value = 'Hola, soy un test';

        input.simulate('change', {target:{value}})
    })
})