# Makefile pour archi-3-tiers#

# Commande Docker Compose (ajustez si besoin : docker compose vs docker-compose)
DC = docker compose

.PHONY: help install build up down logs clean start-api start-electron

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets disponibles :"
	@echo "  install         Installer les dépendances (api + electron-app)"
	@echo "  build           Construire les images Docker"
	@echo "  up              Démarrer tous les services (Mongo, API, Electron)"
	@echo "  down            Arrêter tous les services"
	@echo "  logs            Suivre les logs de tous les services"
	@echo "  start-api       Lancer l'API en local (sans Docker)"
	@echo "  start-electron  Lancer l'app Electron en local (sans Docker)"
	@echo "  clean           Supprimer les node_modules"

install:
	cd api && npm install
	cd electron-app && npm install

build:
	$(DC) build

up:
	$(DC) up

down:
	$(DC) down

logs:
	$(DC) logs -f

start-api:
	cd api && npm start

start-electron:
	cd electron-app && npm start

clean:
	rm -rf api/node_modules electron-app/node_modules
