# E-commerce App

Este proyecto es una aplicación de e-commerce desarrollada con React, utilizando Tailwind CSS y Ant Design para los estilos, y React Router para la navegación. Los usuarios pueden registrarse, iniciar sesión, ver productos, añadir productos al carrito de compras, crear pedidos y ver su perfil.

## Imagenes

### Home
![Home](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/34bbee04-ea02-4a75-b0f7-fdc30b1bea65)


### Footer home
![Footer](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/51383f75-34a9-497e-abc9-320789c1e494)


### Login
![Login](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/fffae469-4027-4cdc-9162-7bf6f4c1169d)


### Register
![Register](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/8d831adc-eac2-4320-9a75-80d3c06f07b9)



### Acces succesful
![Acces succesful](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/67036b28-d71b-43af-b7af-412b0a58d821)



### User profile
![Profile](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/6dc8527f-7204-476e-a64d-bc88623b39ac)



### Products and cart with products
![Products   cart with products](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/6fddbaa1-1c41-4a68-90af-9a3ab60d7c52)



### Cart options
![Cart optios](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/7fa8596c-7832-442b-80c4-372ccb2a8000)



### Order succesfull
![Order succesful](https://github.com/SebasBarrientos/Proyecto-React-ecommerce/assets/117609894/46678fc2-c352-42bf-b803-ddba0ed22256)




## Funcionalidades

- **Registro de usuarios**: Los nuevos usuarios pueden registrarse en la plataforma.
- **Login de usuarios**: Los usuarios registrados pueden iniciar sesión.
- **Ver productos**: Los usuarios pueden ver una lista de productos disponibles.
- **Añadir al carrito de compra**: Los usuarios pueden añadir productos al carrito.
- **Crear pedidos**: Los usuarios pueden crear pedidos a partir de los productos en su carrito.
- **Ver perfil**: Los usuarios pueden ver su perfil con sus datos y pedidos.
- **Logout**: Los usuarios pueden cerrar sesión.
- **Admin**: Los administradores pueden agregar productos.

## Componentes

- **Register**: Componente para registrar nuevos usuarios.
- **Login**: Componente para iniciar sesión.
- **Home**: Componente principal de la aplicación.
- **Products**: Componente que realiza una petición para obtener los productos y mostrarlos.
- **Product**: Componente que mapea y muestra los productos.
- **ProductsAsAdmin**: Componente para cargar productos si eres admin.
- **Cart**: Componente para el carrito de compra.
- **Perfil**: Vista del perfil del usuario con sus datos y pedidos.
- **Header**: Componente de la cabecera de la aplicación.
- **Footer**: Componente del pie de página de la aplicación.

## Páginas

- **/**: Página principal de la aplicación.
- **/login**: Página de inicio de sesión.
- **/register**: Página de registro.
- **/profile**: Página del perfil del usuario.
- **/cart**: Página del carrito.

## Context

Se utilizó Context para manejar el estado global de la aplicación.

## API

Para las operaciones de registro, login, visualización de productos y creación de pedidos, se utilizó el proyecto de backend con sequelize:
### https://github.com/SebasBarrientos/Backend-Ecomerce-para-app-react

## Tecnologías

- **React**
- **Tailwind CSS**
- **Ant Design**
- **React Router**


## Scripts

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.

## Instalación

1. Clonar el repositorio.
   bash
     git clone <url-del-repositorio>

2. Navegar al directorio del proyecto.
  bash
    cd ecommerceapp
3. Instalar las dependencias.
  bash
    npm install
4.Iniciar el servidor de desarrollo
  bash
    npm run dev

## Contribución
Si deseas contribuir a este proyecto, por favor, crea un fork del repositorio y envía un pull request con tus cambios.
