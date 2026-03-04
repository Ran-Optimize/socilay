
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  Target,
  Zap,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Users,
  Clock,
  Download,
  Check,
  Calculator,
  BarChart3,
  Flame,
  Star,
  Image as ImageIcon,
  Plus,
  PhoneCall
} from 'lucide-react';

// --- Constants ---
const PHONE_NUMBER = "0504502200";
const WHATSAPP_LINK = `https://wa.me/972504502200`;
const BANNER_IMAGE = "https://img.sanishtech.com/u/8d52d6dd31431f8af2c789b19b21100c.png";
const ILAY_HERO_IMAGE = "https://i.postimg.cc/cLLhfcdT/yzwb-ll-sm-2026-02-22T071937-405.png";
const FINAL_CONTACT_BANNER = "https://i.postimg.cc/4x9yDw4p/b-nr-l-tr-2.png";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqdjnal";

const REVIEW_IMAGES = [
  "https://i.postimg.cc/9Rq8KYBF/7c53d66d-3aca-455d-9df8-a0600ef93609.jpg",
  "https://i.postimg.cc/r0tn3N9y/ff098112-282e-4798-9869-9eff5b7ec7c0.jpg",
  "https://i.postimg.cc/vg6qktvy/IMG-3056.jpg",
  "https://i.postimg.cc/CBfPXs4V/IMG-3058.jpg",
  "https://i.postimg.cc/NynCdzRj/IMG-3063.jpg",
  "https://i.postimg.cc/p9Scs6Kd/IMG-3071.jpg",
  "https://i.postimg.cc/94kgLnyM/IMG-4993.jpg",
  "https://i.postimg.cc/XGyHmkgb/IMG-646F612F130E-1.jpg",
  "https://i.postimg.cc/8JrK9mbT/IMG-77E7AEC27C98-1.jpg",
  "https://i.postimg.cc/jW13MFys/Screenshot-2026-02-01-at-17-12-23.jpg",
  "https://i.postimg.cc/4K02WSpN/Screenshot-2026-02-01-at-8-12-37.jpg",
  "https://i.postimg.cc/sQZ6q4J2/wtq-sl-hlqqqq.png",
  "https://i.postimg.cc/WFJWCw7N/tmwnh-14-1-2026-b-18-24.jpg"
];

const WORKS_IMAGES = [
  "https://i.postimg.cc/6QC0pdc6/wtq-sl-ad-1-sptyym.png",
  "https://i.postimg.cc/9MpYGCvF/wtq-sl-6.png",
  "https://i.postimg.cc/QdTgfpRQ/37f92668-6bc5-43c7-bb53-2ee27ab5752a.jpg",
  "https://i.postimg.cc/9Q7PLGvt/mstrym-zip-4.png",
  "https://i.postimg.cc/g2Zygvfs/swkn-nsy-wt-ntyb-zip-1.png",
  "https://i.postimg.cc/2SZd04Px/wtq-sl-1.png",
  "https://i.postimg.cc/Z5dPwr1j/wtq-sl-ad-1-pyntrs.png",
  "https://i.postimg.cc/wjm5whS4/wtq-sl-Ad-1-sptyym-1.png",
  "https://i.postimg.cc/d0c2phYB/wtq-sl-ad-13-ezmark-dzmbr-25.png",
  "https://i.postimg.cc/bwt0mQKF/wtq-sl-ad-2-tattooo.png",
  "https://i.postimg.cc/L81kxzrb/wtq-sl-ad-2-mhyr-lkl-kys.png",
  "https://i.postimg.cc/8z6dZhqx/wtq-sl-ad-21-gbr.png",
  "https://i.postimg.cc/N0v6SKcD/wtq-sl-ad-22-mthylym.png",
  "https://i.postimg.cc/hGRL6XBC/wtq-sl-ad-28.png",
  "https://i.postimg.cc/2SZd04Pt/wtq-sl-ad-4-hmlzwt.png",
  "https://i.postimg.cc/0ywGVpLF/wtq-sl-ad-6-hhl-m-20.png",
  "https://i.postimg.cc/7Lr3d5kt/wtq-sl-Whats-App-Image-2025-11-11-at-11-12-02.jpg",
  "https://i.postimg.cc/tgG3wsjS/wtq-sl-Whats-App-Image-2025-11-11-at-11-18-28.jpg",
  "https://i.postimg.cc/jjYHmDbF/Challenge-Premium.png",
  "https://i.postimg.cc/vmwrk4sj/wtq-sl-mspyq-l-10-mqlhwnym-lphwt-zip-13.png",
  "https://i.postimg.cc/hGRL6XB6/wtq-sl-mspyq-l-10-mqlhwnym-lphwt-zip-21.png",
  "https://i.postimg.cc/43R6qYgj/wtq-sl-swkn-nsy-wt-ntyb-png.png",
  "https://i.postimg.cc/QMZQwF3R/wtq-sl-swkn-nsy-wt-ntyb-zip-4.png",
  "https://i.postimg.cc/g0bVQxp9/wtq-sl-pytns-yntymy-zip-2.png",
  "https://i.postimg.cc/5tWBTXJd/wtq-sl-qbwzt-ylyt-pwstym.png",
  "https://i.postimg.cc/xdVvhXQV/pwstym-mwryh-zip-1.png",
  "https://i.postimg.cc/g0bVQxpP/rkstm-dyrh-1.png",
  "https://i.postimg.cc/PqnW9CHj/sypwzym-ad-2-qwrt-gg-ht.png",
  "https://i.postimg.cc/fbQcpVsZ/tmwnwt-mstrym-qnzy-zip-2.png"
];

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-700 ${isScrolled ? 'glass-light shadow-2xl rounded-full max-w-5xl py-2 px-8' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-white shadow-lg rotate-3">
            <TrendingUp size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-primary font-heading">Socilay<span className="text-brand">.</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-[0.1em] text-primary/60">
          <a href="#vsl" className="hover:text-brand transition-colors cursor-pointer">האסטרטגיה</a>
          <a href="#results" className="hover:text-brand transition-colors cursor-pointer">הוכחות</a>
          <a href="#works" className="hover:text-brand transition-colors cursor-pointer">עבודות</a>
          <a href="#process" className="hover:text-brand transition-colors cursor-pointer">השיטה</a>
        </nav>

        {/* Header CTA - המרה לטופס לידים */}
        <a href="#quick-lead-form" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand transition-all flex items-center gap-2 shadow-lg shadow-primary/10 group">
          <PhoneCall size={18} className="group-hover:rotate-12 transition-transform" />
          <span>לתיאום שיחה</span>
        </a>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[auto] md:min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={BANNER_IMAGE} 
          className="w-full h-full object-cover object-center" 
          alt="Socilay Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/40 to-secondary/95 lg:to-secondary"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content - Right side in RTL (order-1) */}
          <div className="lg:w-3/5 text-start space-y-6 md:space-y-10 order-1" dir="rtl">
            <div className="inline-flex items-center gap-3 bg-brand/10 text-brand px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase border border-brand/20 backdrop-blur-sm">
              <Briefcase size={14} />
              איליי שהרבני | מייסדת ומנכ״לית Socilay
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-[72px] lg:text-[84px] font-black text-primary leading-[1.1] font-heading tracking-tight drop-shadow-sm">
                נמאס לך מקמפיינרים שמביאים לידים, <br />
                <span className="text-brand underline decoration-brand/20 underline-offset-8">אבל לא כסף?</span>
              </h1>
              
              <h2 className="text-lg md:text-3xl lg:text-4xl font-accent text-brand/90 leading-relaxed max-w-2xl drop-shadow-sm">
                בלי תוכן ממיר שמדוייק לכאב של הלקוח, גם הקמפיין הכי טוב לא יסגור.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-2 md:pt-4">
              {/* Hero CTA - המרה לטופס */}
              <a href="#quick-lead-form" className="brand-gradient text-white px-8 py-4 md:px-12 md:py-6 rounded-3xl font-black text-xl md:text-2xl shadow-2xl shadow-brand/40 hover:scale-[1.03] active:scale-95 transition-all inline-flex items-center gap-4 group w-full md:w-auto justify-center">
                לתיאום שיחה
                <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="text-start">
                <div className="flex items-center gap-2 text-brand font-black text-sm mb-1">
                  <Clock size={16} />
                  <span>נותרו 4 פגישות פנויות לשבוע</span>
                </div>
                <p className="text-primary/40 font-bold text-xs uppercase tracking-widest">JOIN 50+ SUCCESSFUL BRANDS</p>
              </div>
            </div>
          </div>

          {/* Image Content - Left side in RTL (order-2) */}
          <div className="lg:w-2/5 order-2 animate-float hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src={ILAY_HERO_IMAGE} 
                alt="איליי שהרבני" 
                className="relative w-full max-w-[450px] mx-auto lg:max-w-none h-auto drop-shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-secondary to-transparent z-10"></div>
    </section>
  );
};

const VSLSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="vsl" className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <h2 className="text-brand font-black tracking-widest uppercase text-xs">Video Sales Letter</h2>
          <h3 className="text-2xl md:text-5xl font-black font-heading text-primary">איך אנחנו הופכים לידים לכסף ב-5 שלבים</h3>
        </div>

        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-6 bg-brand/10 rounded-[4rem] blur-3xl opacity-50"></div>
          <div className="relative glass-light p-4 rounded-5xl luxury-shadow border border-white overflow-hidden">
            <div className="aspect-video rounded-4xl overflow-hidden relative bg-black group/player cursor-pointer" onClick={() => setIsPlaying(true)} dir="rtl">
              {!isPlaying && (
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col items-center justify-center">
                  <div className="w-24 h-24 brand-gradient text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(244,166,119,0.6)] group-hover/player:scale-110 group-hover/player:shadow-[0_0_60px_rgba(244,166,119,0.8)] transition-all duration-500 mb-6">
                    <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-white font-black text-2xl tracking-wide drop-shadow-lg">
                    לחצו לצפייה בסרטון ההסבר
                  </div>
                </div>
              )}
              <iframe 
                src={`https://player.vimeo.com/video/1163877477?badge=0&autopause=0&player_id=0&app_id=58479${isPlaying ? '&autoplay=1' : '&controls=0'}`} 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: isPlaying ? 'auto' : 'none' }} 
                title="VSL SOCILAY"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickContactForm: React.FC<{ onFormSubmit: (name: string) => void }> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Quick Form Mid-Page' })
      });
      if (response.ok) {
        onFormSubmit(formData.name);
      } else {
        alert("חלה שגיאה בשליחה. אנא נסה שוב או פנה בוואטסאפ.");
      }
    } catch (error) {
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quick-lead-form" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-secondary rounded-[4rem] overflow-hidden luxury-shadow border border-brand/10 relative text-start flex flex-col items-center">
          
          <div className="w-full">
            <img 
              src={FINAL_CONTACT_BANNER} 
              alt="בוא נתחיל" 
              className="w-full h-auto hidden md:block"
              loading="lazy"
            />
            <img 
              src={ILAY_HERO_IMAGE} 
              alt="איליי שהרבני" 
              className="w-full h-auto block md:hidden"
              loading="lazy"
            />
          </div>

          <div className="p-10 md:p-20 w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8 text-start">
                <h3 className="text-4xl font-black text-primary font-heading leading-tight text-start">
                  השארת פרטים: <br />
                  <span className="text-brand">פגישת אבחון חינם</span>
                </h3>
                <p className="text-xl text-primary/50 font-heading leading-relaxed text-start">
                  נבדוק אם העסק שלך מוכן לסקיילינג אמיתי או שחסרים לך עדיין כמה שלבים בדרך לשקט נפשי.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-start text-brand font-black">
                    <CheckCircle2 size={20} />
                    <span>פגישת אבחון (ערך 450₪) בחינם</span>
                  </div>
                  <div className="flex items-center gap-3 justify-start text-primary/40 font-bold text-sm">
                    <Clock size={18} />
                    <span>נותרו רק 4 מקומות לשבוע הקרוב</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a href={WHATSAPP_LINK} target="_blank" className="flex items-center gap-3 text-brand font-bold hover:underline">
                    <MessageCircle size={20} />
                    <span>מעדיפים לדבר בוואטסאפ? לחצו כאן</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-start">
                  <label className="text-[11px] font-black text-primary/30 me-2 uppercase tracking-widest font-heading block">איך קוראים לך?</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    autoComplete="name"
                    placeholder="שם מלא" 
                    className="w-full bg-white border-2 border-soft focus:border-brand outline-none px-6 py-5 rounded-2xl text-start font-bold transition-all text-primary shadow-sm" 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2 text-start">
                  <label className="text-[11px] font-black text-primary/30 me-2 uppercase tracking-widest font-heading block">מה המספר שלך?</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    autoComplete="tel"
                    placeholder="טלפון ליצירת קשר" 
                    className="w-full bg-white border-2 border-soft focus:border-brand outline-none px-6 py-5 rounded-2xl text-start font-bold transition-all text-primary shadow-sm" 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full brand-gradient text-white font-black py-6 rounded-2xl text-xl hover:shadow-2xl hover:shadow-brand/40 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Target size={24} />
                  {isSubmitting ? 'שולח...' : 'בואי נתאם פגישה'}
                </button>
                <p className="text-[10px] text-center text-primary/20 uppercase tracking-[0.2em] font-black">Join 50+ successful business owners</p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MovingReviews: React.FC = () => {
  const multiReviews = [...REVIEW_IMAGES, ...REVIEW_IMAGES];

  return (
    <section id="results" className="py-24 bg-secondary overflow-hidden relative">
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-brand/5 text-brand px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-brand/10 mb-4">
          <Sparkles size={14} />
          SUCCESS STORIES
        </div>
        <h3 className="text-4xl md:text-6xl font-black font-heading text-primary leading-tight">
          התוצאות מדברות, <br />
          <span className="text-brand">הלקוחות מאשרים.</span>
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-rtl py-10 px-4">
          {multiReviews.map((img, idx) => (
            <div 
              key={idx} 
              className="inline-block relative group w-[220px] md:w-[320px] flex-shrink-0"
            >
              <div className="relative glass-light p-2 rounded-2xl md:rounded-3xl luxury-shadow border border-brand/5 transition-all duration-700 hover:scale-[1.08] hover:z-50 hover:rotate-2">
                <img 
                  src={img} 
                  alt={`Review ${idx}`} 
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-sm"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 text-center relative z-10">
        <div className="flex items-center justify-center gap-1 text-brand mb-4">
          {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
        </div>
        <p className="text-primary/30 font-accent text-3xl">הצטרפו לעשרות עסקים שכבר ממריאים</p>
      </div>
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] translate-x-1/2"></div>
    </section>
  );
};

const ResultsStats: React.FC = () => {
  const stats = [
    { label: "ממוצע של לידים מדויקים", value: "72%", icon: <Target className="text-brand" size={64} /> },
    { label: "לקוחות מרוצים", value: "50+", icon: <Users className="text-brand" size={64} /> },
    { label: "החזר ממוצע", value: "x21", icon: <BarChart3 className="text-brand" size={64} /> },
    { label: "תקציב מנוהל", value: "4M+", icon: <Flame className="text-brand" size={64} /> }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 brand-gradient opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <h2 className="text-brand font-black tracking-widest uppercase text-xs md:text-sm">Proven Performance</h2>
          <h3 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-tight">התוצאות שלנו מדברות בעד עצמן</h3>
          <p className="text-white/40 text-xl md:text-2xl font-bold max-w-2xl mx-auto italic">מכונת שיווק משומנת שפועלת בשבילך ברמת ביצוע מקסימלית</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] border border-white/10 text-start flex flex-col items-start hover:bg-white/10 transition-all duration-500 group hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(244,166,119,0.2)]">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand transition-all duration-500 group-hover:scale-105 shadow-inner">
                {s.icon}
              </div>
              <div className="text-5xl md:text-6xl font-black mb-3 text-brand font-heading tracking-tighter transition-all duration-500 text-start">{s.value}</div>
              <div className="text-lg md:text-xl font-black text-white/50 uppercase tracking-[0.2em] font-heading text-start leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MidPageCTA: React.FC = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="glass-light p-12 md:p-20 rounded-[4rem] luxury-shadow border border-brand/20 relative z-10 space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black text-primary font-heading leading-tight">
              מוכנים לקחת את העסק <br />
              <span className="text-brand">לשלב הבא?</span>
            </h3>
            <p className="text-xl text-primary/60 font-bold max-w-xl mx-auto">
              אל תחכו שהמתחרים יקדימו אתכם. בואו נבנה לכם מכונת שיווק שפשוט עובדת.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="#lead-form" 
              className="brand-gradient text-white px-16 py-7 rounded-3xl font-black text-2xl shadow-2xl shadow-brand/40 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-4 group"
            >
              לתיאום פגישת אבחון
              <PhoneCall size={28} className="group-hover:rotate-12 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-brand font-black text-sm">
              <Clock size={16} />
              <span>זמינות מוגבלת - נשארו 4 מקומות אחרונים</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand/5 rounded-full blur-[120px]"></div>
    </section>
  );
};

const TheGoal: React.FC = () => {
  return (
    <section id="the-goal" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden luxury-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-brand/20 mb-4">
              <Target size={14} />
              THE MISSION
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white font-heading leading-tight">
              המטרה שלנו: <br />
              <span className="text-brand">הרווח שלכם.</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-4xl text-white/90 font-bold leading-relaxed">
                תוך <span className="text-brand underline decoration-brand/30 underline-offset-8">90 ימים</span>, המטרה היא <span className="text-white underline decoration-white/20 underline-offset-8">לשלש</span> את הוצאות השיווק שלכם ברווח נקי.
              </p>
            </div>
            
            <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4 text-white/60 font-black text-sm uppercase tracking-widest">
                <CheckCircle2 className="text-brand" size={20} />
                <span>ROI ממוקד תוצאות</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 font-black text-sm uppercase tracking-widest">
                <CheckCircle2 className="text-brand" size={20} />
                <span>ליווי אסטרטגי צמוד</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 font-black text-sm uppercase tracking-widest">
                <CheckCircle2 className="text-brand" size={20} />
                <span>שקיפות מלאה בנתונים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TheProcess: React.FC = () => {
  const steps = [
    { num: "1", title: "מחקר וניתוח שוק", desc: "היכרות עמוקה עם השוק, הקהל והמתחרים. איסוף נתונים, זיהוי מגמות, ומיפוי דפוסי התנהגות." },
    { num: "2", title: "תכנון אסטרטגיה", desc: "הגדרה מדויקת של היעדים, הפוזיציה המותגית, המסר המרכזי תוכנית הפעולה הפרסומית." },
    { num: "3", title: "פיתוח קונספטים", desc: "יצירת קווים אסטרטגיים וקריאייטיביים שמחזיקים מדיה, העומדים בבסיס כל המהלך הפרסומי." },
    { num: "4", title: "סטודיו וקריאייטיב", desc: "הפקת התוצרים ברמה מקצועית, בהתאם לקונספט ולשפה המותגית שנבנתה." },
    { num: "5", title: "השקה והפעלה", desc: "הרצת המערך הפרסומי תוך בקרה מלאה על הערוצים, הקצב והביצועים." },
    { num: "6", title: "אופטימיזציה מתמשכת", desc: "ניתוח נתונים, התאמות שוטפות ושיפור מתמיד של המהלך בהתאם לתנועה בשוק." }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-brand font-black tracking-widest uppercase text-xs mb-4">
            <Zap size={14} />
            The Protocol
          </div>
          <h3 className="text-4xl md:text-6xl font-black font-heading text-primary leading-tight text-center">ככה אנחנו הופכים <br /><span className="text-brand">לידים לכסף.</span></h3>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="relative border-2 border-brand/20 rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:border-brand hover:shadow-2xl hover:shadow-brand/5 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 brand-gradient rounded-full flex items-center justify-center text-white text-5xl md:text-7xl font-black font-heading shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {step.num}
                  </div>
                </div>
                <div className="text-start flex-grow space-y-4">
                  <div className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-black text-xl md:text-2xl font-heading group-hover:bg-brand transition-colors duration-500">
                    {step.title}
                  </div>
                  <p className="text-primary/60 text-lg md:text-xl font-bold leading-relaxed text-start">
                    {step.desc}
                  </p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute right-[4.5rem] md:right-[5.5rem] -bottom-8 w-1 h-8 bg-brand/10 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorksGallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? WORKS_IMAGES : WORKS_IMAGES.slice(0, 8);

  return (
    <section id="works" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand/5 text-brand px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-brand/10 mb-4">
            <ImageIcon size={14} />
            PORTFOLIO
          </div>
          <h3 className="text-4xl md:text-6xl font-black font-heading text-primary leading-tight">
            העבודות שלנו <br />
            <span className="text-brand">תוצאות בשטח.</span>
          </h3>
          <p className="text-xl text-primary/40 font-bold max-w-2xl mx-auto">
            מבט חטוף על חלק קטן מהקמפיינים, העיצובים והתוצאות שאנחנו מייצרים ב-Socilay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {visibleImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] luxury-shadow border border-white group animate-in zoom-in duration-500"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img 
                src={img} 
                alt={`Work ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white text-sm font-black uppercase tracking-widest">
                  Socilay Premium
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 bg-white text-primary border-2 border-primary/5 px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand hover:text-white hover:border-brand transition-all shadow-xl active:scale-95 group"
            >
              <Plus size={24} className="group-hover:rotate-90 transition-transform" />
              לצפייה בכל העבודות שלנו
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

const ContactSection: React.FC<{ onFormSubmit: (name: string) => void }> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Detailed Footer Contact Section' })
      });
      if (response.ok) {
        onFormSubmit(formData.name);
      } else {
        alert("חלה שגיאה בשליחה. אנא נסה שוב או פנה בוואטסאפ.");
      }
    } catch (error) {
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-secondary rounded-[4rem] overflow-hidden luxury-shadow border border-brand/10 relative text-start flex flex-col items-center">
          
          <div className="w-full">
            <img 
              src={FINAL_CONTACT_BANNER} 
              alt="בוא נתחיל" 
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          <div className="p-10 md:p-20 w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8 text-start">
                <h3 className="text-4xl font-black text-primary font-heading leading-tight text-start">
                  השארת פרטים: <br />
                  <span className="text-brand">פגישת אבחון חינם</span>
                </h3>
                <p className="text-xl text-primary/50 font-heading leading-relaxed text-start">
                  נבדוק אם העסק שלך מוכן לסקיילינג אמיתי או שחסרים לך עדיין כמה שלבים בדרך לשקט נפשי.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-start text-brand font-black">
                    <CheckCircle2 size={20} />
                    <span>פגישת אבחון (ערך 450₪) בחינם</span>
                  </div>
                  <div className="flex items-center gap-3 justify-start text-primary/40 font-bold text-sm">
                    <Clock size={18} />
                    <span>נותרו רק 4 מקומות לשבוע הקרוב</span>
                  </div>
                </div>

                {/* WhatsApp fallback inside the form area for better accessibility */}
                <div className="pt-4">
                  <a href={WHATSAPP_LINK} target="_blank" className="flex items-center gap-3 text-brand font-bold hover:underline">
                    <MessageCircle size={20} />
                    <span>מעדיפים לדבר בוואטסאפ? לחצו כאן</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-start">
                  <label className="text-[11px] font-black text-primary/30 me-2 uppercase tracking-widest font-heading block">איך קוראים לך?</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    autoComplete="name"
                    placeholder="שם מלא" 
                    className="w-full bg-white border-2 border-soft focus:border-brand outline-none px-6 py-5 rounded-2xl text-start font-bold transition-all text-primary shadow-sm" 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2 text-start">
                  <label className="text-[11px] font-black text-primary/30 me-2 uppercase tracking-widest font-heading block">מה המספר שלך?</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    autoComplete="tel"
                    placeholder="טלפון ליצירת קשר" 
                    className="w-full bg-white border-2 border-soft focus:border-brand outline-none px-6 py-5 rounded-2xl text-start font-bold transition-all text-primary shadow-sm" 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full brand-gradient text-white font-black py-6 rounded-2xl text-xl hover:shadow-2xl hover:shadow-brand/40 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Target size={24} />
                  {isSubmitting ? 'שולח...' : 'בואי נתאם פגישה'}
                </button>
                <p className="text-[10px] text-center text-primary/20 uppercase tracking-[0.2em] font-black">Join 50+ successful business owners</p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ThankYouView: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="min-h-screen pt-48 pb-20 bg-secondary animate-in fade-in duration-1000">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
        <div className="w-24 h-24 brand-gradient rounded-full flex items-center justify-center text-white mx-auto shadow-2xl animate-bounce">
          <Check size={48} strokeWidth={4} />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-primary font-heading">
            תודה {name}! <br />
            <span className="text-brand">הפרטים שלך התקבלו.</span>
          </h1>
          <p className="text-2xl text-primary/60 font-accent max-w-2xl mx-auto">
            צוות Socilay יחזור אליך תוך 24 שעות לתיאום פגישת האבחון שלך.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[3rem] luxury-shadow border border-brand/10 text-start space-y-8">
          <h3 className="text-3xl font-black text-primary font-heading flex items-center justify-start gap-3">
            <Sparkles className="text-brand" />
            בינתיים - הנה המתנה שלך
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "צ'קליסט רווחיות", desc: "הכלים שאנחנו משתמשים בהם", icon: <CheckCircle2 /> },
              { title: "נוסחת הלידים", desc: "איך לסנן קהל מראש", icon: <Target /> },
              { title: "מחשבון ROI", desc: "תכנון תקציב המדיה שלך", icon: <Calculator /> }
            ].map((g, i) => (
              <div key={i} className="bg-soft/30 p-8 rounded-3xl border border-brand/5 hover:border-brand/40 transition-all group">
                <div className="w-12 h-12 brand-gradient rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {g.icon}
                </div>
                <h4 className="text-xl font-black mb-2 text-primary font-heading text-start">{g.title}</h4>
                <p className="text-primary/40 text-sm mb-6 font-bold text-start">{g.desc}</p>
                <button className="w-full bg-white text-brand border border-brand/20 font-black py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand hover:text-white transition-all">
                  <Download size={16} />
                  הורדה
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-4 text-brand font-black text-xl hover:scale-105 transition-transform">
            <span>צריכים תשובה דחופה? שלחו לי וואטסאפ</span>
            <MessageCircle size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(0);
  const faqs = [
    { q: "מה השירות כולל?", a: "השירות משתנה בהתאם לצורך של כל לקוח ומותאם לפי הצרכים המדוייקים עבורו. ברוב המקרים השירות כולל ניהול קמפיינים שוטף, יצירה וחידוש קריאטיבים על בסיס חודשי בהתאם לצורך העסקי, אופטימיזציה יומיומית, שיח שוטף וסיכומים שבועיים וחודשיים לקידום העסק הכוללים יעדים פרקטים ומדדים." },
    { q: "למי מתאים השירות?", a: "השירות מתאים לעסקי שירות שרוצים להגדיל את ההכנסות שלהם על ידי לידים מדוייקים, בדגש על עסקים שהתאכזבו מקמפיינרים קודמים ומחפשים שותף אסטרטגי אמיתי." },
    { q: "כבר עבדתי עם סוכנות שיווק, מה שונה אצלך?", a: "הפחד הוא מובן. אני איתכם מסביב לשעון ולא רק בשעות הפעילות הסטנדרטיות. בשיווק הצורך הוא מיידי ולכן זמינות היא פקטור משמעותי. בנוסף, המטרה שלי היא ההצלחה המוחלטת שלכם - אני אעשה כל מה שנדרש, החל מעזרה בתסריטי מכירה, כמות קריאטיבים גדולה ושיח רציף עד להשגת התוצאות. וכמובן, התוצאות בשטח מדברות בעד עצמן." },
    { q: "כמה זמן לוקח לראות תוצאות?", a: "בדרך כלל תוך 30-45 ימים אנחנו רואים שיפורים משמעותיים. כמובן שכבר בהתחלה ניתן לראות תנועה בעקבות המשפכים השונים שנבנים, אך אופטימיזציה ולמידת קהלים עמוקה לוקחים זמן. זו הסיבה שהעבודה כרוכה בהתחייבות של לפחות 3 חודשים - כדי לאפשר לתהליך להבשיל ולעבוד בצורה מקסימלית." },
    { q: "אתם מתחייבים לתוצאות?", a: "לא ניתן להתחייב למספרים ספציפיים מראש, אבל אנחנו איתכם יד ביד עד ההצלחה. לכל קושי התחלתי יש סיבה - בין אם אלו שיחות המכירה, הקידום האורגני או המסרים - ואנחנו כאן כדי לאבחן, לעזור ולתת את כלל הכלים עד להצלחה. המטרה שלנו היא הצמיחה שלכם." },
    { q: "למה הלידים שלכם טובים יותר?", a: "כי אנחנו לא שולחים את הלקוח ישר לטופס 'קר'. אנחנו מעבירים אותו 'מסננת' של תוכן, סרטונים ושאלונים שמוודאים שהוא מבין את הערך הייחודי שלכם ומוכן לשלם עוד לפני השיחה הראשונה." },
    { q: "מי מנהל לי את הקמפיין בפועל?", a: "כל אסטרטגיה וקמפיין עוברים דרך איליי שהרבני אישית. הצוות המקצועי של Socilay דואג לביצוע המושלם של הקריאייטיב והאופטימיזציה הטכנית תחת הפיקוח הצמוד שלי." },
    { q: "איך מתחילים את התהליך?", a: "מתאמים שיחת אבחון קצרה (חינם). אנחנו לא מקבלים כל עסק - רק כאלו שאנחנו יודעים בוודאות שנוכל להביא להם תוצאה של פי 5 ומעלה על ההשקעה שלהם." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-start">
        <h2 className="text-4xl font-black text-start mb-16 text-primary font-heading">שאלות ותשובות</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-soft/40 rounded-3xl border border-brand/5 overflow-hidden transition-all duration-500">
              <button onClick={() => setOpenId(openId === i ? null : i)} className="w-full flex items-center justify-between p-7 text-start font-black text-xl hover:text-brand transition-colors">
                <span>{f.q}</span>
                <ChevronDown className={`text-brand flex-shrink-0 transition-transform duration-500 ${openId === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openId === i ? 'max-h-[500px] opacity-100 p-7 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-7 bg-white rounded-2xl text-primary/70 font-bold leading-relaxed text-start whitespace-pre-line">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-20 bg-primary text-white">
    <div className="container mx-auto px-6 text-center space-y-12">
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-12 brand-gradient rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3">
          <TrendingUp size={24} />
        </div>
        <span className="text-3xl font-black tracking-tighter font-heading">Socilay<span className="text-brand">.</span></span>
      </div>
      <p className="text-white/40 font-bold max-w-md mx-auto leading-relaxed text-lg text-center">
        אסטרטגיית קמפיינים ולידים פרימיום לעסקים שרוצים לגדול באמת - בראש שקט.
      </p>
      <div className="flex justify-center gap-12 text-xs font-black uppercase tracking-[0.2em] text-white/30">
        <a href="#" className="hover:text-brand transition-colors">Instagram</a>
        <a href="#" className="hover:text-brand transition-colors">Facebook</a>
        <a href={WHATSAPP_LINK} className="hover:text-brand transition-colors">WhatsApp</a>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
        <div>© {new Date().getFullYear()} Socilay by Ilay Shahrabani. All Rights Reserved.</div>
        <div className="font-accent text-xl normal-case text-brand italic">Peace of mind for your business</div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleFormSubmit = (name: string) => {
    setSubmittedName(name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submittedName) {
    return (
      <div className="antialiased" dir="rtl">
        <Header />
        <ThankYouView name={submittedName} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="antialiased" dir="rtl">
      <Header />
      <Hero />
      <VSLSection />
      <QuickContactForm onFormSubmit={handleFormSubmit} />
      <MovingReviews />
      <ResultsStats />
      <TheGoal />
      <MidPageCTA />
      <TheProcess />
      <WorksGallery />
      <FAQ />
      <ContactSection onFormSubmit={handleFormSubmit} />
      <Footer />
      
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 z-[200] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float border-4 border-white cursor-pointer flex items-center justify-center" 
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
