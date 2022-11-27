<%-- 
    Document   : createClient
    Created on : 27 nov. 2022, 13:24:24
    Author     : joseignacio
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
    <title>Crear Cliente</title>
</head>
<body>
    <div class="container mt-4">
        <div class="row justify-content-evenly">
            <h1 class="text-center">Crear Cliente</h1>
        </div>
        <form action="Controller" method="post">
            
            <div class="row justify-content-evenly mb-4">
                <button name="action" value="adminClients" class="btn btn-secondary col-3">Cancelar</button>
            </div>
            <!-- Error Message -->
            <%
                String login_msg=(String)request.getAttribute("error");  
                if(login_msg!=null)
                out.println("<div class='alert alert-danger'>"+login_msg+"</div>");
            %>
            
            <div class="row form-group mt-2">
                <label for="idCard" class="col-sm-3 col-form-label">Identificación CI/RUC:</label>
                <div class="col-sm-9">
                    <input type="text" id="idCard" name="idCard" class="form-control" ></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="name" class="col-sm-3 col-form-label">Nombre: </label>
                <div class="col-sm-9">
                    <input type="text" id="name" name="name"  class="form-control" ></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="address" class="col-sm-3 col-form-label">Dirección: </label>
                <div class="col-sm-9">
                    <input type="text" id="address" name="address" class="form-control" ></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                 <label for="cellphone"class="col-sm-3 col-form-label" >Teléfono: </label>
                 <div class="col-sm-9">
                    <input type="tel" id="cellphone" name="cellphone" class="form-control"  ></input>
                 </div>
            </div>
                 
            <div class="row form-group mt-2">
                <label for="email" class="col-sm-3 col-form-label">Email: </label>
                <div class="col-sm-9">
                    <input type="email" id="email" name="email" class="form-control" ></input>
                </div>
            </div>
            
            <div class="row justify-content-center mt-4">          
                <button type="submit" name="action" value="createClient" class="btn btn-success col-3">Confirmar</button>
            </div>
        </form>
    </div>
</body>
</html>

