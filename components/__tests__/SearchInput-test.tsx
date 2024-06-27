import * as React from "react";
import renderer from "react-test-renderer";
import { SearchInput } from "../atom/SearchInput";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <SearchInput
        placeholder="Snapshot test!"
        value=""
        onChangeText={() => {}}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
