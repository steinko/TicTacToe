import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Board from '../src/Board';
import Game from '../src/Game';


configure({ adapter: new Adapter() });

      describe('To test the game', () => {
            
              
            xit('renders without crashing', () => {
               const root= ReactDOM.render(
                        <Game />,
                        document.getElementById('root')
                      );
               
               expected(root).no.toBeNull;


              });
            
            it('should return a Board' , () => {
                const game = shallow( <Game />);
                expect(game.find(Board)).not.toBeNull;
                
            });
            
            it('should return a Board' , () => {
                const game = shallow( <Game />);
                expect(game.find('.game-board').exists()).toBeTruthy();
                
                
            });
            it('should return a Board' , () => {
                const game = shallow( <Game />);
                expect(game.find('.game').exists()).toBeTruthy();
                
            });
            
            it('should return a Board' , () => {
                const game = shallow( <Game />);
                expect(game.find('.game-info').exists()).toBeTruthy();
                
            });
      });
 