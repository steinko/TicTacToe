
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../src/Board'
import Square from '../src/Square'

configure({ adapter: new Adapter() })

var boardInst
  
describe('A board', () => {
  var board
  beforeEach(() => { board = shallow(<Board />); boardInst = board.instance() })
    
  it('should contain a div tag ', () => { 
    expect(board.find('div').exists()).toBeTruthy()
  })
      
  it('should return a square when methode rednder square is called ', () => {
    let result = boardInst.renderSquare(1)
    expect(result instanceof Square)
    expect(result)
  })  
      
  it('should conatin a class status ', () => {
    expect(board.find('div.status').exists()).toBeTruthy()
  })
      
  it('should contain: Next player: X ', () => {
    expect(board.find('div.status').text()).toBe('Next player: X ')     
  })
      
  it('should  have classes board row ', () => {
    expect(board.find('div.board-row').length).toBe(3)      
  })
      
  it('should  call rendersqare fro each square on the baord ', () => {  
    const spy = jest.spyOn(boardInst, 'renderSquare')
    boardInst.render()
    expect(spy).toHaveBeenCalledTimes(9)
         
    spy.mockReset()
    spy.mockRestore()        
  })
  
  it('should deliver sqare state x then sqaure state o', () => { 
    boardInst.handleClick(1)
    expect(board.state().squares[1]).toBe('X')
    boardInst.handleClick(2)
    expect(board.state().squares[2]).toBe('O')
  })
  
  it('should deliver sqare state x then sqaure state o', () => {
    let square = boardInst.renderSquare(1)
    square.props.onClick()
    expect(board.state().squares[1]).toBe('X')
    square = boardInst.renderSquare(2)
    square.props.onClick()
    expect(board.state().squares[2]).toBe('O')  
  })
       
})
