import React from "react";
import { render } from "react-testing-library";

test("hello", () => {
  const { getByText } = render(<div>Hello</div>);
  expect(getByText("Hello"));
});
