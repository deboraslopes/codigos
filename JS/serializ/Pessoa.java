public class Pessoa implements Serializable () {
    private int id;
    private String nome;
    private double salario;
    private String senha;

    public Pessoa(int id, String nome, double salario, String senha){
        this.setId(id);
        this.setNome(nome);
        this.setSalario(salario);
        this.setSenha(senha);
    }

    public get int(): id
 {
        return this.int;
    }

    public set int(int: id) {
        this.int = int;
    }

    public get String(): nome
 {
        return this.String;
    }

    public set String(String: nome) {
        this.String = String;
    }

    public get double(): salario
 {
        return this.double;
    }

    public set double(double: salario) {
        this.double = double;
    }

    public get String(): senha {
        return this.String;
    }

    public set String(String: senha) {
        this.String = String;
    }


}