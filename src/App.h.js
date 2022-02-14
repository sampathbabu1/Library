import { render, screen } from '@testing-library/react';
import SearchBar from './components/SearchBar/SearchBar';

test('SearchBar test:', () => {
  render(<SearchBar value={"Hello"}/>);
  const linkElement = screen.getByDisplayValue('Hello');
  expect(linkElement).toBeInTheDocument();
});
