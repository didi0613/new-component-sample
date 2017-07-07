import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/new-component-sample.css";
import messages from "../lang/default-messages";

export default class NewComponentSample extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

NewComponentSample.displayName = "NewComponentSample";

NewComponentSample.propTypes = { };

NewComponentSample.defaultProps = { };
