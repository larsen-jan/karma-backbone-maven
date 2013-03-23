package no.steria.sample.jersey.webapp.resources;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/helloworld")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class HelloWorldResource {

    @GET
    public HelloWorldResponse get() {
        return new HelloWorldResponse();
    }

    class HelloWorldResponse {
        public String getHelloWorld() {
            return "Hello Barbera!!";
        }
    }
}
