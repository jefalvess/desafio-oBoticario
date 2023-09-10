import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "../components/common/header/Header";

describe('Header', () => {
  it('renderiza corretamente', () => {
    render(<Header />);

    const headerContainer = screen.getByRole('header-container');
    const logoLink = screen.getByRole('header-logo');
    const option1Link = screen.getByRole('header-option-1');
    const option2Link = screen.getByRole('header-option-2');
    const option3Link = screen.getByRole('header-option-3');
    const option4Link = screen.getByRole('header-option-4');
    const option5Link = screen.getByRole('header-option-5');
    const option6Link = screen.getByRole('header-option-6');
    const option7Link = screen.getByRole('header-option-7');
    const option8Link = screen.getByRole('header-option-8');
    const option9Link = screen.getByRole('header-option-9');

    expect(headerContainer).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
    expect(option1Link).toBeInTheDocument();
    expect(option2Link).toBeInTheDocument();
    expect(option3Link).toBeInTheDocument();
    expect(option4Link).toBeInTheDocument();
    expect(option5Link).toBeInTheDocument();
    expect(option6Link).toBeInTheDocument();
    expect(option7Link).toBeInTheDocument();
    expect(option8Link).toBeInTheDocument();
    expect(option9Link).toBeInTheDocument();
  });
});
