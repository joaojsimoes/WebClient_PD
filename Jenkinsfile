pipeline {
    agent any
    stages {      
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                nodejs('node-10-17')  
                    sh 'yarn install'
            }
        }
    }
}
