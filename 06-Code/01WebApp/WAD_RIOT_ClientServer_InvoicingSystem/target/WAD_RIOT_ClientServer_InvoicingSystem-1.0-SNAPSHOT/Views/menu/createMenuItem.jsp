<%-- 
    Document   : createProduct
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
    <title>Crear Producto</title>
</head>
<body>
    <div class="container mt-4">
        <div class="row justify-content-evenly">
            <h1 class="text-center">Crear Producto</h1>
        </div>
        <form action="Controller" method="post">
            
            <div class="row justify-content-evenly mb-4">
                <button name="action" value="adminMenuItems" class="btn btn-secondary col-3">Cancelar</button>
            </div>
            <!-- Error Message -->
            <%
                String login_msg=(String)request.getAttribute("error");  
                if(login_msg!=null)
                out.println("<div class='alert alert-danger'>"+login_msg+"</div>");
            %>
                                    
            <div class="row form-group mt-2">
                 <label for="status"class="col-sm-3 col-form-label" >Estado:</label>
                 <div class="col-sm-9">
                    <select id="status" name="status"class="form-select">
                        <option selected>Seleccione el estado del producto</option>
                        <option value="active">Activo</option>
                        <option value="inactive">Inactivo</option>
                    </select>
                 </div>
            </div>
            <div class="row form-group mt-2">
                <label for="code" class="col-sm-3 col-form-label">Código:</label>
                <div class="col-sm-9">
                    <input type="text" id="code" name="code" class="form-control" value=""></input>
                </div>
            </div>
            <div class="row form-group mt-2">
                 <label for="category"class="col-sm-3 col-form-label" >Categoría:</label>
                 <div class="col-sm-9">
                    <select id="category" name="category"class="form-select">
                        <option selected>Seleccione el tipo de categoría</option>
                        <option value="product">Producto</option>
                        <option value="send">Envio</option>
                    </select>
                 </div>
            </div>
            <div class="row form-group mt-2">
                 <label for="name"class="col-sm-3 col-form-label" >Nombre:</label>
                 <div class="col-sm-9">
                    <input type="text" id="name" name="name" class="form-control"  value=""></input>
                 </div>
            </div>
            <div class="row form-group mt-2">
                 <label for="price"class="col-sm-3 col-form-label" >Precio:</label>
                 <div class="col-sm-9">
                    <input type="text" id="price" name="price" class="form-control"  value=""></input>
                 </div>
            </div>                       
            <div class="row form-group mt-2">
                 <label for="paysTaxes"class="col-sm-3 col-form-label" >IVA:</label>
                 <div class="col-sm-9">
                    <select id="paysTaxes" name="paysTaxes"class="form-select">
                        <option selected></option>
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>
                 </div>
            </div>                      
            <div class="row justify-content-center mt-4">          
                <button type="submit" name="action" value="createProduct" class="btn btn-success col-3">Confirmar</button>
            </div>
        </form>
    </div>
</body>
</html>
