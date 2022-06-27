const url = "https://api-fimdapicada.herokuapp.com";

$(document).ready(function(){
    $("#tbn_denunciar").click(function(){
        procurarEndereco();
    });

    $(".copy-link").click(function(){
        copiarTexto();
        $(location).attr('href', '../index.html');
    });
    function procurarEndereco(){
        $.ajax({
            url: url + "/endereco/procurar",
            type: "POST",
            data: {
                cep: $("#cep").val(),
                estado: $("#estado").val(),
                cidade: $("#cidade").val(),
                bairro: $("#bairro").val(),
                rua: $("#rua").val(),
                numero: $("#numero").val()
            },
            success:function(message){
                if(message.id > -1){
                    //alert("Seu endereço é " + message.id);
                    cadastrarDenuncia(message.id);
                }else{
                    cadastrarEndereco();
                }
            },error:function(message){
                alert("Endereço falhou");
            }
        });
    }

    function cadastrarEndereco (){
        $.ajax({
            url: url + "/endereco/cadastrar",
            type: "POST",
            data: {
                cep: $("#cep").val(),
                estado: $("#estado").val(),
                cidade: $("#cidade").val(),
                bairro: $("#bairro").val(),
                rua: $("#rua").val(),
                numero: $("#numero").val()
            },
            success:function(message){
                //alert("Novo endereço cadastrado: \n" + message.id);
                cadastrarDenuncia(message.id);
            },error:function(message){
                alert("Cadastro falhou falhou");
            }
        });
    }

    function cadastrarDenuncia (endereco_ID){
        const protocolo_Num = GeraProtocolo();
        $.ajax({
            url: url + "/denuncia/cadastrar",
            type: "POST",
            data: {
                endereco: endereco_ID,
                complemento: $("#complemento").val(),
                descricao: $("#descricao").val(),
                protocolo : protocolo_Num
            },
            success:function(message){
                $(".numero-protocolo").text(protocolo_Num);
                $(".popup-wrapper").css("display" , "block");
               //alert("Denúncia realizada com sucesso \nSeu protocolo é: " + protocolo_Num);
            },error:function(message){
                alert("Cadastro falhou falhou");
            }
        })
    }

    function copiarTexto() {
        const copia = $(".numero-protocolo").text();
        navigator.clipboard.writeText(copia)
        console.log("copiado " + copia);
    }
    
    function GeraProtocolo (){
        var data = new Date();
        const hora = data.getHours();
        const minuto = data.getMinutes();
        const segundo = data.getSeconds();
        const dia = data.getDay();
        const mes = data.getMonth();
        const ano = data.getYear();
        const aleatorio = Math.floor(Math.random() * 65536);
        const dadosdadenuncia = (hora + minuto + segundo + dia + mes + ano )

        const protocolo = aleatorio.toString() + dadosdadenuncia.toString();
        return protocolo;
    }
});