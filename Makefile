
build:
	docker-compose build
	docker-compose exec backend realise start

restart:
	docker-compose down
	docker-compose build
	docker-compose up -d
