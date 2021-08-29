#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
ps -ef|grep node
[ $? -eq 0 ] && pkill node
exit 0
