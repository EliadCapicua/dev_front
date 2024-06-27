import * as React from "react";
import renderer from "react-test-renderer";
import { DatePicker } from "../atom/DatePicker";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<DatePicker placeholder="Snapshot test!" value="" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
