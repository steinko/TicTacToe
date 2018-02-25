
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../src/Board'
import Square from '../src/Square'

configure({ adapter: new Adapter() })

describe('To test board', () => {
  var board
  beforeEach(() => { board = shallow(<Board />) })
    
  it('should contain a div tag ', () => { 
    expect(board.find('div').exists()).toBeTruthy()
  })
      
  it('should return a square ', () => {
    const board = new Board()
    let result = board.renderSquare(1)
    expect(result instanceof Square)
  })  
      
  it('should return a square ', () => {
    expect(board.find('div.status').exists()).toBeTruthy()
  })
      
  it('should contain: Next player: X ', () => {
    expect(board.find('div.status').text()).toBe('Next player: X ')     
  })
      
  it('should  have classes board row ', () => {
    expect(board.find('div.board-row').length).toBe(3)      
  })
      
  it('should  call rendersqare fro each square on the baord ', () => {
    const board = new Board()
    const spy = jest.spyOn(board, 'renderSquare')
    board.render()
    expect(spy).toHaveBeenCalledTimes(9)
         
    spy.mockReset()
    spy.mockRestore()        
  })
       
})
