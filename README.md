# README

This README would normally document whatever steps are necessary to get your application up and running.

### How do I get set up?

1. clone project
2. create docker network: `docker network create react-front`
3. start docker: `docker compose -f docker-compose.local.yml up -d` to run without console or `docker compose -f docker-compose.local.yml up` to run with console.
   To exit console press Ctrl + C
4. access (by default) `http://localhost:9000/`
   <!-- docker system prune -a -->
   <!-- docker volume rm <numevolum> docker volume ls -->
   <!-- git config core.fileMode false -->
   <!-- sudo chmod -R 777 docker -->
