<%-- 
    Document   : index
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
        
        <!-- Estilos modificados a partir de Ejemplos de Bootstrap
                https://getbootstrap.com/docs/5.2/examples/sign-in/ -->
        
        <style>
            html,body {
              height: 100%;
            }

            body {
              display: flex;
              align-items: center;
              padding-top: 40px;
              padding-bottom: 40px;
            }

            .form-signin {
              max-width: 330px;
              padding: 15px;
            }

            .form-signin .form-floating:focus-within {
              z-index: 2;
            }

            .form-signin input[type="email"] {
              margin-bottom: -1px;
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            }

            .form-signin input[type="password"] {
              margin-bottom: 10px;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
        </style>
        
        <title>Santo Placer - Sistema de Facturación</title>
    </head>
    <body class="text-center">
        <main class="form-signin w-100 m-auto">
            <form action="Controller" method="post">
                <img class="mb-4" src="images/logoSantoPlacer.jpg" alt="" height="200">
                <h1 class="h3 mb-3 fw-normal">Inicio de Sesión</h1>
                
                <!-- Codigo modificado, original de Premkumar
                   https://stackoverflow.com/questions/27311256/display-password-error-message-in-login-page-itself-using-servlet -->
                
                <%
                String login_msg=(String)request.getAttribute("error");  
                if(login_msg!=null)
                out.println("<div class='alert alert-danger'>"+login_msg+"</div>");
                %>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Usuario" name="username">
                    <label for="floatingInput">Usuario</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" name="password">
                    <label for="floatingPassword">Contraseña</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit" name="action" value="login">Iniciar Sesión</button>
                <p class="mt-5 mb-3 text-muted">RIOT [RIOT Is Our Team] - WAD - 2022</p>
            </form>
        </main>
    </body>
</html>
