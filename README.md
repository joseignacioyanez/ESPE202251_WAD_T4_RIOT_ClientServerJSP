# InvoicingSystem 🧾 - Team 5 - RIOT [RIOT Is Our Team] - ESPE_WAD

## Activity 5️⃣ - React Front End for Node.js APIs Back End - Final Project

### Google Doc:
- https://docs.google.com/document/d/1dS-PXOtpPJJYucYZg-7XtyN4eijbNKl_hYrEf8sWHYE/edit?usp=sharing

### Deployed to personal ☁️ for now and Accessible to test via:

- **FrontEnd:** http://34.105.52.36:3005/

To test the JWT Authentication with roles, you can use this credentials:

| Username    |Password     |Roles                  |
| ----------- | ----------- | --------------------- |
| jiyf        | jiyf        |Admin + Cashier + User |
| jyfc        | jiyfc       |Cashier + User         |
| jiyfu       | jiyfu       |User                   |

For the Final Project we had to finish implementing the BackEnd Services on the FrontEnd, these are the URIs that are implemented and their status. 

| Number | Method | BackEnd URI used    (⭐️ Business Rule)                                | Status |
| ------ | ------ | --------------------------------------------------------------------- | ------ |
| 1      | POST   | ✨ /login                                                             | ✅     |
| 2      | GET    | /restaurant/clients                                                   | ✅     |
| 3      | GET    | /restaurant/users                                                     | ✅     |
| 4      | GET    | /restaurant/menuItems                                                 | ✅     |
| 5      | GET    | /restaurant/invoices                                                  | ✅     |
| 6      | POST   | /restaurant/clients                                                   | ✅     |
| 7      | POST   | ⭐️ /restaurant/users                                                  | ✅     |
| 8      | POST   | /restaurant/menuItems                                                 | ✅     |
| 9      | POST   | /restaurant/invoices                                                  | 🚧     |
| 10     | PUT    | /restaurant/client/{idCard}                                           | ✅     |
| 11     | PUT    | /restaurant/users/{username}                                          | ✅     |
| 12     | PUT    | /restaurant/menuItem/{idCard}                                         | ✅     |
| 13     | PUT    | /restaurant/invoice/{invoiceNumber}                                   | 🚧     |
| 14     | DELETE | /restaurant/client/{idCard}                                           | ✅     |
| 15     | DELETE | /restaurant/users/{username}                                          | ✅     |
| 16     | DELETE | /restaurant/menuItem/{invoiceNumber}                                  | ✅     |
| 17     | DELETE | /restaurant/invoice/{invoiceNumber}                                   | ✅     |
| 18     | GET    | ⭐️ /restaurant/menuItem/{code}/discount/{percentage}/client/{idCard}  | ✅     |
| 19     | GET    | ⭐️ /restaurant/client/{idCard}/report/                                | ✅     |


- **BackEnd with JWT Authentication:** http://52.23.176.81:3005/login
  - You can make a POST request using Postman to /login with:
  - username: jiyf
  - passwordHash: jiyf
  - You'll get a Token to be set as Bearer Token
  - And now you can access routes like /restaurant/clients for a couple of minutes




### Images
**Login**
![Front End](https://i.imgur.com/li3AAec.png)

**Home**
![Front End](https://i.imgur.com/WBjAmH0.png)

**Admin Menu**
![Front End](https://i.imgur.com/bDH9nRD.png)

**Clients Listing (GET)**
![Front End](https://i.imgur.com/XTOYS97.png)

**New Client (POST & PUT)**
![Front End](https://i.imgur.com/ZvBEK4O.png)

**Loading Screen While Deleting (DELETE)**
![Front End](https://i.imgur.com/cwGRvTF.png)

**Report/Summary of Purchases of a Client - ⭐️ Business Rule**
![Front End](https://i.imgur.com/JLudVRe.png)

**Send MenuItem Promotion to WhatsApp of Client - ⭐️ Business Rule**
![Front End](https://i.imgur.com/gUz3vhi.png)
![Front End](https://i.imgur.com/idVoyje.png)


## Activity 3️⃣ - React Front End for Node.js APIs Back End Applications

### Google Doc:
- https://docs.google.com/document/d/11rRciNvJ2E1GBQPY0F6za5w3fnIRM4gTCaudg0tQxCs/edit?usp=sharing

### Deployed to personal ☁️ for now and Accessible to test via:

### Part 1 - Scientific Papers API Front End
-- **FrontEnd:** [http://34.105.52.36:3001/](http://34.105.52.36:3001/)

#### Part 2 - Invoicing System for a Business
- **BackEnd:** http://44.211.70.232:3005/login
  - You can make a POST request to /login with:
  - username: jiyf
  - passwordHash: jiyf
  - You'll get a Token to be set as Bearer Token
  - And now you can access routes like /restaurant/clients for a couple of minutes
- **FrontEnd:** [http://34.105.52.36:3002/](http://34.105.52.36:3002/)


### Images
**Front End React**

![Front End](https://i.imgur.com/wRCBSEb.png)
![Front End](https://i.imgur.com/16b83KB.png)
![Front End](https://i.imgur.com/N4zAfSb.png)

**Auth with JWT, Cookies and Roles**

![Front End](https://i.imgur.com/xUrcuVT.png)
![Front End](https://i.imgur.com/r49pcM7.png)
![Front End](https://i.imgur.com/ttSIQ9d.png)

**Front End Route Protection with Back End API**

![Front End](https://i.imgur.com/wJtzB6c.png)

**Front End Scientific Papers API**
![Front End](https://i.imgur.com/rf4DGv3.png)
![Front End](https://i.imgur.com/Lkcq7m1.png)


## Activity 2️⃣ - REST API with Nodejs and MongoDB on AWS EC2

### Google Doc:
- https://docs.google.com/document/d/1TNORa9cNLx0goHKtFYnOZ_lSa9c8QvrchnQR8L24IL0/edit?usp=sharing

### Deployed to AWS EC2 ☁️ and Accessible to test via:
- http://ec2-3-85-13-59.compute-1.amazonaws.com:3005/restaurant/

### Images

TO DO


## Activity 1️⃣ - Client-Server Web Application wit JSP and MongoDB

### Google Doc:
- https://docs.google.com/document/d/1MxO-AWqYOYsuk94_0tUYQSFmKBhvNJ3fcShuSwrSZ5Q/edit?usp=sharing

### Deployed to the ☁️ and Accesible via (Deprecated):
- http://34.82.171.79:8080/WAD_RIOT_ClientServer_InvoicingSystem-1.0-SNAPSHOT/

### Images
![alt text](https://i.imgur.com/yguVB03.png)
![alt text](https://i.imgur.com/hIpI8Cq.png)
![alt text](https://i.imgur.com/xWCxmUs.png)
![alt text](https://i.imgur.com/DIEtTM8.png)



