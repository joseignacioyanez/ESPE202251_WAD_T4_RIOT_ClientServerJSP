<%-- 
    Document   : newInvoice
    Created on : 26 nov. 2022, 12:23:07
    Author     : joseignacio
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--Based on code from Obed Alvarado
    https://obedalvarado.com/ -->
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Nueva Factura</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
            crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
        <link href="styles/invoicingStyles.css" rel="stylesheet" type="text/css"/>
    <body>
        <!-- Alert if client does not exist -->
        <%
            String msg=(String)request.getAttribute("errorClientDoesNotExist");  
            if(msg!=null)
            out.println("<script>window.alert('Este usuario no existe, verifique la identificación o cree un cliente nuevo')</script>");
        %>
        
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-info ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Facturación - Santo Placer</a>
                <button class="navbar-toggler p-0 border-0" type="button">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="facturas.php"><i class="bi bi-file-earmark"></i> Nueva Factura</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="Controller"><i class="bi bi-check-circle-fill"></i> Facturar</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item">
                            <form action="Controller" method="post">
                                <input hidden name='action' value=''>
                                <button class="btn btn-danger"><i class="bi bi-power"></i> Salir</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <main class="container">
            <div class="card my-3">
                <div class="d-flex card-header">
                    <div class="p-0 flex-grow-1 ">
                        <h5><i class="bi bi-plus-circle"></i> Nueva Factura</h5>
                    </div>
                </div>
                <div class="card-body">
                    <form class="form-horizontal" role="form" id="datos_factura" action="Controller" method="post">
                        <div class="row">
                            <label for="idCard" class="col-lg-1 control-label">Cédula Cliente</label>
                            <div class="col-lg-3">
                                <input id="idCard" name="idCard" type='text' value="" required value="" class="form-control input-sm" placeholder="Busque la Identificación">	
                            </div>

                            <button class="col-1 btn btn-secondary btn-square-sm" type="submit" name="action" value="searchClient"><i class='bi bi-search'></i></button>
                            
                            <label for="clientName" class="col-lg-1 control-label">Nombre de Cliente</label>
                            <div class="col-lg-3">
                                <input type="text" class="form-control input-sm" id="clientName" name="clientName" placeholder="Nombre del Cliente" required value="" readonly>
                            </div>

                            <label for="telephone" class="col-sm-1 control-label">Teléfono</label>
                            <div class="col-lg-2">
                                <input type="text" class="form-control input-sm" id="telephone" name="telephone" placeholder="Teléfono" value="" readonly>
                            </div>
                        </div>
                        <div class="row my-2">
                            <label for="email" class="col-lg-1 control-label">Email</label>
                            <div class="col-lg-3">
                                <input type="text" class="form-control input-sm" id="email" name="email" placeholder="Email" readonly value="">
                            </div>

                            <label for="date" class="col-lg-1 control-label">Fecha</label>
                            <div class="col-lg-2">
                                <input type="date" class="form-control input-sm" id="date" name="date">
                            </div>
                            <label for="paymentMethod" class="col-lg-1 control-label">Pago</label>
                            <div class="col-lg-1">
                                <select class='form-control input-sm ' id="paymentMethod" name="paymentMethod">
                                    <option value="cash" >Efectivo</option>
                                    <option value="cheque" >Cheque</option>
                                    <option value="transfer" >Transferencia</option>
                                    <option value="creditCard" >Crédito</option>
                                    <option value="debitCard" >Débito</option>
                                </select>
                            </div>
                            <label for="paymentState" class="col-lg-1 control-label">Estado de Pago</label>
                            <div class="col-lg-1">
                                <select class='form-control input-sm ' id="paymentState" name="paymentState">
                                    <option value="paid" >Pagado</option>
                                    <option value="pending" >Pendiente</option>
                                </select>
                            </div>
                        </div>
                        <!--Menu under-->
                        <div class="col-md-12">
                            <div class="d-flex justify-content-md-end">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-outline-secondary"><i class='bi bi-person-fill'></i> Nuevo cliente</button>
                                    <button type="button" class="btn btn-outline-secondary"><i class='bi bi-search'></i> Agregar productos</button>
                                    <button type="button" name="action" value="" class="btn btn-success"><i class="bi bi-check"></i>Facturar</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div id="invoiceDetails" class='col-md-12' style="margin-top:10px"></div>
                    <!-- Carga los datos ajax -->
                </div>
            </div>
        </main>
        <footer class="footer mt-auto py-3 bg-info">
            <div class="container">
                <span class="text-white">© 2022  -  <a class="text-white" href="https://github.com/joseignacioyanez/Team4_RIOT_InvoicingSystem">  RIOT [RIOT Is Our Team]</a>  -   Web Applications Development  -  Edison Lascano</span>
            </div>
        </footer>

    </body>
</html>