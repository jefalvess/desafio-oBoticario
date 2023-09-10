import { render, screen } from "@testing-library/react";
import Alert from "../components/common/alert/Alert";

test("Alert", () => {
  render(<Alert />);

  const headerElement = screen.getByRole("alert-header");
  const textoElement = screen.getByText(
    "CONOCE NUESTROS NUEVOS PERFUMES EGEO CHOC MINT Y EGEO CHOC BERRY"
  );
  
  expect(headerElement).toBeInTheDocument();
  expect(textoElement).toBeInTheDocument();

});
