touch src/apidoc/$1.js &&
mkdir src/handlers/$1 &&
mkdir src/handlers/$1/__tests__ &&
mkdir src/handlers/$1/__mocks__ &&
touch src/routes/$1.ts &&
touch src/handlers/$1/$1-data-access.ts &&
touch src/handlers/$1/$1-use-cases.ts &&
touch src/handlers/$1/$1-adapter.ts &&
touch src/handlers/$1/$1-model.ts &&
touch src/handlers/$1/$1-validator.ts &&
touch src/handlers/$1/__mocks__/$1-data-access.test.ts &&
touch src/handlers/$1/__tests__/$1-data-access.test.ts &&
touch src/handlers/$1/__tests__/$1-use-cases.test.ts &&
touch src/handlers/$1/__tests__/$1-adapter.test.ts &&
touch src/handlers/$1/__tests__/$1-validator.test.ts
