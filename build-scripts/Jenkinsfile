
pipeline
{
    agent any

    environment
    {
        publish_version = ''
    }

    stages
    {

        stage ("Initialise release config")
        {
             steps
            {
                script
                {
                    sh "npm install"
                    sh "npm build"

                }
                 echo "Test"
            }

        }


    }
}
