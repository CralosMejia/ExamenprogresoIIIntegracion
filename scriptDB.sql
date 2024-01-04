Drop database if exists examenprogreso2Integracion;
CREATE DATABASE examenprogreso2Integracion;

use examenprogreso2Integracion;


DROP TABLE IF EXISTS Usuario;
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    Nombre nvarchar(250),
    apellido nvarchar(250),
    Usuario nvarchar(250),
    ciudad nvarchar(250)
);

DROP TABLE IF EXISTS lugar;
CREATE TABLE lugar (
	id INT AUTO_INCREMENT PRIMARY KEY ,
    ciudad nvarchar(250),
    pais nvarchar(250)
);

use examenprogreso2Integracion;
INSERT INTO Usuario (Nombre,apellido,Usuario,ciudad)
	VALUES("Juan","Almeida","jalmeida",'Quito');
INSERT INTO Usuario (Nombre,apellido,Usuario,ciudad)
	VALUES("Diego","Contreras","dcontreras",'Guayaquil');
INSERT INTO Usuario (Nombre,apellido,Usuario,ciudad)
	VALUES("Carlos","González","cgonzalez",'Quito');
INSERT INTO Usuario (Nombre,apellido,Usuario,ciudad)
	VALUES("Maria","Salazar","msalazar",'Ambato');