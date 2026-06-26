package org.example;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import java.net.URI;
public class Main {
    public static void main(String[] args) {
        ResourceConfig config =
                new ResourceConfig()
                        .packages("org.example")
                        .register(org.glassfish.jersey.jackson.JacksonFeature.class);
        HttpServer server =
                GrizzlyHttpServerFactory.createHttpServer(
                        URI.create("http://localhost:8080/"),
                        config
                );
        System.out.println("Server started at http://localhost:8080/Aliens/showAliens");
    }
}