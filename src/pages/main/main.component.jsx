import React from 'react';
import {connect} from 'react-redux';

// import {defaut as MainPageContainer} from './main.styles'
import { default as MainPageContainer, LargeCategory, MediumCategory, Bg} from './main.styles'
import {createStructuredSelector} from "reselect";
import {selectMain} from "../../redux/main/main.selectors";

function MainPage(props) {
    const {main} = props
    const availableBlockTypes = {LargeCategory, MediumCategory}
    return (
        <MainPageContainer>
            {
                main.map((el, num)=> {
                    const BlockType = availableBlockTypes[el.blockType];
                    return <BlockType to={el.route} key={num}>
                        <Bg imageUrl={el.pic} className='bg'/>
                        <span>{el.name}</span>
                        {/*{el.pic}*/}
                    </BlockType>
                })
            }
        </MainPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    main: selectMain
})

export default connect(mapStateToProps)(MainPage);