import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from '../components/views/home/Slide'; 
import userEvent from '@testing-library/user-event'; 


describe('Slide', () => {
  it('renderiza corretamente', () => {
    render(<Slide />);
    const slideContainer = screen.getByRole('slide-container');
    const slideShow = screen.getByRole('slide-show');
    const slideTextInfo = screen.getByRole('slide-text-info');
    const slideTextInfoSlide = screen.getByRole('slide-text-info-slide');
    expect(slideContainer).toBeInTheDocument();
    expect(slideShow).toBeInTheDocument();
    expect(slideTextInfo).toBeInTheDocument();
    expect(slideTextInfoSlide).toBeInTheDocument();
  });
});
