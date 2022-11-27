-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
	id INT GENERATED ALWAYS AS IDENTITY,
	common_name VARCHAR(50),
	scientific_name VARCHAR(50),
	is_pet BOOL
);
insert into animals (common_name, scientific_name, is_pet) values 
('Thrasher, curve-billed', 'Toxostoma curvirostre', false), 
('Ringtail, common', 'Pseudocheirus peregrinus', true), 
('Toucan, white-throated', 'Ramphastos tucanus', false), 
('Goose, andean', 'Chloephaga melanoptera', false),
('Ringtail, common', 'Pseudocheirus peregrinus', true),
('Toucan, white-throated', 'Ramphastos tucanus', false),
('Goose, andean', 'Chloephaga melanoptera', false),
('Skimmer, four-spotted', 'Libellula quadrimaculata', true),
('Australian magpie', 'Gymnorhina tibicen', false),
('Brown pelican', 'Pelecanus occidentalis', false),
('Moose', 'Alces alces', true),
('Common turkey', 'Meleagris gallopavo', false),
('Eastern grey kangaroo', 'Macropus giganteus', true),
('White spoonbill', 'Platalea leucordia', true),
('Cardinal, red-capped', 'Paroaria gularis', true),
('Western spotted skunk', 'Spilogale gracilis', true),
('Common goldeneye', 'Bucephala clangula', true),
('Little blue penguin', 'Eudyptula minor', true);


DROP TABLE IF EXISTS CAR_DATA;

CREATE TABLE CAR_DATA (
	id INT GENERATED ALWAYS AS IDENTITY,
	model VARCHAR(50),
	make VARCHAR(50),
	year INT
);
insert into CAR_DATA (model, make, year) values 
('Avalanche', 'Chevrolet', 2007),
('300', 'Chrysler', 2010),
('Focus', 'Ford', 2001),
('Sorento', 'Kia', 2009),
('G35', 'Infiniti', 2008),
('VUE', 'Saturn', 2008),
('Wrangler', 'Jeep', 2001),
('Pajero', 'Mitsubishi', 1994),
('DeVille', 'Cadillac', 1998),
('3500', 'Chevrolet', 2000),
('Xterra', 'Nissan', 2004),
('Expo', 'Mitsubishi', 1993),
('Caliber', 'Dodge', 2009),
('Insight', 'Honda', 2011),
('944', 'Porsche', 1988);