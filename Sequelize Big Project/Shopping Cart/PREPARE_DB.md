# Preparing the Database

Do the following as root

```sql
 create database shopdb;
 create user shopper identified by  '02225660917';

 use shopdb;
 grant all privileges on shopdb.* to shopper;
 flush privileges;
```