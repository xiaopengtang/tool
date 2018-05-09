'use strict'

const { spawn } = require('child_process')

const ls = spawn('npm', ['run', 'dev']);

ls.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

ls.on('error', err => console.log(err))

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});