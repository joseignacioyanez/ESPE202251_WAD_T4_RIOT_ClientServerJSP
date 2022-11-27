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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">

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
       
                <form action="Controller" method="post">
                    <div class="row  d-flex justify-content-center mt-5 mb-5">

                        <button type='submit' name='action' value='adminUsers'  class="btn btn-info col-4 ms-1 me-3"><i class="bi bi-people-fill me-3"></i>Administrar Usuarios</button>
                        <button type='submit' name='action' value='adminMenuItems'  class="btn btn-info col-4 ms-1 me-3"><i class="bi bi-book me-3"></i>Administrar Menú</button>
                    </div>
                    <div class="row  d-flex justify-content-center mt-5 mb-5">
                        <button type='submit' name='action' value='adminClients'  class="btn btn-info col-4 ms-1 me-3"><i class="bi bi-people me-3"></i>Administrar Clientes</button>
                        <button type='submit' name='action' value='adminFacturas'  class="btn btn-info col-4 ms-1 me-3"><i class="bi bi-receipt me-3"></i>Administrar Facturas</button>

                    </div>
                </form>
                
            </div>
    </body>
</html>