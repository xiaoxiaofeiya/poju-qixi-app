// AI破局七夕情缘生成器 - PWA版本

// 初始化装饰效果
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    addSparkleEffect();
});

// 创建浮动爱心装饰（移动端优化）
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💘', '💙', '💚', '💜', '💝', '✨'];
    
    // 移动端优化：减少心形数量和频率
    const isMobile = window.innerWidth <= 768;
    const heartCount = 1; // 统一心形数量
    const interval = isMobile ? 3000 : 2000; // 移动端增加间隔
    
    setInterval(() => {
        for(let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.fontSize = (Math.random() * 0.8 + 0.8) + 'em';
            
            heartsContainer.appendChild(heart);
            
            // 清理元素
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 6000);
        }
    }, interval);
}

// 添加闪烁效果（移动端优化）
function addSparkleEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // 移动端使用touch事件
        if ('ontouchstart' in window) {
            card.addEventListener('touchstart', function(e) {
                e.preventDefault();
                createSparkles(this);
            }, { passive: false });
        } else {
            card.addEventListener('mouseenter', function() {
                createSparkles(this);
            });
        }
    });
}

// 创建闪烁效果（移动端优化）
function createSparkles(element) {
    // 移动端减少闪烁数量
    const sparkleCount = window.innerWidth <= 768 ? 3 : 5;
    
    for(let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.color = '#ffd700';
        sparkle.style.fontSize = '1em';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height + window.scrollY) + 'px';
        
        sparkle.style.animation = 'sparkleAnimation 1.5s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
}

// 添加闪烁动画
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// 星座数据库
const constellationData = {
    aries: {
        name: "白羊座",
        icon: "♈",
        personality: "热情冲动，勇于创新",
        clubFit: "AI大航海先锋",
        matchPercent: 92,
        directions: ["AI内容创作", "短视频制作", "快速原型开发"],
        luckColor: "#FF6B6B",
        todayFortune: "破局创意爆发的一天！适合在俱乐部分享新想法和尝试新项目。"
    },
    taurus: {
        name: "金牛座", 
        icon: "♉",
        personality: "踏实稳重，追求品质",
        clubFit: "AI技能深耕者",
        matchPercent: 88,
        directions: ["AI办公自动化", "内容运营", "精品课程制作"],
        luckColor: "#4ECDC4",
        todayFortune: "稳扎稳打的收获期，在俱乐部学到的AI技能开始显现价值。"
    },
    gemini: {
        name: "双子座",
        icon: "♊", 
        personality: "善于沟通，思维敏捷",
        clubFit: "AI社交达人",
        matchPercent: 95,
        directions: ["AI写作变现", "多语言内容", "社交媒体运营"],
        luckColor: "#45B7D1",
        todayFortune: "沟通表达的黄金时期，在俱乐部的分享将获得热烈回响！"
    },
    cancer: {
        name: "巨蟹座",
        icon: "♋",
        personality: "温柔体贴，注重情感",
        clubFit: "AI温暖守护者", 
        matchPercent: 87,
        directions: ["AI心理咨询", "教育培训", "情感内容创作"],
        luckColor: "#F7B731",
        todayFortune: "情感共鸣的高峰期，用AI创作温暖人心的内容传递给俱乐部伙伴。"
    },
    leo: {
        name: "狮子座",
        icon: "♌",
        personality: "自信领导，追求卓越", 
        clubFit: "AI破局领袖",
        matchPercent: 93,
        directions: ["AI个人品牌", "高端咨询", "创意项目"],
        luckColor: "#FD79A8",
        todayFortune: "领袖魅力绽放的时刻，在俱乐部展示AI才华的舞台！"
    },
    virgo: {
        name: "处女座",
        icon: "♍",
        personality: "完美主义，注重细节",
        clubFit: "AI精品匠人",
        matchPercent: 96,
        directions: ["AI数据分析", "质量管控", "精准营销"],
        luckColor: "#6C5CE7",
        todayFortune: "完美执行的最佳时机，用AI把俱乐部项目的每个细节做到极致。"
    },
    libra: {
        name: "天秤座", 
        icon: "♎",
        personality: "追求和谐，审美出众",
        clubFit: "AI美学大师",
        matchPercent: 91,
        directions: ["AI美学设计", "视觉营销", "艺术创作"],
        luckColor: "#A29BFE",
        todayFortune: "美感与平衡的完美结合，AI设计作品将在俱乐部获得广泛认可。"
    },
    scorpio: {
        name: "天蝎座",
        icon: "♏", 
        personality: "神秘深邃，洞察力强",
        clubFit: "AI洞察先知",
        matchPercent: 89,
        directions: ["AI深度研究", "数据挖掘", "策略分析"],
        luckColor: "#2D3436",
        todayFortune: "洞察真相的关键时刻，在俱乐部发现隐藏的AI商机和趋势。"
    },
    sagittarius: {
        name: "射手座",
        icon: "♐",
        personality: "自由探索，眼界开阔", 
        clubFit: "AI探索冒险家",
        matchPercent: 90,
        directions: ["AI海外项目", "多元化探索", "知识传播"],
        luckColor: "#00B894",
        todayFortune: "探索未知的冒险时光，在俱乐部发现更广阔的AI可能性！"
    },
    capricorn: {
        name: "摩羯座",
        icon: "♑",
        personality: "目标明确，执行力强",
        clubFit: "AI实干家", 
        matchPercent: 85,
        directions: ["AI工作流优化", "长期投资", "系统化运营"],
        luckColor: "#636E72",
        todayFortune: "长期规划见成效的时期，在俱乐部学习的AI技能成为事业基石。"
    },
    aquarius: {
        name: "水瓶座",
        icon: "♒",
        personality: "创新前卫，思维独特",
        clubFit: "AI未来先知",
        matchPercent: 94,
        directions: ["AI前沿探索", "技术创新", "社会改变"],
        luckColor: "#00CEC9", 
        todayFortune: "创新思维的巅峰时刻，与俱乐部伙伴一起改变AI世界的梦想正在实现！"
    },
    pisces: {
        name: "双鱼座",
        icon: "♓",
        personality: "富有想象，感性浪漫",
        clubFit: "AI梦想艺术家",
        matchPercent: 88,
        directions: ["AI艺术创作", "情感表达", "梦想实现"],
        luckColor: "#FD79A8",
        todayFortune: "创意灵感如泉涌，在俱乐部表达内心世界的完美画笔。"
    }
};

// 情书模板 - 对破局俱乐部的表白
const letterTemplates = {
    romantic: {
        opening: [
            "亲爱的破局俱乐部，还记得我们初次相遇的{joinTime}吗？那一天，你改变了我的整个世界。",
            "我最爱的破局大家庭，从{joinTime}开始，你就是我生命中最特别的存在。",
            "致我最深爱的破局俱乐部，{joinTime}的那次邂逅，让我找到了属于自己的AI世界。"
        ],
        body: [
            "在你的怀抱中，我经历了{unforgettableMemory}。那一刻，我深深感受到了你的魅力和温暖。你不仅仅是一个社群，更是我心灵的家园。",
            "你带给我的不仅仅是{biggestChange}，更是一种全新的人生姿态。在你身边，每一天都充满了惊喜和成长。",
            "你的每一个伙伴都像家人一样温暖，每一次分享都像爱的告白。破局啊，你知道吗？我已经深深爱上了这里的一切。"
        ],
        ending: [
            "亲爱的破局，{confessionWords}。在这个特殊的七夕，我想对你说：我爱你，感谢你成为我生命中最美好的遇见。",
            "在这个浪漫的七夕夜晚，我要勇敢地告白：破局俱乐部，我爱你！愿我们的缘分像七夕的星空一样永远闪烁。💕"
        ]
    },
    grateful: {
        opening: [
            "亲爱的破局俱乐部，从{joinTime}我们相遇开始，你就像一个温暖的大家庭。",
            "感谢命运让我在{joinTime}遇见了你，我的破局俱乐部。",
            "致我最感谢的破局大家庭，{joinTime}开始的这段缘分，已成为我最珍贵的财富。"
        ],
        body: [
            "{unforgettableMemory}，这段经历让我深深感受到了你的力量。你不仅仅是一个学习社群，更是一个充满爱与分享的大家庭。",
            "{biggestChange}，这些改变让我变成了更好的自己。感谢你给我的不仅仅是知识，更是成长的力量和前进的勇气。",
            "在你身边，我学会了分享，学会了成长，更学会了感恩。每一个伙伴都是我的老师，每一次交流都是我的收获。"
        ],
        ending: [
            "{confessionWords}，这是我对你最真诚的告白。感谢你成为我AI之路上最重要的引路人和陪伴者。",
            "在这个特别的七夕，我要真诚地说：谢谢你，破局俱乐部，让我的人生变得如此精彩。愿我们的大家庭越来越好！✨"
        ]
    },
    inspiring: {
        opening: [
            "亲爱的破局俱乐部伙伴们，从{joinTime}加入这个大家庭开始，我就知道这里将是我成长的最佳平台。",
            "致所有破局伙伴们，{joinTime}的相遇，让我明白了什么叫做真正的团队力量。",
            "我们的破局俱乐部，自{joinTime}以来，你就是我心中最理想的学习共同体。"
        ],
        body: [
            "{unforgettableMemory}，这段经历让我看到了集体智慧的传奇。在这里，每个人都是老师，每个人也都是学生。",
            "{biggestChange}，这些改变让我明白，真正的破局不是一个人的独行，而是一群人的狂欢。我们一起学习，一起成长，一起创造奇迹。",
            "在这个AI时代，我们不是孤独的探索者，而是并肩作战的战友。每一次的分享都是力量的传递，每一次的交流都是智慧的碰撞。"
        ],
        ending: [
            "{confessionWords}，这是我对我们共同未来的宣言。让我们一起继续破局，一起创造属于我们的AI传奇！",
            "七夕之夜，让我们一起许下美好的愿望：愿破局俱乐部越来越壮大，愿每个伙伴都能在AI时代闯出自己的一片天地！🚀"
        ]
    }
};

// 生成情书的主函数（为破局俱乐部定制）
function generateLoveLetter() {
    // 获取用户输入
    const constellation = document.getElementById('constellation').value;
    const nickname = document.getElementById('nickname').value;
    const joinTime = document.getElementById('joinTime').value;
    const unforgettableMemory = document.getElementById('unforgettableMemory').value;
    const biggestChange = document.getElementById('biggestChange').value;
    const confessionWords = document.getElementById('confessionWords').value;
    const letterStyle = document.getElementById('letterStyle').value;

    // 验证输入
    if (!constellation || !nickname || !joinTime || !unforgettableMemory || !biggestChange || !confessionWords || !letterStyle) {
        showErrorMessage('请填写所有必填项目哦～ 😊');
        return;
    }

    // 显示加载动画
    showLoading();
    
    // 模拟加载时间（增加仪式感）
    setTimeout(() => {
        // 获取星座数据
        const constellationInfo = constellationData[constellation];
        const template = letterTemplates[letterStyle];

        // 随机选择模板片段
        const opening = template.opening[Math.floor(Math.random() * template.opening.length)];
        const body = template.body.join('\n\n');
        const ending = template.ending[Math.floor(Math.random() * template.ending.length)];

        // 替换变量
        let loveLetter = (opening + '\n\n' + body + '\n\n' + ending)
            .replace(/{joinTime}/g, joinTime)
            .replace(/{unforgettableMemory}/g, unforgettableMemory)
            .replace(/{biggestChange}/g, biggestChange)
            .replace(/{confessionWords}/g, confessionWords)
            .replace(/{nickname}/g, nickname);

        // 生成运势内容
        const fortuneContent = generateFortune(constellationInfo, nickname);

        // 显示结果
        document.getElementById('loveLetter').innerHTML = `
            <h2 style="text-align: center; margin-bottom: 25px; color: #e17055; font-size: 1.8em;">
                💕 ${nickname}的破局情书 💕
            </h2>
            <div style="line-height: 2.2; font-size: 17px; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                ${loveLetter.replace(/\n/g, '<br><br>')}
            </div>
            <p style="text-align: right; margin-top: 25px; font-style: italic; color: #636e72; font-size: 16px;">
                —— 来自${constellationInfo.name}的${nickname} ${constellationInfo.icon}
            </p>
        `;

        document.getElementById('fortune').innerHTML = fortuneContent;

        // 隐藏加载，显示结果
        hideLoading();
        document.getElementById('inputForm').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
        
        // 显示成功消息
        showSuccessMessage('✨ 你的破局情书已生成！');

        // 滚动到结果区域
        setTimeout(() => {
            document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // 触发庆祝效果
        celebrationEffect();
    }, 2000);
}

// 生成运势内容
function generateFortune(constellationInfo, nickname) {
    return `
        <h3>🔮 ${nickname}的破局俱乐部运势</h3>
        <div style="margin: 20px 0;">
            <h4 style="color: #6c5ce7; margin-bottom: 10px;">
                ${constellationInfo.icon} ${constellationInfo.name} × 破局俱乐部
            </h4>
            <div style="font-size: 24px; font-weight: bold; color: #e17055; margin: 10px 0;">
                俱乐部契合度：${constellationInfo.matchPercent}%
            </div>
            <p style="margin-bottom: 15px;">
                <strong>性格特质：</strong>${constellationInfo.personality}
            </p>
            <p style="margin-bottom: 15px;">
                <strong>俱乐部身份：</strong>${constellationInfo.clubFit}
            </p>
        </div>

        <div style="margin: 20px 0;">
            <h4 style="color: #6c5ce7; margin-bottom: 10px;">🌟 七夕破局运势</h4>
            <p style="background: rgba(108, 92, 231, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                ${constellationInfo.todayFortune}
            </p>
        </div>

        <div style="margin: 20px 0;">
            <h4 style="color: #6c5ce7; margin-bottom: 10px;">🚀 推荐破局方向</h4>
            <ul style="margin-left: 20px; line-height: 1.8;">
                ${constellationInfo.directions.map(direction => `<li>${direction}</li>`).join('')}
            </ul>
        </div>

        <div style="margin: 20px 0; text-align: center; padding: 15px; background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); border-radius: 10px;">
            <p style="margin-bottom: 10px;"><strong>💰 破局财运提示</strong></p>
            <p>下半年AI变现黄金期将在9-11月到来，现在正是在俱乐部积累技能的最佳时机！</p>
        </div>

        <div style="margin: 20px 0; text-align: center; padding: 15px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 10px;">
            <p style="margin-bottom: 10px;"><strong>❤️ 七夕特别祝福</strong></p>
            <p>愿你在破局俱乐部找到志同道合的伙伴，一起在AI的世界里创造属于我们的传奇故事！</p>
        </div>
    `;
}

// 生成破局俱乐部表白卡片（移动端优化版）
function generateShareImage() {
    const canvas = document.getElementById('shareCanvas');
    const ctx = canvas.getContext('2d');
    
    // 获取用户数据
    const constellation = document.getElementById('constellation').value;
    const nickname = document.getElementById('nickname').value;
    const joinTime = document.getElementById('joinTime').value;
    const confessionWords = document.getElementById('confessionWords').value;
    const constellationInfo = constellationData[constellation];
    
    // 移动端优化：设置高清显示
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = 600 * dpr;
    canvas.height = 800 * dpr;
    canvas.style.width = '600px';
    canvas.style.height = '800px';
    
    ctx.scale(dpr, dpr);
    
    // 七夕爱心背景
    const gradient = ctx.createRadialGradient(300, 400, 50, 300, 400, 400);
    gradient.addColorStop(0, '#ff6b6b');
    gradient.addColorStop(0.3, '#ff8a8a');
    gradient.addColorStop(0.6, '#ffa8a8');
    gradient.addColorStop(1, '#ffc0c0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 800);
    
    // 添加爱心装饰
    ctx.globalAlpha = 0.15;
    for(let i = 0; i < 12; i++) {
        drawHeart(ctx, 
            50 + Math.random() * 500, 
            50 + Math.random() * 700, 
            15 + Math.random() * 25, 
            '#ffffff'
        );
    }
    ctx.globalAlpha = 1;
    
    // 主卡片背景 - 信封样式
    const cardGradient = ctx.createLinearGradient(80, 100, 520, 700);
    cardGradient.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
    cardGradient.addColorStop(1, 'rgba(255, 248, 248, 0.95)');
    ctx.fillStyle = cardGradient;
    
    // 绘制信封形状
    roundRect(ctx, 80, 100, 440, 600, 20);
    ctx.fill();
    
    // 信封边框
    ctx.strokeStyle = '#ff9999';
    ctx.lineWidth = 3;
    roundRect(ctx, 80, 100, 440, 600, 20);
    ctx.stroke();
    
    // 信封顶部装饰线
    ctx.strokeStyle = '#ffaaaa';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 130);
    ctx.lineTo(500, 130);
    ctx.stroke();
    
    // 标题区域
    ctx.fillStyle = '#d63031';
    ctx.font = 'bold 28px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💕 七夕表白卡 💕', 300, 170);
    
    // 副标题
    ctx.fillStyle = '#e17055';
    ctx.font = '18px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('献给我最爱的破局俱乐部', 300, 200);
    
    // 分割线
    ctx.strokeStyle = '#ff9999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, 220);
    ctx.lineTo(480, 220);
    ctx.stroke();
    
    // 发信人信息
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 20px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`发信人：${constellationInfo.icon} ${nickname}`, 120, 260);
    
    ctx.font = '16px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`相遇时间：${joinTime}`, 120, 290);
    ctx.fillText(`俱乐部身份：${constellationInfo.clubFit}`, 120, 315);
    
    // 表白正文
    ctx.fillStyle = '#d63031';
    ctx.font = 'bold 22px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💌 我的表白 💌', 300, 360);
    
    // 表白内容（移动端优化文字换行）
    ctx.fillStyle = '#2d3436';
    ctx.font = '18px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    const confessionLines = wrapText(ctx, confessionWords, 360);
    
    let startY = 390;
    for(let i = 0; i < Math.min(confessionLines.length, 6); i++) {
        ctx.fillText(`"${confessionLines[i]}"`, 300, startY + i * 30);
    }
    
    // 爱心分割线
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '20px serif';
    ctx.fillText('💕 💕 💕 💕 💕', 300, startY + Math.min(confessionLines.length, 6) * 30 + 40);
    
    // 七夕祝福
    ctx.fillStyle = '#d63031';
    ctx.font = 'bold 20px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('七夕快乐！', 300, startY + Math.min(confessionLines.length, 6) * 30 + 80);
    
    ctx.fillStyle = '#e17055';
    ctx.font = '16px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('愿破局俱乐部越来越好', 300, startY + Math.min(confessionLines.length, 6) * 30 + 110);
    ctx.fillText('愿所有伙伴都能实现AI破局梦想', 300, startY + Math.min(confessionLines.length, 6) * 30 + 135);
    
    // 底部签名
    ctx.fillStyle = '#636e72';
    ctx.font = 'italic 14px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'right';
    
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    ctx.fillText(`—— ${nickname} ${dateStr}`, 480, 650);
    
    // 右下角装饰
    drawHeart(ctx, 450, 670, 20, '#ff6b6b');
    
    // 移动端优化：显示预览时自动调整大小
    const previewImg = document.getElementById('previewImage');
    previewImg.src = canvas.toDataURL('image/png');
    previewImg.onload = function() {
        // 移动端自动滚动到预览区域
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                document.getElementById('cardPreview').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300);
        }
    };
    
    document.getElementById('cardPreview').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
    
    // 显示成功提示
    showSuccessMessage('✨ 表白卡片生成成功！');
}

// 生成完整的情书长图（移动端优化版）
function generateLoveLetterImage() {
    const canvas = document.getElementById('loveLetterCanvas');
    const ctx = canvas.getContext('2d');
    
    // 获取用户数据
    const constellation = document.getElementById('constellation').value;
    const nickname = document.getElementById('nickname').value;
    const joinTime = document.getElementById('joinTime').value;
    const unforgettableMemory = document.getElementById('unforgettableMemory').value;
    const biggestChange = document.getElementById('biggestChange').value;
    const confessionWords = document.getElementById('confessionWords').value;
    const letterStyle = document.getElementById('letterStyle').value;
    const constellationInfo = constellationData[constellation];
    const template = letterTemplates[letterStyle];
    
    // 生成情书内容
    const opening = template.opening[Math.floor(Math.random() * template.opening.length)];
    const body = template.body.join('\n\n');
    const ending = template.ending[Math.floor(Math.random() * template.ending.length)];
    
    let loveLetter = (opening + '\n\n' + body + '\n\n' + ending)
        .replace(/{joinTime}/g, joinTime)
        .replace(/{unforgettableMemory}/g, unforgettableMemory)
        .replace(/{biggestChange}/g, biggestChange)
        .replace(/{confessionWords}/g, confessionWords)
        .replace(/{nickname}/g, nickname);
    
    // 移动端优化：设置高清显示
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = 600 * dpr;
    canvas.height = 1200 * dpr;
    canvas.style.width = '600px';
    canvas.style.height = '1200px';
    
    ctx.scale(dpr, dpr);
    
    // 渐变背景 - 温馨的纸张色调
    const gradient = ctx.createLinearGradient(0, 0, 0, 1200);
    gradient.addColorStop(0, '#ffeaa7');
    gradient.addColorStop(0.3, '#fab1a0');
    gradient.addColorStop(0.6, '#fd79a8');
    gradient.addColorStop(1, '#fdcb6e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 1200);
    
    // 添加装饰元素
    ctx.globalAlpha = 0.1;
    for(let i = 0; i < 15; i++) {
        drawHeart(ctx, 
            Math.random() * 600, 
            Math.random() * 1200, 
            10 + Math.random() * 20, 
            '#ffffff'
        );
    }
    ctx.globalAlpha = 1;
    
    // 主内容背景
    const letterBg = ctx.createLinearGradient(40, 60, 560, 1140);
    letterBg.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    letterBg.addColorStop(1, 'rgba(255, 248, 248, 0.9)');
    ctx.fillStyle = letterBg;
    roundRect(ctx, 40, 60, 520, 1080, 25);
    ctx.fill();
    
    // 边框
    ctx.strokeStyle = '#ff9999';
    ctx.lineWidth = 3;
    roundRect(ctx, 40, 60, 520, 1080, 25);
    ctx.stroke();
    
    // 标题
    ctx.fillStyle = '#d63031';
    ctx.font = 'bold 32px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💕 破局俱乐部情书 💕', 300, 120);
    
    // 副标题
    ctx.fillStyle = '#e17055';
    ctx.font = '20px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`${nickname}的七夕表白`, 300, 160);
    
    // 分割线
    ctx.strokeStyle = '#ff9999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 190);
    ctx.lineTo(520, 190);
    ctx.stroke();
    
    // 情书正文
    ctx.fillStyle = '#2d3436';
    ctx.font = '18px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'left';
    
    const letterLines = loveLetter.split('\n');
    let currentY = 230;
    const lineHeight = 35;
    const maxWidth = 460;
    
    for(let paragraph of letterLines) {
        if(paragraph.trim() === '') {
            currentY += lineHeight * 0.5; // 段落间距
            continue;
        }
        
        const wrappedLines = wrapTextToLines(ctx, paragraph, maxWidth);
        for(let line of wrappedLines) {
            if(currentY > 1050) break; // 防止超出画布
            ctx.fillText(line, 80, currentY);
            currentY += lineHeight;
        }
        currentY += lineHeight * 0.3; // 段落后间距
    }
    
    // 签名区域
    ctx.fillStyle = '#636e72';
    ctx.font = 'italic 16px "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'right';
    
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    ctx.fillText(`—— 来自${constellationInfo.name}的${nickname}`, 520, 1080);
    ctx.fillText(`${dateStr} 七夕节`, 520, 1110);
    
    // 装饰爱心
    drawHeart(ctx, 480, 1120, 25, '#ff6b6b');
    
    // 移动端优化：显示预览
    const previewImg = document.getElementById('previewImage');
    previewImg.src = canvas.toDataURL('image/png');
    previewImg.onload = function() {
        // 移动端自动滚动到预览区域
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                document.getElementById('cardPreview').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300);
        }
    };
    
    document.getElementById('cardPreview').style.display = 'block';
    document.getElementById('downloadLetterBtn').style.display = 'block';
    
    // 显示成功提示
    showSuccessMessage('✨ 情书长图生成成功！');
}

// 辅助函数：将文本包装成行数组
function wrapTextToLines(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';
    
    for(let char of words) {
        const testLine = currentLine + char;
        const metrics = ctx.measureText(testLine);
        
        if(metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine);
            currentLine = char;
        } else {
            currentLine = testLine;
        }
    }
    
    if(currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

// 绘制爱心的辅助函数
function drawHeart(ctx, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.translate(x, y);
    ctx.scale(size / 10, size / 10);
    ctx.beginPath();
    ctx.arc(-5, -5, 5, 0, Math.PI, true);
    ctx.arc(5, -5, 5, 0, Math.PI, true);
    ctx.lineTo(0, 10);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// 辅助函数：绘制圆角矩形
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// 辅助函数：文字换行
function wrapText(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';
    
    for(const word of words) {
        const testLine = currentLine + word;
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if(testWidth > maxWidth && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine);
    return lines;
}

// 下载表白卡片（移动端优化）
function downloadImage() {
    const canvas = document.getElementById('shareCanvas');
    const nickname = document.getElementById('nickname').value;
    const constellation = document.getElementById('constellation').value;
    const constellationInfo = constellationData[constellation];
    
    // 移动端优化：使用现代方式创建图片窗口
    if (window.innerWidth <= 768) {
        const dataURL = canvas.toDataURL('image/png');
        const newWindow = window.open('', '_blank', 'width=400,height=600');
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(`
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${nickname}的破局俱乐部七夕表白卡</title>
                        <style>
                            body {
                                margin: 0;
                                padding: 20px;
                                background: #f5f5f5;
                                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                                text-align: center;
                            }
                            .tip {
                                background: #007AFF;
                                color: white;
                                padding: 15px;
                                border-radius: 10px;
                                margin-bottom: 20px;
                                font-size: 16px;
                            }
                            img {
                                max-width: 100%;
                                height: auto;
                                border-radius: 10px;
                                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="tip">📱 长按图片选择"保存图片"即可保存到相册</div>
                        <img src="${dataURL}" alt="${nickname}的破局俱乐部七夕表白卡" />
                    </body>
                </html>
            `);
            newWindow.document.close();
        }
        showSuccessMessage('✨ 图片已在新窗口打开，长按保存！');
    } else {
        // 桌面端：直接下载
        const link = document.createElement('a');
        link.download = `${nickname}的破局俱乐部七夕表白卡_${constellationInfo.name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showSuccessMessage('✨ 表白卡片下载成功！');
    }
}

// 下载情书长图（移动端优化）
function downloadLoveLetterImage() {
    const canvas = document.getElementById('loveLetterCanvas');
    const nickname = document.getElementById('nickname').value;
    const constellation = document.getElementById('constellation').value;
    const constellationInfo = constellationData[constellation];
    
    // 移动端优化：使用现代方式创建图片窗口
    if (window.innerWidth <= 768) {
        const dataURL = canvas.toDataURL('image/png');
        const newWindow = window.open('', '_blank', 'width=400,height=600');
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(`
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${nickname}的破局俱乐部七夕情书</title>
                        <style>
                            body {
                                margin: 0;
                                padding: 20px;
                                background: #f5f5f5;
                                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                                text-align: center;
                            }
                            .tip {
                                background: #007AFF;
                                color: white;
                                padding: 15px;
                                border-radius: 10px;
                                margin-bottom: 20px;
                                font-size: 16px;
                            }
                            img {
                                max-width: 100%;
                                height: auto;
                                border-radius: 10px;
                                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="tip">📱 长按图片选择"保存图片"即可保存到相册</div>
                        <img src="${dataURL}" alt="${nickname}的破局俱乐部七夕情书" />
                    </body>
                </html>
            `);
            newWindow.document.close();
        }
        showSuccessMessage('✨ 情书已在新窗口打开，长按保存！');
    } else {
        // 桌面端：直接下载
        const link = document.createElement('a');
        link.download = `${nickname}的破局俱乐部七夕情书_${constellationInfo.name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showSuccessMessage('✨ 情书长图下载成功！');
    }
}

// 工具函数：显示加载动画
function showLoading() {
    document.getElementById('loadingDiv').style.display = 'block';
    document.querySelector('.btn').style.display = 'none';
}

// 隐藏加载动画
function hideLoading() {
    document.getElementById('loadingDiv').style.display = 'none';
    document.querySelector('.btn').style.display = 'block';
}

// 显示错误消息
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #e17055, #d63031);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(225, 112, 85, 0.4);
        animation: errorPulse 0.5s ease-out;
    `;
    errorDiv.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes errorPulse {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'errorPulse 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(errorDiv);
            document.head.removeChild(style);
        }, 300);
    }, 2500);
}

// 显示成功消息
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00b894, #00cec9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 184, 148, 0.3);
        animation: successSlide 0.5s ease-out;
    `;
    successDiv.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes successSlide {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'successSlide 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(successDiv);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// 庆祝效果
function celebrationEffect() {
    const emojis = ['🎉', '🎆', '✨', '💕', '💖', '🌈', '🚀', '⭐'];
    
    for(let i = 0; i < 15; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 20}px;
                z-index: 1000;
                pointer-events: none;
                animation: celebrate 2s ease-out forwards;
            `;
            
            document.body.appendChild(emoji);
            
            setTimeout(() => {
                if (emoji.parentNode) {
                    emoji.parentNode.removeChild(emoji);
                }
            }, 2000);
        }, i * 100);
    }
    
    // 添加庆祝动画
    const celebrateStyle = document.createElement('style');
    celebrateStyle.textContent = `
        @keyframes celebrate {
            0% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: scale(2) rotate(360deg) translateY(-100px);
            }
        }
    `;
    document.head.appendChild(celebrateStyle);
    
    setTimeout(() => {
        document.head.removeChild(celebrateStyle);
    }, 3000);
}

// 重新生成（更新版）
function generateAnother() {
    document.getElementById('inputForm').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    
    // 重置预览区域
    document.getElementById('cardPreview').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    
    // 清空表单
    document.querySelectorAll('#inputForm input, #inputForm select, #inputForm textarea').forEach(field => {
        field.value = '';
    });
    
    // 滚动到表单顶部
    document.getElementById('inputForm').scrollIntoView({ behavior: 'smooth' });
}