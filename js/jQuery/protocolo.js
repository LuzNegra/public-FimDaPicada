const url = "http://localhost:3000";

$(document).ready(function(){
    $("#tbn_buscar").click(function(){
        procurarProtocolo();
    })
    function procurarProtocolo(){
        $.ajax({
            type:"GET",
            url: "http://localhost:3000/denuncia/" + $("#protocolo").val(),
            success:function(data){
                $("#cep").val(data.cep);
                $("#estado").val(data.estado);
                $("#cidade").val(data.cidade);
                $("#bairro").val(data.bairro);
                $("#rua").val(data.rua);
                $("#numero").val(data.numero);
                $("#complemento").val(data.completamento);
                $("#descricao").val(data.descricao);
            },error:function(message){
                alert("Falha")
            }
        });  
    }
});