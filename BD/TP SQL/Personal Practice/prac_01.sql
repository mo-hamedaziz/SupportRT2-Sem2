USE Test_One;
CREATE TABLE student(
	student_id INT PRIMARY KEY NOT NULL,
	student_name VARCHAR(25) NOT NULL,
	major VARCHAR(15)

);

DROP TABLE student;

ALTER TABLE student ADD average_score DECIMAL (4,2);

SELECT * FROM student;

INSERT INTO student VALUES (10010,'Aymen Boukadi','Sciences',17.03);
INSERT INTO student VALUES (10011,'Mohamed Aziz Bchini','Maths',17.93);
INSERT INTO student VALUES (10012,'Hamza Touati','Tech',12.96);
INSERT INTO student VALUES (10013,'Mohamed Rayen Nbili','Maths',11.04);

