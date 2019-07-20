#### 使用 [VSCode](https://code.visualstudio.com/) 进行调试

可以通过 2 个方式：

方式一：开启 VSCode 配置 `Debug: Toggle Auto Attach`，然后在 Terminal 执行 `npm run debug` 即可。

方式二：配置 VSCode 的 `.vscode/launch.json`，然后 F5 一键启动即可。（注意，需要关闭方式一中的配置）

```
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Egg",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": "npm",
      "windows": { "runtimeExecutable": "npm.cmd" },
      "runtimeArgs": [ "run", "debug" ],
      "console": "integratedTerminal",
      "protocol": "auto",
      "restart": true,
      "port": 9229,
      "autoAttachChildProcesses": true
    }
  ]
}
```

我们也提供了一个 [vscode-eggjs](https://github.com/eggjs/vscode-eggjs) 扩展来自动生成配置。

![VSCode](https://user-images.githubusercontent.com/227713/35954428-7f8768ee-0cc4-11e8-90b2-67e623594fa1.png)

更多 VSCode Debug 用法可以参见文档: [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)