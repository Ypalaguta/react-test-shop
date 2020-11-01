import React from 'react';

// import {defaut as MainPageContainer} from './main.styles'
import { default as MainPageContainer, SocksBlock, HatsBlock, OverallsBlock, DogsBlock, CatsBlock, Bg} from './main.styles'

function MainPage(props) {
    return (
        <MainPageContainer>
            <OverallsBlock to='/categories/overalls'>
                <Bg/>
                <span>Overalls</span>
            </OverallsBlock>
            <SocksBlock to='/categories/socks'>
                <Bg/>
                <span>Socks</span>
            </SocksBlock>
            <HatsBlock to='/categories/hats'>
                <Bg/>
                <span>Hats</span>
            </HatsBlock>
            <DogsBlock to='/categories/dogs'>
                <Bg/>
                <span>Dogs</span>
            </DogsBlock>
            <CatsBlock to='/categories/cats'>
                <Bg/>
                <span>Cats</span>
            </CatsBlock>
        </MainPageContainer>
    );
}

export default MainPage;