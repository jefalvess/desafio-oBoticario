import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoProducts from "../components/views/home/InfoProduct";


describe('InfoProducts', () => {
  it('renderiza corretamente', () => {
    render(<InfoProducts />);

    const infoProductSession = screen.getByRole('info-product-session');
    const infoProductText = screen.getByRole('info-product-text');

    expect(infoProductSession).toBeInTheDocument();
    expect(infoProductText).toBeInTheDocument();

    expect(infoProductText).toHaveTextContent('APROVECHA NUESTRAS PROMOCIONES EN PRODUCTOS DE BELLEZA');
    
  });
});
