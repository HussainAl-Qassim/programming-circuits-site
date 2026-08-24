// ===== أمثلة الأكواد لكل لغة =====
const CODE_EXAMPLES = {
    python: {
        title: 'hello.py',
        code: `# برنامج الترحيب بلغة بايثون
name = input("ما اسمك؟ ")
print(f"أهلاً بك يا {name} في عالم البرمجة! 🐍")

for i in range(3):
    print("نرحب بك مرة أخرى! ⭐")`
    },
    javascript: {
        title: 'hello.js',
        code: `// برنامج الترحيب بلغة جافاسكريبت
const name = prompt("ما اسمك؟");
console.log(\`أهلاً بك يا \${name} في عالم البرمجة! 🌐\`);

for (let i = 0; i < 3; i++) {
    console.log("نرحب بك مرة أخرى! ⭐");
}`
    },
    cpp: {
        title: 'hello.cpp',
        code: `// برنامج الترحيب بلغة سي بلس بلس
#include <iostream>
using namespace std;

int main() {
    string name;
    cout << "ما اسمك؟ ";
    cin >> name;
    cout << "أهلاً بك يا " << name << "! ⚡" << endl;
    return 0;
}`
    },
    java: {
        title: 'Hello.java',
        code: `// برنامج الترحيب بلغة جافا
import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("ما اسمك؟ ");
        String name = input.nextLine();
        System.out.println("أهلاً بك يا " + name + "! ☕");
    }
}`
    }
};

// ===== تبديل تبويبات الأكواد =====
const codeTabs = document.querySelectorAll('.code-tab');
const codeContent = document.getElementById('codeContent');
const codeTitle = document.getElementById('codeTitle');

function setCodeExample(lang) {
    codeTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.lang === lang));
    codeTitle.textContent = CODE_EXAMPLES[lang].title;
    
    // تأثير الكتابة التدريجية
    const fullCode = CODE_EXAMPLES[lang].code;
    codeContent.textContent = '';
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < fullCode.length) {
            codeContent.textContent += fullCode[i];
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 8);
}

codeTabs.forEach(tab => {
    tab.addEventListener('click', () => setCodeExample(tab.dataset.lang));
});

// تحميل المثال الأول
setCodeExample('python');

// ===== قائمة الجوال =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// إغلاق القائمة عند الضغط على رابط
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== تفعيل الرابط النشط عند التمرير =====
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ===== حاسبة قانون أوم =====
const voltageInput = document.getElementById('voltage');
const currentInput = document.getElementById('current');
const resistanceInput = document.getElementById('resistance');
const calcBtn = document.getElementById('calcBtn');
const resetCalc = document.getElementById('resetCalc');
const calcResult = document.getElementById('calcResult');

function formatNumber(num) {
    return Number(num.toFixed(4)).toString();
}

calcBtn.addEventListener('click', () => {
    const v = parseFloat(voltageInput.value);
    const i = parseFloat(currentInput.value);
    const r = parseFloat(resistanceInput.value);

    const hasV = !isNaN(v);
    const hasI = !isNaN(i);
    const hasR = !isNaN(r);

    const count = [hasV, hasI, hasR].filter(Boolean).length;

    calcResult.className = 'calc-result';

    if (count < 2) {
        calcResult.classList.add('error');
        calcResult.innerHTML = '⚠️ يرجى إدخال قيمتين على الأقل';
        return;
    }

    if (count === 3) {
        calcResult.classList.add('success');
        calcResult.innerHTML = '✅ جميع القيم مدخلة! تحقق: V = I × R ← ' +
            `${formatNumber(i * r)} فولت`;
        return;
    }

    if (!hasV) {
        const result = i * r;
        calcResult.classList.add('success');
        calcResult.innerHTML = `⚡ الجهد V = ${formatNumber(i)} × ${formatNumber(r)} = <b>${formatNumber(result)} فولت</b>`;
    } else if (!hasI) {
        if (r === 0) {
            calcResult.classList.add('error');
            calcResult.innerHTML = '⚠️ المقاومة لا يمكن أن تكون صفراً';
            return;
        }
        const result = v / r;
        calcResult.classList.add('success');
        calcResult.innerHTML = `🔌 التيار I = ${formatNumber(v)} ÷ ${formatNumber(r)} = <b>${formatNumber(result)} أمبير</b>`;
    } else {
        if (i === 0) {
            calcResult.classList.add('error');
            calcResult.innerHTML = '⚠️ التيار لا يمكن أن يكون صفراً';
            return;
        }
        const result = v / i;
        calcResult.classList.add('success');
        calcResult.innerHTML = `〰️ المقاومة R = ${formatNumber(v)} ÷ ${formatNumber(i)} = <b>${formatNumber(result)} أوم (Ω)</b>`;
    }
});

resetCalc.addEventListener('click', () => {
    voltageInput.value = '';
    currentInput.value = '';
    resistanceInput.value = '';
    calcResult.className = 'calc-result';
    calcResult.innerHTML = '<p>أدخل قيمتين واضغط "احسب"</p>';
});

// ===== بيانات تفاصيل اللغات =====
const LANG_DETAILS = {
    python: {
        name: 'Python',
        emoji: '🐍',
        tagline: 'اللغة الأسهل والأكثر شعبية للمبتدئين',
        about: 'بايثون لغة برمجة عالية المستوى أُنشئت عام 1991 على يد جويدو فان روسوم. تتميز ببساطة syntax الخاص بها الذي يشبه اللغة الإنجليزية، مما يجعلها الخيار الأول للمبتدئين. تُستخدم بشكل واسع في الذكاء الاصطناعي وعلوم البيانات وتطوير الويب.',
        uses: ['🤖 الذكاء الاصطناعي وتعلم الآلة', '📊 تحليل البيانات', '🌐 تطوير الويب (Django/Flask)', '🔬 الحوسبة العلمية', '🤖 الأتمتة والسكريبتات', '🎮 تطوير الألعاب البسيطة'],
        pros: ['سهلة التعلم والقراءة جداً', 'مكتبات ضخمة لكل المجالات', 'مجتمع دعم هائل', 'مطلوبة بقوة في سوق العمل'],
        cons: ['أبطأ من اللغات المُترجمة', 'غير مثالية لتطبيقات الجوال', 'استهلاك ذاكرة أعلى'],
        codeTitle: 'example.py',
        code: `# مثال: حساب متوسط الدرجات
grades = [85, 92, 78, 95, 88]

average = sum(grades) / len(grades)
print(f"المتوسط: {average}")

if average >= 90:
    print("ممتاز! 🌟")
elif average >= 75:
    print("جيد جداً! 👍")`,
        facts: [
            { value: '1991', label: 'سنة الإنشاء' },
            { value: '#1', label: 'الأكثر شعبية' },
            { value: '95%', label: 'سهولة التعلم' }
        ]
    },
    javascript: {
        name: 'JavaScript',
        emoji: '🌐',
        tagline: 'لغة الويب التي تعمل في كل مكان',
        about: 'جافاسكريبت هي لغة البرمجة الوحيدة التي تعمل مباشرة في متصفحات الويب، أُنشئت عام 1995 في 10 أيام فقط! اليوم هي لغة الويب الأولى ولا يمكن تصور أي موقع حديث بدونها. مع Node.js أصبحت تعمل في الخوادم أيضاً.',
        uses: ['🖥️ مواقع ويب تفاعلية', '📱 تطبيقات جوال (React Native)', '🖧 خوادم (Node.js)', '🎮 ألعاب المتصفح', '🖥️ تطبيقات سطح المكتب (Electron)'],
        pros: ['تعمل في كل متصفح مباشرة', 'نظام بيئي ضخم (npm)', 'مناسبة للواجهات والخوادم', 'فرص عمل واسعة جداً'],
        cons: ['سلوكيات غريبة أحياناً', 'الأخطاء تظهر وقت التشغيل', 'تطور سريع يربك المبتدئين'],
        codeTitle: 'example.js',
        code: `// مثال: عداد تفاعلي بسيط
let count = 0;

function زيادة() {
    count++;
    console.log(\`العدد الآن: \${count}\`);
    
    if (count === 10) {
        console.log("وصلت للعشرة! 🎉");
    }
}

زيادة(); // العدد الآن: 1
زيادة(); // العدد الآن: 2`,
        facts: [
            { value: '1995', label: 'سنة الإنشاء' },
            { value: '98%', label: 'من مواقع الويب' },
            { value: '85%', label: 'سهولة التعلم' }
        ]
    },
    java: {
        name: 'Java',
        emoji: '☕',
        tagline: 'اكتب مرة واحدة، شغّل في أي مكان',
        about: 'جافا لغة برمجة قوية أُطلقت عام 1995 من شركة Sun Microsystems. فلسفتها "اكتب مرة واحدة، شغّل في أي مكان" بفضل آلة جافا الافتراضية (JVM). هي العمود الفقري لتطبيقات أندرويد وأنظمة الشركات الكبرى والبنوك.',
        uses: ['📱 تطبيقات أندرويد', '🏢 أنظمة الشركات (Enterprise)', '🏦 الأنظمة البنكية والمالية', '☁️ التطبيقات السحابية', '🖥️ تطبيقات سطح المكتب'],
        pros: ['مستقرة وموثوقة جداً', 'تعمل على كل الأنظمة', 'أداء ممتاز مع JVM', 'وظائف كثيرة براتب عالي'],
        cons: ['كود مطوّل ومفصّل', 'منحنى تعلم أصعب', 'استهلاك ذاكرة كبير'],
        codeTitle: 'Example.java',
        code: `// مثال: نظام ترحيب بالطلاب
public class Example {
    public static void main(String[] args) {
        String[] students = {"أحمد", "سارة", "خالد"};
        
        for (String student : students) {
            System.out.println("مرحباً " + student + "! ☕");
        }
        
        System.out.println("عدد الطلاب: " + students.length);
    }
}`,
        facts: [
            { value: '1995', label: 'سنة الإنشاء' },
            { value: '3B+', label: 'جهاز يعمل بجافا' },
            { value: '65%', label: 'سهولة التعلم' }
        ]
    },
    cpp: {
        name: 'C++',
        emoji: '⚡',
        tagline: 'القوة والسرعة القصوى',
        about: 'سي بلس بلس امتداد للغة C أُنشئت عام 1985، وهي من أقوى وأسرع لغات البرمجة. تمنحك تحكماً كاملاً بالذاكرة والعتاد، مما يجعلها الخيار الأول لمحركات الألعاب وأنظمة التشغيل والتطبيقات عالية الأداء.',
        uses: ['🎮 محركات الألعاب (Unreal)', '💻 أنظمة التشغيل', '🤖 الروبوتات والأنظمة المدمجة', '📈 برامج التداول عالي التردد', '🎬 برامج المونتاج والجرافيكس'],
        pros: ['أسرع لغة أداءً تقريباً', 'تحكم كامل بالذاكرة', 'تستخدم في المشاريع الضخمة', 'قريبة من العتاد'],
        cons: ['صعبة التعلم والإتقان', 'إدارة الذاكرة يدوية', 'أخطاء معقدة وصعبة التتبع'],
        codeTitle: 'example.cpp',
        code: `// مثال: حساب قوة العدد
#include <iostream>
using namespace std;

int قوة(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    cout << "2^10 = " << قوة(2, 10) << endl;  // 1024
    cout << "سرعة البرق! ⚡" << endl;
    return 0;
}`,
        facts: [
            { value: '1985', label: 'سنة الإنشاء' },
            { value: '🚀', label: 'الأسرع أداءً' },
            { value: '45%', label: 'سهولة التعلم' }
        ]
    },
    go: {
        name: 'Go',
        emoji: '🐹',
        tagline: 'بساطة وسهولة من Google',
        about: 'لغة Go (أو Golang) طوّرتها Google عام 2009 لتحل مشاكل البنية التحتية الضخمة. تجمع بين سرعة اللغات المُترجمة وبساطة اللغات المفسرة، وتتميز بدعم ممتاز للبرمجة المتزامنة (Concurrency) مما يجعلها مثالية للخوادم والسحابة.',
        uses: ['☁️ الحوسبة السحابية', '🖧 الخوادم وواجهات API', '🔧 أدوات DevOps (Docker, Kubernetes)', '🌐 الخدمات المصغرة (Microservices)'],
        pros: ['بسيطة وسريعة التعلم', 'أداء ممتاز وسريعة', 'تزامن مدمج قوي (Goroutines)', 'مدعومة من Google'],
        cons: ['مكتبات أقل من اللغات القديمة', 'غير مناسبة لواجهات المستخدم', 'صارمة في طريقة كتابة الكود'],
        codeTitle: 'example.go',
        code: `// مثال: خادم ويب بسيط
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "أهلاً من Go! 🐹")
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("الخادم يعمل على :8080")
    http.ListenAndServe(":8080", nil)
}`,
        facts: [
            { value: '2009', label: 'سنة الإنشاء' },
            { value: 'Google', label: 'المطور' },
            { value: '75%', label: 'سهولة التعلم' }
        ]
    },
    rust: {
        name: 'Rust',
        emoji: '🦀',
        tagline: 'الأمان والسرعة بدون تضحيات',
        about: 'Rust لغة حديثة من Mozilla ظهرت عام 2010، فازت بلقب "اللغة الأكثر حباً" في استطلاع Stack Overflow لسنوات متتالية. تمنحك سرعة C++ مع ضمان أمان الذاكرة بدون Garbage Collector، بفضل نظام الملكية (Ownership) الثوري.',
        uses: ['🔒 الأنظمة عالية الأمان', '⚙️ برمجة الأنظمة', '🌐 WebAssembly', '🎮 محركات الألعاب', '⛓️ تقنيات البلوكتشين'],
        pros: ['أمان ذاكرة مضمون', 'سرعة مثل C++', 'بدون أخطاء الذاكرة الشائعة', 'الأكثر حباً بين المطورين'],
        cons: ['الأصعب تعلماً في القائمة', 'نظام الملكية معقد للمبتدئين', 'وقت الترجمة طويل'],
        codeTitle: 'example.rs',
        code: `// مثال: برنامج آمن 100%
fn main() {
    let languages = vec!["Rust", "Python", "Go"];
    
    for lang in &languages {
        println!("أحب {} 🦀", lang);
    }
    
    let مجموع: i32 = (1..=100).sum();
    println!("مجموع 1 إلى 100 = {}", مجموع);
}`,
        facts: [
            { value: '2010', label: 'سنة الإنشاء' },
            { value: '🏆', label: 'الأكثر حباً' },
            { value: '40%', label: 'سهولة التعلم' }
        ]
    }
};

// ===== فتح نافذة تفاصيل اللغة =====
const langModal = document.getElementById('langModal');
const closeLangModal = document.getElementById('closeLangModal');

document.querySelectorAll('.lang-card.clickable').forEach(card => {
    card.addEventListener('click', () => {
        const lang = LANG_DETAILS[card.dataset.lang];
        if (!lang) return;

        document.getElementById('modalEmoji').textContent = lang.emoji;
        document.getElementById('modalTitle').textContent = lang.name;
        document.getElementById('modalTagline').textContent = lang.tagline;
        document.getElementById('modalAbout').textContent = lang.about;

        document.getElementById('modalUses').innerHTML = 
            lang.uses.map(use => `<span>${use}</span>`).join('');

        document.getElementById('modalPros').innerHTML = 
            lang.pros.map(pro => `<li>• ${pro}</li>`).join('');

        document.getElementById('modalCons').innerHTML = 
            lang.cons.map(con => `<li>• ${con}</li>`).join('');

        document.getElementById('modalCodeTitle').textContent = lang.codeTitle;
        document.getElementById('modalCode').textContent = lang.code;

        document.getElementById('modalFacts').innerHTML = 
            lang.facts.map(fact => `
                <div class="fact-item">
                    <span class="fact-value">${fact.value}</span>
                    <span class="fact-label">${fact.label}</span>
                </div>
            `).join('');

        langModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    langModal.classList.remove('open');
    document.body.style.overflow = '';
}

closeLangModal.addEventListener('click', closeModal);

langModal.addEventListener('click', (e) => {
    if (e.target === langModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== محرر الأكواد الاحترافي (مثل VS Code) =====
const EDITOR_DEFAULTS = {
    python: {
        title: 'main.py',
        langName: 'Python',
        code: `# اكتب كود بايثون هنا واضغط "تشغيل"
name = "صديقي"
print(f"أهلاً {name}! 🐍")

for i in range(1, 4):
    print(f"السطر رقم {i}")`,
        note: '💡 بايثون تعمل محلياً - تدعم: print، المتغيرات، الحساب، for، if/elif/else'
    },
    javascript: {
        title: 'main.js',
        langName: 'JavaScript',
        code: `// اكتب كود جافاسكريبت واضغط "تشغيل"
const name = "صديقي";
console.log(\`أهلاً \${name}! 🌐\`);

for (let i = 1; i <= 3; i++) {
    console.log(\`السطر رقم \${i}\`);
}`,
        note: '💡 جافاسكريبت تعمل مباشرة في متصفحك بدون إنترنت!'
    },
    html: {
        title: 'index.html',
        langName: 'HTML',
        code: `<!DOCTYPE html>
<html dir="rtl">
<head>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 40px; }
        h1 { color: #e8641c; }
        button {
            padding: 12px 30px;
            background: #e8641c;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>مرحباً! 👋</h1>
    <p>هذه صفحتي الأولى</p>
    <button onclick="alert('أحسنت! 🎉')">اضغطني</button>
</body>
</html>`,
        note: '💡 HTML تُعرض مباشرة كصفحة ويب حقيقية في الأسفل!'
    }
};

const codeEditor = document.getElementById('codeEditor');
const outputArea = document.getElementById('outputArea');
const runBtn = document.getElementById('runBtn');
const pgTabs = document.querySelectorAll('.pg-tab');
const pgTitle = document.getElementById('pgTitle');
const pgNote = document.getElementById('pgNote');
const lineNumbers = document.getElementById('lineNumbers');
const cursorPos = document.getElementById('cursorPos');
const charCount = document.getElementById('charCount');
const statusLang = document.getElementById('statusLang');
const autocompleteBox = document.getElementById('autocompleteBox');
const htmlPreview = document.getElementById('htmlPreview');

let currentPgLang = 'python';
codeEditor.value = EDITOR_DEFAULTS.python.code;

// ===== أرقام الأسطر =====
function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    lineNumbers.textContent = Array.from({length: lines}, (_, i) => i + 1).join('\n');
    charCount.textContent = codeEditor.value.length + ' حرف';
}

function updateCursorPos() {
    const pos = codeEditor.selectionStart;
    const textBefore = codeEditor.value.substring(0, pos);
    const line = textBefore.split('\n').length;
    const col = pos - textBefore.lastIndexOf('\n');
    cursorPos.textContent = `سطر ${line}، عمود ${col}`;
}

codeEditor.addEventListener('input', updateLineNumbers);
codeEditor.addEventListener('keyup', updateCursorPos);
codeEditor.addEventListener('click', updateCursorPos);
codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeEditor.scrollTop;
});

updateLineNumbers();

// ===== الإكمال التلقائي =====
const AUTOCOMPLETE = {
    python: [
        { text: 'print()', kind: 'دالة', icon: '🔵' },
        { text: 'input()', kind: 'دالة', icon: '🔵' },
        { text: 'for i in range():', kind: 'حلقة', icon: '🔄' },
        { text: 'if ', kind: 'شرط', icon: '❓' },
        { text: 'elif ', kind: 'شرط', icon: '❓' },
        { text: 'else:', kind: 'شرط', icon: '❓' },
        { text: 'def ', kind: 'دالة', icon: '🟣' },
        { text: 'while ', kind: 'حلقة', icon: '🔄' },
        { text: 'len()', kind: 'دالة', icon: '🔵' },
        { text: 'range()', kind: 'دالة', icon: '🔵' },
        { text: 'sum()', kind: 'دالة', icon: '🔵' },
        { text: 'True', kind: 'قيمة', icon: '✅' },
        { text: 'False', kind: 'قيمة', icon: '❌' },
        { text: 'import ', kind: 'مكتبة', icon: '📦' },
        { text: 'return ', kind: 'إرجاع', icon: '↩️' }
    ],
    javascript: [
        { text: 'console.log()', kind: 'دالة', icon: '🔵' },
        { text: 'function ', kind: 'دالة', icon: '🟣' },
        { text: 'const ', kind: 'متغير', icon: '🔷' },
        { text: 'let ', kind: 'متغير', icon: '🔷' },
        { text: 'for (let i = 0; i < ; i++) {}', kind: 'حلقة', icon: '🔄' },
        { text: 'if () {}', kind: 'شرط', icon: '❓' },
        { text: 'else {}', kind: 'شرط', icon: '❓' },
        { text: 'return ', kind: 'إرجاع', icon: '↩️' },
        { text: 'alert()', kind: 'دالة', icon: '🔵' },
        { text: 'document.', kind: 'DOM', icon: '🌐' },
        { text: 'addEventListener()', kind: 'حدث', icon: '⚡' },
        { text: 'true', kind: 'قيمة', icon: '✅' },
        { text: 'false', kind: 'قيمة', icon: '❌' }
    ],
    html: [
        { text: '<h1></h1>', kind: 'عنوان', icon: '📌' },
        { text: '<p></p>', kind: 'فقرة', icon: '📄' },
        { text: '<button></button>', kind: 'زر', icon: '🔘' },
        { text: '<div></div>', kind: 'حاوية', icon: '📦' },
        { text: '<img src="">', kind: 'صورة', icon: '🖼️' },
        { text: '<a href=""></a>', kind: 'رابط', icon: '🔗' },
        { text: '<input type="text">', kind: 'إدخال', icon: '⌨️' },
        { text: '<style></style>', kind: 'تنسيق', icon: '🎨' },
        { text: '<script></script>', kind: 'سكريبت', icon: '⚡' },
        { text: '<ul><li></li></ul>', kind: 'قائمة', icon: '📋' }
    ]
};

let acIndex = -1;

codeEditor.addEventListener('input', () => {
    const pos = codeEditor.selectionStart;
    const textBefore = codeEditor.value.substring(0, pos);
    const wordMatch = textBefore.match(/[\w<>!]+$/);
    
    if (!wordMatch || wordMatch[0].length < 2) {
        autocompleteBox.classList.remove('show');
        return;
    }

    const word = wordMatch[0].toLowerCase();
    const suggestions = AUTOCOMPLETE[currentPgLang].filter(s => 
        s.text.toLowerCase().startsWith(word) || s.text.toLowerCase().includes(word)
    ).slice(0, 6);

    if (suggestions.length === 0) {
        autocompleteBox.classList.remove('show');
        return;
    }

    acIndex = -1;
    autocompleteBox.innerHTML = suggestions.map((s, i) => `
        <div class="ac-item" data-index="${i}" data-text="${s.text}">
            <span class="ac-icon">${s.icon}</span>
            <span>${s.text}</span>
            <span class="ac-kind">${s.kind}</span>
        </div>
    `).join('');

    // تحديد موقع الصندوق قرب المؤشر
    const lines = textBefore.split('\n');
    const lineHeight = 27;
    const top = Math.min(lines.length * lineHeight + 10, codeEditor.offsetHeight - 100);
    autocompleteBox.style.top = top + 'px';
    autocompleteBox.style.left = '30px';
    autocompleteBox.classList.add('show');

    // الضغط على اقتراح
    autocompleteBox.querySelectorAll('.ac-item').forEach(item => {
        item.addEventListener('mousedown', (e) => {
            e.preventDefault();
            insertSuggestion(item.dataset.text, word.length);
        });
    });
});

function insertSuggestion(text, wordLen) {
    const pos = codeEditor.selectionStart;
    const before = codeEditor.value.substring(0, pos - wordLen);
    const after = codeEditor.value.substring(pos);
    codeEditor.value = before + text + after;
    codeEditor.focus();
    codeEditor.selectionStart = codeEditor.selectionEnd = before.length + text.length;
    autocompleteBox.classList.remove('show');
    updateLineNumbers();
}

// التنقل بالأسهم في الاقتراحات
codeEditor.addEventListener('keydown', (e) => {
    if (!autocompleteBox.classList.contains('show')) return;
    const items = autocompleteBox.querySelectorAll('.ac-item');
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        acIndex = Math.min(acIndex + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        acIndex = Math.max(acIndex - 1, 0);
    } else if (e.key === 'Tab' || e.key === 'Enter') {
        if (acIndex >= 0 && items[acIndex]) {
            e.preventDefault();
            const word = codeEditor.value.substring(0, codeEditor.selectionStart).match(/[\w<>!]+$/);
            insertSuggestion(items[acIndex].dataset.text, word ? word[0].length : 0);
            return;
        }
    } else if (e.key === 'Escape') {
        autocompleteBox.classList.remove('show');
        return;
    } else {
        return;
    }
    
    items.forEach((item, i) => item.classList.toggle('active', i === acIndex));
});

// إغلاق الاقتراحات عند الضغط خارجها
document.addEventListener('click', (e) => {
    if (e.target !== codeEditor) autocompleteBox.classList.remove('show');
});

// دعم Tab للمسافة البادئة
codeEditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !autocompleteBox.classList.contains('show')) {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
        updateLineNumbers();
    }
});

// أزرار المسح
document.getElementById('clearEditor').addEventListener('click', () => {
    codeEditor.value = '';
    updateLineNumbers();
    codeEditor.focus();
});

document.getElementById('clearOutput').addEventListener('click', () => {
    outputArea.textContent = 'اضغط "تشغيل" لتنفيذ الكود...';
    outputArea.classList.remove('error');
    htmlPreview.style.display = 'none';
    outputArea.style.display = 'block';
});

// تبديل التبويبات
pgTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        currentPgLang = tab.dataset.pg;
        pgTabs.forEach(t => t.classList.toggle('active', t === tab));
        pgTitle.textContent = EDITOR_DEFAULTS[currentPgLang].title;
        pgNote.textContent = EDITOR_DEFAULTS[currentPgLang].note;
        statusLang.textContent = EDITOR_DEFAULTS[currentPgLang].langName;
        codeEditor.value = EDITOR_DEFAULTS[currentPgLang].code;
        outputArea.textContent = 'اضغط "تشغيل" لتنفيذ الكود...';
        outputArea.classList.remove('error');
        htmlPreview.style.display = 'none';
        outputArea.style.display = 'block';
        updateLineNumbers();
    });
});

// تشغيل جافاسكريبت محلياً
function runJavaScript(code) {
    const logs = [];
    const fakeConsole = {
        log: (...args) => logs.push(args.map(a => 
            typeof a === 'object' ? JSON.stringify(a) : String(a)
        ).join(' '))
    };
    
    try {
        const fn = new Function('console', code);
        fn(fakeConsole);
        return logs.length ? logs.join('\n') : '(تم التنفيذ بدون مخرجات)';
    } catch (err) {
        throw new Error(err.message);
    }
}

// ===== محاكي بايثون مدمج (يعمل محلياً بدون إنترنت) =====
function runPython(code) {
    const output = [];
    const vars = {};

    function pyVal(expr) {
        expr = expr.trim();
        // f-string: f"نص {var} نص"
        if (/^f["']/.test(expr)) {
            const inner = expr.slice(2, -1);
            return inner.replace(/\{([^}]*)\}/g, (_, e) => String(pyVal(e)));
        }
        // نص عادي
        if (/^["'].*["']$/.test(expr)) return expr.slice(1, -1);
        // متغير معروف
        if (vars.hasOwnProperty(expr)) return vars[expr];
        // تعبير حسابي أو مقارنة
        try {
            const jsExpr = expr
                .replace(/\bTrue\b/g, 'true')
                .replace(/\bFalse\b/g, 'false')
                .replace(/\b(\w+)\b/g, m => vars.hasOwnProperty(m) ? JSON.stringify(vars[m]) : m);
            return Function('"use strict"; return (' + jsExpr + ')')();
        } catch (e) {
            return expr;
        }
    }

    function pyPrint(argsStr) {
        // فصل الوسائط مع احترام النصوص
        const parts = [];
        let depth = 0, cur = '', inStr = null;
        for (const ch of argsStr) {
            if (inStr) {
                cur += ch;
                if (ch === inStr) inStr = null;
            } else if (ch === '"' || ch === "'") {
                inStr = ch; cur += ch;
            } else if (ch === '(' || ch === '[') {
                depth++; cur += ch;
            } else if (ch === ')' || ch === ']') {
                depth--; cur += ch;
            } else if (ch === ',' && depth === 0) {
                parts.push(cur); cur = '';
            } else {
                cur += ch;
            }
        }
        if (cur.trim()) parts.push(cur);

        const values = parts
            .filter(p => !/^\s*(end|sep)\s*=/.test(p))
            .map(p => {
                const v = pyVal(p);
                return typeof v === 'object' ? JSON.stringify(v) : String(v);
            });
        output.push(values.join(' '));
    }

    function execBlock(lines) {
        let i = 0;
        while (i < lines.length) {
            const raw = lines[i];
            const line = raw.trim();
            i++;

            if (!line || line.startsWith('#')) continue;

            // print(...)
            if (line.startsWith('print(')) {
                pyPrint(line.slice(6, line.lastIndexOf(')')));
                continue;
            }

            // تعيين متغير: x = ...
            const assign = line.match(/^(\w+)\s*=\s*(.+)$/);
            if (assign && !line.includes('==')) {
                vars[assign[1]] = pyVal(assign[2]);
                continue;
            }

            // حلقة for: for i in range(a, b):
            const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\(([^)]*)\):/);
            if (forMatch) {
                const varName = forMatch[1];
                const rangeArgs = forMatch[2].split(',').map(s => Number(pyVal(s.trim())));
                let start = 0, end = 0;
                if (rangeArgs.length === 1) { end = rangeArgs[0]; }
                else { start = rangeArgs[0]; end = rangeArgs[1]; }

                // جمع جسم الحلقة (الأسطر ذات المسافة البادئة)
                const body = [];
                while (i < lines.length && /^\s+/.test(lines[i]) && lines[i].trim()) {
                    body.push(lines[i]);
                    i++;
                }
                for (let v = start; v < end; v++) {
                    vars[varName] = v;
                    execBlock(body);
                }
                continue;
            }

            // if / elif / else
            const ifMatch = line.match(/^if\s+(.+):$/);
            if (ifMatch) {
                const branches = [{ cond: ifMatch[1], body: [] }];
                while (i < lines.length && /^\s+/.test(lines[i]) && lines[i].trim()) {
                    branches[0].body.push(lines[i]); i++;
                }
                // التقاط elif / else
                while (i < lines.length) {
                    const next = lines[i].trim();
                    const elifM = next.match(/^elif\s+(.+):$/);
                    if (elifM) {
                        branches.push({ cond: elifM[1], body: [] });
                        i++;
                        while (i < lines.length && /^\s+/.test(lines[i]) && lines[i].trim()) {
                            branches[branches.length - 1].body.push(lines[i]); i++;
                        }
                    } else if (next === 'else:') {
                        branches.push({ cond: null, body: [] });
                        i++;
                        while (i < lines.length && /^\s+/.test(lines[i]) && lines[i].trim()) {
                            branches[branches.length - 1].body.push(lines[i]); i++;
                        }
                    } else break;
                }
                for (const br of branches) {
                    if (br.cond === null || pyVal(br.cond)) {
                        execBlock(br.body);
                        break;
                    }
                }
                continue;
            }
        }
    }

    try {
        execBlock(code.split('\n'));
        return output.length ? output.join('\n') : '(تم التنفيذ بدون مخرجات)';
    } catch (err) {
        throw new Error(err.message);
    }
}

runBtn.addEventListener('click', async () => {
    const code = codeEditor.value.trim();
    if (!code) {
        outputArea.textContent = '⚠️ اكتب كوداً أولاً!';
        outputArea.classList.add('error');
        return;
    }

    runBtn.disabled = true;
    runBtn.textContent = '⏳ جارٍ التشغيل...';
    outputArea.classList.remove('error');
    outputArea.textContent = 'جارٍ تنفيذ الكود...';

    try {
        if (currentPgLang === 'html') {
            outputArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.srcdoc = code;
            runBtn.disabled = false;
            runBtn.textContent = '▶ تشغيل';
            return;
        }
        outputArea.style.display = 'block';
        htmlPreview.style.display = 'none';
        let result;
        if (currentPgLang === 'javascript') {
            result = runJavaScript(code);
        } else {
            result = await runPython(code);
        }
        outputArea.textContent = result;
    } catch (err) {
        outputArea.style.display = 'block';
        htmlPreview.style.display = 'none';
        outputArea.textContent = '❌ خطأ:\n' + err.message + '\n\n💡 اضغط زر 🤖 في الأسفل واسأل المساعد عن هذا الخطأ!';
        outputArea.classList.add('error');
        // فتح المساعد تلقائياً مع شرح الخطأ
        setTimeout(() => {
            aiChat.classList.add('open');
            askAI('خطأ في الكود: ' + err.message);
        }, 800);
    } finally {
        runBtn.disabled = false;
        runBtn.textContent = '▶ تشغيل';
    }
});

// ===== التمارين التعليمية =====
const EXERCISES = {
    1: {
        python: `# التمرين 1: اطبع جملة ترحيب باسمك
# اكتب اسمك بين علامتي التنصيص
name = ""
print("أهلاً بك يا", name, "! 👋")`,
        javascript: `// التمرين 1: اطبع جملة ترحيب باسمك
// اكتب اسمك بين علامتي التنصيص
let name = "";
console.log("أهلاً بك يا " + name + "! 👋");`
    },
    2: {
        python: `# التمرين 2: حاسبة بسيطة
# غيّر الرقمين وشاهد النتيجة
a = 15
b = 4

print("الجمع:", a + b)
print("الطرح:", a - b)
print("الضرب:", a * b)
print("القسمة:", a / b)`,
        javascript: `// التمرين 2: حاسبة بسيطة
// غيّر الرقمين وشاهد النتيجة
let a = 15;
let b = 4;

console.log("الجمع: " + (a + b));
console.log("الطرح: " + (a - b));
console.log("الضرب: " + (a * b));
console.log("القسمة: " + (a / b));`
    },
    3: {
        python: `# التمرين 3: الأرقام الزوجية من 1 إلى 20
for num in range(1, 21):
    if num % 2 == 0:
        print(num, "زوجي ✓")`,
        javascript: `// التمرين 3: الأرقام الزوجية من 1 إلى 20
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num + " زوجي ✓");
    }
}`
    },
    4: {
        python: `# التمرين 4: متوسط الدرجات
grades = [85, 92, 78, 95, 88]

total = sum(grades)
average = total / len(grades)

print("المجموع:", total)
print("المتوسط:", average)

if average >= 90:
    print("التقدير: ممتاز 🌟")
elif average >= 75:
    print("التقدير: جيد جداً 👍")`,
        javascript: `// التمرين 4: متوسط الدرجات
let grades = [85, 92, 78, 95, 88];

let total = grades.reduce((sum, g) => sum + g, 0);
let average = total / grades.length;

console.log("المجموع: " + total);
console.log("المتوسط: " + average);

if (average >= 90) {
    console.log("التقدير: ممتاز 🌟");
} else if (average >= 75) {
    console.log("التقدير: جيد جداً 👍");
}`
    },
    5: {
        python: `# التمرين 5: لعبة تخمين الرقم
import random

secret = random.randint(1, 10)
guesses = [3, 7, secret]  # محاولات تجريبية

print("الرقم السري بين 1 و 10 🎲")
for guess in guesses:
    if guess == secret:
        print(f"الرقم {guess}: صحيح! فزت 🎉")
    else:
        print(f"الرقم {guess}: خطأ، حاول مجدداً")`,
        javascript: `// التمرين 5: لعبة تخمين الرقم
let secret = Math.floor(Math.random() * 10) + 1;
let guesses = [3, 7, secret]; // محاولات تجريبية

console.log("الرقم السري بين 1 و 10 🎲");
for (let guess of guesses) {
    if (guess === secret) {
        console.log("الرقم " + guess + ": صحيح! فزت 🎉");
    } else {
        console.log("الرقم " + guess + ": خطأ، حاول مجدداً");
    }
}`
    },
    6: {
        python: `# التمرين 6: متتالية فيبوناتشي
a, b = 0, 1
print("أول 10 أرقام من فيبوناتشي:")

for i in range(10):
    print(a, end=" ")
    a, b = b, a + b

print()`,
        javascript: `// التمرين 6: متتالية فيبوناتشي
let a = 0, b = 1;
let result = [];

for (let i = 0; i < 10; i++) {
    result.push(a);
    [a, b] = [b, a + b];
}

console.log("أول 10 أرقام من فيبوناتشي:");
console.log(result.join(" "));`
    }
};

document.querySelectorAll('.exercise-card').forEach(card => {
    card.addEventListener('click', () => {
        const ex = EXERCISES[card.dataset.ex];
        if (!ex) return;
        codeEditor.value = ex[currentPgLang];
        outputArea.textContent = 'تم تحميل التمرين! اضغط "تشغيل" ▶';
        outputArea.classList.remove('error');
        document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== محاكي بناء الدوائر الاحترافي (نظام الفتحات) =====
const COMPONENT_DATA = {
    battery: { emoji: '🔋', name: 'بطارية', value: '9 فولت' },
    lamp: { emoji: '💡', name: 'مصباح', value: '4.5V+' },
    resistor: { emoji: '〰️', name: 'مقاومة', value: '10 أوم' },
    switch: { emoji: '🔌', name: 'مفتاح', value: 'مغلق ✅' }
};

// حالة الفتحات: top, right, bottom, left
const slots = {
    top: null,
    right: null,
    bottom: null,
    left: null
};

const circuitStage = document.getElementById('circuitStage');
const electronsGroup = document.getElementById('electronsGroup');
const circuitStatus = document.getElementById('circuitStatus');
const statusText = document.getElementById('statusText');
const powerBtn = document.getElementById('powerBtn');
const clearCircuit = document.getElementById('clearCircuit');
const voltageMeter = document.getElementById('voltageMeter');
const currentMeter = document.getElementById('currentMeter');

let selectedTool = null;
let circuitPowered = false;

// اختيار أداة من صندوق الأدوات
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.add;
        // إذا كانت الأداة محددة مسبقاً، ألغِ التحديد
        if (selectedTool === type) {
            selectedTool = null;
            btn.classList.remove('selected');
            return;
        }
        selectedTool = type;
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        statusText.textContent = `👆 اخترت "${COMPONENT_DATA[type].name}" - اضغط على فتحة فارغة في الدائرة لوضعها`;
        circuitStatus.className = 'circuit-status';
        circuitStatus.querySelector('.status-icon').textContent = '🧰';
    });
});

// وضع مكون في فتحة
document.querySelectorAll('.slot').forEach(slotEl => {
    slotEl.addEventListener('click', () => {
        const slotName = slotEl.dataset.slot;
        
        // إذا كانت الفتحة ممتلئة: المفتاح يتبدل بالضغط
        if (slots[slotName]) {
            if (slots[slotName].type === 'switch') {
                toggleSwitch(slotName);
            }
            return;
        }
        
        if (!selectedTool) {
            statusText.textContent = '👈 اختر مكوناً من صندوق الأدوات أولاً';
            circuitStatus.className = 'circuit-status';
            circuitStatus.querySelector('.status-icon').textContent = '🧰';
            return;
        }

        placeComponent(slotName, selectedTool, slotEl);
        selectedTool = null;
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('selected'));
    });
});

function placeComponent(slotName, type, slotEl) {
    const data = COMPONENT_DATA[type];
    slots[slotName] = { type, state: 'on' };
    
    slotEl.classList.add('filled');
    slotEl.innerHTML = `
        <div class="slot-component">
            <button class="sc-remove" title="إزالة">✕</button>
            <span class="sc-emoji">${data.emoji}</span>
            <div class="sc-name">${data.name}</div>
            <div class="sc-value">${data.value}</div>
        </div>
    `;
    
    // زر الإزالة
    slotEl.querySelector('.sc-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        removeComponent(slotName, slotEl);
    });
    
    stopPower();
    updateStatus();
}

function removeComponent(slotName, slotEl) {
    slots[slotName] = null;
    slotEl.classList.remove('filled', 'lamp-on', 'switch-open');
    slotEl.innerHTML = '<span class="slot-hint">+</span>';
    stopPower();
    updateStatus();
}

function toggleSwitch(slotName) {
    const comp = slots[slotName];
    const slotEl = document.querySelector(`.slot[data-slot="${slotName}"]`);
    const isOn = comp.state === 'on';
    comp.state = isOn ? 'off' : 'on';
    slotEl.classList.toggle('switch-open', isOn);
    slotEl.querySelector('.sc-value').textContent = isOn ? 'مفتوح ⭕' : 'مغلق ✅';
    stopPower();
    updateStatus();
}

function getCircuitInfo() {
    const comps = Object.values(slots).filter(Boolean);
    return {
        count: comps.length,
        hasBattery: comps.some(c => c.type === 'battery'),
        hasLamp: comps.some(c => c.type === 'lamp'),
        batteryCount: comps.filter(c => c.type === 'battery').length,
        resistorCount: comps.filter(c => c.type === 'resistor').length,
        switchOpen: comps.some(c => c.type === 'switch' && c.state === 'off')
    };
}

function updateStatus() {
    const info = getCircuitInfo();
    circuitStatus.className = 'circuit-status';
    circuitStatus.querySelector('.status-icon').textContent = '⭕';

    if (info.count === 0) {
        statusText.textContent = 'الدائرة فارغة - اختر بطارية من صندوق الأدوات وضعها في فتحة';
    } else if (!info.hasBattery) {
        statusText.textContent = '⚠️ لا يوجد مصدر طاقة! أضف بطارية';
    } else if (!info.hasLamp) {
        statusText.textContent = '💡 أضف مصباحاً لرؤية التأثير';
    } else if (info.switchOpen) {
        statusText.textContent = '🔌 المفتاح مفتوح - اضغط عليه لإغلاقه';
    } else {
        statusText.textContent = '✅ الدائرة جاهزة! اضغط "⚡ تشغيل الدائرة"';
    }
}

function stopPower() {
    circuitPowered = false;
    circuitStage.classList.remove('powered');
    electronsGroup.style.display = 'none';
    document.querySelectorAll('.slot.lamp-on').forEach(s => s.classList.remove('lamp-on'));
    voltageMeter.textContent = '0 V';
    currentMeter.textContent = '0 A';
}

powerBtn.addEventListener('click', () => {
    const info = getCircuitInfo();
    circuitStatus.className = 'circuit-status';

    if (!info.hasBattery) {
        circuitStatus.classList.add('off');
        circuitStatus.querySelector('.status-icon').textContent = '❌';
        statusText.textContent = 'فشل التشغيل: لا توجد بطارية في الدائرة!';
        stopPower();
        return;
    }

    if (info.switchOpen) {
        circuitStatus.classList.add('off');
        circuitStatus.querySelector('.status-icon').textContent = '🔌';
        statusText.textContent = 'التيار مقطوع: المفتاح مفتوح! اضغط على المفتاح لإغلاقه';
        stopPower();
        return;
    }

    // تشغيل الدائرة
    const voltage = info.batteryCount * 9;
    const totalResistance = Math.max(info.resistorCount * 10, 5);
    const current = (voltage / totalResistance).toFixed(2);

    circuitPowered = true;
    circuitStage.classList.add('powered');
    electronsGroup.style.display = 'block';
    voltageMeter.textContent = voltage + ' V';
    currentMeter.textContent = current + ' A';

    if (info.hasLamp && voltage >= 4.5) {
        circuitStatus.classList.add('on');
        circuitStatus.querySelector('.status-icon').textContent = '⚡';
        // إضاءة كل المصابيح
        Object.entries(slots).forEach(([name, comp]) => {
            if (comp && comp.type === 'lamp') {
                document.querySelector(`.slot[data-slot="${name}"]`).classList.add('lamp-on');
            }
        });
        statusText.textContent = `🎉 الدائرة تعمل! الجهد: ${voltage}V | التيار: ${current}A | المصباح يضيء!`;
    } else if (!info.hasLamp) {
        circuitStatus.classList.add('on');
        circuitStatus.querySelector('.status-icon').textContent = '⚡';
        statusText.textContent = `التيار يسري في الدائرة! الجهد: ${voltage}V - أضف مصباحاً لترى الضوء 💡`;
    }
});

clearCircuit.addEventListener('click', () => {
    Object.entries(slots).forEach(([name, comp]) => {
        if (comp) {
            const slotEl = document.querySelector(`.slot[data-slot="${name}"]`);
            removeComponent(name, slotEl);
        }
    });
    stopPower();
    updateStatus();
});

// ===== المساعد الذكي =====
const aiFab = document.getElementById('aiFab');
const aiChat = document.getElementById('aiChat');
const aiClose = document.getElementById('aiClose');
const aiMessages = document.getElementById('aiMessages');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');

aiFab.addEventListener('click', () => {
    aiChat.classList.toggle('open');
    if (aiChat.classList.contains('open')) aiInput.focus();
});

aiClose.addEventListener('click', () => aiChat.classList.remove('open'));

// قاعدة معرفة المساعد
const AI_KNOWLEDGE = [
    {
        keywords: ['لغة البرمجة', 'برمجة', 'لغه', 'coding', 'programming'],
        answer: '💻 لغة البرمجة هي وسيلة التواصل بينك وبين الحاسوب!\n\nالحاسوب يفهم فقط 0 و 1 (لغة الآلة)، ولغات البرمجة مثل Python و JavaScript تتيح لك كتابة أوامر مفهومة تُترجم تلقائياً للحاسوب.\n\nجرّب قسم "⌨️ جرّب الكود" في الموقع لتكتب أول برنامج لك!'
    },
    {
        keywords: ['أوم', 'قانون', 'ohm'],
        answer: '📐 قانون أوم هو أهم قانون في الكهرباء!\n\n⚡ الجهد (V) = التيار (I) × المقاومة (R)\n\n• V = I × R (لحساب الجهد)\n• I = V ÷ R (لحساب التيار)\n• R = V ÷ I (لحساب المقاومة)\n\nمثال: بطارية 12V مع مقاومة 6Ω ← التيار = 12÷6 = 2 أمبير\n\nجرّب "حاسبة أوم" في الموقع! 🧮'
    },
    {
        keywords: ['توالي', 'توازي', 'series', 'parallel'],
        answer: '🔌 الفرق بين التوالي والتوازي:\n\n➡️ التوالي (Series):\n• المكونات على مسار واحد\n• التيار متساوٍ في كل النقاط\n• الجهد يتوزع على المكونات\n• إذا انقطع مكون تتوقف الكل!\n\n🔀 التوازي (Parallel):\n• كل مكون على فرع مستقل\n• الجهد متساوٍ على كل فرع\n• التيار يتوزع بين الفروع\n• إذا تعطل فرع، الباقي يعمل!'
    },
    {
        keywords: ['أفضل لغة', 'مبتدئ', 'ابدأ', 'أتعلم', 'بداية'],
        answer: '🎯 أفضل لغة للمبتدئين هي Python! 🐍\n\nلماذا؟\n✅ syntax بسيط يشبه الإنجليزية\n✅ نتائج سريعة ومحفزة\n✅ مطلوبة في الذكاء الاصطناعي والبيانات\n✅ مجتمع دعم ضخم\n\nبعد إتقانها يمكنك تعلم JavaScript للويب أو Java للتطبيقات.\n\nابدأ الآن من قسم "⌨️ جرّب الكود"!'
    },
    {
        keywords: ['تيار', 'current', 'أمبير'],
        answer: '⚡ التيار الكهربائي (I):\n\nهو تدفق الشحنات الكهربائية (الإلكترونات) في الموصل، ويُقاس بالأمبير (A).\n\nتشبيه بسيط: تخيل أنبوب ماء 💧\n• التيار = كمية الماء المتدفقة\n• الجهد = ضغط الماء\n• المقاومة = ضيق الأنبوب\n\nكلما زاد الجهد زاد التيار، وكلما زادت المقاومة قلّ التيار!'
    },
    {
        keywords: ['جهد', 'voltage', 'فولت'],
        answer: '🔋 الجهد الكهربائي (V):\n\nهو القوة الدافعة التي تدفع الإلكترونات للحركة في الدائرة، ويُقاس بالفولت (V).\n\nأمثلة من حياتك:\n• بطارية AA = 1.5V\n• بطارية السيارة = 12V\n• مقبس المنزل = 220V\n• البرق = ملايين الفولتات! ⚡'
    },
    {
        keywords: ['مقاومة', 'resistor', 'أوم'],
        answer: '〰️ المقاومة (R):\n\nهي ممانعة مرور التيار الكهربائي، وتُقاس بالأوم (Ω).\n\nوظيفتها:\n• حماية المكونات الحساسة من التيار الزائد\n• تقليل الجهد لأجزاء معينة من الدائرة\n• التحكم في شدة إضاءة المصابيح\n\n💡 بدون مقاومة، قد يحترق مصباح LED من التيار الزائد!'
    },
    {
        keywords: ['بايثون', 'python'],
        answer: '🐍 Python هي اللغة الأشهر عالمياً!\n\n• أُنشئت عام 1991\n• الأسهل للمبتدئين\n• تُستخدم في: الذكاء الاصطناعي، تحليل البيانات، الويب\n\nمثال بسيط:\nprint("مرحباً!")\n\nجرّبها الآن في قسم "⌨️ جرّب الكود"!'
    },
    {
        keywords: ['جافا', 'java', 'جافاسكريبت', 'javascript'],
        answer: '☕ Java و 🌐 JavaScript لغتان مختلفتان رغم تشابه الاسم!\n\n☕ Java:\n• لتطبيقات أندرويد وأنظمة الشركات\n• قوية ومستقرة\n\n🌐 JavaScript:\n• لغة الويب الأولى\n• تعمل في كل متصفح\n• للمواقع التفاعلية\n\nاضغط على بطاقة أي لغة في قسم "أشهر اللغات" لتفاصيل أكثر!'
    },
    {
        keywords: ['ترانزستور', 'transistor', 'معالج'],
        answer: '🎛️ الترانزستور هو أهم اختراع في القرن العشرين!\n\nهو مفتاح إلكتروني صغير جداً:\n• يفتح ويغلق ملايين المرات في الثانية\n• معالج جهازك يحتوي على مليارات الترانزستورات!\n• كل برنامج تكتبه يتحول في النهاية لفتح وإغلاق ترانزستورات\n\nهذا هو الجسر بين البرمجة والكهرباء! 🔗'
    },
    {
        keywords: ['مكثف', 'capacitor'],
        answer: '🫙 المكثف (Capacitor):\n\nيخزن الشحنة الكهربائية مؤقتاً ثم يفرغها عند الحاجة، ويُقاس بالفاراد (F).\n\nاستخداماته:\n• فلاش الكاميرا 📸 (يشحن ثم يفرغ دفعة واحدة)\n• تنعيم الجهد في الشواحن\n• حفظ الطاقة لحظة انقطاع الكهرباء'
    },
    {
        keywords: ['دايود', 'diode', 'led'],
        answer: '▶️ الدايود (Diode):\n\nيسمح بمرور التيار في اتجاه واحد فقط! مثل صمام ماء أحادي الاتجاه.\n\nأشهر نوع: LED 💡\n• دايود باعث للضوء\n• يستهلك طاقة قليلة جداً\n• موجود في كل الشاشات والإضاءة الحديثة'
    },
    {
        keywords: ['دائرة', 'circuit', 'كهرباء'],
        answer: '⚡ الدائرة الكهربائية:\n\nهي مسار مغلق يسري فيه التيار من المصدر ويعود إليه.\n\nمكوناتها الأساسية:\n1. 🔋 مصدر طاقة (بطارية)\n2. 🔌 أسلاك موصلة\n3. 💡 حمل (مصباح مثلاً)\n4. 🔘 مفتاح للتحكم\n\nجرّب "🔧 ابنِ دائرة" في الموقع وابنِ دائرتك بنفسك!'
    },
    {
        keywords: ['خطأ', 'error', 'syntaxerror', 'غلط', 'ما يشتغل', 'لا يعمل', 'مشكلة', 'عطل'],
        answer: '🔧 دعني أساعدك في حل الخطأ!\n\nأشهر الأخطاء وحلولها:\n\n❌ SyntaxError: خطأ في كتابة الكود\n✅ تأكد من الأقواس () وعلامات التنصيص ""\n\n❌ NameError: متغير غير معرّف\n✅ تأكد من كتابة اسم المتغير بشكل صحيح\n\n❌ IndentationError (بايثون): خطأ في المسافة البادئة\n✅ استخدم 4 مسافات قبل أسطر for و if\n\n📝 الصق الكود هنا وسأحاول مساعدتك!'
    },
    {
        keywords: ['syntaxerror', 'syntax', 'صيغة'],
        answer: '❌ خطأ SyntaxError يعني أن الكود مكتوب بشكل غير صحيح!\n\nتحقق من:\n1. الأقواس: كل ( لها ) وكل [ لها ]\n2. علامات التنصيص: كل " لها "\n3. النقطتين : بعد if و for في بايثون\n4. الفاصلة المنقوطة ; في جافاسكريبت\n\nمثال صحيح في بايثون:\nprint("مرحباً")  ✅\nprint("مرحباً  ❌ (ناقص قوس وتنصيص)'
    },
    {
        keywords: ['nameerror', 'غير معرف', 'متغير'],
        answer: '❌ خطأ NameError يعني أنك استخدمت متغيراً غير موجود!\n\nالحل:\n1. عرّف المتغير قبل استخدامه:\n   name = "أحمد"  ← أولاً\n   print(name)    ← ثانياً ✅\n\n2. تأكد من الإملاء: name ≠ Name ≠ NAME\n   (بايثون حساسة لحالة الأحرف!)'
    },
    {
        keywords: ['indentation', 'مسافة', 'بادئة'],
        answer: '❌ خطأ IndentationError خاص ببايثون!\n\nبايثون تستخدم المسافات البادئة لتحديد الكتل:\n\n✅ صحيح:\nfor i in range(3):\n    print(i)   ← 4 مسافات\n\n❌ خطأ:\nfor i in range(3):\nprint(i)   ← بدون مسافة!'
    },
    {
        keywords: ['شكرا', 'شكراً', 'ممتاز', 'رائع'],
        answer: 'العفو! 😊 سعيد بمساعدتك!\n\nإذا عندك سؤال آخر عن البرمجة أو الكهرباء، أنا هنا دائماً 🤖⚡'
    },
    {
        keywords: ['مرحبا', 'هلا', 'اهلا', 'أهلا', 'السلام', 'هاي'],
        answer: 'أهلاً وسهلاً! 👋\n\nأنا مساعدك الذكي في رحلة تعلم البرمجة والكهرباء.\n\nاسألني عن:\n• 💻 لغات البرمجة\n• ⚡ الدوائر الكهربائية\n• 📐 قانون أوم\n• 🔧 المكونات الإلكترونية'
    }
];

const AI_DEFAULT = '🤔 سؤال ممتاز! لكن معلوماتي محدودة حالياً.\n\nجرّب تسألني عن:\n• 💻 "ما هي لغة البرمجة؟"\n• ⚡ "اشرح قانون أوم"\n• 🔌 "ما الفرق بين التوالي والتوازي؟"\n• 🐍 "ما هي أفضل لغة للمبتدئين؟"\n• 🔋 "ما هو التيار الكهربائي؟"';

function getAIAnswer(question) {
    const q = question.toLowerCase();
    for (const item of AI_KNOWLEDGE) {
        if (item.keywords.some(k => q.includes(k))) {
            return item.answer;
        }
    }
    return AI_DEFAULT;
}

function addAIMsg(text, isUser) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${isUser ? 'user' : 'bot'}`;
    msg.textContent = text;
    aiMessages.appendChild(msg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return msg;
}

function askAI(question) {
    if (!question.trim()) return;
    addAIMsg(question, true);
    aiInput.value = '';

    // مؤشر الكتابة
    const typing = document.createElement('div');
    typing.className = 'ai-msg bot ai-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    aiMessages.appendChild(typing);
    aiMessages.scrollTop = aiMessages.scrollHeight;

    setTimeout(() => {
        typing.remove();
        addAIMsg(getAIAnswer(question), false);
    }, 900 + Math.random() * 700);
}

aiSend.addEventListener('click', () => askAI(aiInput.value));
aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') askAI(aiInput.value);
});

document.querySelectorAll('.ai-sug').forEach(btn => {
    btn.addEventListener('click', () => askAI(btn.dataset.q));
});

// ===== أنيميشن الظهور عند التمرير =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// إضافة تأثير الظهور للبطاقات
document.querySelectorAll('.info-card, .type-card, .lang-card, .circuit-type-card, .component-card, .connection-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
