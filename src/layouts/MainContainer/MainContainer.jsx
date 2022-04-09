import React from 'react'
import { MainWrapper, BackgroundImage, BackgroundImageContainer} from './styles';
import backgroundPizza from '../../assets/images/Pizza.png';
import Login from '../../views/Login/Login';

const COMP_NAME = 'main-screen';

const MainContainer = () => {
  return (
    <MainWrapper className={`${COMP_NAME}__main-wrapper`}>
      <BackgroundImageContainer>
        <BackgroundImage src={backgroundPizza}/>
      </BackgroundImageContainer>
      <Login />
    </MainWrapper>
  )
}

export default MainContainer