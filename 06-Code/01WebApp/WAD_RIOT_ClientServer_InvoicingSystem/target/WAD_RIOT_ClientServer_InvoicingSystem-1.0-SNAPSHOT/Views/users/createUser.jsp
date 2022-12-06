<%-- 
    Document   : createUser
    Created on : 25 nov. 2022, 13:22:38
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
    <title>Crear Usuario</title>
</head>
<body>
    <div class="container mt-4">
        <div class="row justify-content-evenly">
            <h1 class="text-center">Crear Usuario</h1>
        </div>
        <form action="Controller" method="post">
            
            <div class="row justify-content-evenly mb-4">
                <button name="action" value="adminUsers" class="btn btn-secondary col-3">Cancelar</button>
            </div>
            <!-- Error Message -->
            <%
                String login_msg=(String)request.getAttribute("error");  
                if(login_msg!=null)
                out.println("<div class='alert alert-danger'>"+login_msg+"</div>");
            %>
                                    
            <div class="row form-group mt-2">
                <label for="fullName" class="col-sm-3 col-form-label">Nombre Completo:</label>
                <div class="col-sm-9">
                    <input type="text" id="fullName" name="fullName" class="form-control" value=""></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="email" class="col-sm-3 col-form-label">Email:</label>
                <div class="col-sm-9">
                    <input type="email" id="email" name="email" class="form-control" value=""></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                 <label for="username"class="col-sm-3 col-form-label" >Usuario:</label>
                 <div class="col-sm-9">
                    <input type="text" id="username" name="username" class="form-control"  value=""></input>
                 </div>
            </div>
                 
            <div class="row form-group mt-2">
                 <label for="userType"class="col-sm-3 col-form-label" >Tipo de Usuario:</label>
                 <div class="col-sm-9">
                    <select id="userType" name="userType"class="form-select">
                        <option selected>Seleccione el tipo de Usuario</option>
                        <option value="cashier">Cajero</option>
                        <option value="admin">Administrador</option>
                    </select>
                 </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="password" class="col-sm-3 col-form-label">Contraseña:</label>
                <div class="col-sm-9">
                    <input type="password" id="password" name="password" class="form-control"></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="passwordRepeat" class="col-sm-3 col-form-label">Repetir Contraseña:</label>
                <div class="col-sm-9">
                    <input type="password" id="passwordRepeat" name="passwordRepeat" class="form-control"></input>
                </div>
            </div>
            
            <div class="row justify-content-center mt-4">          
                <button type="submit" name="action" value="createUser" class="btn btn-success col-3">Confirmar</button>
            </div>
        </form>
    </div>
</body>
</html>

