package br.com.gpl.controller;

import br.com.gpl.entity.*;
import br.com.gpl.service.ProdutorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProdutorController {

  @Autowired
  private ProdutorService produtorService;

  @GetMapping("/produtores")
  public List<Produtor> getAllProdutores() {

    return produtorService.getAllProdutores();

  }

  @GetMapping("/produtores/{id}")
  public Produtor getById(@PathVariable String id) {

    return produtorService.getById(id);

  }

  @PostMapping("/produtores")
  public Produtor criarProdutor(@RequestBody Produtor produtor) {

    return produtorService.criarProdutor(produtor);

  }

  @PostMapping("/vaca/{id}")
  public Produtor adicionarVaca(@PathVariable String id, @RequestBody Vaca vaca) {

    return produtorService.adicionarVaca(id, vaca);

  }

  @PostMapping("vaca/{id}/{vacaIndex}")
  public Produtor adicionarProducao(
      @PathVariable String id,
      @PathVariable int vacaIndex,
      @RequestBody Producao producaoAdd) {

    return produtorService.adicionarProducao(id, vacaIndex, producaoAdd);

  }

  @PatchMapping("/produtores/{id}")
  public Produtor atualizarProdutor(@PathVariable String id, @RequestBody Produtor atributos) {

    return produtorService.atualizarProdutor(id, atributos);

  }

  @DeleteMapping("/produtores/{id}")
  public String deleteProdutor(@PathVariable String id) {

    return produtorService.deleteProdutor(id);

  }

  @DeleteMapping("/vaca/{id}/{index}")
  public Produtor deletarVaca(@PathVariable String id, @PathVariable int index) {

    return produtorService.deletarVaca(id, index);

  }

  @DeleteMapping("vaca/{id}/{vacaIndex}/{producaoIndex}")
  public Produtor deletarProducao(
      @PathVariable String id,
      @PathVariable int vacaIndex,
      @PathVariable int producaoIndex) {

    return produtorService.deletarProducao(id, vacaIndex, producaoIndex);

  }
}