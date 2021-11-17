import React from 'react';
import NavOption from '../NavOption/NavOption';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="side-bar">
       <NavOption to={'/'} idNumber={0}>Atividade 1</NavOption>
       <NavOption to={'/activity2'} idNumber={1}>Atividade 2</NavOption>
       <NavOption to={'/activity3'} idNumber={2}>Atividade 3</NavOption>
       <NavOption to={'/activity4'} idNumber={3}>Atividade 4</NavOption>
       <NavOption to={'/activity5'} idNumber={4}>Atividade 5</NavOption>
    </aside>
  );
}

export default Sidebar;