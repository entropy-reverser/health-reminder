import http.server, socketserver

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.endswith('sw.js'):
            self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

print('健康提醒已启动：http://localhost:8080')
print('按 Ctrl+C 停止')
socketserver.TCPServer(('', 8080), Handler).serve_forever()
