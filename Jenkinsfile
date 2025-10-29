pipeline {
  agent any

  environment {
    IMAGE = "ci-cd-demo:latest"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        bat "docker build -t %IMAGE% ."
      }
    }

    stage('Run Container') {
      steps {
        bat '''
          docker ps -q --filter "name=ci-cd-demo-run" | findstr . && docker rm -f ci-cd-demo-run
          docker run -d --name ci-cd-demo-run -p 5000:5000 %IMAGE%
        '''
      }
    }
  }
}
