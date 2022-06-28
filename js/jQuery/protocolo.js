const url = "https://api-fimdapicada.herokuapp.com";

$(document).ready(function(){
    $("#tbn_buscar").click(function(){
        procurarProtocolo();
    })
    function procurarProtocolo(){
        $.ajax({
            type:"GET",
            url: uel + "/denuncia/" + $("#protocolo").val(),
            success:function(data){
                $("#cep").val(data.cep);
                $("#estado").val(data.estado);
                $("#cidade").val(data.cidade);
                $("#bairro").val(data.bairro);
                $("#rua").val(data.rua);
                $("#numero").val(data.numero);
                $("#complemento").val(data.completamento);
                $("#descricao").val(data.descricao);
                $("#status").val(data.denuncia_status);
            },error:function(message){
                alert("Falha")
            }
        });  
    }
});