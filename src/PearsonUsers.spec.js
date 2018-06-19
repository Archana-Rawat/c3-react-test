import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";
import renderer from 'react-test-renderer';


describe("PearsonUsers", () => {
  let component;
  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

it('renders existing users', () => {
  const users={users: [{
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
   }, {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
   }, {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
   }]};

  const tree = renderer.create(<PearsonUsers users={ users }/>);
  expect(tree).toMatchSnapshot();
});

 it('It shows the rendered data', () => {
    component = shallow(<PearsonUsers />);
    expect(component.find('.mainDiv').length).toEqual(1);
  });


 it('Delete functionality', () => {
   component.instance().handleDelete() 
 const tree = component.instance().handleDelete();
  expect(tree).toMatchSnapshot();
  })

});
