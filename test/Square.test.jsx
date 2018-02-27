import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Square from '../src/Square'

configure({ adapter: new Adapter() })

var handleClick

describe('A Square function', () => {
  var square 
    
  beforeEach(() => { 
    handleClick = jest.fn()
    square = shallow(<Square value={'X'} onClick={() => handleClick}/>) 
  })
    
  it('shoul be classified as square', () => {
    expect(square.find('.square').exists()).toBeTruthy()
  })
  
  it('shoul contain a button', () => {
    expect(square.find('button').exists()).toBeTruthy()
  })
            
  xit('should call handleClick function when it is cliced on', () => {
    square.find('button').simulate('click')
    expect(handleClick).toHaveBeenCalled()  
  })
  
})
