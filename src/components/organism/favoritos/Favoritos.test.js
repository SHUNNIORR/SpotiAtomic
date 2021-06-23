import React from 'react';
import {screen, render} from '@testing-library/react';
import {shallow} from 'enzyme';
import Favoritos from './Favoritos';

describe('Favoritos', ()=>{
    it('Mostrar el título',()=>{
        render(<Favoritos></Favoritos>)
        expect(screen.queryByText(/Tus favoritos/i)).toBeInTheDocument()
    })
    test('Se muestra el componente de favoritos',()=>{
        const wrapper = shallow(<Favoritos></Favoritos>);
        expect(wrapper).toMatchSnapshot();
    })
})