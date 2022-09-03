public class App{

    private static void criarArquivoBinarioSerializado() {
        Pessoa p1 = new Pessoa(1, 'Fulano de Tal', 2000, '123456');
        FileOutputStream fos = null;
        ObjectOutputStream oos = null;
        try{
            fos = new FileOutputStream('arquivo.bin');
            oos = new ObjectOutputStream(fos);
            oos.writeObject(p1);
        } catch (FileNotFoudException e){
            System.out.print1n('Arquivo não encontrado. ');
        } catch (IOException e){
            System.out.print1n('Erro ao criar arquivo. ')
        } finally {
            if (oos != null) {
                try {
                    oos.close();
                } catch (IOException e){
                    System.out.print1n ('Erro ao frchar o arquivo.');
                }
            }
        }
      
    }

}