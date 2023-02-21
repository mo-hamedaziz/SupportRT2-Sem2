USE Test_One;
--CREATING A TABLE
CREATE TABLE student(
	student_id INT PRIMARY KEY IDENTITY(10010,1),
	student_name VARCHAR(25) NOT NULL,
	major VARCHAR(15) DEFAULT 'undecided'

);

--DROPPING THE TABLE
DROP TABLE student;

--ADD NEW ATTRIBUTE (COLUMN)
ALTER TABLE student ADD average_score DECIMAL (4,2);

--SELECT
SELECT * FROM student;
SELECT * FROM student WHERE average_score >= 15.00;
SELECT * FROM student ORDER BY major,average_score DESC;
SELECT * FROM student WHERE student_id IN (10011,10010);

--INSERTING ROWS
INSERT INTO student VALUES ('Aymen Boukadi','Sciences',17.03);
INSERT INTO student VALUES ('Mohamed Aziz Bchini','Maths',17.93);
INSERT INTO student VALUES ('Hamza Touati','Tech',12.96);
INSERT INTO student VALUES ('Mohamed Rayen Nbili','Maths',11.04);
INSERT INTO student(student_name,average_score) VALUES ('Fares Kbayer',16.55);

--UPDATING ROW
UPDATE student
SET major='Sc'
WHERE major='Sciences';

UPDATE student SET average_score=13.77 WHERE student_name='Mohamed Rayen Nbili';

--DELETE ROW
DELETE FROM student WHERE student_id=10012;