function accessDB(query){
    $.post("db_conn.php", {"query":query}).done(function(data){
        console.log(data);
        return data;
    });
}