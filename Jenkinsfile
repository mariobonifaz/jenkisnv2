        pipeline {
            agents any
            environment {
                DOCKER_IMAGE = 'jenkinsv2'
            }

            stages{
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
                            docker.image(DOCKER_IMAGE) .
    inside {
                                sh 'npm install'
                                sh 'npm test'
                            }
                        }
                    }
                }
                stage('Deploy') {
                    steps {
                        script {
                            docker.image(DOCKER_IMAGE).run 
    ('-d -p 3000:3000')
                        }
                    }
                }
            }
        }