import React from "react";
import { render } from "@testing-library/react";
import SearchPokemon from "../src/components/SearchPokemon";

describe("SearchPokemon component", () => {
  it("renders without crashing", () => {
    render(<SearchPokemon />);
  });
});
