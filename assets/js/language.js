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
        experience: " Professional Experience",
        academic: " Academic Background",
        contact: " Contact",
        underConstruction: "( Under Construction! Under Construction! Under Construction!)",
        send: "Send Message",
        reset: "Reset Form",
        message: "Message",
        name: "Name",
        subject: "Subject",
        //pmdf: "Currently working at the Polícia Militar do Distrito Federal (PMDF), where I am responsible for managing and supporting the IT infrastructure. My duties include maintaining networks, supporting hardware and software systems, and troubleshooting technical issues to ensure operational continuity and information security.",
        moringa: "Worked at Moringa as a Senior Frontend Developer, where I was responsible for transforming designs into live code for HTML/CSS and developing WordPress themes. My main activities included PSD to HTML conversion, JavaScript implementation, and developing custom themes to enhance user experience.",
        fabricaDeIdeias: "Worked as a Junior PHP Developer at Fábrica de Ideias, where I was responsible for configuring a bot to collect news from online portals using PHP and regular expressions (regex). I also handled tasks related to MySQL database maintenance and management, contributing to the development of a news clipping system.",
        brscan: "As a Junior PHP Developer at BrScan, I contributed to the development and maintenance of various components within the company's identity verification, onboarding, and anti-fraud systems. My responsibilities included assisting with coding, debugging, and optimizing less critical modules, which provided a foundational understanding of secure software practices and system integration.",
        arteContexto: "As a Full Stack Developer at Arte Contexto, I was responsible for creating custom themes for WordPress and Joomla for the agency's clients, as well as developing plugins to enhance user experience. My main activities included PSD to HTML conversion and theme development.",
        politec: "Provided comprehensive technical support for the IT infrastructure at the Ministério das Relações Exteriores (MRE). Responsibilities included managing and maintaining computer networks, ensuring the seamless operation of hardware and software systems, and troubleshooting technical issues. Worked closely with internal teams to ensure the security and reliability of the MRE's digital communications and information systems.",
        primtag1: "Technical Skills in Software Development",
        primtag2: "My primary skills as a software developer include a comprehensive combination of modern technologies and tools, reflecting my experience and professional certifications.",
        primtag3: "Proficient in Java 21, with extensive experience in using the Spring Framework, including Spring MVC, Spring Boot, Spring Security, Spring Batch, and Spring Data. Expertise in building scalable and secure enterprise applications, employing best practices in development, architecture, and design patterns.",
        primtag4: "Experience with relational databases such as PostgreSQL and MySQL, with skills in data modeling, query optimization, and transaction management.",
        primtag5: "Experience in integrating and implementing messaging systems, including RabbitMQ and Kafka, for asynchronous communication and component decoupling.",
        primtag6: "Proficient in the AWS ecosystem, utilizing services such as EC2, S3, RDS, and Lambda for cloud-based application development and management. Experience with Docker for application containerization and Linux as a development and deployment operating system.",
        primtag7: "Development of rich and interactive interfaces with Angular and TypeScript, following best practices in front-end development. Application of unit and integration testing using JUnit to ensure code quality and stability.",
        primtag8: "Implementation of microservices architectures to promote scalability and efficient maintenance of applications.",
        primtag9: "Use of GitHub for version control management and collaboration in software projects with Git, including advanced practices such as branching, merging, and rebase. Experience in configuring Git workflows to support continuous development and integration. Implementation of Continuous Integration and Continuous Delivery (CI/CD) pipelines using tools such as Jenkins and GitHub Actions. Experience in automating builds, tests, and deployments to ensure rapid and high-quality delivery, as well as configuring integration and production environments.",
        secTag1: "Secondary Technical Skills",
        secTag2: "My secondary skills cover a range of technologies and tools that complement my primary software development experience.",
        secTag3: "I have solid experience in PHP development, including using the Laravel framework to build robust and scalable web applications. My work with WordPress involves developing custom themes and plugins to meet specific client needs, as well as implementing PHP-based solutions to enhance functionality and user experience.",
        secTag4: "With knowledge in Regex, I can create and manage complex regular expressions to validate data, search for patterns, and manipulate strings efficiently. In Python, my experience includes using the Django framework to develop secure and scalable web applications, following best practices in development and architecture.",
        secTag5: "I am familiar with Solidity for smart contract development on blockchain, applying security and efficiency practices in creating decentralized solutions. In front-end development, I am proficient in HTML5 and CSS for creating rich and responsive interfaces, while jQuery and JavaScript are used to add interactivity and dynamism to web pages.",
        secTag6: "Additionally, I have basic knowledge in image editing with tools such as Photoshop and Gimp, and initial skills in 3D modeling with 3dMax and Blender. These skills allow me to effectively collaborate on projects that require both software development and visual and graphic aspects.",
        certTag1: "This section highlights my most relevant certifications, which demonstrate my commitment to technical excellence and continuous update with best practices and technologies in the field of software development and systems administration.",
        certTag2: "The Oracle Certified Professional Java SE 21 (1Z0-830) certification is an advanced qualification offered by Oracle that attests to the candidate's proficiency and experience in developing applications using Java SE 21. This certification is aimed at professionals who already have a solid understanding of the Java language and wish to validate their advanced skills with the latest version of the platform.",
        certTag3: "The AWS Certified Developer Associate (DVA-C02) certification validates a professional's skills and knowledge in developing and maintaining applications on the Amazon Web Services (AWS) platform. This exam is designed for software developers who wish to demonstrate their ability to design, build, and manage applications in the AWS cloud.",
        certTag4: "The GitHub Foundations certification is a credential that validates knowledge and skill in using GitHub for version control and collaboration on software projects. This certification is ideal for developers and professionals who wish to demonstrate their understanding of essential Git and GitHub practices, tools widely used in modern software development.",
        sobreTag1: 'Hello! My name is Gustavo and I am a software developer passionate about technology and innovation. I am currently in a career transition, focusing on enhancing my skills in Java and other related technologies.',
        //sobreTag2: 'In addition, I have previous experience in PHP and am comfortable working with various tools and frameworks, including Laravel and WordPress. I am recently certified as an OCP Java SE 21 Developer and AWS Certified Developer Associate. I am constantly learning and updating to provide high-quality and efficient solutions.',
        sobreTag2: 'In addition, I have previous experience in PHP and am comfortable working with various tools and frameworks, including Laravel and WordPress. I am constantly learning and updating to provide high-quality and efficient solutions.',
        sobreTag3: 'I am always open to new opportunities and challenges, and I am eager to connect with other professionals and companies who share my passion for technology.',
    },
    pt: {
        aboutMe: " Sobre mim",
        primarySkills: " Habilidades primárias",
        secondarySkills: " Habilidades secundárias",
        certifications: " Certificações",
        projects: " Projetos",
        experience: " Experiência profissional",
        academic: " Formação acadêmica",
        contact: " Contato",
        underConstruction: " (Em construção! Em construção! Em construção!)",
        send: "Enviar Mensagem",
        reset: "Resetar Formulário",
        message: "Mensagem",
        name: "Nome",
        subject: "Assunto",
        //pmdf: "Atualmente atuo na Polícia Militar do Distrito Federal (PMDF), onde sou responsável pela gestão e suporte técnico da infraestrutura de TI. Minhas funções incluem a manutenção de redes, suporte a sistemas de hardware e software, e a resolução de problemas técnicos, garantindo a continuidade das operações e a segurança da informação.",
        moringa: "Trabalhei na Moringa como desenvolvedor frontend sênior, responsável por transformar designs em código HTML/CSS e desenvolver temas para WordPress. Minhas principais atividades incluíam conversão de PSD para HTML, detalhamento de JavaScript e desenvolvimento de temas personalizados para melhorar a experiência do usuário.",
        fabricaDeIdeias: "Trabalhei como desenvolvedor PHP júnior na Fábrica de Ideias, onde fui responsável pela configuração de um bot para a coleta de notícias em portais online, utilizando PHP e expressões regulares (regex). Também desempenhei tarefas relacionadas à manutenção e gerenciamento de banco de dados MySQL, contribuindo para o desenvolvimento de um sistema de clipping jornalístico.",
        brscan: "Como desenvolvedor PHP júnior na BrScan, participei da manutenção e desenvolvimento de diversos componentes dos sistemas de verificação de identidade, onboarding e antifraude da empresa. Minhas responsabilidades incluíam auxiliar na codificação, depuração e otimização de módulos menos críticos, o que me proporcionou uma compreensão fundamental das práticas de segurança em software e integração de sistemas.",
        arteContexto: "Como desenvolvedor Full Stack na Arte Contexto, fui responsável por criar temas personalizados para WordPress e Joomla para clientes da agência, além de desenvolver plugins para aprimorar a experiência do usuário. Minhas principais atividades incluíam conversão de PSD para HTML e desenvolvimento de temas WordPress.",
        politec: "Forneci suporte técnico abrangente para a infraestrutura de TI no Ministério das Relações Exteriores (MRE). Minhas responsabilidades incluíam o gerenciamento e manutenção de redes de computadores, garantindo o funcionamento contínuo dos sistemas de hardware e software e solucionando problemas técnicos. Trabalhei de perto com equipes internas para assegurar a segurança e a confiabilidade das comunicações e sistemas de informação do MRE.",
        primtag1: "Competências técnicas em desenvolvimento de software",
        primtag2: "Minhas habilidades primárias como desenvolvedor de software incluem uma combinação abrangente de tecnologias e ferramentas modernas, refletindo minha experiência e certificações profissionais.",
        primtag3: "Proficiente em Java 21, com experiência extensiva na utilização do Spring Framework, incluindo Spring MVC, Spring Boot, Spring Security, Spring Batch e Spring Data. Expertise na construção de aplicações empresariais escaláveis e seguras, utilizando as melhores práticas de desenvolvimento, arquitetura e padrões de projetos.",
        primtag4: "Experiência em bancos de dados relacionais como PostgreSQL e MySQL, com habilidades em modelagem de dados, otimização de consultas e gerenciamento de transações.",
        primtag5: "Experiência em integração e implementação de sistemas de mensageria, incluindo RabbitMQ e Kafka, para comunicação assíncrona e desacoplamento de componentes.",
        primtag6: "Proficiente no ecossistema AWS, utilizando serviços como EC2, S3, RDS e Lambda para desenvolvimento e gestão de aplicações em ambientes de nuvem. Experiência com Docker para containerização de aplicações e Linux como sistema operacional de desenvolvimento e deployment.",
        primtag7: "Desenvolvimento de interfaces ricas e interativas com Angular e TypeScript, seguindo as melhores práticas de desenvolvimento front-end. Aplicação de testes unitários e de integração utilizando JUnit para garantir a qualidade e estabilidade do código.",
        primtag8: "Implementação de arquiteturas de microserviços para promover a escalabilidade e manutenção eficiente das aplicações.",
        primtag9: "Utilização do Github para gerenciamento de controle de versão e colaboração em projetos de software com Git, incluindo práticas avançadas como branching, merging, e rebase. Experiência em configuração de workflows de Git para suportar o desenvolvimento contínuo e a integração contínua. Implementação de pipelines de Integração Contínua e Entrega Contínua (CI/CD) usando ferramentas como Jenkins e GitHub Actions. Experiência em automação de builds, testes e deploys para garantir entregas rápidas e de alta qualidade, bem como na configuração de ambientes de integração e produção.",
        secTag1: "Habilidades técnicas secundárias",
        secTag2: "Minhas habilidades secundárias abrangem uma variedade de tecnologias e ferramentas que complementam minha experiência principal em desenvolvimento de software.",
        secTag3: "Tenho experiência sólida em desenvolvimento PHP, incluindo a utilização do framework Laravel para criar aplicações web robustas e escaláveis. Minha atuação com WordPress envolve o desenvolvimento de temas e plugins personalizados para atender às necessidades específicas dos clientes, assim como a implementação de soluções baseadas em PHP para melhorar a funcionalidade e a experiência do usuário.",
        secTag4: "Com conhecimento em Regex, posso criar e gerenciar expressões regulares complexas para validar dados, buscar padrões e manipular strings de forma eficiente. Em Python, minha experiência inclui o uso do framework Django para desenvolver aplicações web seguras e escaláveis, seguindo as melhores práticas de desenvolvimento e arquitetura.",
        secTag5: "Sou familiar com Solidity para desenvolvimento de contratos inteligentes em blockchain, aplicando práticas de segurança e eficiência na criação de soluções descentralizadas. No desenvolvimento front-end, tenho proficiência em HTML5 e CSS para criar interfaces ricas e responsivas, enquanto o jQuery e o JavaScript são utilizados para adicionar interatividade e dinamicidade às páginas web.",
        secTag6: "Além disso, possuo conhecimentos básicos em edição de imagem com ferramentas como Photoshop e Gimp, e habilidades iniciais em modelagem 3D com 3dMax e Blender. Essas habilidades me permitem colaborar efetivamente em projetos que exigem tanto desenvolvimento de software quanto aspectos visuais e gráficos.",
        certTag1: "Esta seção destaca minhas certificações mais relevantes, que evidenciam meu comprometimento com a excelência técnica e a atualização contínua nas melhores práticas e tecnologias no campo do desenvolvimento de software e administração de sistemas.",
        certTag2: "A certificação Oracle Certified Professional Java SE 21 (1Z0-830) é uma qualificação avançada oferecida pela Oracle que atesta a proficiência e a experiência do candidato no desenvolvimento de aplicações utilizando Java SE 21. Esta certificação é destinada a profissionais que já possuem um conhecimento sólido da linguagem Java e desejam validar suas habilidades avançadas com a versão mais recente da plataforma.",
        certTag3: "A certificação AWS Certified Developer Associate (DVA-C02) valida as habilidades e o conhecimento de um profissional no desenvolvimento e manutenção de aplicações na plataforma Amazon Web Services (AWS). Este exame é projetado para desenvolvedores de software que desejam demonstrar sua capacidade de projetar, construir, e gerenciar aplicações na nuvem da AWS.",
        certTag4: "A certificação GitHub Foundations é uma credencial que valida o conhecimento e a habilidade em utilizar o GitHub para controle de versão e colaboração em projetos de software. Esta certificação é ideal para desenvolvedores e profissionais que desejam demonstrar sua compreensão das práticas essenciais do Git e do GitHub, ferramentas amplamente usadas no desenvolvimento de software moderno.",
        sobreTag1: 'Olá! Meu nome é Gustavo e sou um desenvolvedor de software apaixonado por tecnologia e inovação. Atualmente, estou em transição de carreira, focado em aprimorar minhas habilidades em Java e outras tecnologias relacionadas.',
        //sobreTag2: 'Além disso, possuo experiência anterior em PHP e estou confortável trabalhando com diversas ferramentas e frameworks, incluindo Laravel e WordPress. Sou recém certificado OCP Java SE 21 Developer e AWS Certified Developer Associate. Estou constantemente aprendendo e me atualizando para oferecer soluções de alta qualidade e eficientes.',
        sobreTag2: 'Além disso, possuo experiência anterior em PHP e estou confortável trabalhando com diversas ferramentas e frameworks, incluindo Laravel e WordPress. Estou constantemente aprendendo e me atualizando para oferecer soluções de alta qualidade e eficientes.',
        sobreTag3: 'Estou sempre aberto a novas oportunidades e desafios, e estou ansioso para conectar-me com outros profissionais e empresas que compartilham minha paixão pela tecnologia.',
    }
};



window.onload = () => {
    const defaultLanguage = 'en';
    changeLanguage(defaultLanguage);
    document.getElementById('lang-' + defaultLanguage).classList.add('selected');
};
