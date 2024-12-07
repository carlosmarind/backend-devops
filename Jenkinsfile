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
        stage("quality assurance"){
            agent {
                docker {
                    label "contenedores"
                    image "sonarsource/sonar-scanner-cli"
                    reuseNode true
                }
            }
            stages{
                stage("sonarqube"){
                    steps{
                        withSonarQubeEnv("sonarqube"){
                            sh "sonar-scanner"
                        }
                    }
                }
            }
        }
        stage("integracion nexus"){
            steps{
                script{
                    docker.withRegistry("http://localhost:8082","registry"){
                        sh "docker build -t backend-devops-gm ."
                        sh "docker tag backend-devops-gm:latest localhost:8082/backend-devops-gm:latest"
                        sh "docker push localhost:8082/backend-devops-gm:latest"
                    }
                }
            }
        }
    }
}