import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
// configure enzyme(connecting)
configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItems /> elements if not authenticated", () => {
    //enzyme allow us to just render ex: NavigationItems component
    // standAlone , independent of the entire other react application
    expect(wrapper.find(NavigationItem)).toHaveLength(2); // find NavigationItem
  });

  it("should render three <NavigationItems /> elements if authenticated", () => {
    //enzyme allow us to just render ex: NavigationItems component
    // standAlone , independent of the entire other react application
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3); // find NavigationItem
  });

  it("should an exact logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true); // find NavigationItem
  });
});
