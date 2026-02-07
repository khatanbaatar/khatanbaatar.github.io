const translations = {
    en: {
        "nav-brand": "Start my space",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "hero-title": "Just do, Enjoy Life",
        "hero-subtitle": "Always Unique Totally",
        "contact-title": "Contact Me",
        "contact-name": "Name",
        "contact-email": "Email address",
        "contact-message": "Message",
        "contact-send": "Send Message"
    },
    mn: {
        "nav-brand": "Миний орон зай",
        "nav-about": "Бидний тухай",
        "nav-services": "Үйлчилгээ",
        "nav-portfolio": "Бүтээлүүд",
        "nav-contact": "Холбоо барих",
        "hero-title": "Зүгээр л хий, Амьдралаа таашаа",
        "hero-subtitle": "Үргэлж цор ганц",
        "contact-title": "Надтай холбогдох",
        "contact-name": "Нэр",
        "contact-email": "Имэйл хаяг",
        "contact-message": "Зурвас",
        "contact-send": "Илгээх"
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active state in dropdown
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
});
