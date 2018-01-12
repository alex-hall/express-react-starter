import React from 'react'
import {shallow} from 'enzyme'
import LandingComponent from "../LandingComponent";

describe('#Init', () => {

    it('should render the component and boot without crashing', () => {
        const component = shallow(<LandingComponent/>)

        expect(component.find('div').text()).toEqual('Hello world!')
    })
})