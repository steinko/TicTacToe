import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Square from '../src/Square'

configure({ adapter: new Adapter() })

describe('To test square', () => {
  var square
  beforeEach(() => { square = shallow(<Square value = {1}/>) })
  
  it('change the code to pass a value prop to the Square', () => {
    square.setState({value: 1})
    expect(square.state().value).toBe(1)
  })
            
  it('change to x on click', () => {
    square.find('.square').simulate('click')
    expect(square.state().value).toBe('X')
  })
  
})
