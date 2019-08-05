#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo yum install git -y
sudo yum install vim -y

cd ~
git clone https://github.com/systemdesignzallow/gosackProxy
cd gosackProxy

# FIX ME WHEN MERGED!!
git checkout docker

echo 'LOCAL_SERVICE_SERVER_PORT=6003' >> .env
echo 'NODE_ENV="docker"' >> .env
echo 'NEW_RELIC="ab77636d6d1a81e91b0b1326702da84ae52124a9"' >> .env

sudo docker pull node:11.15.0
sudo docker build -t gosackproxy .
sudo docker run -itd -p 80:6003 --name newproxy gosackproxy