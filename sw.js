// Service Worker for AI破局七夕情缘APP
const CACHE_NAME = 'poju-qixi-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './script.js',
    './manifest.json',
    './icon-192.svg',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap'
];

// 安装事件 - 缓存资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('缓存已打开');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('缓存失败:', err);
            })
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('删除旧缓存:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 获取事件 - 缓存优先策略
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 缓存中找到了，直接返回
                if (response) {
                    return response;
                }
                
                // 缓存中没有，从网络获取
                return fetch(event.request)
                    .then(response => {
                        // 检查响应是否有效
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // 克隆响应，因为响应是流，只能使用一次
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
            })
            .catch(() => {
                // 网络和缓存都失败时的后备方案
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});

// 后台同步（可选）
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        console.log('执行后台同步');
        // 在这里执行后台任务
    }
});

// 推送通知处理（可选）
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : '破局俱乐部有新消息！',
        icon: './icon-192.png',
        badge: './icon-192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: '查看详情',
                icon: './icon-192.png'
            },
            {
                action: 'close',
                title: '关闭',
                icon: './icon-192.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('AI破局七夕情缘', options)
    );
});

// 处理通知点击
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'explore') {
        // 打开APP
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});