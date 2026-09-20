// ==========================================
// Ziya & Nəzrin — Romantik Audio və Səs Effektləri Mühərriki
// (Həm Web Audio Sintizatoru, həm də MP3 Dəstəyi)
// ==========================================

class RomanticAudioManager {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.isMuted = false;
        this.ambientTimer = null;
        this.currentChord = 0;
        this.bgAudio = new Audio();
        this.bgAudio.src = 'assets/music.mp3';
        this.bgAudio.loop = true;
        this.hasCustomAudio = false;

        // Custom musiqinin mövcudluğunu yoxla
        this.bgAudio.addEventListener('canplaythrough', () => {
            this.hasCustomAudio = true;
        });
        this.bgAudio.addEventListener('error', () => {
            this.hasCustomAudio = false;
        });
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Yumşaq not çalmaq (Sintezator)
    playTone(freq, type = 'sine', duration = 1.2, maxGain = 0.08, delay = 0) {
        if (this.isMuted) return;
        this.init();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        // Zərif aşağı tezlik filtri (yumşaq səs effekti üçün)
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(maxGain, this.ctx.currentTime + delay + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
    }

    // Romantik akkordlar silsiləsi (C - G - Am - F)
    startAmbientMelody() {
        if (this.isPlaying || this.isMuted) return;
        this.isPlaying = true;
        this.init();

        if (this.hasCustomAudio) {
            this.bgAudio.play().catch(() => {});
            return;
        }

        // Romantik lofi arfa akkordları tezlikləri (Hz)
        const progressions = [
            [261.63, 329.63, 392.00, 523.25], // C major
            [220.00, 261.63, 329.63, 440.00], // A minor
            [174.61, 220.00, 261.63, 349.23], // F major
            [196.00, 246.94, 293.66, 392.00]  // G major
        ];

        const playNextChord = () => {
            if (!this.isPlaying || this.isMuted) return;

            const chord = progressions[this.currentChord];
            chord.forEach((freq, idx) => {
                // Arpeggio effekti
                this.playTone(freq, 'sine', 2.8, 0.04, idx * 0.25);
                if (idx === 3) {
                    // Üst parlaq zəng səsi
                    this.playTone(freq * 1.5, 'triangle', 2.0, 0.02, 1.2);
                }
            });

            this.currentChord = (this.currentChord + 1) % progressions.length;
            this.ambientTimer = setTimeout(playNextChord, 3200);
        };

        playNextChord();
    }

    stopAmbientMelody() {
        this.isPlaying = false;
        if (this.ambientTimer) clearTimeout(this.ambientTimer);
        if (this.hasCustomAudio) {
            this.bgAudio.pause();
        }
    }

    toggleSound() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopAmbientMelody();
        } else {
            this.startAmbientMelody();
        }
        return !this.isMuted;
    }

    // Düyməyə basanda incə kristal səs
    playKeyClick() {
        if (this.isMuted) return;
        this.init();
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        this.playTone(randomNote, 'sine', 0.25, 0.05);
    }

    // Şifrə düzgün olanda zəfər və sevgi akkordu
    playUnlockSuccess() {
        if (this.isMuted) return;
        this.init();
        const notes = [440, 554.37, 659.25, 880, 1108.73];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'sine', 1.8, 0.08, idx * 0.12);
        });
    }

    // Yanlış şifrə səsi
    playErrorBuzz() {
        if (this.isMuted) return;
        this.init();
        this.playTone(220, 'triangle', 0.3, 0.06, 0);
        this.playTone(196, 'triangle', 0.4, 0.06, 0.15);
    }

    // Balon partlayışı səsi (Cute pop)
    playBubblePop() {
        if (this.isMuted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400 + Math.random() * 200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800 + Math.random() * 300, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.09);
    }
}

window.romanticAudio = new RomanticAudioManager();
