
%-- 
    Document   : adminUsers
    Created on : 23 nov. 2022, 14:27:23
    Author     : mishe
--%>

<%@page import="Model.User"%>
<%@page import="java.util.ArrayList"%>
<%@page import="ModelDAOImpl.UserDAOImpl"%>
<%@page import="Interfaces.UserDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<<<<<<< HEAD
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
                  rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
                  crossorigin="anonymous">

	<title>Usuarios</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-4">
            
            <div class="row justify-content-between mt-4 mb-4">
                <h1 class="text-center">Usuarios</h1>
                <form action="Controller" method="post">
                    <div class="row justify-content-evenly">
                        <button type="submit" name="action" value="adminMenu" class="btn btn-secondary col-3 text-center">Cancelar</button>
                        <button type='submit' name="action" value="goToCreateUserView" class="btn btn-success col-3 text-center">Crear Usuario</button>
                    </div>
                    </form>
            </div>

			<table class="table table-secondary">
				<thead>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Usuario</th>
                                    <th class="text-center">Editar</th>
                                    <th class="text-center">Eliminar</th>
				</thead>
                                <tbody>
                                <!-- Success at Update Message -->
                                <%
                                    String msg=(String)request.getAttribute("success");  
                                    if(msg!=null)
                                    out.println("<div class='alert alert-success'>"+msg+"</div>");
                                %>
                                <!-- Error at Update Message -->
                                <%
                                    String msgError=(String)request.getAttribute("error");  
                                    if(msgError!=null)
                                    out.println("<div class='alert alert-danger'>"+msgError+"</div>");
                                %>
                                    
                                <%
                                    UserDAOImpl userDAO = new UserDAOImpl();
                                    ArrayList<User> usersList = userDAO.listUsers();
                                    for (User user : usersList){
                                        
                                %>
                                <tr>
                                    <td class="text-center"><%= user.getFullName() %></td>
                                    <td class="text-center"><%= user.getEmail()%></td>
                                    <td class="text-center"><%= user.getUsername()%></td>
                                    <td class="text-center">
                                        <form action="Controller" method="post">
                                            <input name="id" value="<%= user.getOidString() %>" type="hidden">
                                            <button name="action" value="goToUpdateUserView" class="btn btn-warning">
                                                Editar
                                            </button>
                                        </form>
                                    </td>
                                    <td class="text-center">
                                        <form action="Controller" method="post">
                                            <input name="id" value="<%= user.getOidString() %>" type="hidden">
                                            <button name="action" value="deleteInvoice" class="btn btn-danger">
                                                Eliminar
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                <%}%>
                                </tbody>
		</table>
	</div>	
</body>
</html>
=======
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
                            <a class="nav-link " href="productos.php"><i class="bi bi-check-circle-fill"></i> Facturar</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item">
                            <a class="nav-link" href="login.php?logout"> <i class="bi bi-power"></i> Salir</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Buscar productos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input type="text" class="form-control" id="q" placeholder="Buscar productos" onkeyup="load(1)">
                                </div>
                                <div class="col-lg-6">
                                    <button type="button" class="btn btn-secondary" onclick="load(1)"><span class='bi bi-search'></span> Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div id="loader" style="position: absolute;	text-align: center;	top: 55px;	width: 100%;display:none;"></div>
                        <!-- Carga gif animado -->
                        <div id="outer_div" ></div>
                        <!-- Datos ajax Final -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> Agregar nuevo cliente		</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form method="post" id="guardarDatos" name="guardarDatos">
                            <div id="resultado_ajax_cl"></div>
                            <div class="mb-2">
                                <label for="nombre_cl" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nombre_cl" name="nombre_cl" required>
                            </div>
                            <div class="mb-2">
                                <label for="telefono_cl" class="col-form-label">Teléfono:</label>
                                <input type="text" class="form-control" id="telefono_cl" name="telefono_cl" >
                            </div>
                            <div class="mb-2">
                                <label for="email_cl" class="col-form-label">E-mail:</label>
                                <input type="email" class="form-control" id="email_cl" name="email_cl" >
                            </div>
                            <div class="mb-2">
                                <label for="direccion_cl" class="col-form-label">Dirección:</label>
                                <textarea class="form-control" id="direccion_cl" name="direccion_cl"   maxlength="255" ></textarea>	
                            </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" >Guardar datos</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="addModalProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> Agregar nuevo producto		</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form method="post" id="guardarDatosProducto" name="guardarDatosProducto">
                            <div id="resultado_ajax_x"></div>
                            <div class="mb-2">
                                <label for="codigo" class="col-form-label">Código del producto:</label>
                                <input type="text" class="form-control" id="codigo" name="codigo" placeholder="Código del producto" required>
                            </div>
                            <div class="mb-2">
                                <label for="nombre" class="col-form-label">Nombre del producto:</label>
                                <textarea class="form-control" id="nombre" name="nombre" placeholder="Nombre del producto" required maxlength="255" ></textarea>
                            </div>
                            <div class="mb-2">
                                <label for="estado" class="col-form-label">Estado:</label>
                                <select class="form-control" id="estado" name="estado" required>
                                    <option value="">-- Selecciona estado --</option>
                                    <option value="1" selected>Activo</option>
                                    <option value="0">Inactivo</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label for="precio" class="col-form-label">Precio:</label>
                                <input type="text" class="form-control" id="precio" name="precio" placeholder="Precio de venta del producto" required pattern="^[0-9]{1,5}(\.[0-9]{0,2})?$" title="Ingresa sólo números con 0 ó 2 decimales" maxlength="8">	
                            </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" >Guardar datos</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
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

                            <button class="col-1 btn btn-secondary btn-square-sm"><i class='bi bi-search'></i></button>
                            
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
                                    <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addModal"><i class='bi bi-person-fill'></i> Nuevo cliente</button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-outline-secondary"><i class='bi bi-search'></i> Agregar productos</button>
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
>>>>>>> a3d2d4029db9b5c4dc012fd570c78ed2e5c16c36
