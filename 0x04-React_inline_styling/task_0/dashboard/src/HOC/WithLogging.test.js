import { shallow } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe("WithLogging tests", () => {
  it("should call console.log on mount and dismount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  //   it("should log out the right message on mount and dismount", () => {
  //     const TestComponent = () => <div>TestComponent</div>;
  //     const ComponentWithLogging = WithLogging(TestComponent);
  //     const spy = jest.spyOn(console, "log");

  //     const wrapper = mount(<ComponentWithLogging />);
  //     expect(spy).toHaveBeenCalledWith("Component TestComponent is mounted");

  //     wrapper.unmount();
  //     expect(spy).toHaveBeenCalledWith(
  //       "Component TestComponent is going to unmount"
  //     );

  //     spy.mockRestore();
  //   });
});
