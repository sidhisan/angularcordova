pipeline {
   agent any
    environment {
        PATH='/usr/local/bin:/usr/bin:/bin'
    }

    stages {
      stage('NPM Setup') {
        steps {
            sh 'npm install'
        }
    }

    stage('Android is Available') {
        steps {
            sh 'cd ./cordova && test -d "platforms/android" && echo "Found/Exists" || cordova platforms add android && cd ..'
        }
    }

    stage('App Build') {
        steps {
            sh 'npm run create-android-release '
        }
    }

    stage('App Sign') {
        steps {
            sh 'npm run sign-android-release'
        }
    }

    stage('Stage Web Build') {
        steps {
            sh 'npm run build --prod'
        }
    }
 }
}