Set-Location .\app

yarn build

docker-compose -f docker-compose.prod.yml  up --build
