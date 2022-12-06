<%-- 
    Document   : MenuItem
    Created on : 27 nov. 2022, 10:35:03
    Author     : mishe
--%>

<%@page import="Model.MenuItem"%>
<%@page import="java.util.ArrayList"%>
<%@page import="ModelDAOImpl.MenuItemDAOImpl"%>
<%@page import="Interfaces.MenuItemDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
                  rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
                  crossorigin="anonymous">

	<title>Productos</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-4">
            
            <div class="row justify-content-between mt-4 mb-4">
                <h1 class="text-center">Productos</h1>
                <form action="Controller" method="post">
                    <div class="row justify-content-evenly">
                        <button type="submit" name="action" value="adminMenu" class="btn btn-secondary col-3 text-center">Cancelar</button>
                        <button type='submit' name="action" value="goToCreateMenuItemView" class="btn btn-success col-3 text-center">Crear Producto</button>
                    </div>
                    </form>
            </div>

			<table class="table table-secondary">
				<thead>
                                    <th class="text-center">Código</th>
                                    <th class="text-center">Nombre</th>
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
                                    MenuItemDAOImpl menuItemDAO = new MenuItemDAOImpl();
                                    ArrayList<MenuItem> menuItemsList = menuItemDAO.listMenuItems();                                    
                                    for (MenuItem menuItem : menuItemsList){
                                        
                                %>
                                <tr>
                                    <td class="text-center"><%= menuItem.getCode()%></td>
                                    <td class="text-center"><%= menuItem.getName()%></td>
                                    <td class="text-center">
                                        <form action="Controller" method="post">
                                            <input name="code" value="<%= menuItem.getCode()%>" type="hidden">
                                            <button name="action" value="goToUpdateMenuItemView" class="btn btn-warning">
                                                Editar
                                            </button>  
                                        </form>
                                    </td>
                                    <td class="text-center">
                                        <form action="Controller" method="post">
                                            <input name="code" value="<%= menuItem.getCode()%>" type="hidden">
                                            <button name="action" value="deleteMenuItem" class="btn btn-danger">
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

