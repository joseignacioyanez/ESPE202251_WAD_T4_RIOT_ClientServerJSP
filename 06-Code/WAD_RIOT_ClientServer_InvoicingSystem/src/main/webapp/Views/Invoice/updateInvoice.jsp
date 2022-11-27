<%-- 
    Document   : updateUser
    Created on : 23 nov. 2022, 15:25:46
    Author     : mishe
--%>

<%@page import="org.bson.types.ObjectId"%>
<%@page import="Model.Invoice"%>
<%@page import="ModelDAOImpl.InvoiceDAOImpl"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
     <meta http-equiv="Content-Type" content="text/html; charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
          crossorigin="anonymous">
    <title>Modificar Factura</title>
</head>
<body>
    <div class="container mt-4">
        <div class="row justify-content-evenly">
            <h1 class="text-center">Modificar Factura</h1>
        </div>
        <form action="Controller" method="post">
            
            <div class="row justify-content-evenly mb-4">
                <button name="action" value="updateInvoice" class="btn btn-secondary col-3">Cancelar</button>
            </div>
            <!-- Error Message -->
            <%
                String login_msg=(String)request.getAttribute("error");  
                if(login_msg!=null)
                out.println("<div class='alert alert-danger'>"+login_msg+"</div>");
            %>
            
            <%
                InvoiceDAOImpl InvoiceDAO = new InvoiceDAOImpl();
                System.out.println("Llegue aqui");
                String idString = request.getParameter("id");
                        
                Invoice invoice = InvoiceDAO.listInvoice(idString);
                
            %>
            
            <input type="text" id="oid" name="oid" hidden class="form-control" value="<%= idString%>"></input>
            
            <div class="row form-group mt-2">
                <label for="fullName" class="col-sm-3 col-form-label">Nombre Completo:</label>
                <div class="col-sm-9">
                    <input type="text" id="clientName" name="clientName" readonly="readonly" class="form-control" value="<%= invoice.getclientName() %>"></input>
                </div>
            </div>
            <div class="row form-group mt-2">
                <label for="invoiceNumber" class="col-sm-3 col-form-label">Numero de Factura:</label>
                <div class="col-sm-9">
                    <input type="int" id="invoiceNumber" name="invoiceNumber" readonly="readonly" class="form-control" value="<%= invoice.getinvoiceNumber() %>"></input>
                </div>
            </div>
                
            <div class="row form-group mt-2">
                <label for="invoiceDate" class="col-sm-3 col-form-label">Fecha:</label>
                <div class="col-sm-9">
                    <input type="LocalDate" id="invoiceDate" name="date" readonly="readonly" class="form-control" value="<%= invoice.getinvoiceDate() %>"></input>
                </div>
            </div>
                
            <div class="row form-group mt-2">
                <label for="clientIDCard" class="col-sm-3 col-form-label">Cedula:</label>
                <div class="col-sm-9">
                    <input type="string" id="clientIDCard" name="ID Card" readonly="readonly" class="form-control" value="<%= invoice.getclientlDCard() %>"></input>
                </div>
            </div>
            
            <div class="row form-group mt-2">
                <label for="email" class="col-sm-3 col-form-label">Email:</label>
                <div class="col-sm-9">
                    <input type="clientEmail" id="clientEmail" name="clientEmail" class="form-control" value="<%= invoice.getclientEmail()%>"></input>
                </div>
            </div>
           
            <div class="row justify-content-center mt-4">          
                <button type="submit" name="action" value="updateInvoice" class="btn btn-success col-3">Confirmar</button>
            </div>
        </form>
    </div>
</body>
</html>
