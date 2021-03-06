# push 提交时候使用token代替password

npm 发布上架下架删除操作
npm who am i
npm addUser // 添加用户 即 当前你的 npm 账户
【注意点 1】不能和已有的包的名字重名！
npm publish // 发布
【注意点 2】你的项目里有部分私密的代码不想发布到 npm 上？
将它写入.gitignore 或.npmignore 中，上传就会被忽略了
【注意点 2】还有一点要注意的是 npm 对包名的限制：不能有大写字母/空格!

利用 npm 撤销发布包
这里要说一点，取消发布包可能并不像你想象得那么容易，这种操作是受到诸多限制的，撤销发布的包被认为是一种不好的行为
（试想一下你撤销了发布的包[假设它已经在社区内有了一定程度的影响]，这对那些已经深度使用并依赖你发布的包的团队是件多么崩溃的事情！）
示例：
【注意】如果报权限方面的错，加上--force
再去 npm 搜索已经搜不到了
1 根据规范，只有在发包的 24 小时内才允许撤销发布的包（ unpublish is only allowed with versions published in the last 24 hours）
2 即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了（即不能名称相同，版本相同，因为这两者构成的唯一标识已经被“占用”了）

例如我在撤销包后尝试再发布同一名称+同一版本的包：

报错，并建议我修改包的版本

npm unpublish 的推荐替代命令：npm deprecate <pkg>[@<version>] <message>
使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告
例如：npm deprecate library_debounce '这个包我已经不再维护了哟～'

npm 更新发布后的包：
事实上 npm 更新包和发布包的命令是一样的，都是 npm publish,不同之处在于，你需要修改包的版本

所以步骤是： 1.修改包的版本（package.json 里的 version 字段）
2.npm publish

七.npm 的版本控制——Semantic versioning
在我们的 package.json 里面有一个 version 字段。那么，怎么在项目不断构建的过程中调整版本呢？
npm 有一套自己的版本控制标准——Semantic versioning（语义化版本）

具体体现为：
对于"version":"x.y.z" 1.修复 bug,小改动，增加 z 2.增加了新特性，但仍能向后兼容，增加 y 3.有很大的改动，无法向后兼容,增加 x

例如：我原本的项目是 1.0.0 版本的话
若是 1 中情况，变为 1.0.1
若是 2 中情况，变为 1.1.0
若是 3 中情况，变为 2.0.0

通过 npm version <update_type>自动改变版本
update_type 为 patch, minor, or major 其中之一，分别表示补丁，小改，大改
