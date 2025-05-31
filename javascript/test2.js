
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });


        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

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


        function openLightbox(imageType) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            const lightboxCaption = document.getElementById('lightbox-caption');
            

            const imageData = {
                pool: {
                    src: 'images/pool.jpg',
                    caption: '無邊際山景泳池 - 在山林間享受游泳樂趣'
                },
                
                room1: {
                    src: 'images/MJ.jpg',
                    caption: '房間整體空間 - 開放式設計與自然採光'
                },
                room2: {
                    src: 'images/kitchen.jpg',
                    caption: '精緻浴室空間 - 現代化衛浴設施'
                },
                room3: {
                    src: 'images/UD.jpg',
                    caption: '私人景觀陽台 - 180度山景視野'
                },
                room4: {
                    src: 'images/BBQ.jpg',
                    caption: '溫馨客廳區域 - 舒適的休憩空間'
                }
            };
            
            const data = imageData[imageType];
            lightboxImage.innerHTML = `<img src="${data.src}" alt="${data.caption}" style="width: 100%; height: 100%; object-fit: contain;">`;
            lightboxCaption.textContent = data.caption;
            
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

    
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });