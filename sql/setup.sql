-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
	id INT GENERATED ALWAYS AS IDENTITY,
	common_name VARCHAR(50),
	scientific_name VARCHAR(50),
	is_pet BOOL
);
insert into animals (common_name, scientific_name, is_pet) values ('Thrasher, curve-billed', 'Toxostoma curvirostre', false), 
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
