package org.example;
import java.util.*;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.ArrayList;

@Path("Aliens")
public class MyAlien {

    AlienRepository repo = new AlienRepository();

    @GET
    @Path("show")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Alien> hello() {
        return repo.getAliens();
    }

    @GET
    @Path("alien/{id}")
    @Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
    public Alien getAlien(@PathParam("id") int id) {
        return repo.getAlien(id);
    }

    @POST
    @Path("alien")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Alien createAlien(Alien a) {
        repo.addAlien(a);
        return a;
    }
}