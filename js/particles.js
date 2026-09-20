// ==========================================
// Ziya & Nəzrin — Dayanmayan Romantik Hissəciklər və Animasiya Mühərriki
// ==========================================

(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'romantic-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Rəng palitrası
    const colors = [
        'rgba(255, 77, 136, ',
        'rgba(255, 117, 140, ',
        'rgba(255, 141, 161, ',
        'rgba(224, 64, 251, ',
        'rgba(255, 182, 193, ',
        'rgba(255, 215, 0, '
    ];

    // Ürək çəkmə funksiyası
    function drawHeart(ctx, x, y, size, color, alpha, rotation = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        
        // Sol tərəf
        ctx.bezierCurveTo(
            -size / 2, -size / 2,
            -size, topCurveHeight / 3,
            0, size
        );
        
        // Sağ tərəf
        ctx.bezierCurveTo(
            size, topCurveHeight / 3,
            size / 2, -size / 2,
            0, topCurveHeight
        );

        ctx.fillStyle = color + alpha + ')';
        ctx.shadowColor = color + '0.8)';
        ctx.shadowBlur = size * 0.6;
        ctx.fill();
        ctx.restore();
    }

    // 4 guşəli parlaq ulduz çəkmə
    function drawSparkle(ctx, x, y, size, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            ctx.lineTo(0, size);
            ctx.quadraticCurveTo(0, 0, size * 0.3, 0);
            ctx.rotate(Math.PI / 2);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = 'rgba(255, 192, 203, 0.9)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
    }

    // Əsas uçan ürəklər
    const floatingHearts = [];
    const HEART_COUNT = Math.min(45, Math.floor(window.innerWidth / 25));

    class FloatingHeart {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 30;
            this.size = Math.random() * 18 + 10;
            this.speedY = Math.random() * 1.2 + 0.6;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.5 + 0.3;
            this.rotation = (Math.random() - 0.5) * 0.6;
            this.rotSpeed = (Math.random() - 0.5) * 0.02;
            this.swaySpeed = Math.random() * 0.02 + 0.01;
            this.swayDistance = Math.random() * 2 + 1;
            this.step = Math.random() * 100;
        }

        update() {
            this.step += this.swaySpeed;
            this.y -= this.speedY;
            this.x += Math.sin(this.step) * this.swayDistance + this.speedX;
            this.rotation += this.rotSpeed;

            if (this.y < -40 || this.x < -40 || this.x > width + 40) {
                this.reset();
            }
        }

        draw() {
            drawHeart(ctx, this.x, this.y, this.size, this.color, this.alpha, this.rotation);
        }
    }

    for (let i = 0; i < HEART_COUNT; i++) {
        floatingHearts.push(new FloatingHeart());
    }

    // Parıldayan ulduzlar
    const sparkles = [];
    const SPARKLE_COUNT = 35;

    class Sparkle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 6 + 4;
            this.alpha = Math.random();
            this.alphaSpeed = (Math.random() * 0.03 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
        }

        update() {
            this.alpha += this.alphaSpeed;
            if (this.alpha > 0.9) {
                this.alpha = 0.9;
                this.alphaSpeed = -this.alphaSpeed;
            } else if (this.alpha < 0.1) {
                this.alpha = 0.1;
                this.alphaSpeed = -this.alphaSpeed;
                this.x = Math.random() * width;
                this.y = Math.random() * height;
            }
        }

        draw() {
            drawSparkle(ctx, this.x, this.y, this.size, this.alpha);
        }
    }

    for (let i = 0; i < SPARKLE_COUNT; i++) {
        sparkles.push(new Sparkle());
    }

    // Axan ulduzlar (Shooting Stars / Romantik meteorlar)
    const shootingStars = [];

    class ShootingStar {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width * 1.2 - width * 0.2;
            this.y = Math.random() * height * 0.4;
            this.length = Math.random() * 80 + 50;
            this.speed = Math.random() * 8 + 6;
            this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // ~45 dərəcə
            this.alpha = 0;
            this.state = 'fade-in';
            this.timer = Math.random() * 300 + 100;
        }

        update() {
            if (this.timer > 0) {
                this.timer--;
                return;
            }

            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            if (this.state === 'fade-in') {
                this.alpha += 0.06;
                if (this.alpha >= 1) this.state = 'fade-out';
            } else {
                this.alpha -= 0.03;
                if (this.alpha <= 0) {
                    this.reset();
                }
            }
        }

        draw() {
            if (this.timer > 0 || this.alpha <= 0) return;
            ctx.save();
            const tailX = this.x - Math.cos(this.angle) * this.length;
            const tailY = this.y - Math.sin(this.angle) * this.length;

            const grad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            grad.addColorStop(0, `rgba(255, 230, 240, ${this.alpha})`);
            grad.addColorStop(0.3, `rgba(255, 105, 180, ${this.alpha * 0.7})`);
            grad.addColorStop(1, 'rgba(255, 105, 180, 0)');

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.5;
            ctx.shadowColor = 'rgba(255, 182, 193, 1)';
            ctx.shadowBlur = 10;
            ctx.stroke();

            // Ulduzun başlığı
            drawSparkle(ctx, this.x, this.y, 4, this.alpha);
            ctx.restore();
        }
    }

    for (let i = 0; i < 3; i++) {
        shootingStars.push(new ShootingStar());
    }

    // Kursor İzi və Klik Partlayışı Hissəcikləri
    const interactiveParticles = [];

    class InteractiveParticle {
        constructor(x, y, isHeart = true, customColor = null, vx = null, vy = null) {
            this.x = x;
            this.y = y;
            this.isHeart = isHeart;
            this.color = customColor || colors[Math.floor(Math.random() * colors.length)];
            this.size = isHeart ? Math.random() * 12 + 8 : Math.random() * 5 + 3;
            this.vx = vx !== null ? vx : (Math.random() - 0.5) * 4;
            this.vy = vy !== null ? vy : (Math.random() - 0.5) * 4 - 1.5;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.015;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.03; // zərif cazibə
            this.alpha -= this.decay;
            this.rotation += this.rotSpeed;
        }

        draw() {
            if (this.alpha <= 0) return;
            if (this.isHeart) {
                drawHeart(ctx, this.x, this.y, this.size, this.color, this.alpha, this.rotation);
            } else {
                drawSparkle(ctx, this.x, this.y, this.size, this.alpha);
            }
        }
    }

    // Siçan və toxunuş hərəkətləri
    let lastMoveTime = 0;
    function handlePointerMove(e) {
        const now = Date.now();
        if (now - lastMoveTime < 25) return;
        lastMoveTime = now;

        const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY);
        if (!x || !y) return;

        interactiveParticles.push(new InteractiveParticle(x, y, Math.random() > 0.4, null, (Math.random() - 0.5) * 1.5, -Math.random() * 1.5));
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Klik / Toxunuş zamanı partlayış
    function handlePointerClick(e) {
        // Düymə və ya input-a klikləyəndə də vizual effekt işləsin
        const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY);
        if (!x || !y) return;

        window.createHeartBurst(x, y, 22);
    }

    window.addEventListener('click', handlePointerClick);

    // Qlobal partlayış funksiyası
    window.createHeartBurst = function (x, y, count = 20) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
            const force = Math.random() * 6 + 3;
            const vx = Math.cos(angle) * force;
            const vy = Math.sin(angle) * force - 2;
            interactiveParticles.push(new InteractiveParticle(x, y, true, null, vx, vy));
        }

        for (let i = 0; i < 10; i++) {
            interactiveParticles.push(new InteractiveParticle(x, y, false, null, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8));
        }
    };

    // Sevgi Kəlmələri Üzən Mətn Partlayışı
    const floatingWords = ['Səni Sevirəm ❤️', 'Nəzrinim 🌸', 'Ziya ❤️ Nəzrin', 'Həyatım ✨', 'Gözəlim 💖', '3107 🔐', '02.08.2026 💑', 'Nəfəsim 🌹'];
    window.spawnFloatingLoveWord = function(x, y) {
        const word = floatingWords[Math.floor(Math.random() * floatingWords.length)];
        const el = document.createElement('div');
        el.className = 'floating-love-word';
        el.textContent = word;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1800);
    };

    // Əsas Render Tsikli
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < sparkles.length; i++) {
            sparkles[i].update();
            sparkles[i].draw();
        }

        for (let i = 0; i < shootingStars.length; i++) {
            shootingStars[i].update();
            shootingStars[i].draw();
        }

        for (let i = 0; i < floatingHearts.length; i++) {
            floatingHearts[i].update();
            floatingHearts[i].draw();
        }

        for (let i = interactiveParticles.length - 1; i >= 0; i--) {
            const p = interactiveParticles[i];
            p.update();
            p.draw();
            if (p.alpha <= 0) {
                interactiveParticles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
