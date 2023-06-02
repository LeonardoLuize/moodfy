<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form class="inputs" method="POST" action="Connection/insertData.php">
        Name <input type="text" name="name"/><br>
        Latitude <input type="text" name="lat"/><br>
        Longitude <input type="text" name="long"/><br>
        Descricao <input type="text" name="desc"/><br>
        Foto <input type="text" name="photo"/><br>
        <button type="submit" name="submit">Submit</button>
</form>
</body>
</html>
<!-- $name . $lat . $long . $desc . $photo; -->