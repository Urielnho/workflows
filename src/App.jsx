import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <p>Desarrollo Web Integral · IDGS9-1</p>
      <h1>Git Flow y GitHub Actions</h1>
      <p>Unidad 2 - Práctica 2</p>
      <section>
        <h2>Flujo de desarrollo</h2>
        <p>feature → dev → release → main → build</p>
        <button onClick={() => setCount(count + 1)}>Cambios integrados: {count}</button>
      </section>
      <p>Autor: Uriel Ochoa Mora</p>
    </main>
  )
}
export default App
