
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../src/Board';
import Square from '../src/Square';
configure({ adapter: new Adapter() });


 describe('To test board',() => {
     
      it('should contain a div tag ', () => {
            const  board = shallow( <Board /> );
            expect(board.find('div').exists()).toBeTruthy();
           // .to.have.length(1);
    	        
    	    });
      
      it('should return a square ', () => {
          const board = new Board();
          var result = board.renderSquare(1);
          expect(result instanceof Square);
         });  
      
      it('should return a square ', () => {
          const  board = shallow( <Board /> );
          expect(board.find('div.status').exists()).toBeTruthy();
         
              
          });
      
      it('should contain: Next player: X ', () => {
          const  board = shallow( <Board /> );
          expect(board.find('div.status').text()).toBe( 'Next player: X ');
       
              
          });
      
      it('should  have classes board row ', () => {
          const  board = render( <Board /> );
          expect(board.find('div.board-row').length).toBe(3);
         
              
          });
      
      it('should  call rendersqare fro each square on the baord ', () => {
          
              const board = new Board();
              const spy = jest.spyOn(board, 'renderSquare');
              board.render();
              expect(spy).toHaveBeenCalledTimes(9);
              
              spy.mockReset();
              spy.mockRestore();
              
          });
      
      
      });