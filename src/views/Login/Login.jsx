import React, { useEffect, useState } from 'react'
import { MainContentLogin, ButtonMessage, LogoImg, Button, ForgotPasswordMessage, BigMessage, SmallMessage, Icon, InputContainer, Input } from './styles';
import logo from '../../assets/images/Login-Best-Pizza.png';
import personIcon from '../../assets/images/ic_usuario.png';
import lockIcon from '../../assets/images/ic_clave.png';
import DB from '../../API/data.json';
import { alertMsgError } from '../../utlities/alerts';
import Restaurants from '../Restaurants/Restaurants';
const COMP_NAME = 'main-screen';

const Login = () => {

  const [user, setUser] = useState({username: '', password: ''});
  const [alertMessage, setAlertMessage] = useState('');
  const [logged, setLogged] = useState(false);
  const [userLogged, setUserLogged] = useState(null);

  const [users, setUsers] = useState([]);


  const checkSession = _ => {
    let user = localStorage.getItem('user')
    !user ? setLogged(false) : setLogged(true)
  }

  useEffect(() => {
    setUsers(DB.response.users)
    checkSession()
  }, [])

  useEffect(() => {
    alertMessage.length > 0 && alertMsgError(alertMessage)
  }, [alertMessage])
  
  const validateForm = _ => {
    const {username, password} = user
    let findUser = users.find(us => us.email === username)
    if(username === '' || password === ''){
      setAlertMessage('Ingrese todos los campos')
      return false
    }
    if(!findUser){
      setAlertMessage('Combinación usuario/contraseña invalida')
      return false
    }
    setUserLogged(findUser)
    return true
  }
  
  const handleLogin = () => {
    if(validateForm()){
      localStorage.setItem('user',JSON.stringify(userLogged))
      setUser({username: '', password: ''})
      setLogged(true)
    }
  };


  const logout = _ => {
    localStorage.removeItem('user')
    setUserLogged(null)
    setLogged(false)
  }


  return (
    <>
      {
        !logged ? 
        (    <MainContentLogin>
          <LogoImg src={logo}/>
          <BigMessage> Bienvenido </BigMessage>
          <SmallMessage> A las mejores pizzas del país </SmallMessage>
      
          <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_username`}>
            <Input 
              onChange={(event) => setUser({...user, username: event.target.value.trim()})} 
              value={user.username}
              placeholder={'Usuario (email)'}
              />
            <Icon src={personIcon}/> 
          </InputContainer>
      
          <InputContainer className={`${COMP_NAME}__main-wrapper_main-content_input-container_password`}>
            <Input 
              onChange={(event) => setUser({...user, password: event.target.value})} 
              value={user.password} 
              type={'password'} 
              placeholder={'Contraseña'}
            />
            <Icon src={lockIcon}/> 
          </InputContainer>
      
          <ForgotPasswordMessage> ¿Olvidaste tu contraseña? </ForgotPasswordMessage>
      
          <Button onClick={handleLogin}>
            <ButtonMessage> Iniciar Sesión </ButtonMessage>
          </Button>
          </MainContentLogin>)
        : (<Restaurants logout={logout} />)
      }
    </>

  )
}

export default Login