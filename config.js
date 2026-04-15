// config.js —— 提醒任务配置（单一真相源）
// 用 var 而非 const/let：var 在全局作用域自动挂载到 self/window
// 从而实现 SW（importScripts）和页面（<script src>）零成本共享
var HEALTH_TASKS = [
  {
    id: 'eye-rest',
    name: '闭眼休息',
    icon: '👁️',
    color: '#60a5fa',          // 卡片左边框色
    interval: 1* 60 * 1000,  // 20分钟（毫秒，与 setTimeout 原生单位一致）
    message: '闭上眼睛休息 20 秒，让疲惫的眼睛恢复一下',
    action: '休息 20 秒',
  },
  {
    id: 'drink-water',
    name: '喝水提醒',
    icon: '💧',
    color: '#22d3ee',
    interval: 45 * 60 * 1000,  // 45分钟
    message: '该喝水了，保持身体水分充足',
    action: '去喝水',
  },
  {
    id: 'stretch',
    name: '拉伸放松',
    icon: '🤸',
    color: '#fbbf24',
    interval: 60 * 60 * 1000,  // 1小时
    message: '站起来拉伸一下，缓解肌肉紧张',
    action: '拉伸 2 分钟',
  },
  {
    id: 'exercise',
    name: '健身提醒',
    icon: '💪',
    color: '#f87171',
    interval: 120 * 60 * 1000, // 2小时
    message: '该动一动了，做几组简单训练',
    action: '运动 10 分钟',
  },
];

// 工具函数：毫秒 → 人类可读（SW 和页面都会用到）
function formatInterval(ms) {
  var minutes = ms / 60000;
  if (minutes < 60) return minutes + '分钟';
  var hours = Math.floor(minutes / 60);
  var remain = minutes % 60;
  return remain ? hours + '小时' + remain + '分钟' : hours + '小时';
}
