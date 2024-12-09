import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import TaskTrackr from './TaskTrackr';

export default function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Welcome to TaskTrackr!</h1>
      <h2>Add your task below</h2>
      <TaskTrackr />
    </div>
  );
}



