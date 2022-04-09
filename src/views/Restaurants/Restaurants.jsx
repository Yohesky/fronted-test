import React, { useEffect, useState } from 'react'
import { NoResults, MainWrapper, SearchBarContainer, MainSection, BurgerMenu, AccountSection, AccountIconContainer, SearchBar, CategoryContainer, CategoryMessage, SingleStoreName, SingleStoreAddress, SingleStoreLogo, SingleStore, Underline, StoresContainer, StoresSubtitle, StoresTitle, Footer, Container, SocialMedia, ImageBrand } from './styles';
import DB from '../../API/data.json';
import Store from '../Store/Store';
import imgBrand from '../../assets/images/Best Pizza.png'
const Restaurants = ({logout}) => {

  const [searchValue, setSearchValue] = useState('');
  const [stores, setStores] = useState([]);
  const [statusResults, setStatusResults] = useState(false);
  const [restore, setRestore] = useState(false);
  const [store, setStore] = useState(null);


  useEffect(() => {
    setStores(DB.response.stores)
    setStatusResults(false)
    setSearchValue('')
  }, [restore])

  useEffect(() => {
    if(searchValue.length > 0){
      let filteredStores = []
      filteredStores = stores.filter(store => store.name.toLowerCase().includes(searchValue.toLowerCase()) )
      filteredStores.length > 0 ? setStores(filteredStores) : setStores([])
      filteredStores.length > 0 && (setStatusResults(false))
      filteredStores.length === 0 && (setStatusResults(true))
    }else{
      (setStatusResults(false))
      setStores(DB.response.stores)
    }
  }, [searchValue])

  const handleSetStore = store => {
    setStore(store)
  }

  const handleLogout = _ => {
    logout()
  }

  const refresh = _ => {
    window.location.reload()
  }

  const redirectSocialMedia = type => {
    var link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    link.href = type === 'fb' ? 'https://www.facebook.com/robinfood.Col' : 'https://www.instagram.com/robinfoodcol/';
    link.target = '_blank';
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': false,
        'cancelable': true
    });
    link.dispatchEvent(event);
  }

  return (
    <MainWrapper className={`main-wrapper`}>


    <AccountSection className={'about-section'}>
        {
          store && (
            <AccountIconContainer 
            relative={true}
            className={'account-icon-container'}
            onClick={() => handleSetStore(null)}
            >
            <i className="fa-solid fa-angle-left"></i>
            </AccountIconContainer>
          )
        }
        <AccountIconContainer 
          noBorder={true}
          onClick={handleLogout}
          className={'account-icon-container'}
        >
        <i class="fa-solid fa-lock"></i>
        <p>Salir</p>
        </AccountIconContainer>

      </AccountSection>

    <BurgerMenu className={'burger-menu'}>
      {
        store && <i 
        onClick={() => handleSetStore(null)}
        className="fa-solid fa-angle-left">
        </i>
        
      }
    <i onClick={handleLogout} className="fa-solid fa-arrow-right-from-bracket"></i>
    </BurgerMenu>


        <Container>
        {
                !store && (
                  <>
                      <MainSection className={'main-section'}>
                <CategoryContainer className={'category-container'}>
                  <CategoryMessage className={'category-message'}> Pizzerías </CategoryMessage>
                  <Underline className={'underline'}/>
                </CategoryContainer>
          
                <StoresTitle className={'store-title'}> Tiendas </StoresTitle>
                <StoresSubtitle className={'store-subtitle'}> Escoge tu pizzería favorita </StoresSubtitle>
          
                <SearchBarContainer className={'search-bar-container'}>
                  <SearchBar className={'search-bar'} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={'Buscar una pizzería'}/>
                </SearchBarContainer>
              </MainSection>
          
          
              <StoresContainer className={'stores-container'}>
                  {
                      stores.map((store) => 
                          <SingleStore onClick={() => handleSetStore(store)} key={store.id} >
                            <SingleStoreLogo className={'single-store-logo'} src={store.logo}/>
                            <SingleStoreName className={'single-store-name'}> { store.name } </SingleStoreName>
                            <SingleStoreAddress className={'single-store-address'}> { store.address } </SingleStoreAddress>
                          </SingleStore>
                      )
                  }
                  {
                    statusResults 
                    && 
                    (
                      <>
                        <NoResults>
                          <p>No pizzerias found</p>
                          <i onClick={() => setRestore(!restore)} className="fa-solid fa-circle-xmark"></i>
                        </NoResults>
                      </>)
                  }
                </StoresContainer>
                </>
                )
        }
        
    {
      store && (
        <Store store={store} />
      )
    }
        </Container>


    
    <Footer>
      <SocialMedia>
        <i onClick={() => redirectSocialMedia('fb')} className="fa-brands fa-facebook-square"></i>
        <i onClick={() => redirectSocialMedia('ig')} className="fa-brands fa-instagram"></i>
      </SocialMedia>
      <ImageBrand
        onClick={refresh}
      >
        <img src={imgBrand} alt="" />
      </ImageBrand>
    </Footer>
    </MainWrapper>
  )
}

export default Restaurants