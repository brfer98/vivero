-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2024 a las 19:55:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vivero`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arboles_florales`
--

CREATE TABLE `arboles_florales` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `arboles_florales`
--

INSERT INTO `arboles_florales` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Acacia blanca', 5, 35, 'acacia-blanca.jpg'),
('Altea azul', 5, 35, 'altea-azul.jpg'),
('Altea blanca', 5, 35, 'altea-blanca.jpg'),
('Altea blanca con corazon rojo', 5, 35, 'altea-blanco-con-corazon-rojo.jpg'),
('Altea hamabo', 5, 35, 'altea-hamabo.jpg'),
('Altea rosa', 5, 35, 'altea-rosa.jpg'),
('Árbol de Judas', 5, 35, 'Árbol de Judas.PNG'),
('Árbol de las tulipas', 5, 35, 'arbol-de-las-tulipas.jpg'),
('Árbol del destino fargesii', 5, 35, 'arbol-del-destino-fargesii.jpg'),
('Catalpa', 5, 35, 'catalpa.jpg'),
('Halesia árbol de campanillas plateadas', 5, 35, 'halesia-arbol-de-campanillas-plateadas.jpg'),
('Magnolia estrellada', 5, 35, 'magnolia-estrellada.jpg'),
('Magnolia estrellada rosa', 5, 35, 'magnolia-estrellada-rosa.jpg'),
('Magnolia soulangeana x lilliflora genie', 5, 35, 'magnolia soulangeana x lilliflora -genie.jpg'),
('Magnolia x soulangeana', 5, 35, 'magnolia x soulangeana.jpg'),
('Magnolia x soulangeana rustica rubra', 5, 35, 'magnolia x soulangeana -rustica rubra.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arboles_frutales`
--

CREATE TABLE `arboles_frutales` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `arboles_frutales`
--

INSERT INTO `arboles_frutales` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Almendro', 7, 20, 'almendro.webp'),
('Castano común', 7, 20, 'castano-comun.webp'),
('Cerezo ', 7, 20, 'cerezo.webp'),
('Cerezo picota', 7, 20, 'cerezo-picota.webp'),
('Ciruela negra', 7, 20, 'ciruela negra.webp'),
('Ciruelo normal', 7, 20, 'ciruelo normal.webp'),
('Granado', 7, 20, 'granado.webp'),
('Higuera (negros)', 7, 20, 'higuera (negros).webp'),
('Higuera (verdes)', 7, 20, 'higuera (verdes).webp'),
('Limonero', 7, 20, 'limonero.webp'),
('Manzano (amarillas)', 7, 20, 'manzano (amarillas).webp'),
('Melocoton amarrillo', 7, 20, 'melocoton amarrillo.webp'),
('Melocotonero', 7, 20, 'melocoton.webp'),
('Naranjo', 7, 20, 'naranjo.webp'),
('Nogal', 7, 20, 'nogal.webp'),
('Olivo', 7, 20, 'olivo-copa.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coniferas`
--

CREATE TABLE `coniferas` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `coniferas`
--

INSERT INTO `coniferas` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Chamaecyparis Ellwoodii', 7, 25, 'Chamaecyparis Ellwoodii.jpg'),
('Cipres Totem', 7, 25, 'Cipres Totem.jpg'),
('Macrocarpa Wilma', 7, 25, 'Macrocarpa Wilma.jpg'),
('Picea Glauca Cónica', 7, 25, 'Picea Glauca Cónica.jpg'),
('Picea Pungens Hoopsii', 7, 25, 'Picea Pungens Hoopsii.jpg'),
('Pino Mugo', 7, 25, 'Pino Mugo.jpg'),
('Pino Nigra', 7, 25, 'Pino Nigra.webp'),
('Thuya Danica', 7, 25, 'Thuya Danica.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacion`
--

CREATE TABLE `estacion` (
  `ciclo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estacion`
--

INSERT INTO `estacion` (`ciclo`) VALUES
('primavera-verano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `figuras`
--

CREATE TABLE `figuras` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `popular` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `figuras`
--

INSERT INTO `figuras` (`descripcion`, `precio`, `stock`, `foto`, `popular`) VALUES
('Aguila', 350, 15, '350-aguila.jpg', 'no'),
('Aguila 2', 195, 15, '195-aguila.jpg', 'no'),
('Buo', 47, 15, '47-buo.PNG', 'no'),
('Burro', 200, 15, '200-burro.jpg', 'sí'),
('Burro 2', 200, 15, '200-burro-2.jpg', 'no'),
('Caracol', 81, 15, '81-caracol.jpg', 'no'),
('Cocodrilo pequeño', 37, 15, '37-cocodrilo-pequeno.jpg', 'no'),
('Conejo', 48, 15, '48-conejo.PNG', 'sí'),
('Elefante', 90, 15, '90-elefante.jpg', 'no'),
('Gallo', 120, 15, '120-gallo.jpg', 'no'),
('Gato', 30, 15, '30-gato.jpg', 'no'),
('Lechuza', 21, 15, '21-lechuza.jpg', 'no'),
('Lechuza 2', 56, 15, '56-lechuza-2.jpg', 'no'),
('Manos con pajaro', 47, 15, '47-manopajaro.PNG', 'no'),
('Mochuelo', 35, 15, '35-mochuelo.jpg', 'no'),
('Oca', 61, 15, '61-oca.jpg', 'no'),
('Pato', 70, 15, '70-pato.jpg', 'no'),
('Pato sobre piedras', 100, 15, '100-pato.jpg', 'no'),
('Tortuga grande', 32, 15, '32-TORTUGA-GRANDE.jpg', 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `herramientas`
--

CREATE TABLE `herramientas` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `popular` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `herramientas`
--

INSERT INTO `herramientas` (`descripcion`, `precio`, `stock`, `foto`, `popular`) VALUES
('azada', 1, 1, 'azada-42.webp', 'no'),
('azada con rastrillo', 1.4, 30, 'azada con rastrillo-24.jpg', 'no'),
('Carretilla 120kg 90l', 70, 25, 'carretilla 120kg 90l 70€.jpg', 'sí'),
('Carretilla esparciadora 25L', 50, 25, 'Carretilla esparciadora 25L 50€.avif', 'no'),
('Corta cesped', 324, 25, 'corta cesped 324€.jpg', 'no'),
('Cortasetos', 11, 25, 'Cortasetos-11.webp', 'no'),
('Desbrozadora PB Garland Texel', 200, 25, 'Desbrozadora de gasolina GARLAND Texel 330G-V21 33 cc 200€..webp', 'no'),
('Manguera 20m', 20, 25, 'manguera 20m.webp', 'no'),
('Pala ', 12, 40, 'pala-12.webp', 'no'),
('Pala de una mano', 5, 40, 'Pala de una mano 5€.webp', 'no'),
('Pértiga extensible con serrucho 3m', 66, 25, 'Pértiga extensible con serrucho 3m 66€.webp', 'no'),
('Protector de malla 60cm', 5, 40, 'protector de malla 60cm.jpg', 'no'),
('Rastrillo', 16, 25, 'rastrillo-16.webp', 'sí'),
('Regadera 6l', 6, 25, 'regadera 6l 6€.webp', 'no'),
('Serrucho dentado', 11, 25, 'Serrucho dentado 11€.webp', 'no'),
('Soplador de Hojas', 110, 25, 'Soplador de Hojas 110€.jpg', 'no'),
('Tijera de poda de 2 manos 44cm', 10, 40, 'Tijera de poda de 2 manos 44cm 10€.webp', 'no'),
('Tijera de poda de una mano 20cm', 5, 40, 'Tijera de poda de una mano 20cm 5€.webp', 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palmaceas`
--

CREATE TABLE `palmaceas` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `palmaceas`
--

INSERT INTO `palmaceas` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Chamaerops excelsa', 8, 30, 'Chamaerops excelsa.jpg'),
('Cordyline RedStar', 8, 25, 'Cordyline RedStar.jpg'),
('Cyca Revoluta', 8, 25, 'Cyca Revoluta.jpg'),
('Phoenix Canariensis', 8, 25, 'Phoenix Canariensis.jpg'),
('Yucca Elegans', 8, 25, 'Yucca Elegans.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas_acuaticas`
--

CREATE TABLE `plantas_acuaticas` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plantas_acuaticas`
--

INSERT INTO `plantas_acuaticas` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Equisetum hyemale', 4, 20, 'EQUISETUM HYEMALE.jpg'),
('Nenufar blanco', 4, 20, 'NENUFAR BLANCO.jpg'),
('Nenufar nymphaea', 4, 20, 'NENUFAR NYMPHAEA.jpg'),
('Papyrua cyperus', 4, 20, 'PAPYRUS CYPERUS.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas_secano`
--

CREATE TABLE `plantas_secano` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plantas_secano`
--

INSERT INTO `plantas_secano` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Aloe vera', 4, 20, 'Aloe vera.avif'),
('Aylostera (Rebutia muscula)', 4, 20, 'Aylostera (Rebutia muscula).webp'),
('Cactus cebra (Haworthia attenuata)', 4, 20, 'Cactus cebra (Haworthia attenuata).jpg'),
('Cactus erizo (Echinocactus)', 4, 20, 'Cactus erizo (Echinocactus).jpg'),
('Crasas variadas', 4, 20, 'Crasas variadas.jpg'),
('Echeveria glauca', 4, 20, 'Echeveria glauca.jpg'),
('Portulacaria', 4, 20, 'Portulacaria.jpg'),
('Violacea (Acanthocalycium spiniflorum)', 4, 20, 'Violacea (Acanthocalycium spiniflorum).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas_semillas`
--

CREATE TABLE `plantas_semillas` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plantas_semillas`
--

INSERT INTO `plantas_semillas` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Semillas de Calabacín', 1.4, 40, 'Semillas de Calabacín.webp'),
('Semillas de Calabaza Halloween', 1.4, 40, 'Semillas de Calabaza Halloween.webp'),
('Semillas de Cebolla', 1.4, 40, 'Semillas de Cebolla.webp'),
('Semillas de Col repollo', 1.4, 40, 'Semillas de Col repollo.webp'),
('Semillas de Fresones', 1.4, 40, 'Semillas de Fresones.webp'),
('Semillas de Girasol para pipas', 1.6, 40, 'Semillas de Girasol para pipas 1.60€.webp'),
('Semillas de Lechuga Romana', 1.4, 40, 'Semillas de Lechuga Romana.webp'),
('Semillas de maiz', 1.4, 40, 'Semillas de maiz.jpg'),
('Semillas de Melón Arizo', 1.4, 40, 'Semillas de Melón Arizo.webp'),
('Semillas de Melón Piel de sapo', 1.4, 40, 'Semillas de Melón Piel de sapo.webp'),
('Semillas de Pepino', 1.4, 40, 'Semillas de Pepino.webp'),
('Semillas de Pimiento dulce Italiano', 1.4, 40, 'Semillas de Pimiento dulce Italiano.webp'),
('Semillas de Pimiento Maor', 1.4, 40, 'Semillas de Pimiento Maor.webp'),
('Semillas de Sandía negra', 1.4, 40, 'Semillas de Sandía negra.webp'),
('Semillas de Sandía rayada', 1.6, 40, 'Semillas de Sandía rayada 1.60€.webp'),
('Semillas de Tomate', 1.4, 40, 'Semillas de Tomate.webp'),
('Semillas de Zanahoria', 1.4, 40, 'Semillas de Zanahoria .webp'),
('Semillas ecológicas de Calabaza butternut ', 1.6, 40, 'Semillas ecológicas de Calabaza butternut 1.60€.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas_trepadoras`
--

CREATE TABLE `plantas_trepadoras` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plantas_trepadoras`
--

INSERT INTO `plantas_trepadoras` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Allamanda amarilla', 4, 20, 'Allamanda amarilla.jpg'),
('Buganvilla sanderiana', 4, 20, 'buganvilla-sanderiana.jpg'),
('Clematis', 4, 20, 'Clematis.webp'),
('Dipladenia', 4, 20, 'dipladenia.jpg'),
('Dipladenia amarilla', 4, 20, 'dipladenia amarilla.jpg'),
('Dipladenia roja', 4, 20, 'dipladenia roja.jpg'),
('Hiedra', 4, 20, 'Hiedra.webp'),
('Ipomea violacea', 4, 20, 'ipomea-violacea.jpg'),
('Jazmin amarillo', 4, 20, 'Jazmin Amarillo.webp'),
('Pandorea jasminoide blanca', 4, 20, 'Pandorea_jasminoide_blanca.webp'),
('Parra Virgen', 4, 20, 'Parra Virgen.webp'),
('Planta bignonia capensis', 4, 20, 'planta-bignonia-capensis.jpg'),
('Plumbago', 4, 20, 'Plumbago.webp'),
('Rosal grandiflora', 4, 20, 'rosal-grandiflora.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suministros`
--

CREATE TABLE `suministros` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `suministros`
--

INSERT INTO `suministros` (`descripcion`, `precio`, `stock`, `foto`) VALUES
('Fertilizante de plantas liquido', 11, 35, 'Fertilizante de plantas liquido.jpg'),
('Humus de lombriz puro', 15, 35, 'Humus de lombriz puro.jpg'),
('Maceta grande madera', 50, 25, 'maceta grande madera-50$80x40.webp'),
('Maceta grande plastico', 14, 25, 'maceta grande plastico-14$63x20.webp'),
('Macetas de barro', 17, 35, 'Macetas de barro.jpg'),
('Macetas de plastico', 10, 35, 'Macetas de plastico.jpg'),
('Macetero colgante de plastico', 18, 35, 'Macetero colgante de plastico.jpg'),
('Sustrato orgánico', 9, 35, 'Sustrato orgánico.webp'),
('Sustrato para cactus y plantas crasas', 4, 35, 'Sustrato para cactus y plantas crasas.webp'),
('Sustrato para huerto y frutales', 15, 35, 'Sustrato para huerto y frutales.webp'),
('Sustrato Universal 80L', 22, 35, 'Sustrato Universal 80L.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temporada`
--

CREATE TABLE `temporada` (
  `descripcion` varchar(50) NOT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(10) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `popular` varchar(10) NOT NULL,
  `estacion` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `temporada`
--

INSERT INTO `temporada` (`descripcion`, `precio`, `stock`, `foto`, `popular`, `estacion`) VALUES
('Amaranto globoso', 6, 30, 'Amaranto globoso.webp', 'no', 'otoño-invierno'),
('Begonia', 6, 30, 'Begonia.jpg', 'sí', 'otoño-invierno'),
('Caléndula', 6, 30, 'Caléndula.jpg', 'no', 'otoño-invierno'),
('Claveles', 6, 30, 'Claveles.jpg', 'sí', 'primavera-verano'),
('Coleus', 6, 30, 'Coleus.webp', 'sí', 'otoño-invierno'),
('Dalias', 6, 30, 'dalias.jpg', 'no', 'primavera-verano'),
('Fuchsia', 6, 30, 'Fuchsia.jpg', 'no', 'primavera-verano'),
('Gaillardia', 6, 30, 'Gaillardia.webp', 'no', 'otoño-invierno'),
('Geranio rojo', 6, 30, 'Geranio rojo.jpeg', 'no', 'primavera-verano'),
('Geranio-fucsia', 6, 30, 'geranio-fucsia.jpg', 'no', 'primavera-verano'),
('Gladiolos', 6, 30, 'Gladiolos.jpg', 'no', 'primavera-verano'),
('Hortensia blanca', 6, 30, 'Hortensia blanca.jpg', 'sí', 'primavera-verano'),
('Jacintos', 6, 30, 'jacintos.jpg', 'no', 'otoño-invierno'),
('Lirio', 6, 30, 'Lirio.webp', 'no', 'primavera-verano'),
('Narcisos', 6, 30, 'narcisos.jpg', 'no', 'otoño-invierno'),
('Pelargonio blanco', 6, 30, 'Pelargonio blanco.jpg', 'no', 'primavera-verano'),
('Pelargonio rojo', 6, 30, 'Pelargonio rojo.jpg', 'sí', 'primavera-verano'),
('Pensamientos', 6, 30, 'pensamientos.jpg', 'no', 'otoño-invierno'),
('Petunias', 6, 30, 'Petunias.jpg', 'no', 'primavera-verano'),
('Rosales', 6, 30, 'Rosales.png', 'no', 'primavera-verano'),
('Surfinia', 6, 30, 'Surfinia.jpg', 'no', 'primavera-verano'),
('Tulipanes', 6, 30, 'tulipanes.jpg', 'no', 'otoño-invierno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arboles_florales`
--
ALTER TABLE `arboles_florales`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `arboles_frutales`
--
ALTER TABLE `arboles_frutales`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `coniferas`
--
ALTER TABLE `coniferas`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `estacion`
--
ALTER TABLE `estacion`
  ADD PRIMARY KEY (`ciclo`);

--
-- Indices de la tabla `figuras`
--
ALTER TABLE `figuras`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `palmaceas`
--
ALTER TABLE `palmaceas`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `plantas_acuaticas`
--
ALTER TABLE `plantas_acuaticas`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `plantas_secano`
--
ALTER TABLE `plantas_secano`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `plantas_semillas`
--
ALTER TABLE `plantas_semillas`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `plantas_trepadoras`
--
ALTER TABLE `plantas_trepadoras`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `suministros`
--
ALTER TABLE `suministros`
  ADD PRIMARY KEY (`descripcion`);

--
-- Indices de la tabla `temporada`
--
ALTER TABLE `temporada`
  ADD PRIMARY KEY (`descripcion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
