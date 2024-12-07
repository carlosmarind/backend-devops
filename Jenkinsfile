pipeline {
    agent any
    stages{
        stage("build - instalacion dependencias"){
            agent {
                docker {
                    label 'contenedores'
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages{
                stage("build - instalacion dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("build - ejecucion test"){
                    steps{
                        sh 'npm run test'
                    }
                }                
                stage("build - build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }
            }
        }
        stage("integracion nexus"){
            steps{
                sh "docker build -t backend-devops-gm ."
                sh "docker tag backend-devops-gm:latest localhost:8082/backend-devops-gm:latest"
                sh "docker push localhost:8082/backend-devops-gm:latest"
            }
        }
    }
}