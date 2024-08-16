-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-08-2024 a las 02:23:27
-- Versión del servidor: 5.7.39
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Libros`
--

CREATE TABLE `Libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `fecha_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Libros`
--

INSERT INTO `Libros` (`id`, `nombre`, `autor`, `categoria`, `fecha_publicacion`, `ISBN`) VALUES
(1, 'Eloquent JavaScript', 'Marijn Haverbeke', 'Programacion', '2018-12-04', '149144415028'),
(4, 'Clean Code', 'Robert C. Martin', 'Programacion', '2012-06-19', '249144415023');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Libros`
--
ALTER TABLE `Libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Libros`
--
ALTER TABLE `Libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
