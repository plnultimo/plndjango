function GetMetodo(){
    $.ajax(
        {
            type:"GET",
            url: '10.10.130.22',
            data:"{}",
            contentType:"json",
            success:function(data){
                alert(data.numero);
            },
            error:control
        });
}
function control(asg,url,line){
    alert('error en error: function(msg,url,line)');
    alert('msg='+msg.statusText+',url')
}
