# 徐京徽个人网站

访问地址：<https://xujinghui.com.cn/>。采用蓝白色、浅蓝网格与真实活动影像，包含 7 个独立页面。

| 页面 | 地址 | 内容 |
| --- | --- | --- |
| 首页 | `/` | 个人定位、三段职业路径、精选项目、央视记录与演讲 |
| 职业履历 | `/career/` | 6 段教育与职业时间轴、书籍、威胁矩阵与 3 篇论文；中科院早期科研并入硕士阶段的补充说明 |
| 演讲授课 | `/talks/` | 9 条活动记录、分类筛选、现场照片、邀请函与来源链接 |
| 媒体访谈 | `/media/` | 3 条央视记录、中国日报报道、AMD 项目影片 |
| 项目实践 | `/projects/` | 永乐宫及 6 个模型、工程、应用实践方向 |
| 永乐宫案例 | `/projects/yongle/` | 个人角色、项目背景、工作流与相关报道 |
| 联系合作 | `/contact/` | 咨询、培训、演讲与合作；邮件、电话及复制功能 |

## 内容维护

- `src/content.mjs`：个人资料、职业经历、活动、媒体、项目与论文的结构化内容；活动可通过 `honors` 列出团队荣誉及对应获奖主体。
- `build.mjs`：共享组件与页面模板，生成全部 HTML、站点地图及 robots.txt。
- `src/styles.css`：共享视觉样式及响应式布局。
- `src/script.js`：手机导航、分类筛选、图片查看与联系方式复制。
- `src/images.json`：照片尺寸；`dist/assets/photos/` 保存已压缩的 WebP 大图与缩略图。
- `dist/`：可独立部署的完整静态网站，无框架运行时和外部字体依赖。

修改后执行：

```sh
node /root/code/personal-site/build.mjs
```

照片来源于用户提供的经历档案。新照片需先生成 WebP 与小图，再将尺寸写入 `src/images.json`。大图保留完整画面，页面裁切展示的照片可点击放大查看。

主要内容依据为 `../简历档案/徐京徽履历全量整理.md`、`../简历档案/时间与表述核对.md`、`../经历档案/`、用户提供的 `xujinghui.html` 以及本次确认。腾讯、生数存在月份冲突的阶段采用年份展示；CEIS 采用月份。媒体参与身份分别标明青年代表、受访者等，不将节目参与误写成主讲身份。

邮箱统一为 `xujinghuigg@vip.qq.com`，电话为 `13717603751`。原始履历、原始素材与工作文档不在发布目录。

## 服务器部署

### 从 Git 仓库恢复或预览

备份仓库：<https://github.com/a574824551/xu_page>。

仓库保留源码、完整 `dist/`（含网站使用的照片）及部署脚本。图片资源当前保存在 `dist/assets/`，请保留该目录；构建脚本会更新页面、CSS 与 JavaScript，不会重新生成照片。正文提到的站外资料档案不是构建依赖。

在克隆后的仓库目录执行即可构建和预览，无需安装 npm 依赖：

```sh
node build.mjs
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

也可直接将 `dist/` 交给静态网站服务器。`deploy/` 保存当前服务器的配置与脚本，迁移到其他机器时需按实际目录、域名与入口服务调整。私钥、证书、ACME 账户及服务器账号数据库不随仓库备份。

### 更新当前服务器

```sh
bash /root/code/personal-site/deploy/release.sh
```

脚本重新构建、创建新版本并原子切换 `/var/www/xujinghui.com.cn/current`。历史版本保存在同目录下的 `releases/`，静态内容更新不需要重启服务。

- 服务：`personal-site.service`
- Nginx 配置：`/etc/personal-site/nginx.conf`
- HTTP：80，除证书验证路径外均跳转到 `https://xujinghui.com.cn`，保留路径和查询参数。
- HTTPS：现有 x-ui / Xray 服务监听 443，继续处理原有连接，并将网站请求转给 Nginx。
- 本机网站入口：`127.0.0.1:18080`（HTTP/1.1）和 `127.0.0.1:18081`（HTTP/2），通过 PROXY protocol 保留访问者 IP。
- Nginx 二进制：`/opt/personal-site/nginx`
- 日志：`/var/log/nginx/`

HTTPS 证书覆盖 `xujinghui.com.cn` 和 `www.xujinghui.com.cn`。WWW 地址会跳转到主域名。网站静态发布脚本不修改入口服务。

## HTTPS 与证书续期

- 证书：`/etc/personal-site/tls/fullchain.pem`，私钥：`/etc/personal-site/tls/private.key`。
- 签发方：Let's Encrypt；账户和证书工作目录独立保存在 `/etc/personal-site/acme/`。
- HTTP 验证目录：`/var/lib/personal-site/acme/.well-known/acme-challenge/`，独立于网站版本目录，切换网站版本不会影响续期。
- 定时检查：`personal-site-cert-renew.timer`，北京时间每天两次；实际需要续期时才更新证书。
- 重载脚本：`/usr/local/sbin/personal-site-cert-reload`，验证证书域名、有效期和密钥匹配；证书变化时重启入口服务并检查 HTTPS，无变化时不重启。

443 入口的既有账号、端口及协议保持原样；网站回落设置已写入 x-ui 的持久化配置：

```json
[
  { "dest": "127.0.0.1:18080", "xver": 1 },
  { "alpn": "h2", "dest": "127.0.0.1:18081", "xver": 1 }
]
```

如果以后修改 x-ui 中的 443 入口，应保留这两条设置和上述证书路径。切换前的配置与数据库备份位于 `/etc/personal-site/https-backup-20261106/`，仅 root 可访问。

## 已完成的验证

7 个页面在 320、375、390、768、1024、1440 像素宽度下检查横向溢出；检查页面状态、图片、站内链接与锚点；验证活动/媒体筛选、手机导航、大图键盘关闭与焦点恢复、邮件/电话复制、无 JavaScript 的基础浏览。浏览器验证及截图位于本次会话的 `personal-site` 可视化目录。

全部页面的 axe 自动可访问性扫描未报告 WCAG 2.1 A/AA 违规。线上 HTTP 域名已验证邮箱与号码实际写入剪贴板，失败时保留手动复制方式。

2026-11-06 完成 HTTPS 升级：7 页通过浏览器证书验证，以 TLS 1.3 加载，浏览器安全状态为 secure；未发现混合内容，HTTP / WWW 跳转保留页面路径与查询参数。中国政法大学合规演讲与原 AIGC 创作者研讨记录合并展示，活动总数保持 9 条。

CEIS 年会记录更换失效实录地址，保留用户提供的微信回顾，并增加新浪实录及企业获奖报道。页面展示三项金河豚团队荣誉，分别对应珀乐视界、珀乐互动和《明日周一》第一季；个人角色为分享嘉宾与领奖代表，不把团队荣誉改写为个人奖项。具体依据和待核事项见对应经历档案。
