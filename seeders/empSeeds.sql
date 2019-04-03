CREATE DATABASE
IF NOT EXISTS devpool_db;

USE devpool_db;

INSERT INTO Businesses
  (`name`,`website`,`photo`,`bio`,`skillOne`,`skillTwo`,`skillThree`,`jobDescription`,`jobPosting`,`createdAt`,`updatedAt`)
VALUES ('Apple, Inc.','https://www.apple.com/jobs/us/','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPuCIZ96FbLdeBrvcUYnf9vN2UlG3H4alV0-lyDuTBAJK8Nmwwg','Think Different.','React','JS','Node.js','Specialty Operations Web App Developer','https://jobs.apple.com/en-us/details/200018465/specialty-operations-web-app-developer?team=CUST','2019-04-02 19:39:21','2019-04-02 19:39:21');

INSERT INTO Businesses
  (`name`,`website`,`photo`,`bio`,`skillOne`,`skillTwo`,`skillThree`,`jobDescription`,`jobPosting`,`createdAt`,`updatedAt`)
  VALUES ('Google','https:/careers.google.com','https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg','Build for Everyone','Angular','Java','C#','Software Engineer','https://careers.google.com/jobs/results/5772779452563456/','2019-04-03 09:05:00','2019-04-03 09:05:00');

INSERT INTO Businesses
  (`name`,`website`,`photo`,`bio`,`skillOne`,`skillTwo`,`skillThree`,`jobDescription`,`jobPosting`,`createdAt`,`updatedAt`)
  VALUES ('Amazon','https://www.amazon.jobs/en','http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG','We Pioneer','SQL','Node.js','mongoDB','Solutions Architect','https://www.amazon.jobs/en/jobs/787635/solutions-architect-amazon-web-services-dallas','2019-04-03 09:05:00','2019-04-03 09:05:00');

INSERT INTO Businesses
  (`name`,`website`,`photo`,`bio`,`skillOne`,`skillTwo`,`skillThree`,`jobDescription`,`jobPosting`,`createdAt`,`updatedAt`)
  VALUES ('Microsoft','https://careers.microsoft.com/us/en/','https://c.s-microsoft.com/en-us/CMSImages/Microsoft-logo_rgb_gray.jpg?version=1BC84E2E-14C4-6323-7909-D43A63EDAA93','Do what you love','C++','Java','MSSQL','SSoftware Engineer','https://careers.microsoft.com/us/en/job/473030/Full-time-opportunities-for-students-recent-graduates-Software-Engineering-Program-Management','2019-04-03 09:05:00','2019-04-03 09:05:00');
