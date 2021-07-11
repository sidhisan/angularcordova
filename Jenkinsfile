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

    stage('IOS Build') {
        steps {
            sh 'npm run build-ios-release'
        } 
    }

    stage('Android Build') {
        steps {
            sh 'npm run build-android-release'
        }
    }

    stage('APK Sign') {
        steps {
            sh 'npm run create-sign-android-release'
        }
    }

    stage('Stage Web Build') {
        steps {
            sh 'npm run build --prod'
        }
    }
 }
}