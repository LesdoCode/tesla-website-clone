import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './section'

class Home extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Section/>
            </Container> 
        );
    }
}
 
export default Home;

const Container = styled.div`
    height: 100vh;

`