import React from 'react'
import ReactDOM from 'react-dom'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../src/Board'
import Game from '../src/Game'

configure({ adapter: new Adapter() })

describe('To test the game', () => {
  var game
  beforeEach(() => { game = shallow(<Game />) })
                       
  xit('renders without crashing', () => {
    let root = ReactDOM.render(<Game />, document.getElementById('root'))
    expect(root).not.toBeNull()
  })
            
  it('should return a Board', () => {
    expect(game.find(Board)).not.toBeNull()    
  })
            
  it('should return a Board', () => {
    expect(game.find('.game-board').exists()).toBeTruthy()    
  })
  
  it('should return a Board', () => {
    expect(game.find('.game').exists()).toBeTruthy()
  })
            
  it('should return a Board', () => {
    expect(game.find('.game-info').exists()).toBeTruthy()   
  })
})
