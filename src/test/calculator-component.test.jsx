import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calculator from '../components/calculator';




beforeEach(() => {
  
  render(<Calculator />);
});

afterEach(() => {
  
  cleanup();
});

describe('Calculator-komponent', () => {
  it('adderar två tal korrekt', () => {
    fireEvent.change(screen.getByPlaceholderText('Tal 1'), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tal 2'), {
      target: { value: '3' },
    });
    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Resultat: 8')).toBeInTheDocument();
  });

  it('subtraherar två tal korrekt', () => {
    fireEvent.change(screen.getByPlaceholderText('Tal 1'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tal 2'), {
      target: { value: '4' },
    });
    fireEvent.click(screen.getByText('−'));

    expect(screen.getByText('Resultat: 6')).toBeInTheDocument();
  });

  it('multiplicerar två tal korrekt', () => {
    fireEvent.change(screen.getByPlaceholderText('Tal 1'), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tal 2'), {
      target: { value: '7' },
    });
    fireEvent.click(screen.getByText('×'));

    expect(screen.getByText('Resultat: 21')).toBeInTheDocument();
  });

  it('dividerar två tal korrekt', () => {
    fireEvent.change(screen.getByPlaceholderText('Tal 1'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tal 2'), {
      target: { value: '2' },
    });
    fireEvent.click(screen.getByText('÷'));

    expect(screen.getByText('Resultat: 5')).toBeInTheDocument();
  });

  it('hanterar division med 0', () => {
    fireEvent.change(screen.getByPlaceholderText('Tal 1'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tal 2'), {
      target: { value: '0' },
    });
    fireEvent.click(screen.getByText('÷'));

    expect(screen.getByText('Resultat: Kan ej dividera med 0')).toBeInTheDocument();
  });
});
