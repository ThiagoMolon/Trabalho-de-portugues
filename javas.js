//comeso da sidebar
document.getElementById('toggleSidebar').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('open');
});
//fim da sidebar
//inicio do collapse acordeão
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentNode;
        accordionItem.classList.toggle('active');
    
        // Fechar outros itens
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
            }
        });
    });
});
document.querySelectorAll('.accordion-conteiner').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentNode;
        accordionItem.classList.toggle('active-conteiner');
    
        // Fechar outros itens
        document.querySelectorAll('.accordion-item-conteiner').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active-conteiner');
            }
        });
    });
});
//fim do collapse acordeão
//dark/light mode inicio
function darkMode() {
    var body = document.querySelector("body")
    body.classList.toggle('dark-mode-btn')
}

var btn = document.querySelector("#dark-mode-btn")
btn.addEventListener('click', darkMode)
//dark/light mode final
//collapse btn inicio
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique a todos os botões
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Pega o alvo do data-target
            const target = this.getAttribute('data-target');
            const element = document.querySelector(target);
            
            // Fecha todos os outros elementos
            document.querySelectorAll('.collapse.show').forEach(collapse => {
                if (collapse !== element) {
                    collapse.classList.remove('show');
                }
            });
            
            // Alterna o elemento atual
            element.classList.toggle('show');
        });
    });
});
//collapse fim