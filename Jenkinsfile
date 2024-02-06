stages {
    stage('Deploy with Docker Compose') {
        steps {
            // Docker Compose 실행
            script {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }
    }
}

post {
    success {
        script {
            // Git 저장소에 코드가 푸시될 때마다
            // 현재 실행 중인 Docker Compose 서비스를 중지하고 제거
            sh 'docker-compose -f docker-compose.yml down'
        }
    }
}
