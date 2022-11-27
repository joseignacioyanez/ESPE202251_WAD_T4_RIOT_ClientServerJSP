
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
