// Seleciona o botão e o corpo
const toggle = document.getElementById('toggle-dark-mode');
const body = document.body;

// Alterna o modo dark
toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Salva a preferência no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Aplica o tema salvo ao carregar a página
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});
// estilo de slider de imagens

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Seleciona todos os slides
const slides = slider.querySelectorAll('.slide');
const totalSlides = slides.length;

// Função para atualizar a posição do slider
function updateSlider() {
    const offset = currentIndex * -100; // Calcula o deslocamento em porcentagem
    slider.style.transform = `translateX(${offset}%)`;
}

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Avança no índice
    updateSlider();
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Volta no índice
    updateSlider();
});





// Envio do e-mail usando EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mensagem de carregamento
    document.getElementById("status").innerText = "Enviando...";

    const serviceID = 'your_service_id';  // Substitua pelo seu ID de serviço do EmailJS
    const templateID = 'your_template_id'; // Substitua pelo seu ID de modelo do EmailJS

    // Usando EmailJS para enviar o formulário
    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            // Sucesso
            console.log('Sucesso:', response);
            document.getElementById("status").innerText = "Mensagem enviada com sucesso!";
            document.getElementById("contact-form").reset();
        }, function(error) {
            // Erro
            console.log('Erro:', error);
            document.getElementById("status").innerText = "Ocorreu um erro. Tente novamente.";
        });
});

// Função para verificar se a seção está visível
function checkVisibility() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
}



// Selecionando o botão e o menu
const hamburguerIcon = document.getElementById('hamburguer-icon');
const navMenu = document.getElementById('nav-menu');

// Adicionando o evento de clique para alternar a visibilidade
hamburguerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
});



