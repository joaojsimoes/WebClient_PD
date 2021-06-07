pipeline {
    agent any
    stages {      
        stage('run yarn') {
            steps {
                echo 'uhmm....'
                nodejs('node-10.17')  
                    sh 'yarn install'
            }
        }
        stage('run backend') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
