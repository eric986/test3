window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');

            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    }
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

 
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function openLightbox(imageType) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    

    const imageData = {
        pool: {
            src: 'images/pool.jpg',
            caption: '無邊際山景泳池 - 在山林間享受游泳樂趣'
        },
        house: {
            src: 'images/house.jpg',
            caption: '山境民宿正面 - 現代建築與自然的完美融合'
        },
        room1: {
            src: 'images/room.jpg',
            caption: '房間整體空間 - 開放式設計與自然採光'
        },
        room2: {
            src: 'images/bath.jpg',
            caption: '精緻浴室空間 - 現代化衛浴設施'
        },
        room3: {
            src: 'images/Sun.jpg',
            caption: '私人景觀陽台 - 180度山景視野'
        },
        room4: {
            src: 'images/mainroom.jpg',
            caption: '溫馨客廳區域 - 舒適的休憩空間'
        },

        MJ: {
            src: 'images/MJ.jpg',
            caption: '主臥室空間 - 寬敞舒適的休憩環境'
        },
        kitchen: {
            src: 'images/kitchen.jpg',
            caption: '現代化廚房 - 完善的烹飪設施'
        },
        UD: {
            src: 'images/UD.jpg',
            caption: '上下舖房型 - 適合家庭入住'
        },
        BBQ: {
            src: 'images/BBQ.jpg',
            caption: 'BBQ烤肉區 - 戶外聚會好去處'
        }
    };
    
    const data = imageData[imageType];
    if (data) {
        lightboxImage.innerHTML = `<img src="${data.src}" alt="${data.caption}" style="width: 100%; height: 100%; object-fit: contain;">`;
        lightboxCaption.textContent = data.caption;
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

function bookNow(period) {

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    
    content.innerHTML = `
        <h3 style="color: #2c5530; margin-bottom: 20px;">預約${period}方案</h3>
        <p style="margin-bottom: 20px; color: #666;">
            感謝您選擇山境民宿！<br>
            請撥打預約專線或透過官方LINE進行預約
        </p>
        <div style="margin: 20px 0;">
            <p><strong>預約專線：</strong> 04-2658-XXXX</p>
            <p><strong>LINE ID：</strong> @mountain-house</p>
        </div>
        <button onclick="closeModal()" style="
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        ">確定</button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // 全域關閉函數
    window.closeModal = function() {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    };
}

// 地圖開啟功能
function openMap() {
    window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.5230533465715!2d121.7747332044106!3d24.64011820727919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e744878fb0db%3A0xa0c752e6fc56da3e!2z5a6c6Jit5YyF5qOf5rCR5a6_LeaykOeOpQ!5e0!3m2!1szh-TW!2stw!4v1748527699622!5m2!1szh-TW!2stw', '_blank');
}

// 頁面載入完成後執行的初始化函數
document.addEventListener('DOMContentLoaded', function() {
    
    // 價格卡片載入動畫
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // 服務卡片載入動畫
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // 特色卡片載入動畫
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 價格卡片懸浮效果
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 地圖懸浮效果
document.addEventListener('DOMContentLoaded', function() {
    const mapFloat = document.querySelector('.map-float');
    if (mapFloat) {
        mapFloat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });

        mapFloat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// 功能清單懸浮效果
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature-list li').forEach((item) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// 服務圖片懸浮效果
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-image').forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.borderColor = '#2c5530';
            this.style.background = '#e8f5e8';
            this.style.transition = 'all 0.3s ease';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.borderColor = '#ddd';
            this.style.background = '#f0f0f0';
        });
    });
});

// 時間表懸浮效果
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.schedule-table tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'all 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// 按鈕點擊漣漪效果
document.addEventListener('DOMContentLoaded', function() {
    // 為所有預約按鈕添加漣漪效果
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 創建漣漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
});

// 特色卡片浮動動畫（每5秒執行一次）
setInterval(function() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 1000);
        }, index * 200);
    });
}, 5000);

// 添加漣漪動畫CSS樣式
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* 增強過渡效果 */
    .pricing-card,
    .service-card,
    .feature-card {
        transition: all 0.3s ease;
    }
    
    .feature-list li {
        transition: all 0.3s ease;
    }
    
    .service-image {
        transition: all 0.3s ease;
    }
    
    .schedule-table tr {
        transition: all 0.3s ease;
    }
    
    .map-float {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// 錯誤處理和調試功能
window.addEventListener('error', function(e) {
    console.error('JavaScript錯誤:', e.error);
});

// 確保所有功能在頁面完全載入後可用
window.addEventListener('load', function() {
    console.log('山境民宿網站JavaScript功能已全部載入完成');
});