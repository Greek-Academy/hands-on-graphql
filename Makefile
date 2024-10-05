include ./database/.env

.PHONY: db-bash back-bash front-bash back-dev front-dev mysql

setup:
	@docker compose run backend npm install
	@docker compose run frontend npm install

db-bash:
	@docker compose exec database bash

back-bash:
	@docker compose exec backend bash

front-bash:
	@docker compose exec frontend bash

back-dev:
	@docker compose exec backend npm run dev

front-dev:
	@docker compose exec frontend npm run dev

mysql:
	@docker compose exec database mysql -h localhost -u $(MYSQL_ROOT_USER) -p$(MYSQL_ROOT_PASSWORD) $(MYSQL_DATABASE)
