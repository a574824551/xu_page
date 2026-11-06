export const person = {
  name: '徐京徽',
  englishName: 'Jinghui Xu',
  role: '珀乐互动科技 CTO',
  email: 'xujinghuigg@vip.qq.com',
  phone: '13717603751',
  phoneDisplay: '137 1760 3751',
};

export const stages = [
  { year: '2020 — 2022', name: '腾讯朱雀实验室', label: 'AI 安全研究', description: '从语音、模型文件到系统全生命周期，研究 AI 的安全与可信。', href: '/career/#tencent' },
  { year: '2023 — 2025', name: '生数科技 · Vidu', label: '核心创始团队成员', description: '参与多模态模型应用探索，负责开源生态、项目落地与算力建设。', href: '/career/#shengshu' },
  { year: '2025 — 至今', name: '珀乐互动科技', label: '首席技术官 CTO', description: '带队探索 AI 原生互动内容，连接模型能力、艺术创作与产品体验。', href: '/career/#pole' },
];

export const career = [
  {
    id: 'pole', period: '2025.09 — 至今', category: 'AI 原生应用', organization: '珀乐互动科技', role: '首席技术官 · CTO',
    description: '从模型与算法走向 AI 原生的内容体验，负责技术团队、模型基础能力及互动产品研发。',
    points: ['规划技术团队架构与人才建设，推进多模态模型在内容生产中的应用。', '探索艺术家工具原型、模型评测标准化，以及 IP 资产的数字化与结构化。', '设计全模态叙事引擎，参与互动创意产品的研发与玩法设计。', '对接算力、模型供应方及技术合作伙伴，探索技术与业务的结合方式。'],
    links: [{ label: '央视财经采访', href: '/media/#cctv-finance' }, { label: '演讲与行业分享', href: '/talks/' }],
  },
  {
    id: 'shengshu', period: '2023 — 2025', category: '多模态大模型', organization: '生数科技 · Vidu', role: '核心创始团队成员 · 多模态算法工程师 · 算力负责人',
    description: '随原算法团队参与生数科技早期建设，负责开源生态技术探索与应用落地，并统筹训练算力。',
    points: ['担任永乐宫壁画 AI 数字修复项目技术负责人，对接文明碎片、AMD 等合作方，设计并实现修复方案。', '负责 Eden 创作生态的算法交付，搭建角色与画风分离的 LoRA 生产流程，探索 IP 一致性生成。', '建设模型微调数据与评测流程，交付文旅、动画、服装、车机壁纸等应用场景。', '负责训练算力采购、测评与合作，推进昇腾、昆仑、寒武纪、含光等国产算力适配。'],
    links: [{ label: '永乐宫项目详解', href: '/projects/yongle/' }, { label: '模型与算力实践', href: '/projects/#compute' }],
  },
  {
    id: 'realai', period: '2022.08 — 2023.02', category: '深度合成', organization: '瑞莱智慧 · RealAI', role: '算法工程师',
    description: '带领算法小组探索深度合成的商业应用，从高分辨率口型驱动到影视级人物合成。',
    points: ['基于 Wav2Lip 研发高分辨率语音驱动方案，处理口型准确度、闪烁与微调过拟合问题。', '支持 2K 视频口型驱动，通过改进训练流程将训练效率提升 90%。', '为业务与竞赛建设多种深度合成数据，探索复杂遮挡、小人脸与大侧面场景。'],
    links: [{ label: '深度合成实践', href: '/projects/#digital-human' }],
  },
  {
    id: 'tencent', period: '2020 — 2022', category: 'AI 安全', organization: '腾讯 TEG · 朱雀实验室', role: '算法工程师',
    description: '开展 AI 内生安全研究，覆盖图像、语音、文本与模型文件，推动研究成果进入真实业务系统。',
    points: ['研究黑盒语音模型鲁棒性、声音掩蔽、模型文件后门及隐私风险，形成论文与攻防验证案例。', '担任 AI 安全风险扫描与加固平台负责人，参与腾讯内部 DevCloud 的模型巡检。', '参与 AI 安全威胁矩阵设计、编写与发布，承担《AI安全：技术与实战》四章内容及技术实现。', '参与策划腾讯首届 AI 安全创新挑战赛，负责赛题、评估方案与团队协作。'],
    links: [{ label: '论文与出版', href: '/career/#publications' }, { label: 'AI 安全项目', href: '/projects/#ai-security' }],
  },
  {
    id: 'masters', period: '2018.09 — 2021.07', category: '教育与科研', organization: '中国科学院信息工程研究所', role: '计算机应用技术 · 硕士',
    description: '研究方向为智能安全，围绕深度学习与网络安全的交叉问题开展研究。',
    points: ['研究 RNN 日志异常检测、数据投毒、恶意代码检测与模型鲁棒性。', '获得三好学生、所长优秀奖学金等荣誉。'],
    research: { id: 'research-start', period: '2017.09 — 2018.08', title: '读研前的科研实践', description: '在该所开展算法研发实践，基于 CNN 研究恶意代码识别，部署基于 RNN 的 Safekit 日志异常检测系统，并探索模型鲁棒性与数据投毒问题。' },
    links: [{ label: '研究论文', href: '/career/#papers' }],
  },
  {
    id: 'bachelors', period: '2014 — 2018', category: '教育经历', organization: '吉林大学', role: '计算机科学与技术 · 本科',
    description: '系统学习计算机科学与工程基础，逐步走向算法与智能安全研究。',
    points: ['专业成绩前 10%，获一等奖学金两次、二等奖学金一次。', '获校级优秀学生、优秀干部及数学建模大赛省级优秀奖。'],
    links: [],
  },
];

export const talks = [
  {
    id: 'yunqi', date: '2026.09.23', year: '2026', category: 'talk', categoryLabel: '主题演讲',
    organization: '阿里云栖大会', title: '从内容生成到世界共创', role: '演讲嘉宾 · 圆桌嘉宾', location: '杭州',
    description: '在世界模型专题论坛分享世界模型如何重构 AI 泛娱乐工作流，并参与产业应用圆桌。',
    points: ['个人演讲《从内容生成到世界共创：世界模型如何重构 AI 泛娱乐工作流》。', '参与“世界模型的下一站：从实验室到产业”圆桌交流。'],
    photos: ['yunqi-stage', 'yunqi-talk', 'yunqi-panel', 'yunqi-room'],
    links: [{ label: '官方个人议程', href: 'https://yunqi.aliyun.com/2026/session?agendaId=138' }, { label: '论坛录播', href: 'https://www.bilibili.com/video/BV1KEag6XEHd/' }],
  },
  {
    id: 'jinqiu', date: '2026.09.13', year: '2026', category: 'talk', categoryLabel: '主题分享',
    organization: '锦秋之夜', title: '互动娱乐如何改变内容与体验', role: '分享嘉宾', location: '',
    description: '结合 AI 泛娱乐实践，分享互动娱乐对内容生产、故事参与和用户体验的影响。',
    points: ['交流从内容生成走向互动体验的思考。', '结合现场讨论，探讨创作者与用户在内容共创中的角色。'],
    photos: ['jinqiu-talk', 'jinqiu-room', 'jinqiu-discussion'],
    links: [{ label: '活动记录', href: 'https://mp.weixin.qq.com/s/vKOqPGFpzXgQeT2Im2TfAw' }],
  },
  {
    id: 'happyhorse', date: '2026.08.04', year: '2026', category: 'training', categoryLabel: '企业授课',
    organization: '阿里巴巴 · HappyHorse', title: 'AI 与艺术的实践交流', role: '受邀授课', location: '杭州',
    description: '受邀为阿里巴巴杭州 HappyHorse 团队分享，结合影视创作经验与技术实践，交流角色表达和 AI 与艺术的结合。',
    points: ['邀请函主题为《表演的体系与好表演的标准》。', '围绕表演判断、表达方法与实践经验展开团队交流。'],
    photos: ['happyhorse-invite'], imageStyle: 'poster',
    links: [],
  },
  {
    id: 'youtube', date: '2026.06.17', year: '2026', category: 'exchange', categoryLabel: '行业峰会',
    organization: 'One-YouTube · 谷歌 AIDC', title: 'AIDC 生态峰会 · 杭州', role: '受邀嘉宾', location: '杭州',
    description: '作为嘉宾参与 One-YouTube：2026 谷歌 AIDC（Drama & Comic）生态峰会，与产业同行交流。',
    points: ['活动聚焦 AI 内容生态、创作与全球化。', '现场照片记录个人参与和交流。'],
    photos: ['youtube-talk', 'youtube-stage'],
    links: [{ label: '活动官方报道', href: 'https://www.chinaott.com/2026/06/18/1707.html' }, { label: '活动页面', href: 'https://www.huodongxing.com/event/7862916599000' }],
  },
  {
    id: 'copyright', date: '2026.05.06', year: '2026', category: 'talk', categoryLabel: '合规主题演讲',
    organization: '中国政法大学人工智能法研究院 × Fungimind', title: 'AI 漫剧的合规创作与 IP 生产', role: '演讲嘉宾 · Workshop 分享', location: '',
    description: '在中国政法大学人工智能法研究院与 Fungimind 联合举办的《谁主之作？AI短/漫剧的创作者·知识产权·全球化》研讨会中，以珀乐互动 CTO 身份分享 AI 漫剧生产流程与版权合规实践。',
    points: ['围绕角色设计，展示从艺术家原画、创作阐述和反复修改，到 AI 参与制作的工作流。', '结合创作实践，讨论内容生产与确权周期的差异，以及模型训练数据来源带来的合规问题。', '交流创作过程记录与 IP 资产积累，呈现人工创意在 AI 生产流程中的贡献。'],
    photos: ['copyright-talk', 'cupl-workshop', 'copyright-roundtable'],
    links: [{ label: '微信图文与视频回顾', href: 'https://mp.weixin.qq.com/s/pQDqbT2CPugL9NtqQ5o3IQ' }, { label: '观看角色设计 Workshop', href: 'https://www.bilibili.com/video/BV1MyVp6UEmX/' }, { label: '主办方活动回顾', href: 'https://www.thepaper.cn/newsDetail_forward_33263854' }],
  },
  {
    id: 'tone', date: '2026.03.18', year: '2026', category: 'talk', categoryLabel: '直播分享',
    organization: 'T-one 直播', title: 'AI 泛娱乐如何演进？', role: '分享嘉宾', location: '线上',
    description: '讨论艺术家主导的 AI 创作、角色与 IP 一致性，以及从内容生产走向互动体验的可能。',
    points: ['艺术家主导创意与表达，AI 参与制作流程。', '从角色与资产积累，延伸到用户参与故事共创的体验。'],
    photos: [], poster: 'AI × ENTERTAINMENT',
    links: [{ label: '星连资本分享回顾', href: 'https://www.linkxcap.com/zh/portfolio-pole-ctv.html' }],
  },
  {
    id: 'ceis', date: '2026.01', year: '2026', category: 'exchange', categoryLabel: '行业交流 · 年度荣誉',
    organization: 'CEIS2026 中国娱乐产业年会', title: 'AIGC 创作实践与金河豚荣誉', role: '分享嘉宾 · 领奖代表', location: '北京',
    description: '以珀乐互动 CTO 身份受邀参与「AIGC 超级创作者路演」，分享高清素材、视频生成与超分实践，并出席金河豚盛典、参与领奖。珀乐互动及旗下平台、作品获评三项年度荣誉。',
    points: ['围绕 AI 影视内容生产，交流素材质量、画面清晰度与超分方案的选择。', '结合项目经验，分享高清视频生成的稳定性与实际制作中的取舍。'],
    honors: {
      title: '金河豚 · 团队荣誉',
      items: [
        { name: '年度 AI（漫）剧创作平台', recipient: '珀乐视界' },
        { name: '年度 AI（漫）剧公司', recipient: '珀乐互动' },
        { name: '年度 AI（漫）剧', recipient: '《明日周一》第一季' },
      ],
    },
    photos: ['ceis-talk', 'ceis-poster'],
    links: [{ label: '微信年会回顾', href: 'https://mp.weixin.qq.com/s/Bx4VE4zM1TypJ96YDzW7ew' }, { label: '现场实录 · 新浪', href: 'https://cj.sina.com.cn/articles/view/5159017394/133805bb200101ne9y?froms=ggmp' }, { label: '团队获奖报道', href: 'https://www.gm7.org/archives/33588' }],
  },
  {
    id: 'smp2025', date: '2025.11.22', year: '2025', category: 'talk', categoryLabel: '学术会议演讲',
    organization: 'SMP2025 · 企业论坛', title: 'AIGC 赋能互动娱乐', role: '报告嘉宾', location: '',
    description: '在第十三届全国社会媒体处理大会企业论坛，分享生成式 AI 在互动内容生产中的应用。',
    points: ['围绕内容生产流程，讨论效率、品质与合规。', '交流生成式 AI 与互动娱乐生产的结合方式。'],
    photos: ['smp2025'],
    links: [{ label: '官方会议手册 · 第 42 页', href: 'https://smp2025.cips-smp.org/upload/SMP2025%E4%BC%9A%E8%AE%AE%E6%89%8B%E5%86%8C.pdf#page=42' }],
  },
  {
    id: 'honghu', date: '2025.09', year: '2025', category: 'training', categoryLabel: '专业授课',
    organization: '鸿鹄汇', title: 'AI 工具与漫剧生产', role: '讲师', location: '',
    description: '担任鸿鹄汇活动讲师，讲解 AI 工具在漫剧生产中的应用。',
    points: ['围绕 AI 创作工具与漫剧制作分享实践。', '另有鸿鹄汇相关活动音频，记录了智能编剧、短剧改编与动漫生产的交流。'],
    photos: [], poster: 'TOOLS FOR STORIES',
    links: [{ label: '另场相关分享音频', href: 'https://www.xiaoyuzhoufm.com/episode/691ef6726018cc2c98c8fb0a' }],
  },
];

export const media = [
  {
    id: 'cctv-open-talk', category: 'cctv', categoryLabel: '央视节目', date: '2026.06.06',
    organization: 'CCTV-1 综合', title: '《开讲啦》', subtitle: '关于 AI 生成内容与信息质量的现场交流', role: '青年代表',
    description: '作为青年代表参与节目，围绕 AI 生成内容及“数字泔水”的影响，与现场嘉宾交流。',
    photo: 'cctv-open-talk', photoLabel: '《开讲啦》节目录制现场合影',
    links: [{ label: '观看央视片段', href: 'https://tv.cctv.com/2026/06/06/VIDE6RgpP5eOjMNPx6iaELY9260606.shtml' }],
  },
  {
    id: 'cctv-finance', category: 'cctv', categoryLabel: '央视采访', date: '2026.02.15',
    organization: 'CCTV-2 财经', title: '《第一时间》', subtitle: 'Seedance 2.0 与 AI 视频创作流程', role: '应用实践受访者',
    description: '以珀乐互动科技首席技术官身份接受采访，结合 Seedance 2.0 的使用实践，讨论模型进步对影视创作的影响。',
    photo: 'cctv-finance', photoLabel: '央视财经《第一时间》采访画面',
    links: [{ label: '观看央视原片', href: 'https://tv.cctv.com/2026/02/15/VIDEV3VyjQ6u6BoWckFTjCB7260215.shtml' }],
  },
  {
    id: 'cctv-yongle', category: 'cctv', categoryLabel: '央视采访', date: '2024.12.21',
    organization: 'CCTV-12 社会与法', title: '《道德观察》', subtitle: '造像守护者 · “新”修画人·永乐宫', role: '项目技术受访者',
    description: '接受央视《道德观察》采访，介绍永乐宫壁画 AI 数字修复的数据与技术实践。',
    photo: 'yongle-cctv', photoLabel: '央视《道德观察》采访画面',
    links: [{ label: '观看央视原片', href: 'https://tv.cctv.com/2024/12/21/VIDEdlbfNc6SGjMbmPiNhXxp241221.shtml' }, { label: '项目详解', href: '/projects/yongle/' }],
  },
  {
    id: 'china-daily', category: 'press', categoryLabel: '媒体报道', date: '2024.11.26',
    organization: 'CHINA DAILY · 中国日报', title: 'AI 与永乐宫壁画数字修复', subtitle: '让专业修复经验走进数字工作流', role: '受访技术专家',
    description: '报道以生数科技大模型算法专家介绍徐京徽，记录团队如何结合专业修复知识与图文标注，探索壁画数字重建。',
    photo: '', poster: 'CHINA DAILY',
    links: [{ label: '阅读中文报道', href: 'https://cn.chinadaily.com.cn/a/202411/26/WS67456a8ca310b59111da58f5.html' }, { label: '阅读英文报道', href: 'https://www.chinadaily.com.cn/a/202411/21/WS673e71a1a310f1265a1ceb6e.html' }],
  },
  {
    id: 'amd-film', category: 'film', categoryLabel: '项目影片', date: '',
    organization: 'AMD × 永乐宫', title: '壁画数字修复项目广告片', subtitle: '用影像记录技术与文化遗产的相遇', role: '相关项目影片',
    description: 'AMD 拍摄的永乐宫项目广告片，呈现壁画数字修复项目的背景与实践。',
    photo: '', poster: 'AMD × 永乐宫',
    links: [{ label: '前往 B 站观看', href: 'https://www.bilibili.com/video/BV1KF4m1F7MM/' }, { label: '项目详解', href: '/projects/yongle/' }],
  },
];

export const projects = [
  {
    id: 'narrative', number: '01', period: '2025 — 至今', organization: '珀乐互动科技', title: 'AI 原生互动内容', subtitle: '从内容生成，到用户参与故事',
    description: '围绕全模态叙事、创作工具与互动产品，探索 AI 原生内容的技术底座和体验形态。',
    points: ['技术团队与模型基础能力建设', '艺术家工具、IP 资产与模型评测', '全模态叙事引擎与互动玩法探索'],
    tags: ['多模态', '互动叙事', '创作工具'],
    link: { label: '相关分享', href: '/talks/#tone' },
  },
  {
    id: 'eden', number: '02', period: '2024.05 — 2024.12', organization: '生数科技', title: 'Eden 创作生态', subtitle: '围绕角色与世界，构建 IP 创作流程',
    description: '担任生态技术负责人，带领算法团队交付创作模型，探索角色、画风与世界构建的技术路径。',
    points: ['搭建数据采集、标注、训练与评测的 LoRA 生产流程', '探索 SDXL、FLUX 的角色一致性与画风控制', '多人物融合与自动化画风蒸馏，兼顾质量、成本和可控性'],
    tags: ['LoRA', '角色一致性', '模型训练'],
    link: { label: '查看职业经历', href: '/career/#shengshu' },
  },
  {
    id: 'compute', number: '03', period: '2023 — 2025', organization: '生数科技 · Vidu', title: '训练算力与国产化适配', subtitle: '把模型能力接到可持续的工程体系中',
    description: '负责训练算力采购全流程，并推动国产算力卡在微调、视频生成与私有化部署中的适配。',
    points: ['选型、机器测评、商务谈判与算力合作', '昇腾、昆仑、寒武纪、含光等平台的适配探索', '算子分析、推理优化及相关业务迁移'],
    tags: ['算力工程', '国产化', '部署优化'],
    link: { label: '查看职业经历', href: '/career/#shengshu' },
  },
  {
    id: 'custom-models', number: '04', period: '2023', organization: '生数科技', title: '生成模型与行业交付', subtitle: '从高质量训练数据，到具体创作场景',
    description: '建设生图模型的数据筛选、标注与微调流程，并将模型能力用于多个创意生产场景。',
    points: ['高质量数据筛选、多维评估与图文标注', '联想展示、服装设计、车机壁纸与商品图精修', '央视 AI 动画的视频超清、风格转换及古典水墨画风训练'],
    tags: ['模型微调', '图像生成', '行业应用'],
    link: { label: '讨论类似项目', href: '/contact/#consult' },
  },
  {
    id: 'digital-human', number: '05', period: '2022 — 2023', organization: '瑞莱智慧', title: '语音驱动与数字人物', subtitle: '面向高分辨率视频的深度合成',
    description: '带领算法小组探索高精度口型驱动和影视人物合成，处理真实视频生产中的复杂场景。',
    points: ['基于 Wav2Lip 的 2K 级口型驱动方案', '处理闪烁、过拟合、遮挡与大侧面问题', '建设深度合成数据与鲁棒性验证流程'],
    tags: ['深度合成', '语音驱动', '视频工程'],
    link: { label: '查看职业经历', href: '/career/#realai' },
  },
  {
    id: 'ai-security', number: '06', period: '2020 — 2022', organization: '腾讯朱雀实验室', title: 'AI 安全研究与加固平台', subtitle: '从模型脆弱性研究，到业务安全实践',
    description: '研究 AI 系统的安全风险，建设风险扫描与加固能力，沉淀论文、书籍与行业知识。',
    points: ['语音、图像、文本及模型文件的鲁棒性研究', 'AI 风险扫描、检测与防御工具建设', '安全矩阵、实战书籍及 AI 安全创新挑战赛'],
    tags: ['AI 安全', '模型评估', '工程落地'],
    link: { label: '阅读研究成果', href: '/career/#publications' },
  },
];

export const papers = [
  { year: '2022', venue: 'arXiv · 第一作者', title: 'Disappeared Command: Spoofing Attack On Automatic Speech Recognition Systems with Sound Masking', description: '利用声音掩蔽研究自动语音识别系统的安全与鲁棒性。', href: 'https://arxiv.org/abs/2204.08977' },
  { year: '2021', venue: 'Cybersecurity · 第二作者', title: 'DeepMal: maliciousness-Preserving adversarial instruction learning against static malware detection', description: '研究静态恶意代码检测模型面对对抗样本时的鲁棒性。', href: 'https://link.springer.com/article/10.1186/s42400-021-00079-5' },
  { year: '2020', venue: 'IEEE TrustCom · 第一作者', title: 'An Approach for Poisoning Attacks against RNN-Based Cyber Anomaly Detection', description: '研究基于 RNN 的网络异常检测系统中的数据投毒问题。', href: 'https://ieeexplore.ieee.org/document/9343232' },
];
