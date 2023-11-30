package br.com.gpl.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.gpl.entity.*;
import br.com.gpl.repository.ProdutorRepository;

@Service
public class ProdutorServiceImpl implements ProdutorService {

  @Autowired
  private ProdutorRepository produtorRepository;

  @Override
  public List<Produtor> getAllProdutores() {
    return produtorRepository.findAll();
  }

  @Override
  public Produtor getById(String id) {
    return produtorRepository.findById(id).orElse(null);
  }

  @Override
  public Produtor criarProdutor(Produtor produtor) {
    if (produtor.getGado() == null) {
      produtor.setGado(new ArrayList<Vaca>());
    }

    return produtorRepository.save(produtor);
  }

  @Override
  public Produtor adicionarVaca(String id, Vaca vaca) {
    Produtor produtor = produtorRepository.findById(id).orElse(null);

    if (produtor != null) {
      if (vaca.getProducao() == null) {
        vaca.setProducao(new ArrayList<Producao>());
      }

      produtor.getGado().add(vaca);

      return produtorRepository.save(produtor);
    }

    return null;
  }

  @Override
  public Produtor adicionarProducao(String id, int vacaIndex, Producao producaoAdd) {
    Produtor produtor = produtorRepository.findById(id).orElse(null);

    if (produtor != null) {
      List<Vaca> gado = produtor.getGado();
      List<Producao> producao = gado.get(vacaIndex).getProducao();

      producaoAdd.calcularReceita(produtor.getPrecoLeite());
      producao.add(producaoAdd);

      return produtorRepository.save(produtor);
    }

    return null;
  }

  @Override
  public Produtor atualizarProdutor(String id, Produtor atributos) {
    Produtor produtor = produtorRepository.findById(id).orElse(null);

    if (produtor != null) {
      if (atributos.getNome() != null) {
        produtor.setNome(atributos.getNome());
      }
      if (atributos.getIdade() > 0) {
        produtor.setIdade(atributos.getIdade());
      }
      if (atributos.getEndereco() != null) {
        produtor.setEndereco(atributos.getEndereco());
      }
      if (atributos.getPrecoLeite() > 0) {
        produtor.setPrecoLeite(atributos.getPrecoLeite());
      }

      return produtorRepository.save(produtor);
    }

    return null;
  }

  @Override
  public String deleteProdutor(String id) {
    produtorRepository.deleteById(id);

    return "Produtor deletado com sucesso!";
  }

  @Override
  public Produtor deletarVaca(String id, int index) {
    Produtor produtor = produtorRepository.findById(id).orElse(null);

    if (produtor != null) {
      produtor.getGado().remove(index);

      return produtorRepository.save(produtor);
    }

    return null;
  }

  @Override
  public Produtor deletarProducao(String id, int vacaIndex, int producaoIndex) {
    Produtor produtor = produtorRepository.findById(id).orElse(null);

    if (produtor != null) {
      List<Vaca> gado = produtor.getGado();
      List<Producao> producao = gado.get(vacaIndex).getProducao();

      producao.remove(producaoIndex);

      return produtorRepository.save(produtor);
    }

    return null;
  }

}
