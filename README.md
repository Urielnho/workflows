# Workflows

Unidad 2 Practica 2 - Git Flow y GitHub Actions.

Proyecto React con Vite. Los cambios se desarrollan en feature/*, se integran por Pull Request en dev y se publican desde release/* a main. Las correcciones urgentes usan hotfix/* y despues se integran tambien en dev.

## Ramas

- main: version estable, protegida contra push directo, borrado y force push.
- dev: integracion de cambios; representa la rama develop de Git Flow.
- feature/react-actions: proyecto React y workflow.
- release/1.0.0: preparacion de la primera version.
- hotfix/1.0.1: correccion posterior a la publicacion.
- build: archivos de dist publicados por GitHub Actions.

## Ejecutar

```sh
npm ci
npm run dev
```

## Compilar

```sh
npm run build
```

GitHub Actions utiliza Node.js 20, instala con npm ci y compila con npm run build. Cada push a main ejecuta .github/workflows/deploy.yml y publica dist en build con el token automatico de GitHub.

Publicar en build prepara los archivos compilados; esta practica no configura un servicio de hosting.
