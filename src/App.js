import React from 'react';
import './App.css';
import Example from './example'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white mb-4 text-center py-3">
          <div className="mx-auto d-table">
            <p className="mb-0 text-center text-uppercase">Drag and drop</p>
          </div>
        </nav>
        <Example />
      </DndProvider>
    </div>
  );
}
export default App;
