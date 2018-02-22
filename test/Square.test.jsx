import React from 'react';
import { shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Square from '../src/Square';

configure({ adapter: new Adapter() });

      describe('To test square', () => {
            it('change the code to pass a value prop to the Square', () => {
    	             const  square = shallow( <Square value = {1}/> );
    	             square.setState({value: 1});
    	             expect(square.state().value).toBe(1);
    	        });
            
            it('change to x on click',() => {
            const  square = shallow( <Square value = {1}/> );
            square.find('.square').simulate('click');
            expect(square.state().value).toBe('X');
            });
      
      }); 
      

     