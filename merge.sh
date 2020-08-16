git pull origin master
cd /arclight.cc
npm run build
rm -rf /var/www/html/arclight.cc/build
mv build /var/www/html/arclight.cc
sudo systemctl restart httpd.service
