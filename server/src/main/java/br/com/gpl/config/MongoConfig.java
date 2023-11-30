package br.com.gpl.config;

import org.springframework.context.annotation.*;
import com.mongodb.ConnectionString;
import com.mongodb.client.*;

@Configuration
public class MongoConfig {

  @Bean
  public MongoClient mongoClient() {
    ConnectionString connectionString = new ConnectionString(
        "xxx");

    return MongoClients.create(connectionString);
  }

}
