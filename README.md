<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Prerequisite</h1>
    <ul>
      <li>NodeJS</li>
      <li>Java</li>
      <li>MySQL</li>
      <li>Meaven</li>
    </ul>
    <h1>Frontend</h1>
    <p>To Run the Frontend: </p>
    <ul>
      <li>cd frontend</li>
      <li>npx serve -s build</li>
    </ul>
    <p>Frontend Server: </p>
    <ul>
      <li>host: localhost</li>
      <li>port: 3000</li>
    </ul>
    <h1>Backend</h1>
    <p>To Run the Backend: </p>
    <ul>
      <li>cd backend</li>
      <li>change database information at backend/src/main/resources/application.yaml</li>
      <li>mvn clean install</li>
      <li>java -jar target/backend-1.0.0.jar</li>
    </ul>
    <p>Backend Server: </p>
    <ul>
      <li>host: localhost</li>
      <li>port: 8000</li>
    </ul>
    <h1>Database</h1>
    <ul>
      <li>user: root</li>
      <li>password: root</li>
      <li>host: localhost</li>
      <li>port: 3306</li>
      <li>name: fullstackpersondb</li>
    </ul>
  </body>
</html>
