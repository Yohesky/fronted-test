
# Test Frontend

Para correr la aplicación se debe hacer NPM I y luego npm start.
Consta basicamente de 3 componentes y una ruta principal.


## Componentes

- Login Component: 
    Se maneja el formulario y alertas de mensajes donde si no existe el usuario o es invalido se despliega una alerta de error,
    si el usuario es correcto se guarda en el localStorage la información y cambia el estado interno (logged) para mostrar el componente <Restaurant/>
- Restaurant Component: 
    Se muestra la lista de tiendas con su respectiva información y al hacer click en cada una de las tiendas se pasa por props la información al componente <Store /> para representarla visualmente
- Store Component: 
    Muestra la información de la tienda seleccionada


## Abordamiento de la aplicación

En cuanto al manejo de ramas cree una rama principal donde realice el primer commit que fue solo para construir la estructura de carpetas,
posterior a eso cree 2 ramas (development, tests) para hacer pull request y luego hacer un merge a la rama principal.

Respecto al diseño realice animaciones sencillas no muy dinamicas.

La aplicación fue hecha con tecnica mobile first.

Maneje una ruta porque al ser pocas vistas no fueron requeridas más.

Al ser una aplicación sencilla el manejo de la información decidí realizarla a traves de props para no agregar complejidad innecesaria.

En cuanto a los tests realice 2 muy sencillos debido a que no tengo mucho dominio sobre el tema.




## Tecnologías

 - React: Para SPA
 - Styled Components: Para el manejo de logica en css aprovechando JavaScript
 - Font Awesome: Manejo de los iconos
 - React Router Dom: Rutas
 - SweetAlert: Alertas de mensajes con mejor diseño
 - testing-library/jest-dom: Para realización de tests
## Notas

Las tiendas no tenian información de redes sociales asi que deje por defecto las redes sociales de RobinFood.

Los productos no tenian imagenes asi que cargue imagenes random de los assets.

