export default function calculateWinner (squares) { 
  const lines = 
    [
      [0, 1, 2],
      [3, 4, 5]
    ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
     
  } 
  return null
} 
