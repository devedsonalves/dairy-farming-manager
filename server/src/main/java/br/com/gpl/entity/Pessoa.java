package br.com.gpl.entity;

import org.springframework.data.annotation.Id;

public class Pessoa {

  @Id
  private String id;

  protected String nome;
  protected int idade;
  protected String endereco;

  public Pessoa() {
    super();
  }

  public Pessoa(String nome, int idade, String endereco) {
    super();
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getId() {
    return id;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getNome() {
    return nome;
  }

  public void setIdade(int idade) {
    this.idade = idade;
  }

  public int getIdade() {
    return idade;
  }

  public void setEndereco(String endereco) {
    this.endereco = endereco;
  }

  public String getEndereco() {
    return endereco;
  }

}
