pipeline {
    agent any

    stages {      
        stage('test') {
            steps {
                echo 'uhmm....'
                nodejs('node-10-17')  
                    sh 'yarn install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
