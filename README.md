# prueba_DevContainer

## Comando para nueva api con .Net 9

``` bash
dotnet new webapi -o <nombre> --no-https
```

### Si se quiere utilizar controladores 

``` bash
dotnet new webapi -o <nombre> --no-https --use-controllers
```

### Cadena de conexión para SQLServer en Linux

"Server=localhost;Database=db_users;User Id=sa;Password=C#SQLtest;Encrypt=no"

### SQL root user password: 
_C#SQLtest_

### Comando para instalar paquetes NuGet
``` bash
dotnet add package <Nombre del paquete>
```

### Paquetes NuGet Instalados
- EntityFrameworkCore
- EntityFrameworkCore.Tools
- EntityFrameworkCore.Design
- EntityFrameworkCore.SQLServer
- SwashBuckle.AspNetCore
- SwashBuckle.AspNetCore.Swagger

### Comando para instalar dotnet ef

```bash
dotnet tool install --global dotnet-ef
```

### Comando para realizar migraciones

```bash
dotnet ef migrations add InitialMigration
```

### Comando para actualizar los cambios en la base de datos

```bash
dotnet ef database update
```