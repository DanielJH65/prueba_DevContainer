#!/bin/bash

#update repository
apt update

#upgrade apps
apt upgrade -y

#install curl
apt install curl -y

#install bun
echo "Installing bun"
curl -fsSL https://bun.sh/install | bash
echo "bun install done"

#install SQL Server
echo "Installing SQL Server"
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg
curl -fsSL https://packages.microsoft.com/config/ubuntu/22.04/mssql-server-2022.list | tee /etc/apt/sources.list.d/mssql-server-2022.list
apt update
apt install -y mssql-server
/opt/mssql/bin/mssql-conf setup
systemctl status mssql-server --no-pager

curl https://packages.microsoft.com/keys/microsoft.asc | tee /etc/apt/trusted.gpg.d/microsoft.asc
curl https://packages.microsoft.com/config/ubuntu/22.04/prod.list | tee /etc/apt/sources.list.d/mssql-release.list
apt update
apt install mssql-tools18 unixodbc-dev
echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bash_profile
source ~/.bash_profile
echo "SQL Server install done"
