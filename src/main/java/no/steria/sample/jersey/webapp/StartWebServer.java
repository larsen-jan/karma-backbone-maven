package no.steria.sample.jersey.webapp;

import com.sun.jersey.spi.container.servlet.ServletContainer;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

public class StartWebServer {

    public static void main(String[] args) throws Exception {
        // Jersey-resources reside in no.steria.sample.jersey.webapp.resources
        ServletHolder servletHolder = new ServletHolder(ServletContainer.class);
        servletHolder.setInitParameter("com.sun.jersey.config.property.packages", "no.steria.sample.jersey.webapp.resources");
        servletHolder.setInitParameter("com.sun.jersey.api.json.POJOMappingFeature", "true");

        // Serve Jersey-resources from /rest/*
        ServletContextHandler servletContextHandler = new ServletContextHandler(ServletContextHandler.SESSIONS);
        servletContextHandler.addServlet(servletHolder, "/rest/*");

        // Serve static files from src/main/webapp
        ResourceHandler resourceHandler = new ResourceHandler();
        resourceHandler.setResourceBase("src/main/webapp");

        // Setup handlers and server
        HandlerList handlers = new HandlerList();
        handlers.setHandlers(new Handler[]{resourceHandler, servletContextHandler});

        Server server = new Server(8080);
        server.setHandler(handlers);
        server.start();
        server.join();
    }
}
