package br.com.gpl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.gpl.entity.Producao;
import br.com.gpl.entity.Produtor;
import br.com.gpl.entity.Vaca;

@Service
public interface ProdutorService {

  List<Produtor> getAllProdutores();

  Produtor getById(String id);

  Produtor criarProdutor(Produtor produtor);

  Produtor adicionarVaca(String id, Vaca vaca);

  Produtor adicionarProducao(String id, int vacaIndex, Producao producaoAdd);

  Produtor atualizarProdutor(String id, Produtor atributos);

  String deleteProdutor(String id);

  Produtor deletarVaca(String id, int index);

  Produtor deletarProducao(String id, int vacaIndex, int producaoIndex);

}
