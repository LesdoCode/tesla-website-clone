import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

class Section extends Component {
    state = {  }
    
    render() { 
        const {title, description, backgroundImage, leftBtnText, rightBtnText} = this.props;
        return ( 
            <Wrap bgImage={backgroundImage}>

                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>
                            {description}
                        </p>
                    </ItemText>
                </Fade>

                <Fade bottom>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>{leftBtnText}</LeftButton>
                            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg" alt='down' />
                    </Buttons>
                </Fade>

            </Wrap>
         );
    }
}
 
export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const Buttons = styled.div``


const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width: 256px;
    color: white;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 20px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinate 1.5;
`

