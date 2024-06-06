pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'jenkinsv2'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo "Starting Docker build..."
                    docker.build(DOCKER_IMAGE)
                    echo "Docker build completed."
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo "Starting Docker container for testing..."
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'mkdir -p .npm-cache'
                        sh 'npm install --cache .npm-cache'
                        sh 'npm test --cache .npm-cache'
                    }
                    echo "Docker container testing completed."
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo "Deploying Docker container..."
                    docker.image(DOCKER_IMAGE).run('-d -p 3000:3000')
                    echo "Docker container deployed."
                }
            }
        }
    }
}
