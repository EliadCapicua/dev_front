import * as React from "react";
import renderer from "react-test-renderer";
import { TextComponent } from "../atom/TextInput";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <TextComponent
        placeholder="Snapshot test!"
        value=""
        onChangeText={() => {}}
        label="Test Input"
        isValid={false}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
