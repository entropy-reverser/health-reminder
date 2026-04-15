FROM nginx:alpine

# 清理默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 拷贝我们的定制配置和代码
COPY nginx.conf /etc/nginx/conf.d/
COPY . /usr/share/nginx/html/

EXPOSE 80

# 前台运行，防止容器启动后秒退
CMD ["nginx", "-g", "daemon off;"]
