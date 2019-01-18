NODE_VER := $(shell cat .nvmrc)
DOCKER_IMAGE_NAME = "easy-rest-test"
DOCKER_IMAGE_SIZE = $(shell docker images --format "{{.Repository}} {{.Size}}")
#DOCKER_IMAGE_SIZE = $(shell docker images --format "{{.Repository}} {{.Size}}" | grep $(DOCKER_IMAGE_NAME) | cut -d\   -f2)

help:																																																## Show this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

gen-readme:																																													## Generate README.md (using docker-verb)
	npm run docs
.PHONY: gen-readme

gen-readme-watch:
	npm run docs:watch
.PHONY: gen-readme-watch

build:																																															## Build the docker image (production)
	docker build --build-arg NODE_VER=$(NODE_VER) -t stefanwalther/easy-rest-test -f Dockerfile.prod .
.PHONY: build

size:
	docker images --format "{{.Repository}} {{.Size}}" | grep $(DOCKER_IMAGE_NAME) | tr -s ' ' | cut -d " " -f 2
.PHONY: size

up:																																																	## Get the stack up and running (docker-compose.dev.yml)
	docker-compose --f=docker-compose.yml up
.PHONY: up

down:																																																## Stop the stack - dev environment (docker-compose down)
	docker-compose --f=docker-compose.yml down -t 0
.PHONY: down

