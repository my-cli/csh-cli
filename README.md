## 游戏专题页面前端`cli`工具
#### 使用说明：
- **安装：**
    依赖于`gulp`进行打包，请确保全局环境下已经按照`gulp`。
    使用`npm`或者`cnpm`进行安装：
    ```git
    npm i csh-cli -g
    ```
- **使用：**
    该`cli`工具定义四个基础命令：
    - `csh-cli create <name>`：用于在当前目录下先将一个新的文件夹，并把模板代码下载至该文件夹中。
    - `csh-cli init`：在当前文件夹下初始化项目，把模板代码下载至当前文件夹中。
    - `csh-cli help`：查看`csh-cli`工具帮助。
    - `csh-cli version`:查看`csh-cli`工具版本号。
#### 更新日志：

- 2020 / 06 / 12：

  更新内容：

  - 主体框架修改，新增`webpack  / gulp`选项。
  - 删除模板文件中的`README.md`文件。
  - 添加`Inquirer`交互命令行询问是否立刻安装依赖。