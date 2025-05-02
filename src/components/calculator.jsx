import { useState } from 'react';
import { createCalculator } from '../lib/calculator';

export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const calculator = createCalculator();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Kalkylator</h2>

      <input
        type="number"
        placeholder="Tal 1"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Tal 2"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setResult(calculator.add(a, b))}>+</button>
        <button onClick={() => setResult(calculator.subtract(a, b))}>−</button>
        <button onClick={() => setResult(calculator.multiply(a, b))}>×</button>
        <button onClick={() => setResult(calculator.divide(a, b))}>÷</button>
      </div>

      <h3>Resultat: {result !== null ? result : 'Inget än'}</h3>
    </div>
  );
}
