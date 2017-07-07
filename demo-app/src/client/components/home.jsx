import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import {NewComponentSample} from "new-component-sample";

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div>
          <p>Some content in same parent div as</p>
        <NewComponentSample />
      </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
