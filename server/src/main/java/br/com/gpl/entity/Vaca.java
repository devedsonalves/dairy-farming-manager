package br.com.gpl.entity;

import java.util.List;

public class Vaca {

  private String raca;
  private String fase;
  private List<Producao> producao;

  public void setRaca(String raca) {
    this.raca = raca;
  }

  public String getRaca() {
    return raca;
  }

  public void setFase(String fase) {
    this.fase = fase;
  }

  public String getFase() {
    return fase;
  }

  public void setProducao(List<Producao> producao) {
    this.producao = producao;
  }

  public List<Producao> getProducao() {
    return producao;
  }

}