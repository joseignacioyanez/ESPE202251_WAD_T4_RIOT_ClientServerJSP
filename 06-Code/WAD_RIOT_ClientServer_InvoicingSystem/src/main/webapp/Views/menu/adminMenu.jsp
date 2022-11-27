<%-- 
    Document   : adminMenu
    Created on : 23 nov. 2022, 13:45:54
    Author     : mishe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
            <meta http-equiv="Content-Type" content="text/html; charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
                  rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
                  crossorigin="anonymous">

            <title>Menú del Administrador</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
            <div class="container mt-4">
                <div class="text-center mb-2">
                    <img class="mb-4 text-center" src="images/logoSantoPlacer.jpg" alt="" height="200">
                </div>
                
                <div class="row  d-flex text-center mt-2 mb-2">
                    
                    <h1 class="col">Menú del Administrador</h1>
                </div>
                <div class="row  d-flex justify-content-center mt-5 mb-5">
                    <form action="Controller" method="post" class="row  d-flex justify-content-center">
                        <button type="submit" value="logout" name='action' class="btn btn-danger col-4">Cerrar Sesión</button>
                    </form>
                    </div>
                <div class="text-center mt-3 mb-3">
                    <img src="images/people.png" alt="Users" height=200px class="ms-1 me-3"/>
                    <img src="images/menu.png" alt="Users" height=200px class="ms-3 me-1"/>
                </div>
                
                <form action="Controller" method="post">
                    <div class="row  d-flex justify-content-center mt-5 mb-5">
                        <button type='submit' name='action' value='adminUsers'  class="btn btn-info col-4 ms-1 me-3">Administrar Usuarios</button>
                        <button type='submit' name='action' value='adminMenuItems'  class="btn btn-info col-4 ms-1 me-3">Administrar Menú</button>
                    </div>
                </form>
                
            </div>
    </body>
</html>