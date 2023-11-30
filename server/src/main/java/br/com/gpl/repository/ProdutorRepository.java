package br.com.gpl.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import br.com.gpl.entity.Produtor;

@Repository
public interface ProdutorRepository extends MongoRepository<Produtor, String> {
}
