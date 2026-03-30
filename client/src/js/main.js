lucide.createIcons();

// Estado de pagamento
let isPaid = false;

// Verificar status de pagamento via URL
function checkPaymentStatus() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status === 'pago') {
        isPaid = true;
        unlockPremiumFeatures();
    } else {
        isPaid = false;
        applyWatermark();
        setupPaymentButton();
    }
}

// Aplicar marca d'água e desfoque
function applyWatermark() {
    const cvDocument = document.getElementById('cv-document');
    const cvBody = document.querySelector('.cv-body-pv');
    
    // Adicionar marca d'água em grade
    if (!document.querySelector('.watermark-overlay')) {
        const watermark = document.createElement('div');
        watermark.className = 'watermark-overlay';
        cvDocument.appendChild(watermark);
    }
    
    // Aplicar desfoque no conteúdo
    cvBody.classList.add('blurred');
    cvBody.classList.remove('unlocked');
}

// Configurar botão de pagamento
function setupPaymentButton() {
    const actionBtn = document.querySelector('.btn-gold-glow');
    if (actionBtn) {
        actionBtn.textContent = 'LIBERAR ACESSO EXECUTIVO';
        actionBtn.onclick = () => {
            window.location.href = 'https://pay.kiwify.com.br/oQppxrj';
        };
        actionBtn.classList.remove('btn-unlocked');
    }
}

// Desbloquear recursos premium
function unlockPremiumFeatures() {
    // Remover marca d'água
    const watermark = document.querySelector('.watermark-overlay');
    if (watermark) {
        watermark.classList.add('hidden');
        setTimeout(() => watermark.remove(), 300);
    }
    
    // Remover desfoque do conteúdo
    const cvBody = document.querySelector('.cv-body-pv');
    cvBody.classList.remove('blurred');
    cvBody.classList.add('unlocked');
    
    // Configurar botão para download
    const actionBtn = document.querySelector('.btn-gold-glow');
    if (actionBtn) {
        actionBtn.textContent = 'BAIXAR EM ALTA DEFINIÇÃO';
        actionBtn.onclick = () => {
            window.print();
        };
        actionBtn.classList.add('btn-unlocked');
    }
    
    // Exibir alerta elegante
    showUnlockAlert();
}

// Alerta elegante de desbloqueio
function showUnlockAlert() {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: var(--gold);
        color: var(--nero); padding: 15px 25px; font-weight: 700;
        letter-spacing: 1px; z-index: 10000; border-radius: 4px;
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        animation: slideIn 0.5s ease;
    `;
    alert.textContent = 'Acesso Elite Liberado. Seu documento está pronto para exportação.';
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(alert);
    
    // Remover após 5 segundos
    setTimeout(() => {
        alert.style.animation = 'slideIn 0.5s ease reverse';
        setTimeout(() => alert.remove(), 500);
    }, 5000);
}

// Segurança anti-cópia - Nível Máximo
function setupAntiCopyProtection() {
    const previewSide = document.querySelector('.preview-side');
    
    if (previewSide && !isPaid) {
        // Desabilitar clique direito
        previewSide.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Desabilitar todos os comandos de teclado perigosos
        document.addEventListener('keydown', (e) => {
            // Ctrl+P (Imprimir), Ctrl+S (Salvar)
            if ((e.ctrlKey && e.key === 'P') || (e.ctrlKey && e.key === 'S')) {
                e.preventDefault();
                return false;
            }
            
            // F12, Ctrl+Shift+I, Ctrl+Shift+J (DevTools)
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                return false;
            }
            
            // Print Screen (em alguns navegadores)
            if (e.key === 'PrintScreen') {
                e.preventDefault();
                return false;
            }
        });
        
        // Prevenir seleção de texto na área de preview
        previewSide.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Prevenir arrastar conteúdo
        previewSide.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
    }
}

function updatePreview() {
    const mappings = {
        'in-name': 'pv-name',
        'in-role': 'pv-role',
        'in-email': 'pv-email',
        'in-phone': 'pv-phone',
        'in-linkedin': 'pv-linkedin',
        'in-summary': 'pv-summary',
        'in-skills': 'pv-skills'
    };

    for (let inputId in mappings) {
        const val = document.getElementById(inputId).value;
        const previewId = mappings[inputId];
        
        if (val.trim() !== "") {
            document.getElementById(previewId).innerText = val;
        }
    }
}

// Inicializar sistema quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    checkPaymentStatus();
    setupAntiCopyProtection();
});