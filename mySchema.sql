CREATE TABLE gender (
gender_id INT UNIQUE PRIMARY KEY,
gender_name VARCHAR(50) NOT NULL
);

CREATE TABLE marvel_characters (
hero_id INT UNIQUE PRIMARY KEY,
hero_name VARCHAR(50) NOT NULL,
gender_id INT NOT NULL,
age INT NOT NULL,
film_status BIT NOT NULL DEFAULT CAST(0 as BIT),
FOREIGN KEY (gender_id)
REFERENCES gender (gender_id)
);

CREATE TABLE character_accomplaces (
hero_id INT NOT NULL,
accomplace_id INT NOT NULL,
PRIMARY KEY (hero_id, accomplace_id),
FOREIGN KEY (hero_id)
REFERENCES marvel_characters (hero_id),
FOREIGN KEY (accomplace_id)
REFERENCES marvel_characters (hero_id)
);

CREATE TABLE character_enemies (
hero_id INT NOT NULL,
enemy_id INT NOT NULL,
PRIMARY KEY (hero_id, enemy_id),
FOREIGN KEY (hero_id)
REFERENCES marvel_characters (hero_id),
FOREIGN KEY (enemy_id)
REFERENCES marvel_characters (hero_id)
);