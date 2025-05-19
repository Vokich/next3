import Layout from "./components/layout";

const Community = () => {
    return (
        <Layout>
            <h1 style={{ marginBottom: '20px' }}>Добро пожаловать на фанатский сайт по игре Terraria!</h1>
            <p style={{ marginBottom: '30px' }}>
                Это страница сообщества игры! Здесь вы найдете информацию которую написали сами фанаты
                 и обновляют ее по сей день!
            </p>
            <iframe
                src="https://terraria.wiki.gg/ru/"
                style={{
                    width: '100%',
                    height: '500px',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
                title="Встраиваемый сайт"
            />
        </Layout>
    );
};

export default Community;
