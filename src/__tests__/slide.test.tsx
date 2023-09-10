import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from '../components/views/home/Slide'; 

describe('Slide', () => {
  it('renderiza corretamente', () => {
    render(<Slide />);
    const slideContainer = screen.getByRole('slide-container');
    const slideShow = screen.getByRole('slide-show');
    const slideTextInfo = screen.getByRole('slide-text-info');
    const slideTextInfoSlide = screen.getByRole('slide-text-info-slide');
    const linkButton = screen.getByRole('slide-button-text');
    expect(slideContainer).toBeInTheDocument();
    expect(slideShow).toBeInTheDocument();
    expect(slideTextInfo).toBeInTheDocument();
    expect(slideTextInfoSlide).toBeInTheDocument();
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href');
  });
});
