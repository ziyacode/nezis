// ===================================================
// Ziya & Nəzrin — Professional Romantik Musiqi Studiyası (7 Mahnı)
// Bütün mahnılar üçün tam sinxron sözlər (Karaoke Lyrics),
// 10s İrəli/Geri, Növbəti/Əvvəlki mahnı, Pleylist və Fırlanan Vinil
// ===================================================

const PLAYLIST_DATA = [
    {
        id: "rei-ah-canim",
        title: "Ah Canım Sevgilim",
        artist: "Rei",
        dedication: "Ziyadan Nəzrinə — Qəlbimin ən dərin nəğməsi 💖",
        src: "assets/ah_canim_sevgilim.mp3",
        badge: "03:10 • Sevgi Klassikası",
        icon: "💖",
        lyrics: [
            { time: 1.0, text: "Saçların ıslanır" },
            { time: 3.2, text: "Ellerin bana bağlanır" },
            { time: 6.0, text: "Utanır söylemez" },
            { time: 8.2, text: "Diz çöküp sana yalvarır" },
            { time: 10.5, text: "Dudakların bana" },
            { time: 12.5, text: "Nasıl da yakınken öyle" },
            { time: 14.5, text: "Bu rüyadan biri" },
            { time: 16.5, text: "Biri beni uyandırır..." },
            { time: 19.0, text: "Saatler geçmiyor" },
            { time: 21.0, text: "Bu rüzgar artık esmiyor" },
            { time: 23.5, text: "Bana senden kalan" },
            { time: 25.5, text: "Hatıralar da yetmiyor" },
            { time: 27.5, text: "Ellerim üşüyor" },
            { time: 29.5, text: "Fotoğraflar konuşmuyor" },
            { time: 32.0, text: "Bu zalim dünyada" },
            { time: 34.0, text: "Hiçbir şey beni ısıtmıyor..." },
            { time: 36.5, text: "Bir sahne kurmuşum" },
            { time: 38.5, text: "Kadıköy'de buluşmuşum" },
            { time: 40.5, text: "Seninle el ele" },
            { time: 42.5, text: "Saatlerce konuşmuşum" },
            { time: 45.0, text: "Verdiğim sözleri" },
            { time: 47.0, text: "Birer birer unutmuşum" },
            { time: 49.0, text: "Üzgünüm sevgilim" },
            { time: 51.0, text: "Düşlerimle sarhoşmuşum..." },
            { time: 53.5, text: "Bu dağ bu karları" },
            { time: 55.5, text: "Nasıl taşır anlamadım" },
            { time: 57.5, text: "Ben bir kez vuruldum" },
            { time: 59.5, text: "Bir daha hiç kalkamadım" },
            { time: 61.5, text: "Sevmeyi denedim" },
            { time: 63.5, text: "Afalladım, afalladım" },
            { time: 65.5, text: "Denedim olmadı" },
            { time: 67.5, text: "Hiç kimseye inanmadım..." },
            { time: 70.0, text: "🎵 (La la la la la la la...) 🎵" },
            { time: 85.5, text: "Ah canım sevgilim" },
            { time: 88.0, text: "Derin bir okyanustayım" },
            { time: 90.0, text: "Hiç kimse gelmiyor" },
            { time: 92.0, text: "Bırak beni konuşayım" },
            { time: 94.5, text: "En azından bugün" },
            { time: 96.5, text: "Bugün de sonbahardayım" },
            { time: 99.0, text: "Soracak olursan" },
            { time: 101.0, text: "Ben şimdi uzaklardayım..." },
            { time: 103.5, text: "Ah canım sevgilim" },
            { time: 105.5, text: "Derin bir okyanustayım" },
            { time: 107.5, text: "Hiç kimse gelmiyor" },
            { time: 109.5, text: "Bırak beni konuşayım" },
            { time: 111.5, text: "En azından bugün" },
            { time: 113.5, text: "Bugün de sonbahardayım" },
            { time: 116.0, text: "Soracak olursan" },
            { time: 118.0, text: "Ben şimdi uzaklardayım..." },
            { time: 120.0, text: "Ben sana gel dedim..." },
            { time: 122.0, text: "İçimde kaybolan papatyalardı gözlerin" },
            { time: 126.0, text: "Eski bir radyodan çalan şarkıyı dinledim" },
            { time: 130.0, text: "Hayatı kahrolan gibi..." },
            { time: 132.5, text: "Gururu ayaklar altına alınmış biri gibi" },
            { time: 136.0, text: "Ben sana gel dedim..." },
            { time: 138.0, text: "İçimde kaybolan papatyalardı gözlerin" },
            { time: 142.5, text: "Eski bir radyodan çalan şarkıyı dinledim" },
            { time: 146.5, text: "Hayatı kahrolan gibi..." },
            { time: 149.0, text: "Gururu ayaklar altına alınmış biri gibi..." },
            { time: 153.0, text: "🎵 (La la la la la la la...) 🎵" },
            { time: 167.0, text: "Ben sana gel dedim..." },
            { time: 170.0, text: "İçimde kaybolan papatyalardı gözlerin" },
            { time: 174.0, text: "Eski bir radyodan çalan şarkıyı dinledim" },
            { time: 178.5, text: "Hayatı kahrolan gibi..." },
            { time: 181.0, text: "Gururu ayaklar altına alınmış biri gibi... 💖" }
        ]
    },
    {
        id: "nights-like-this",
        title: "NIGHTS LIKE THIS",
        artist: "The Kid LAROI",
        dedication: "Sənsiz keçən gecələrin tək arzusu... ✨",
        src: "assets/nights_like_this.mp3",
        badge: "01:30 • Vibe Pop",
        icon: "🌙",
        lyrics: [
            { time: 13.5, text: "Hold my hand into the ashes" },
            { time: 17.5, text: "Promise me that you'll put me in my casket" },
            { time: 21.0, text: "I got all these feelings and I'm masking" },
            { time: 24.5, text: "You don't lay it on you, that's what I'm asking" },
            { time: 27.5, text: "Nights like this and I'm asking for you" },
            { time: 31.0, text: "Nights like this, I just want you" },
            { time: 34.5, text: "I don't think about nothing else" },
            { time: 37.0, text: "I do it just for myself, I can show it for myself" },
            { time: 40.5, text: "In nights like this, when I need your love" },
            { time: 44.5, text: "When I miss your love, and I want some" },
            { time: 47.5, text: "In nights like this, nights like, nights like this..." },
            { time: 54.0, text: "✨ (Instrumental Rhythm) ✨" },
            { time: 67.5, text: "In nights like this, when I need your love" },
            { time: 71.0, text: "When I miss your love, and I want some" },
            { time: 74.0, text: "In nights like this, nights like, nights like this... 💖" }
        ]
    },
    {
        id: "cas-apocalypse",
        title: "Apocalypse (Cenneti Müjdeleyen)",
        artist: "Cigarettes After Sex / AQTAII",
        dedication: "Sənin gözlərində batan və doğan dünyam... 🌌",
        src: "assets/apocalypse.mp3",
        badge: "02:35 • Dream Pop / Instrumental",
        icon: "🌌",
        lyrics: [
            { time: 23.5, text: "Canım acıyor bu özlemin..." },
            { time: 27.0, text: "Gözlerin bana tam gelirken," },
            { time: 29.5, text: "Tenin tenime üşürken," },
            { time: 31.5, text: "Küçük gözlerin..." },
            { time: 35.0, text: "Bu küçük oda bana zindan gelir, sorun yok." },
            { time: 38.5, text: "Her yatağımda sen varsan," },
            { time: 40.5, text: "Coşkulu kollarınla beni sıkıca sararsan..." },
            { time: 45.0, text: "Duştan çıktın ve yanıma yattın," },
            { time: 47.5, text: "Islak saçlarınla avucu sigarayı yaktın." },
            { time: 50.5, text: "Omuzlarından kısacık bornozu attın..." },
            { time: 54.0, text: "Düşen karlar bana anlatır hayatı," },
            { time: 58.0, text: "Boş ver tamam bütün hayallerim burada." },
            { time: 61.5, text: "Altılı zaten uyurken yatağımda..." },
            { time: 66.0, text: "Sarı saçın salınırken omzunda..." },
            { time: 70.0, text: "Omuzunda... Bu odada... Kapkara bulutlar..." },
            { time: 88.0, text: "Canım acıyor bu özlemin..." },
            { time: 91.0, text: "Gözlerin bana tam gelirken," },
            { time: 93.5, text: "Tenin tenime üşürken, küçük gözlerin..." },
            { time: 98.0, text: "Bu küçük oda bana zindan gelir, sorun yok." },
            { time: 102.0, text: "Her yatağımda sen varsan," },
            { time: 104.5, text: "Coşkulu kollarınla beni sıkıca sararsan..." },
            { time: 109.0, text: "Duştan çıktın ve yanıma yattın," },
            { time: 112.0, text: "Islak saçlarınla avucu sigarayı yaktın." },
            { time: 114.5, text: "Omuzlarından kısacık bornozu attın..." },
            { time: 120.0, text: "Düşen karlar bana anlatır hayatı," },
            { time: 123.0, text: "Boş ver tamam bütün hayallerim burada..." },
            { time: 131.0, text: "🌌 (Apocalypse Melodisi...) 🌌" }
        ]
    },
    {
        id: "gece-mavisi",
        title: "Gece Mavisi",
        artist: "Elyas & Taha",
        dedication: "Gecə mavisi gözlərində itdiyim qadın... 💙",
        src: "assets/gece_mavisi.mp3",
        badge: "03:06 • Romantik Akustik",
        icon: "💙",
        lyrics: [
            { time: 11.0, text: "Gecelerimi bana ver, zehirim..." },
            { time: 15.0, text: "Hiç uyku uyutmaz mısın sen güzelim?" },
            { time: 18.0, text: "Kalbimin ritmini çaldın ve gittin mi?" },
            { time: 22.0, text: "Gerçekten yaptın mı bunu bana?" },
            { time: 24.5, text: "Peki ya aşıksam hala, dolanıyorsam?" },
            { time: 27.5, text: "Şehrimde yalnız ve bulamıyorsam seni..." },
            { time: 31.0, text: "Mavinin tonları gözünde parladı," },
            { time: 35.0, text: "Kafayı buldum ve gülüşüne sardım, yok..." },
            { time: 39.0, text: "Bunun dermanı yok..." },
            { time: 43.0, text: "Biliyorum ama ne yapayım bu deli kalbimi?" },
            { time: 47.0, text: "Şişemin sonu devirir mi beni sen gibi?" },
            { time: 50.0, text: "Bu yağmurlar beni sensiz ıslatsa," },
            { time: 55.0, text: "Gökyüzüm arınır bütün bulutlarımdan..." },
            { time: 63.0, text: "Gece mavisi gözlerinde kayboldum, bul beni..." },
            { time: 70.0, text: "Tüm hata benim, sana bu şarkılar bu gece duy beni..." },
            { time: 75.0, text: "Gece mavisi gözlerinde kayboldum, bul beni..." },
            { time: 82.0, text: "Tüm hata benim, sana bu şarkılar bu gece duy beni..." },
            { time: 88.0, text: "Gece mavisi... Gece mavisi..." },
            { time: 93.0, text: "Gülüşüne sağlık, çok ağlattı..." },
            { time: 96.0, text: "Ben düştüm düştüm toparlandım, beni boş ver." },
            { time: 100.0, text: "Yeni sen bana gel, beni sev..." },
            { time: 103.0, text: "Deliler biri görse kollarında ölsem," },
            { time: 106.0, text: "Doğarım yeniden bana gülsen, of..." },
            { time: 109.0, text: "Al beni sol yanına, gir kanıma..." },
            { time: 113.0, text: "Yalnız kalamam, yok, sensiz olamaz..." },
            { time: 118.0, text: "Elim kolum bağlı, yüreğim yangından..." },
            { time: 123.0, text: "Sana dargınım, başka yolu var mı?" },
            { time: 126.0, text: "Gülüşünde kaldım, yok bu gönlüm sargılı..." },
            { time: 131.0, text: "Ben hala bir deli, sen hala bir delilsin." },
            { time: 136.0, text: "Bir sabah uyandığım gibi, sesimi duyan hiç değilsin..." },
            { time: 143.0, text: "Gece mavisi gözlerinde kayboldum, bul beni..." },
            { time: 150.0, text: "Tüm hata benim, sana bu şarkılar bu gece duy beni..." },
            { time: 155.0, text: "Gece mavisi gözlerinde kayboldum, bul beni..." },
            { time: 162.0, text: "Tüm hata benim, sana bu şarkılar bu gece duy beni..." },
            { time: 168.0, text: "Gece mavisi... Gece mavisi... 💙" }
        ]
    },
    {
        id: "cilek-bahcesi",
        title: "Çilek Bahçesi",
        artist: "İsmail Aras Yiğitoğlu",
        dedication: "Gülüşündə itdiyim ən şirin bağça... 🍓",
        src: "assets/cilek_bahcesi.mp3",
        badge: "03:32 • Akustik Sevgi",
        icon: "🍓",
        lyrics: [
            { time: 29.0, text: "Çıkabilsem bu yoldan," },
            { time: 33.0, text: "Gelirim sana inan." },
            { time: 36.5, text: "Gülüşünde kaybolup," },
            { time: 40.5, text: "Yollara baksam..." },
            { time: 43.5, text: "Bir çilek bahçesinde," },
            { time: 46.5, text: "Dolaşıp durdum yine," },
            { time: 50.5, text: "Yokluğunda bile..." },
            { time: 56.5, text: "Çıkabilsem bu yoldan," },
            { time: 60.5, text: "Gelirim sana inan." },
            { time: 63.5, text: "Gülüşünde kaybolup," },
            { time: 67.5, text: "Yollara baksam..." },
            { time: 70.5, text: "Bir çilek bahçesinde," },
            { time: 73.5, text: "Dolaşıp durdum yine," },
            { time: 77.5, text: "Yokluğunda bile..." },
            { time: 83.0, text: "Her gece..." },
            { time: 85.0, text: "Gece gündüz gelmedin," },
            { time: 88.0, text: "Beni böyle görmedin," },
            { time: 91.5, text: "Seni sevdim bilmedin," },
            { time: 95.0, text: "Kendimden geçtim..." },
            { time: 97.5, text: "Gece gündüz gelmedin," },
            { time: 101.0, text: "Beni böyle görmedin," },
            { time: 105.0, text: "Seni böyle sevmedin," },
            { time: 109.0, text: "Kendimden geçtim..." },
            { time: 138.0, text: "Çıkabilsem bu yoldan," },
            { time: 142.0, text: "Gelirim sana inan." },
            { time: 146.0, text: "Gülüşünde kaybolup, yollara baksam..." },
            { time: 153.0, text: "Bir çilek bahçesinde, dolaşıp durdum yine," },
            { time: 160.0, text: "Yokluğunda bile..." },
            { time: 167.0, text: "Gece gündüz gelmedin," },
            { time: 170.0, text: "Beni böyle görmedin," },
            { time: 174.0, text: "Seni sevdim bilmedin, kendimden geçtim..." },
            { time: 180.0, text: "Gece gündüz gelmedin, beni böyle görmedin," },
            { time: 187.0, text: "Seni böyle sevmedin, kendimden geçtim... 🍓" }
        ]
    },
    {
        id: "seni-dert-etmeler",
        title: "Seni Dert Etmeler",
        artist: "Madrigal",
        dedication: "Başqa bir kainatda belə yenə səni seçərdim... 🎸",
        src: "assets/seni_dert_etmeler.mp3",
        badge: "03:09 • İndie Rock",
        icon: "🎸",
        lyrics: [
            { time: 35.0, text: "Bazen bana gülür güler seni dert etmeler," },
            { time: 42.0, text: "Sinir rüyalarımda affetmeler..." },
            { time: 46.5, text: "Yüz güldürür, ömrümce sorum var." },
            { time: 52.0, text: "Düzelmez, düzelmez evrende bir gün daha..." },
            { time: 56.5, text: "Başka bir evrende, en güzel halinle," },
            { time: 62.0, text: "Sen hayata karış, ben dağda biteceğim..." },
            { time: 68.0, text: "Gün döner kendime, düşüyorum gölgende," },
            { time: 73.0, text: "Beni yüz bilmesen de belki bir gün güleceğim..." },
            { time: 89.0, text: "Rüzgara koy, sabahtan akşama..." },
            { time: 94.0, text: "Kazalara tutulmaya, fezaya uçmaya..." },
            { time: 100.0, text: "Geriye kaldılar, geride kaldı o günler." },
            { time: 106.0, text: "Sen varken tattığım, kalsın bir sihirler..." },
            { time: 111.5, text: "Başka bir evrende, en güzel halinle," },
            { time: 117.0, text: "Sen hayata karış, ben dağda biteceğim..." },
            { time: 122.0, text: "Gün döner kendime, düşüyorum gölgende," },
            { time: 127.0, text: "Beni yüz bilmesen de belki bir gün güleceğim..." },
            { time: 166.0, text: "Başka bir evrende, en güzel halinle," },
            { time: 171.0, text: "Sen hayata karış, ben dağda biteceğim..." },
            { time: 177.0, text: "Gün döner kendime, düşüyorum gölgende," },
            { time: 182.0, text: "Beni yüz bilmesen de belki bir gün güleceğim... 🎸" }
        ]
    },
    {
        id: "deeperise-raf",
        title: "Raf",
        artist: "Deeperise ft. Jabbar",
        dedication: "Tenimə və ürəyimə qazınmış tək eşq... 🎶",
        src: "assets/raf.mp3",
        badge: "04:04 • Deep House / Romantik",
        icon: "🎶",
        lyrics: [
            { time: 22.0, text: "Tenime yazılmışsın," },
            { time: 26.0, text: "Derinden..." },
            { time: 31.0, text: "İçime kazınmışsın," },
            { time: 35.0, text: "Benim kalbime..." },
            { time: 42.0, text: "Tenime yazılmışsın," },
            { time: 46.0, text: "Derinden..." },
            { time: 51.0, text: "İçime kazınmışsın," },
            { time: 55.0, text: "Benim kalbime..." },
            { time: 62.0, text: "Çıkmadın aklımdan bir gün," },
            { time: 67.0, text: "Yüzün hep gözümün ucunda." },
            { time: 72.0, text: "Kendini bir duvar gibi," },
            { time: 77.0, text: "Ördün karşıma..." },
            { time: 82.0, text: "Bulursun ararsan hata," },
            { time: 87.0, text: "Hep ölçer biçersen cefa..." },
            { time: 92.0, text: "Unutulur gidersin," },
            { time: 96.0, text: "Kaldırırlar rafa..." },
            { time: 140.0, text: "Tenime yazılmışsın," },
            { time: 144.0, text: "Derinden..." },
            { time: 149.0, text: "İçime kazınmışsın, benim kalbime..." },
            { time: 160.0, text: "Çıkmadın aklımdan bir gün," },
            { time: 165.0, text: "Yüzün hep gözümün ucunda." },
            { time: 170.0, text: "Kendini bir duvar gibi, ördün karşıma..." },
            { time: 180.0, text: "Bulursun ararsan hata, hep ölçer biçersen cefa..." },
            { time: 190.0, text: "Unutulur gidersin, kaldırırlar rafa... 🎶" }
        ]
    }
];

class ProMusicPlayer {
    constructor() {
        this.currentTrackIndex = 0;
        this.audio = new Audio();
        this.audio.preload = 'metadata';

        this.isPlaying = false;
        this.isLooping = false;
        this.isMuted = false;
        this.previousVolume = 1;
        this.currentLyricIndex = -1;
        this.notesTimer = null;

        // DOM Elementləri
        this.dom = {
            section: document.getElementById('music-player-section'),
            vinyl: document.getElementById('turntable-vinyl'),
            vinylTitle: document.getElementById('vinyl-label-title'),
            vinylSub: document.getElementById('vinyl-label-sub'),
            tonearm: document.getElementById('turntable-tonearm'),
            songTitle: document.getElementById('player-song-title'),
            artistName: document.getElementById('player-artist-name'),
            dedication: document.getElementById('player-dedication'),
            badge: document.getElementById('player-song-badge'),
            playlistTabs: document.getElementById('player-playlist-tabs'),
            playBtn: document.getElementById('player-play-btn'),
            playIcon: document.getElementById('player-play-icon'),
            prevBtn: document.getElementById('player-prev-btn'),
            nextBtn: document.getElementById('player-next-btn'),
            backwardBtn: document.getElementById('player-backward-btn'),
            forwardBtn: document.getElementById('player-forward-btn'),
            restartBtn: document.getElementById('player-restart-btn'),
            loopBtn: document.getElementById('player-loop-btn'),
            progressBar: document.getElementById('player-progress-bar'),
            progressFill: document.getElementById('player-progress-fill'),
            progressHandle: document.getElementById('player-progress-handle'),
            currentTime: document.getElementById('player-current-time'),
            totalTime: document.getElementById('player-total-time'),
            volumeBtn: document.getElementById('player-volume-btn'),
            volumeSlider: document.getElementById('player-volume-slider'),
            volumeFill: document.getElementById('player-volume-fill'),
            lyricsContainer: document.getElementById('player-lyrics-list'),
            soundwave: document.getElementById('player-soundwave')
        };

        this.init();
    }

    init() {
        this.renderPlaylistTabs();
        this.loadTrack(0, false);
        this.attachEvents();
    }

    formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    renderPlaylistTabs() {
        if (!this.dom.playlistTabs) return;
        this.dom.playlistTabs.innerHTML = '';

        PLAYLIST_DATA.forEach((track, index) => {
            const tab = document.createElement('button');
            tab.className = `playlist-pill ${index === this.currentTrackIndex ? 'active' : ''}`;
            tab.dataset.index = index;
            tab.innerHTML = `
                <span class="pill-icon">${track.icon}</span>
                <span class="pill-text">${track.title}</span>
                <span class="pill-artist">${track.artist}</span>
            `;

            tab.addEventListener('click', () => {
                if (this.currentTrackIndex !== index) {
                    this.loadTrack(index, true);
                } else {
                    this.togglePlay();
                }
            });

            this.dom.playlistTabs.appendChild(tab);
        });
    }

    loadTrack(index, autoPlay = true) {
        this.currentTrackIndex = index;
        const track = PLAYLIST_DATA[index];
        if (!track) return;

        this.audio.src = track.src;
        this.audio.load();
        this.currentLyricIndex = -1;

        // UI Yenilənməsi
        if (this.dom.songTitle) this.dom.songTitle.textContent = track.title;
        if (this.dom.artistName) this.dom.artistName.textContent = track.artist;
        if (this.dom.dedication) this.dom.dedication.textContent = `"${track.dedication}"`;
        if (this.dom.badge) this.dom.badge.textContent = track.badge;
        if (this.dom.vinylTitle) this.dom.vinylTitle.textContent = track.title;
        if (this.dom.vinylSub) this.dom.vinylSub.textContent = track.artist;

        // Pleylist tablarını aktiv et
        if (this.dom.playlistTabs) {
            const tabs = this.dom.playlistTabs.querySelectorAll('.playlist-pill');
            tabs.forEach((tab, idx) => {
                tab.classList.toggle('active', idx === index);
            });
        }

        // Sinxron sözləri render et
        this.renderLyrics(track.lyrics);

        // Zamanı sıfırla
        if (this.dom.currentTime) this.dom.currentTime.textContent = '00:00';
        if (this.dom.progressFill) this.dom.progressFill.style.width = '0%';

        if (autoPlay) {
            this.play();
        } else {
            this.updatePlayerUI(false);
        }
    }

    renderLyrics(lyrics) {
        if (!this.dom.lyricsContainer) return;
        this.dom.lyricsContainer.innerHTML = '';

        lyrics.forEach((item, idx) => {
            const line = document.createElement('div');
            line.className = 'lyric-line';
            line.dataset.index = idx;
            line.dataset.time = item.time;
            line.innerHTML = `
                <span class="lyric-time-badge">${this.formatTime(item.time)}</span>
                <span class="lyric-text">${item.text}</span>
            `;

            line.addEventListener('click', () => {
                this.seekTo(item.time);
                if (!this.isPlaying) {
                    this.play();
                }
                if (window.createHeartBurst) {
                    const rect = line.getBoundingClientRect();
                    window.createHeartBurst(rect.left + 50, rect.top + 15, 12);
                }
            });

            this.dom.lyricsContainer.appendChild(line);
        });

        // Başa sürüşdür
        this.dom.lyricsContainer.scrollTop = 0;
    }

    attachEvents() {
        // Play / Pause
        if (this.dom.playBtn) {
            this.dom.playBtn.addEventListener('click', () => this.togglePlay());
        }

        // Əvvəlki Mahnı
        if (this.dom.prevBtn) {
            this.dom.prevBtn.addEventListener('click', () => this.playPrevious());
        }

        // Növbəti Mahnı
        if (this.dom.nextBtn) {
            this.dom.nextBtn.addEventListener('click', () => this.playNext());
        }

        // 10s Geri
        if (this.dom.backwardBtn) {
            this.dom.backwardBtn.addEventListener('click', () => this.seekBy(-10));
        }

        // 10s İrəli
        if (this.dom.forwardBtn) {
            this.dom.forwardBtn.addEventListener('click', () => this.seekBy(10));
        }

        // Əvvələ Qayıt (00:00)
        if (this.dom.restartBtn) {
            this.dom.restartBtn.addEventListener('click', () => {
                this.seekTo(0);
                if (window.romanticAudio) window.romanticAudio.playKeyClick();
            });
        }

        // Dövrə / Loop rejimi
        if (this.dom.loopBtn) {
            this.dom.loopBtn.addEventListener('click', () => {
                this.isLooping = !this.isLooping;
                this.audio.loop = this.isLooping;
                this.dom.loopBtn.classList.toggle('active', this.isLooping);
                if (window.romanticAudio) window.romanticAudio.playKeyClick();
            });
        }

        // Audio Time Update
        this.audio.addEventListener('timeupdate', () => this.onTimeUpdate());

        // Audio Loaded Metadata
        this.audio.addEventListener('loadedmetadata', () => {
            if (this.dom.totalTime) {
                this.dom.totalTime.textContent = this.formatTime(this.audio.duration);
            }
        });

        // Audio Ended -> Növbəti Mahnıya Avtomatik Keçid
        this.audio.addEventListener('ended', () => {
            if (!this.isLooping) {
                this.playNext();
            }
        });

        // Progress Bar Click & Drag
        if (this.dom.progressBar) {
            this.dom.progressBar.addEventListener('click', (e) => {
                const rect = this.dom.progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                if (this.audio.duration) {
                    this.seekTo(ratio * this.audio.duration);
                }
            });
        }

        // Səs Düyməsi və Slider
        if (this.dom.volumeBtn) {
            this.dom.volumeBtn.addEventListener('click', () => this.toggleMute());
        }

        if (this.dom.volumeSlider) {
            this.dom.volumeSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                this.setVolume(val);
            });
        }
    }

    playPrevious() {
        let prevIdx = this.currentTrackIndex - 1;
        if (prevIdx < 0) prevIdx = PLAYLIST_DATA.length - 1;
        this.loadTrack(prevIdx, true);
        if (window.romanticAudio) window.romanticAudio.playKeyClick();
    }

    playNext() {
        let nextIdx = (this.currentTrackIndex + 1) % PLAYLIST_DATA.length;
        this.loadTrack(nextIdx, true);
        if (window.romanticAudio) window.romanticAudio.playKeyClick();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (window.romanticAudio) {
            window.romanticAudio.stopAmbientMelody();
        }

        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayerUI(true);
            this.startFloatingNotes();
        }).catch(err => {
            console.log("Audio play error: ", err);
        });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayerUI(false);
        this.stopFloatingNotes();
    }

    seekTo(time) {
        this.audio.currentTime = Math.max(0, Math.min(time, this.audio.duration || 190));
        this.onTimeUpdate();
    }

    seekBy(seconds) {
        const newTime = (this.audio.currentTime || 0) + seconds;
        this.seekTo(newTime);
        if (window.romanticAudio) window.romanticAudio.playKeyClick();
        
        const btn = seconds > 0 ? this.dom.forwardBtn : this.dom.backwardBtn;
        if (btn) {
            btn.classList.add('btn-pop');
            setTimeout(() => btn.classList.remove('btn-pop'), 300);
        }
    }

    updatePlayerUI(isPlaying) {
        if (this.dom.playIcon) {
            this.dom.playIcon.textContent = isPlaying ? '⏸' : '▶';
        }
        if (this.dom.vinyl) {
            this.dom.vinyl.classList.toggle('spinning', isPlaying);
        }
        if (this.dom.tonearm) {
            this.dom.tonearm.classList.toggle('on-record', isPlaying);
        }
        if (this.dom.soundwave) {
            this.dom.soundwave.classList.toggle('active', isPlaying);
        }
    }

    onTimeUpdate() {
        const cur = this.audio.currentTime || 0;
        const dur = this.audio.duration || 190;

        if (this.dom.currentTime) {
            this.dom.currentTime.textContent = this.formatTime(cur);
        }
        if (this.dom.totalTime && this.audio.duration) {
            this.dom.totalTime.textContent = this.formatTime(dur);
        }

        const percent = (cur / dur) * 100;
        if (this.dom.progressFill) {
            this.dom.progressFill.style.width = `${percent}%`;
        }

        this.updateActiveLyric(cur);
    }

    updateActiveLyric(currentTime) {
        const currentTrack = PLAYLIST_DATA[this.currentTrackIndex];
        if (!currentTrack) return;
        const lyrics = currentTrack.lyrics;

        let activeIdx = -1;
        for (let i = 0; i < lyrics.length; i++) {
            if (currentTime >= lyrics[i].time) {
                activeIdx = i;
            } else {
                break;
            }
        }

        if (activeIdx !== this.currentLyricIndex) {
            this.currentLyricIndex = activeIdx;

            const lines = this.dom.lyricsContainer.querySelectorAll('.lyric-line');
            lines.forEach((line, idx) => {
                if (idx === activeIdx) {
                    line.classList.add('active');
                    line.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                } else {
                    line.classList.remove('active');
                    if (idx < activeIdx) {
                        line.classList.add('passed');
                    } else {
                        line.classList.remove('passed');
                    }
                }
            });
        }
    }

    setVolume(val) {
        this.audio.volume = Math.max(0, Math.min(1, val));
        if (this.dom.volumeSlider) {
            this.dom.volumeSlider.value = this.audio.volume;
        }

        if (this.audio.volume === 0) {
            this.isMuted = true;
            if (this.dom.volumeBtn) this.dom.volumeBtn.textContent = '🔇';
        } else {
            this.isMuted = false;
            if (this.dom.volumeBtn) this.dom.volumeBtn.textContent = this.audio.volume > 0.5 ? '🔊' : '🔉';
        }
    }

    toggleMute() {
        if (this.isMuted) {
            this.setVolume(this.previousVolume || 0.8);
        } else {
            this.previousVolume = this.audio.volume;
            this.setVolume(0);
        }
    }

    startFloatingNotes() {
        if (this.notesTimer) clearInterval(this.notesTimer);
        const symbols = ['🎵', '🎶', '💖', '✨', '🌸', '🎼'];

        this.notesTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const vinylRect = this.dom.vinyl ? this.dom.vinyl.getBoundingClientRect() : null;
            if (!vinylRect) return;

            const note = document.createElement('div');
            note.className = 'floating-music-note';
            note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            note.style.left = `${vinylRect.left + vinylRect.width / 2 + (Math.random() - 0.5) * 60}px`;
            note.style.top = `${vinylRect.top + vinylRect.height / 2}px`;
            document.body.appendChild(note);

            setTimeout(() => note.remove(), 2500);
        }, 800);
    }

    stopFloatingNotes() {
        if (this.notesTimer) {
            clearInterval(this.notesTimer);
            this.notesTimer = null;
        }
    }
}

// Kilid açıldıqda və ya səhifə yükləndikdə pleyeri başlat
window.initProMusicPlayer = function() {
    if (!window.proMusicPlayer) {
        window.proMusicPlayer = new ProMusicPlayer();
    }
};
