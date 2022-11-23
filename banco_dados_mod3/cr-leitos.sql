-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cr_leitos
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hospitais`
--

DROP TABLE IF EXISTS `hospitais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospitais` (
  `id` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitais`
--

LOCK TABLES `hospitais` WRITE;
/*!40000 ALTER TABLE `hospitais` DISABLE KEYS */;
INSERT INTO `hospitais` VALUES (1,'HRJ','JUAZEIRO','BA'),(2,'IMV','PETROLINA','PE'),(3,'HRFB','OURICURI','PE');
/*!40000 ALTER TABLE `hospitais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origem`
--

DROP TABLE IF EXISTS `origem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origem` (
  `id` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `regiao` varchar(20) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origem`
--

LOCK TABLES `origem` WRITE;
/*!40000 ALTER TABLE `origem` DISABLE KEYS */;
INSERT INTO `origem` VALUES (1,'HOSP DOUTOR JAIME DA SILVEIRA COELHO','CURAÇA','NRS/Juazeiro','BA'),(2,'HOSP E MATERNIDADE SANTA MARIA','ARARIPINA','IX/Ouricuri-PE','PE'),(3,'HOSPITAL MUNICIPAL DE JAGUARARI','JAGUARARI','NRS/Senhor do Bonfim','BA'),(4,'PRONTO SOCORRO SAO FRANCISCO LTDA','SALGUEIRO','VII/Salgueiro','PE'),(5,'UPA24H DE PETROLINA','PETROLINA','VIII/Petrolina','PE');
/*!40000 ALTER TABLE `origem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `codigo` int NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `sexo` enum('M','F') DEFAULT NULL,
  `nasc` date DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (1,'JOAO FRANCISCO ALMEIDA','M','1975-01-12'),(2,'ANA MARIA DA SILVA','F','1963-10-23'),(3,'LUIS CLAUDIO SILVA','M','1968-08-01'),(4,'DAMIAO DOS SANTOSR','M','1956-11-17'),(5,'ANTONIA MARIA FERREIRA','F','1949-05-22');
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regulacao`
--

DROP TABLE IF EXISTS `regulacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regulacao` (
  `codigo` int NOT NULL,
  `cod_paciente` int DEFAULT NULL,
  `motivo` text,
  `resol` enum('A','C') DEFAULT NULL,
  `hosp_orig` int DEFAULT NULL,
  `cod_dest` int DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `cod_paciente` (`cod_paciente`),
  KEY `cod_dest` (`cod_dest`),
  KEY `hosp_orig` (`hosp_orig`),
  CONSTRAINT `regulacao_ibfk_1` FOREIGN KEY (`cod_paciente`) REFERENCES `paciente` (`codigo`),
  CONSTRAINT `regulacao_ibfk_2` FOREIGN KEY (`cod_dest`) REFERENCES `hospitais` (`id`),
  CONSTRAINT `regulacao_ibfk_3` FOREIGN KEY (`hosp_orig`) REFERENCES `origem` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regulacao`
--

LOCK TABLES `regulacao` WRITE;
/*!40000 ALTER TABLE `regulacao` DISABLE KEYS */;
INSERT INTO `regulacao` VALUES (1,3,'CLINICA MEDICA','A',4,1),(2,1,'CARDIOLOGIA','A',5,2),(3,2,'ORTOPEDIA','C',5,NULL),(4,5,'UTI','A',3,3),(5,1,'PSIQUIATRIA','C',5,NULL),(6,4,'CLINICA MEDICA','A',2,3),(7,2,'ORTOPEDIA','A',1,3);
/*!40000 ALTER TABLE `regulacao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-22 22:48:26
