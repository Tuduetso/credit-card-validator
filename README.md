Credit Card Validator Application
A Node.js-based credit card validator application with unit tests, containerized using Docker and deployed automatically to AWS EC2 using GitHub Actions CI/CD.

Live Application
Public URL: http://100.27.250.207/
The application is publicly accessible via an AWS EC2 instance.

Features
-Validates credit card numbers using industry-standard checks
-Fully unit-tested with Jest
-Dockerized for consistent builds
-Automated CI/CD pipeline using GitHub Actions
-Automatically deployed to AWS on every push to main

Tech Stack
-Node.js (v18)
-Jest – Unit testing
-Docker – Containerization
-GitHub Actions – CI/CD
-AWS EC2 (Free Tier) – Hosting
-Docker Hub – Container registry

Project structre
.
├── __tests__/
│   └── validator.test.js
├── .github/
│   └── workflows/
│       └── ci-cd.yml
|__node_modules
|
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── validator.js
├── .gitignore
├── Dockerfile
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md


Running the application locally
1.Clone the repository 
  git clone https://github.com/Tuduetso/credit-card-validator.git
    cd credit-card-validator
2.Install dependencies
  npm ci
3.Run unittests
  npm test
4.Start the application
  npm start
The app will be available at:
    http://localhost:3000

Running with Docker Locally
 build the docker image
    docker build -t credit-card-validator 
Run the container
    docker run -p 3000:3000 credit-card-validator

AWS Deployment Detail
    AWS Services used
| Service     | Purpose                     | Free Tier |
| -------------- | ------------------------ | --------- |
| EC2            | Hosts Docker container   | Yes       |
| Security Group | Controls inbound traffic |  Yes      |

EC2 Configuration
-OS: Amazon Linux 2023
-Instance Type: t2.micro (Free Tier)
-Inbound Rules:
    -SSH (22)  TCP
    -HTTP (80)  TCP
    -HTTPS (443) TCP

 CI/CD Pipeline Overview
    The GitHub Actions workflow runs automatically on every push to main.
 CI/CD Steps
-Install Node.js dependencies
-Check application build (Node.js runtime validation)
-Run Jest unit tests
-Build Docker image
-Push Docker image to Docker Hub
-SSH into EC2
-Pull latest image
-Stop old container
-Run updated container
 #Fully automated end-to-end deployment

 Required GitHub Secrets
The following secrets are configured in the GitHub repository:
| Secret Name          | Description             |
| -------------------- | ----------------------- |
| `DOCKERHUB_USERNAME` | Docker Hub username     |
| `DOCKERHUB_TOKEN`    | Docker Hub access token |
| `EC2_HOST`           | EC2 public IP           |
| `EC2_USER`           | `ec2-user`              |
| `EC2_KEY`            | EC2 private SSH key     |

Testing
-Unit tests are written using Jest
-CI pipeline fails if tests do not pass
Run tests locally: npm test

Prerequisites
-Node.js v18+
-Docker
-GitHub account
-AWS account (Free Tier)
-Docker Hub account

Author
Tuduetso Pelompe
DevSecOps Engineer



