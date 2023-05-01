FROM mongo

RUN apt-get -y update && apt-get -y install curl sudo

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

RUN npm install -g mongodb
RUN npm install -g dotenv
