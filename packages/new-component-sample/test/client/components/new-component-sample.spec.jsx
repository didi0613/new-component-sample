/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import NewComponentSample from "src/components/new-component-sample";

describe("components/new-component-sample", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<NewComponentSample />);
      expect(component).to.not.be.null;
    });

  });

});
