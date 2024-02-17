## Introducción

Este proyecto ha sido desarrollado dando cumplimiento a los requisitos de la prueba técnica de la empresa. Fue desarrollado con Angular en su versión 15.2.10, utilizando una arquitectura limpia denominada core, feature, shared. Adicionalmente, se consumió la API de Google para utilizar la aplicación de Maps. Esta aplicación web permite visualizar de manera más gráfica a través del mapa la ubicación de los vendedores, obtenida por la API proporcionada por la empresa.

## Descripción de funcionalidades

Para la aplicación web, se creó un listado con información de cada vendedor, el cual proporciona coordenadas de cada uno, permitiendo su ubicación en el mapa; este componente "listado de vendedores" permanece fijo a la derecha. 
Cada vendedor tiene asociado un icono que permite visualizarlos en el mapa, con información resumida (nombre, cargo y foto) en forma de tarjeta.
Adicionalmente, la aplicación contiene una actualización programada cada 30 s, obteniendo modificaciones en el mapa y en el listado de las coordenadas y estado de cada vendedor.
Más vendedores pueden ser creados a través de un botón que despliega un formulario; este cuenta con validaciones de campos obligatorios, con el fin de contar con toda la información de cada vendedor. Una vez creados, la aplicación verifica que fue creado con éxito, permitiendo su visualización.

## Ejecutar el proyecto localmente

Ejecuta `ng serve` para iniciar el servidor de desarrollo.
Abre tu navegador web en la ruta `http://localhost:4200/`.