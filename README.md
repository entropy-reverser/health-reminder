# ⚡ 健康提醒

在忙碌中照顾自己 —— 极简 PWA 健康提醒工具，零依赖、纯前端、开箱即用。

## ✨ 功能

- 🕐 自定义间隔的定时提醒（休息 / 喝水 / 拉伸 / 健身）
- 🔔 三重提醒：系统通知 + 页面全屏弹窗 + 差异化提示音
- ⏸ 暂停 / 恢复，倒计时从断点继续
- 📱 PWA 支持，可添加到手机桌面当 App 用
- 🌙 深色主题，护眼不刺眼
- 💾 自定义间隔自动保存，刷新不丢失

## 🚀 快速开始

### 方式一：直接打开（推荐普通用户）

访问在线演示地址：`https://你的用户名.github.io/health-reminder/`
（将地址添加到浏览器书签，随时打开即可）

### 方式二：本地双击启动（推荐自用）

1. 确保电脑已安装 [Python 3](https://www.python.org/downloads/)
2. 下载项目所有文件到同一个文件夹
3. **macOS**：双击 `启动.command`
4. **Windows**：双击 `启动.bat`
5. 浏览器会自动打开，关闭时只需关闭弹出的黑色/白色终端窗口

### 方式三：Docker 部署（推荐服务器 / NAS 用户）

bash
docker run -d --name health-reminder -p 8080:80 ghcr.io/你的用户名/health-reminder:latest
访问 `http://你的IP:8080`

## ⚙️ 自定义提醒

点击卡片上的间隔文字（如"每 20分钟"），输入新的分钟数即可生效。设置保存在浏览器本地，清除浏览器数据会重置。

## 🛠 技术栈

- 纯 HTML / CSS / JavaScript（零构建工具、零依赖）
- Service Worker（仅做离线缓存）
- Web Audio API（生成差异化提示音）
- Web Notification API（系统级通知）
- Docker + Nginx（容器化部署）

## 📄 开源协议

[MIT](./LICENSE)
