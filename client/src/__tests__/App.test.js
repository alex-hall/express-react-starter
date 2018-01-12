import React from 'react';
import App from '../App';
import {shallow} from "enzyme"
import {Route} from "react-router-dom"
import LandingComponent from "../components/LandingComponent"

let component, routes;

describe('#Routes', () => {

  beforeEach(() => {
      component = shallow(<App/>)
      routes = component.find(Route)
  })

  it('renders the landing component by default', () => {
        let landingRoute = routes.at(0).props()

        expect(landingRoute.path).toEqual('/')
        expect(landingRoute.component).toEqual(LandingComponent)
    })
});
