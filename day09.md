### 复习

1. Vuex到底用来做什么事情？
实现组件之间的数据共享，如果使用了Vuex，我们就不需要管组件之间的关系，直接以Vuex作为中间的桥梁，进行数据的共享

2. Vuex中最重要的五个特性分别是什么？
state
mutations
actions
getters
modules

3. 这五个特性能够做什么事情？
state 存放公共数据
mutations 提供方法来修改state中的数据
actions 执行异步操作
getters 和Vue的计算属性类似，对state中的数据进行加工
modules 模块化，可以将臃肿的主模块进行划分，划分成多个子模块，减小主模块的体积

### 学习目标

完成Vuex 黑马头条案例
完成黑马头条项目 初始化

### Vuex案例

练习
创建catagory子模块，newlist子模块，在主模块中导入注册这两个子模块
练习7分钟

制作了catagory子模块内容，添加state中数据：catagtory，currentCatagtory。
为了修改这两个数据，在mutations中添加了两个方法：updateCatagtory，updateCurrentCatagtory
为了方便访问子模块中的state中的两个数据，在主模块的getters中添加了两个getters。

1.现在在子模块中已经有了分类相关的数据了，如何在页面中展示出对应的数据效果呢？
通过getters快捷访问方式得到分类数组，遍历分类数组生成好多个li
判断currentCatagory，添加select类型。

2.现在需要发送请求获取所有的分类数据，应该怎么来说？
定义了一个action，在action中，发送请求，获取数据，最后将数据通过mutations保存到state中。
在组件的created生命周期去调用action，

练习：
完成actions，遍历数据生成列表，练习10分钟

3.新闻模块的action是如何请求获取数据的呢，保存数据的时候，出现了一个奇怪的语法，这个语法是怎么做事情的？
A.提供actions，在actions发送请求，获取数据
B.在actions中调用mutations，通过mutations将请求的数据，赋值到alldata中。

4. 当点击分类的时候，应该触发新闻的actions来获取新闻数据，具体是怎么做的呢？

5. 如何显示新闻列表数据？

练习：
练习10分钟，完成新闻列表数据展示

回顾：

1.如果使用Vuex作为 Vue程序存储数据的方式，那么我们一般会怎样制作Vuex？
A. 根据项目的真实情况，去进行模块划分
B. 进入到子模块中，在state中定义需要使用的数据
C. 提供能够修改state数据的mutations
D. 创建能够请求到真实数据的actions，然后再actions里面调用mutations将数据保存到state当中
E. 为了方便获取state中的数据，在主模块去制作getters作为访问子模块state中数据的快捷方式。

### 1.使用脚手架创建项目，创建项目的时候勾选了哪些特性？

babel， router， vuex， css processer， lint formatter

### 2.将代码使用git管理起来，将代码推送到码云。

创建git仓库，将代码推送到码云的步骤是什么？
A. 确认项目的代码有没有提交到本地仓库，执行一套连续操作：  git add .        git commit -m '初始化项目'
B. 打开gitee.com，创建一个远程仓库，将本地仓库的代码推送到远程仓库上。

练习：
创建 toutiao-m 项目，并且将项目代码推送到 gitee(码云) 上
练习 15分钟

### 3.要如何对项目进行调整？

练习：
调整项目目录结构，导入图标素材
练习10分钟

### 4.在项目中安装 vant 组件库
A. 安装Vant组件： 在项目根目录中打开命令行，输入命令：npm install vant
B. 在项目中导入vant，并进行组件注册，打开 src/main.js ,编写添加代码如下：
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
C. 使用vant组件库的组件, 将需要使用的组件代码复制到 项目中使用即可
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

### 5.移动端REM适配

问题：Vue项目中如何进行REM适配？他需要安装哪些插件，进行哪些配置？
A. 安装 amfe-flexible 插件，这个插件的作用是设置 html 标签中的font-size属性，默认设置为屏幕宽度的 1/10.
在main.js文件中导入这个插件即可，不需要配置。

B. 安装 postcss-pxtorem 插件，这个插件的作用是将 样式中的px值转换为 rem值，这个插件需要进行配置的。
在项目根目录中创建`.postcssrc.js`文件，配置代码如下：
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue属性就是告知postcss-pxtorem插件，一个rem是37.5px
      // 设计稿的宽度是 750 px，如果一个rem设置成了 宽度的 1/10， 应该将rem宽度值设置为75px
      // vant组件库的设计稿是 375px，它的rem值应该是37.5.
      // rootValue: 75,
      rootValue ({ file }) {
        // 判断需要设置的文件名称中是否包含了 vant 的字样
        // 如果包含了vant字样，就将rem值设置为 37.5
        // 否则没有包含vant字样， 就将rem值设置为 75
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

### 总结：

1. 使用 cli 创建 黑马头条项目

2. 需要将创建的项目 推送到码云仓库

3. 创建 黑马头条项目 项目初始的结构不太好，调整了项目的目录结构。

4. 使用阿里图标库将 svg 图标 制作成字体图标，并导入到项目中使用

5. 安装vant组件库，注册vant库，可以开始使用vant组件

6. rem适配： 安装了两个插件来做适配

### 扩展内容

1).安装插件，解决eslint格式化的问题
A.prettier - Code formatter
B.ESLint
C.Prettier ESLint

2).重启vs code

3).点击 文件菜单 选择首选项，点击设置，在搜索框中输入 ‘format’
然后找到 “Editor: Default Formatter” 将其设置为 “rvest-vs-code-prettier-eslint”

找到“Editor: Format On Save”，将其选中

4).找到 vs code 下发的状态栏，在状态栏中的右侧，找到eslint 状态栏按钮，点击该按钮
并选择Allow everywhere
