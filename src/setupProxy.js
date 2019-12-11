import proxy from "http-proxy-middleware";

export default function(app) {
    app.use(
        proxy("/users", {
            target: "https://api.darksky.net",
            changeOrigin: true
        })
    );
}