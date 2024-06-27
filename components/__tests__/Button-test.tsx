import * as React from "react";
import renderer from "react-test-renderer";
import { Button } from "../atom/Button";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Button text="Snapshot test!" onPress={() => {}}></Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
