import Layout from ".//components/layout";

const About = () => {
    return(
        <Layout>
            <h1>Добро пожаловать на фанатский сайт по игре Terraria!</h1>
            <h3 style={{ marginBottom: '20px', marginTop: '20px' }}>
                О сайте
            </h3>
            <p style={{ marginTop: '20px' }}>
                Этот сайт был сделан для Игрохакатона "Первому разработчику приготовиться", в номинации "Web-разработка".<br/>
                Сайт посвящен популярному приключенченской экшен-игре "Terraria" от инди-компании Re-logic.<br/>
                Все использованные материалы на сайте являются свободными для копирования и внедрения на свой сайт.<br/>
                Проект был создан и разработан Владимиром Колупаевым.<br/>
                <a style={{ marginBottom: '10px', marginTop: '10px' }} href="https://github.com/Vokich" class="btn-github">
                    <i class="fab fa-github"></i> GitHub разработчика
                </a>
            </p>
        </Layout>
    );
}; 
export default About;
