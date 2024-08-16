# Biblioteca REST API

Este proyecto es una REST API para la gestión de una biblioteca, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los libros almacenados en una base de datos MySQL.

## Características

- **Obtener todos los libros:** Consulta todos los libros disponibles en la biblioteca.
- **Obtener un libro por ID:** Recupera la información de un libro específico utilizando su ID.
- **Agregar un nuevo libro:** Permite agregar un nuevo libro a la biblioteca.
- **Actualizar un libro:** Modifica la información de un libro existente.
- **Eliminar un libro por ID:** Elimina un libro de la base de datos utilizando su ID.
- **Eliminar un libro por ISBN:** Elimina un libro de la base de datos utilizando su ISBN.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- Node.js
- MySQL

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd prot4_41442040
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Configura la conexión a la base de datos MySQL en el archivo `database.js`:

    ```javascript
    import mysqlConnection from 'mysql2';

    const properties = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rest-api'
    };

    export const pool = mysqlConnection.createPool(properties);
    ```

5. Ejecuta la aplicación en modo desarrollo:

    ```bash
    npm run dev
    ```

## Endpoints

La API expone los siguientes endpoints:

- **GET /libros:** Retorna una lista de todos los libros.
- **GET /libros/:id:** Retorna los detalles de un libro específico por ID.
- **POST /libro:** Agrega un nuevo libro.
- **PUT /libro:** Actualiza la información de un libro existente.
- **DELETE /libro:** Elimina un libro utilizando su ID, que se debe enviar en el cuerpo de la solicitud.
- **DELETE /libros/:ISBN:** Elimina un libro utilizando su ISBN, que se debe pasar como parámetro en la URL.

## Dependencias

- **[express](https://www.npmjs.com/package/express):** Framework web para Node.js utilizado para crear la API REST.
- **[morgan](https://www.npmjs.com/package/morgan):** Middleware de registro de solicitudes HTTP.
- **[mysql2](https://www.npmjs.com/package/mysql2):** Conector para MySQL compatible con promesas, utilizado para interactuar con la base de datos.

### Dependencias de desarrollo

- **[nodemon](https://www.npmjs.com/package/nodemon):** Herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de archivos:

```bash
src/
│
├── index.js           # Archivo principal de la aplicación
├── routes.js          # Definición de las rutas de la API
├── controller.js      # Controlador que maneja la lógica de la API
├── database.js        # Configuración de la conexión a la base de datos
└── ...
