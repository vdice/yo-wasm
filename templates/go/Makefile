MODULE ?= <%= moduleName %>
SRC_DIR ?= ./src

default: build

init:
	go mod init $(MODULE)
	go mod tidy

build:
	GOOS=js GOARCH=wasm go build -o $(MODULE).wasm $(SRC_DIR)

test:
	go test $(SRC_DIR)

debug:
	GOOS=js GOARCH=wasm go run -exec="$(shell go env GOROOT)/misc/wasm/go_js_wasm_exec" $(SRC_DIR)