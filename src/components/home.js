import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './section'

class Home extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Section
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backgroundImage="model-s.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing Inventory"
                />
                
                <Section
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    backgroundImage="model-y.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing Inventory"
                />

                <Section
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    backgroundImage="model-3.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing Inventory"
                />

                <Section
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    backgroundImage="model-x.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing Inventory"
                />

                <Section
                    title="Lowest Cost Solar Panels in America"
                    description="Money back guarantee"
                    backgroundImage="solar-panel.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                />

                <Section
                    title="Solar for New Roofs"
                    description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                    backgroundImage="solar-roof.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
                />

                <Section
                    title="Accessories"
                    description=""
                    backgroundImage="accessories.jpg"
                    leftBtnText="Shop now"
                />
            </Container> 
        );
    }
}
 
export default Home;

const Container = styled.div`
    height: 100vh;

`