import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Foote />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Hello</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
