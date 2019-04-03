CREATE DATABASE
IF NOT EXISTS devpool_db;

USE devpool_db;

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (1, 'Apple, Inc.', 1, 'Check us out!', 'Hi Aimes, we think you are a perfect fit for our company. Click the link to the apply for this job!', 'https://jobs.apple.com/en-us/details/200035672/full-stack-web-developer?team=SFTWR');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (2, 'Apple, Inc.', 1, 'Check us out!', 'Hi Adrian, we think you are a perfect fit for our company. Click the link to the apply for this job!', 'https://jobs.apple.com/en-us/details/200035672/full-stack-web-developer?team=SFTWR');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (1, 'Google', 0, 'A + G = <3', 'Aimes! This is the job for you!', 'https://careers.google.com/jobs/results/5772779452563456/');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (1, 'Amazon', 1, 'Perfect job for you!', 'Hello Aimes, please click the button to apply', 'https://www.amazon.jobs/en/jobs/787635/solutions-architect-amazon-web-services-dallas');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (3, 'Apple, Inc.', 1, 'Check us out!', 'Hi Vince, we think you are a perfect fit for our company. Click the link to the apply for this job!', 'https://jobs.apple.com/en-us/details/200035672/full-stack-web-developer?team=SFTWR');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (19, 'Affinity Energy LLC', 0, 'New Message', 'Hello Jackson, Upon reviewing your profile, we have decided to pursue other candidates. We wish you the best of luck in your job search!', 'https://jobs.apple.com/en-us');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (23, 'Cobalt', 1, 'New Message', 'Hello Henry, We have viewed your profile and though your skillset is not exactly what we are looking for, we believe that you can still be a great asset to our company! Please call us so that we can go over a few more questions with you. Thank you!', 'https://jobs.apple.com/en-us');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (28, 'Germ Blast', 0, 'New Message', 'Hello Logan, We have given your profile a good look over and unfortunately we are looking for someone that has extensive knowledge of C#. We do apologize but best of luck in your future endeavors!', 'https://jobs.apple.com/en-us');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (27, 'ENACOMM inc', 0, 'New Message', 'Hello Enzo, Upon reviewing your profile, we have decided to pursue other candidates. We wish you the best of luck in your job search!', 'https://jobs.apple.com/en-us');

INSERT INTO Contacts
  (devId, company, interested, msgSubject, message, jobPosting)
VALUES
  (17, 'CTDI', 1, 'New Message', 'Hello John, Upon reviewing your profile, we believe that you would be a perfect fit for our company. Please reach back out to us if you are interested so that we can get you onboard as soon as possible!', 'https://jobs.apple.com/en-us');