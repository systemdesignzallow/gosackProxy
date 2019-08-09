
# Local Build
# #!/bin/bash
# sudo yum update -y
# sudo amazon-linux-extras install docker
# sudo service docker start
# sudo usermod -a -G docker ec2-user
# sudo yum install git -y
# sudo yum install vim -y

# cd ~
# git clone https://github.com/systemdesignzallow/gosackProxy
# cd gosackProxy

# # FIX ME WHEN MERGED!!
# git checkout docker

# echo 'LOCAL_SERVICE_SERVER_PORT=6003' >> .env
# echo 'NODE_ENV="docker"' >> .env

# sudo docker pull node:11.15.0
# sudo docker build -t gosackproxy .
# sudo docker run -itd -p 80:6003 --name newproxy gosackproxy



#EC2 Script with dockerhub image
#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo docker pull pgosack/gosackproxy
sudo docker run -itd -p 80:6003 --name newproxy pgosack/gosackproxy