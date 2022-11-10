-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
	id INT,
	common_name VARCHAR(50),
	scientific_name VARCHAR(50),
	is_pet VARCHAR(50)
);
insert into animals (id, common_name, scientific_name, is_pet) values (1, 'Thrasher, curve-billed', 'Toxostoma curvirostre', false);
insert into animals (id, common_name, scientific_name, is_pet) values (2, 'Ringtail, common', 'Pseudocheirus peregrinus', true);
insert into animals (id, common_name, scientific_name, is_pet) values (3, 'Toucan, white-throated', 'Ramphastos tucanus', false);
insert into animals (id, common_name, scientific_name, is_pet) values (4, 'Goose, andean', 'Chloephaga melanoptera', false);
insert into animals (id, common_name, scientific_name, is_pet) values (5, 'Skimmer, four-spotted', 'Libellula quadrimaculata', true);
insert into animals (id, common_name, scientific_name, is_pet) values (6, 'Australian magpie', 'Gymnorhina tibicen', false);
insert into animals (id, common_name, scientific_name, is_pet) values (7, 'Brown pelican', 'Pelecanus occidentalis', false);
insert into animals (id, common_name, scientific_name, is_pet) values (8, 'Moose', 'Alces alces', true);
insert into animals (id, common_name, scientific_name, is_pet) values (9, 'Common turkey', 'Meleagris gallopavo', false);
insert into animals (id, common_name, scientific_name, is_pet) values (10, 'Eastern grey kangaroo', 'Macropus giganteus', true);
insert into animals (id, common_name, scientific_name, is_pet) values (11, 'White spoonbill', 'Platalea leucordia', true);
insert into animals (id, common_name, scientific_name, is_pet) values (12, 'Cardinal, red-capped', 'Paroaria gularis', true);
insert into animals (id, common_name, scientific_name, is_pet) values (13, 'Western spotted skunk', 'Spilogale gracilis', true);
insert into animals (id, common_name, scientific_name, is_pet) values (14, 'Common goldeneye', 'Bucephala clangula', true);
insert into animals (id, common_name, scientific_name, is_pet) values (15, 'Little blue penguin', 'Eudyptula minor', true);
