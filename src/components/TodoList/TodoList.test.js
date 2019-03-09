import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";
import sinon from "sinon";

const todos = [
  { id: 0, text: "Fazer café" },
  { id: 1, text: "Habbis" },
  { id: 2, text: "Testar minha app" }
];

describe("TodoList component", () => {
  it("should render todos", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("should be able to add new todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    wrapper.find("button").simulate("click");

    expect(wrapper.state("todos")).toHaveLength(4);
  });

  it("should be able to remove todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    wrapper
      .find("li")
      .first()
      .simulate("click");

    expect(wrapper.state("todos")).not.toContain(todos[0]);
  });

  it("should load todos from localStorage", () => {
    sinon.stub(localStorage, "getItem").returns(JSON.stringify(todos));

    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    expect(wrapper.state("todos")).toEqual(todos);
  });

  it("should save to localStorage when added new todo", () => {
    const spy = sinon.spy(localStorage, "setItem");

    const wrapper = shallow(<TodoList />);

    wrapper.instance().addTodo();

    expect(spy.calledOnce).toBe(true);
  });
});
