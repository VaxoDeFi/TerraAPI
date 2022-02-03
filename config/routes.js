import PostController from './../src/controllers/PostController';

export default function routes(app) {
    app.get('/v1/terra/prices', PostController.get);
}