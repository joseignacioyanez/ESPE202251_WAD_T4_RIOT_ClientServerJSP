<%-- 
    Document   : updateUser
    Created on : 23 nov. 2022, 15:25:46
    Author     : mishe
--%>

<%@page import="org.bson.types.ObjectId"%>
<%@page import="Model.User"%>
<%@page import="ModelDAOImpl.UserDAOImpl"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
     <meta http-equiv="Content-Type" content="text/html; charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
          crossorigin="anonymous">
    <title>Modificar Usuario</title>
</head>
<body>
    <div class="container mt-4">
        <div class="row justify-content-evenly">
            <h1 class="text-center">Modificar Usuario</h1>
        </div>
        <form action="Controller" method="post">
            
            <div class="row justify-content-evenly mb-4">
                <button name="action" value="adminUsers" class="btn btn-secondary col-3">Cancelar</button>
            </div>
            
            <%
                UserDAOImpl userDAO = new UserDAOImpl();
                System.out.println("Llegue aqui");
                String idString = request.getParameter("id");
                ObjectId objectId = new ObjectId(idString);
                        
                User user = userDAO.listUser(objectId);
                
            %>
                  
            <div class="row form-group mt-2">
                <label for="fullName" class="col-sm-3 col-form-label">Nombre Completo:</label>
                <div class="col-sm-9">
                    <input type="text" id="fullName" name="fullName" disabled class="form-control" value="<%= user.getFullName() %>"></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="email" class="col-sm-3 col-form-label">Email:</label>
                <div class="col-sm-9">
                    <input type="text" id="email" name="email" class="form-control" value="<%= user.getEmail()%></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                 <label for="username"class="col-sm-3 col-form-label" >Usuario:</label>
                 <div class="col-sm-9">
                    <input type="text" id="username" name="username" class="form-control"  value="<%= user.getUsername()%></input>
                 </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="password" class="col-sm-3 col-form-label">Contraseña:</label>
                <div class="col-sm-9">
                    <input type="text" id="password" name="password" class="form-control"></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="passwordRepeat" class="col-sm-3 col-form-label">Repetir Contraseña:</label>
                <div class="col-sm-9">
                    <input type="password" id="passwordRepeat" name="passwordRepeat" class="form-control"></input>
                </div>
            </div>
            
            <div class="row justify-content-center mt-4">          
                <button name="action" value="updateProduct" class="btn btn-success col-3">Confirmar</button>
            </div>
        </form>
    </div>
</body>
</html>
