import Layout from "./components/layout";

const Mods = () => {
    return (
        <Layout>
            <h1 style={{ marginBottom: '20px' }}>Добро пожаловать на фанатский сайт по игре Terraria!</h1>
            <p style={{ marginBottom: '30px' }}>
                Это страница сообщества игры! Здесь вы найдете фанатский контент!
            </p>
            <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>
                Модификации:
            </h3>
            <a 
                href="https://steamcommunity.com/app/1281930/workshop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-steam" 
            >
                <i className="fab fa-steam" style={{ marginRight: '8px' }}></i>
                Перейти к модификациям игры на Steam Workshop
            </a>
            <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>
                Ресурс-паки и Миры:
            </h3>
            <a 
                href="https://steamcommunity.com/workshop/browse/?appid=105600&browsesort=trend&section=readytouseitems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-steam" 
            >
                <i className="fab fa-steam" style={{ marginRight: '8px' }}></i>
                Перейти к ресурс-пакам и мирам на Steam Workshop
            </a>
        </Layout>
    );
};

export default Mods;
