import { useState } from 'react'
// src/App.jsx
import { Tugas1, Tugas2, Tugas3 } from './tugas.jsx';

function App() {
  const CenteredElement = (props) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        {props.children}
      </div>
    )
  }
const ADULT_AGE = 19;

const names = ["Nyigga 1","Nyigga 2","Nyigga 3","Nyigga 4"]
const listNigg = names.map((str) =>
    <li key={str.toString()}>
      {str}
    </li>
  );
  return (
    <>
      <CenteredElement>
        <h2>Halo</h2>
      </CenteredElement>
      {ADULT_AGE > 20 ? <CenteredElement><p>Anda Sudah Dewasa</p></CenteredElement> : <CenteredElement><p>Lu masih kecil</p></CenteredElement>}
      <CenteredElement>
        <ul>
          <h1>Daftar Nyiggers</h1>
          {listNigg}
          </ul>
      </CenteredElement>
    </>
  )
}

export default App
