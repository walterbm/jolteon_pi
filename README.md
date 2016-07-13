# Jolteon

## Setup Pi

    $ sudo raspi-config

    $ sudo apt-get update

    $ sudo apt-get dist-upgrade

  Install Nginx:

    $ sudo apt-get install nginx

  Install remote desktop (optional):

    $ sudo apt-get -y install xrdp

## Install Node.js

    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

    $ sudo apt-get install -y nodejs

## Setup Git Remote

    $ git init --bare

    $ touch hooks/post-receive

      #!/bin/sh
      git --work-tree=/home/jolteon/site/jolteon --git-dir=/home/jolteon/repo/jolteon.git checkout -f

    $ chmod +x hooks/post-receive

## Resources

  - [Setting up a (reasonably) secure Raspberry Pi](https://mattwilcox.net/web-development/setting-up-a-secure-home-web-server-with-raspberry-pi)

  - [Set up a Node application for production](Set Up a Node.js Application)

  - [Set up PM2 on Rasbian](http://www.arroyocode.com/raspberry-pi-nodejs-web-server-with-pm2/)

  - [Raspberry Pi 3 GPIO pinout guide](http://pinout.xyz/)
