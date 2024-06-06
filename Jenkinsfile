pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'jenkinsv2'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'mkdir -p .npm-cache'
                        sh 'npm install --cache .npm-cache'
                        sh 'node index.js &'
                        sh 'sleep 5'  // Esperar a que el servidor arranque
                        sh 'npm test --cache .npm-cache'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).run('-d -p 3000:3000')
                }
            }
        }
    }
}
