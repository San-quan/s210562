// 艺信坊APP下载页面交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 检测用户设备类型
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    // 下载按钮
    const iosBtn = document.querySelector('.btn-ios');
    const androidBtn = document.querySelector('.btn-android');

    // 设置下载链接（请替换为实际的下载链接）
    const IOS_DOWNLOAD_URL = 'https://apps.apple.com/app/yixinfang';
    const ANDROID_DOWNLOAD_URL = 'https://play.google.com/store/apps/details?id=com.yixinfang.app';

    if (iosBtn) {
        iosBtn.href = IOS_DOWNLOAD_URL;
        iosBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleDownload('iOS', IOS_DOWNLOAD_URL);
        });
    }

    if (androidBtn) {
        androidBtn.href = ANDROID_DOWNLOAD_URL;
        androidBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleDownload('Android', ANDROID_DOWNLOAD_URL);
        });
    }

    // 处理下载
    function handleDownload(platform, url) {
        console.log(`下载${platform}版本`);
        
        // 这里可以添加下载统计等逻辑
        trackDownload(platform);
        
        // 跳转到下载页面
        window.location.href = url;
    }

    // 下载统计（示例）
    function trackDownload(platform) {
        // 可以在这里添加Google Analytics或其他统计工具的代码
        console.log(`统计: ${platform}下载`);
    }

    // 根据设备类型高亮相应的下载按钮
    if (isIOS && iosBtn) {
        iosBtn.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
    } else if (isAndroid && androidBtn) {
        androidBtn.style.boxShadow = '0 0 20px rgba(245, 87, 108, 0.5)';
    }

    // 添加页面加载动画
    const featureItems = document.querySelectorAll('.feature-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    featureItems.forEach(item => {
        observer.observe(item);
    });
});
