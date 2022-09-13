import React from "react";
import { Navigation } from "./Navigation";
import { ComponentPage } from "./ComponentPage";
import componentData from "../../config/componentData";

const getHash = () => window.location.hash.substring(1);

export class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: getHash(),
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      // * By convention the route and the URL should match the components name
      this.setState({ route: getHash() });
    });
  }

  render() {
    const { route } = this.state;
    const component = route
      ? componentData.filter((component) => component.name === route)[0]
      : componentData[0];

    return (
      <div>
        <Navigation
          components={componentData.map((component) => component.name)}
        ></Navigation>
        <ComponentPage component={component} />
      </div>
    );
  }
}
