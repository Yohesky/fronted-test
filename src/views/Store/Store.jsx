import React from 'react'
import { MainLogo, StoreName, Card, ProductInfo, BackIconContainer, Circle, CardContainer, Info, ImgContainer, StoreAdress, ProductName, ProductImg, SingleProduct, StoreDescription, ProductsContainer } from './styles';

const Store = ({store}) => {
  return (
<>
<h1>product page</h1>
<BackIconContainer className={'back-icon-container'}>
    </BackIconContainer>

    <CardContainer className={'card-container'}>
      <Card className={'card'}>
        <Circle className={'circle'}/>
        <ImgContainer className={'image-container'}>
          <MainLogo className={'store-img'} src={store.logo}/>
        </ImgContainer>
        <Info className={'info'}>
          <StoreName className={'store-name'}> { store.name } </StoreName>
          <StoreAdress className={'store-address'}> { store.address } </StoreAdress>
          <StoreDescription className={'store-description'}> { store.description } </StoreDescription>
        </Info>
      </Card>
    </CardContainer>

    

    <ProductsContainer className={'products-container'}>
      {
        store.products.map((product) => 
          <SingleProduct className={'single-product'} key={product.id}>
            <ProductImg className={'product-img'} src={product.img}/>
            <ProductInfo className={`product-info`}>
              <ProductName className={'product-name'}> { product.name } </ProductName>
            </ProductInfo>
          </SingleProduct>
        )
      }
    </ProductsContainer>
</>

  )
}

export default Store