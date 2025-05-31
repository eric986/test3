
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.pricing-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
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
            

            window.closeModal = function() {
                document.body.removeChild(modal);
            };
        }


        function openMap() {
            window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.5230533465715!2d121.7747332044106!3d24.64011820727919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e744878fb0db%3A0xa0c752e6fc56da3e!2z5a6c6Jit5YyF5qOf5rCR5a6_LeaykOeOpQ!5e0!3m2!1szh-TW!2stw!4v1748527699622!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade', '_blank');
        }


        const mapFloat = document.querySelector('.map-float');
        let isMapHovered = false;

        mapFloat.addEventListener('mouseenter', function() {
            isMapHovered = true;
            this.style.transform = 'scale(1.05)';
        });

        mapFloat.addEventListener('mouseleave', function() {
            isMapHovered = false;
            this.style.transform = 'scale(1)';
        });


        const pricingCards = document.querySelectorAll('.pricing-card');
        
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });


        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });


        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {

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
                    this.removeChild(ripple);
                }, 600);
            });
        });

 
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);