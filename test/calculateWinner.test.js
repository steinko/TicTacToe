import calculateWinner from '../src/calculateWinner.js'

describe('A board', () => {
  it('should be a winner X', () => { 
    var squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null, null, null, null]
    const winner = calculateWinner(squares)
    expect(winner).toBe('X')
  })
  
  it('should be a winner O', () => { 
    var squares = ['O', 'O', 'O', 'X', 'X', null, null, null, null, null, null, null]
    const winner = calculateWinner(squares)
    expect(winner).toBe('O')
  })
  
  it('should not be a winner', () => { 
    var squares = ['O', 'X', 'O', 'X', 'O', null, null, null, null, null, null, null]
    const winner = calculateWinner(squares)
    expect(winner).toBe(null)
  })
})
