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

DROP TABLE IF EXISTS books

create table books (
	id INT GENERATED ALWAYS AS IDENTITY,
	title VARCHAR(50),
	isbn_number VARCHAR(50),
	quote TEXT
);
insert into books (title, isbn_number, quote) values 
('Regrant', '505522812-1', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'),
('Zamit', '836980782-8', 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'),
('Bigtax', '909675990-7', 'Donec quis orci eget orci vehicula condimentum.'),
('Vagram', '928846466-2', 'Pellentesque viverra pede ac diam.'),
('Subin', '451047688-4', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.'),
('It', '681786985-4', 'Nulla tempus.'),
('Regrant', '920290658-0', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Mauris viverra diam vitae quam.'),
('Transcof', '590482105-0', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'),
('Zoolab', '601690250-0', 'Phasellus in felis.'),
('Sub-Ex', '155900774-5', 'Maecenas pulvinar lobortis est.'),
('Fix San', '161951628-4', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'),
('Regrant', '702218725-8', 'Duis ac nibh.'),
('Keylex', '648398352-2', 'Duis bibendum.'),
('Flexidy', '730954847-7', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Mauris viverra diam vitae quam.'),
('Rank', '165278636-8', 'Nulla suscipit ligula in lacus.');
