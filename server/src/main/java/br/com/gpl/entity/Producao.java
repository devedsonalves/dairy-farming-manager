package br.com.gpl.entity;

public class Producao {

  private String data;
  private double litros;
  private double receita;

  public void setData(String data) {
    this.data = data;
  }

  public String getData() {
    return data;
  }

  public void setLitros(double litros) {
    this.litros = litros;
  }

  public double getLitros() {
    return litros;
  }

  public void setReceita(double receita) {
    this.receita = receita;
  }

  public double getReceita() {
    return receita;
  }

  public double calcularReceita(double precoLeite) {
    this.receita = precoLeite * litros;

    return receita;
  }


}