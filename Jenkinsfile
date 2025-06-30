pipeline {
    agent any
    
    environment {
        REMOTE_USER = "moglico"
        REMOTE_HOST = "159.223.235.105"
        REMOTE_PATH = "/var/www/html/conversion-tools"
        SSH_CRED_ID = "VPS-Key"
        WSL_NODE_PATH = "/root/.nvm/versions/node/v22.5.1/bin"
    }
    
    stages {        
        stage("Install Dependencies") {
            steps {
                bat """
                npm install
                """
            }
        }
        
        stage("Build") {
            steps {
                bat """
                npm run build
                """
            }
        }
        
        stage("Deploy") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat '''
                    scp -i %SSH_KEY% -r .\\dist\\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%
                    '''
                }
            }
        }
        
        stage("Set Permissions") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat """
                    ssh -i %SSH_KEY% %REMOTE_USER%@%REMOTE_HOST% "sudo chmod -R 644 %REMOTE_PATH%/assets && sudo chmod -R +X %REMOTE_PATH%/assets"
                    """
                }
            }
        }
    }
}