function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach((element) => {
        const textKey = element.getAttribute("data-lang");
        const translation = translations[lang][textKey];
    
        if (element.tagName.toLowerCase() === "input" && element.classList.contains("btForm")) {
            // Se for um input com a classe 'btForm', altera o valor
            element.value = translation;
        } else if (element.tagName.toLowerCase() === "textarea") {
            // Se for um textarea, altera o placeholder
            element.placeholder = translation;
        } else {
            // Caso contrário, altera o textContent
            element.textContent = translation;
        }
    });
    
    

    // Remover a classe "selected" de todos os links de idioma
    document.querySelectorAll('.actions a').forEach(function(link) {
        link.classList.remove('selected');
    });

    // Adicionar a classe "selected" ao link do idioma selecionado
    document.getElementById('lang-' + lang).classList.add('selected');
}

const translations = {
    en: {
        aboutMe: " About Me",
        primarySkills: " Primary Skills",
        secondarySkills: " Secondary Skills",
        certifications: " Certifications",
        projects: " Projects",
        experience: " Experience",
        academic: " Academic Background",
        contact: " Contact",
        underConstruction: " ( Under Construction! Under Construction! Under Construction! )",
        send: "Send Message",
        reset: "Reset Form",
        message: "Message",
        name: "Name",
        subject: "Subject"
        // Adicione todas as traduções necessárias aqui
    },
    pt: {
        aboutMe: " Sobre mim",
        primarySkills: " Habilidades primárias",
        secondarySkills: " Habilidades secundárias",
        certifications: " Certificações",
        projects: " Projetos",
        experience: " Experiência",
        academic: " Formação acadêmica",
        contact: " Contato",
        underConstruction: " ( Em construção! Em construção! Em construção! )",
        send: "Enviar Mensagem",
        reset: "Resetar Formulário",
        message: "Mensagem",
        name: "Nome",
        subject: "Assunto"
        // Adicione todas as traduções necessárias aqui
    }
};

window.onload = () => {
    // Definir o idioma padrão ao carregar a página
    const defaultLanguage = 'pt'; // Defina aqui o idioma padrão
    changeLanguage(defaultLanguage);
    document.getElementById('lang-' + defaultLanguage).classList.add('selected');
};
