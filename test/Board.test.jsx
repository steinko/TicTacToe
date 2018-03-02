
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../src/Board'
import Square from '../src/Square'
import calculateWinner from '../src/calculateWinner.js'

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
  
 xit('should contain: Next player: = 0 ', () => {
    boardInst.handleClick(1)
     board = shallow(<Board />)
    expect(board.find('div.status').text()).toBe('Next player: O ')     
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
  
  it('should change xIsNext to false', () => { 
    boardInst.handleClick(1)
    expect(board.state().xIsNext).toBeFalsy
  })
  
  it('should be a winner X' , () => { 
      var squares =  ['X','X','X','O','O',null,null,null,null,null,null,null,]
      const winner = calculateWinner(squares)
      expect(winner).toBe('X')
  })
  
   it('should be a winner O' , () => { 
      var squares =  ['O','O','O','X','X',null,null,null,null,null,null,null,]
      const winner = calculateWinner(squares)
      expect(winner).toBe('O')
  })
  
  it('should not be a winner' , () => { 
      var squares =  ['O','X','O','X','O',null,null,null,null,null,null,null,]
      const winner = calculateWinner(squares)
      expect(winner).toBe(null)
  })
  
  xit('shold be a winner X' , () => { 
      boardInst.renderSquare(0)
      boardInst.renderSquare(3)
      boardInst.renderSquare(1)
      boardInst.renderSquare(4)
      boardInst.renderSquare(2)
      expect(board.find('div.status').text()).toBe('Winner: X')
  })
  
  xit('shold be a winner X' , () => { 
      boardInst.renderSquare(3)
      boardInst.renderSquare(0)
      boardInst.renderSquare(4)
      boardInst.renderSquare(1)
      boardInst.renderSquare(6)
      boardInst.renderSquare(2)
      expect(board.find('div.status').text()).toBe('Winner: O')
  })
  
})
