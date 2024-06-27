import * as React from "react";
import renderer from "react-test-renderer";
import { Header } from "../atom/Header";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Header title="Snapshot test!"></Header>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
