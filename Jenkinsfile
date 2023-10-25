pipeline {
    agent {
        docker {
            image 'node:20'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        PNPM_VERSION = '9'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install -g pnpm@${PNPM_VERSION}'
                sh 'pnpm install'
            }
        }
        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
        stage('Docker Build and Publish') {
            steps {
                script {
                    def dockerImage = docker.build('nest-comic')
                    dockerImage.push()
                }
            }
        }
    }
}
