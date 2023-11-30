package br.com.gpl.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Produtor extends Pessoa {

  private double precoLeite;
  private List<Vaca> gado;

  public Produtor() {
    super();
  }

  public Produtor(String nome, int idade, String endereco, double precoLeite, List<Vaca> gado) {
    super(nome, idade, endereco);
    this.precoLeite = precoLeite;
    this.gado = gado;
  }

  public void setPrecoLeite(double precoLeite) {
    this.precoLeite = precoLeite;
  }

  public double getPrecoLeite() {
    return precoLeite;
  }

  public void setGado(List<Vaca> gado) {
    this.gado = gado;
  }

  public List<Vaca> getGado() {
    return gado;
  }

}
