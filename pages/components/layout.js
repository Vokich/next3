import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 

const backgrounds = [
    '/bg/bg1.webp',
    '/bg/bg2.webp',
    '/bg/bg3.webp',
    '/bg/bg4.jpg',
    '/bg/bg5.jpg',
];

const Layout = ({ children }) => {
    const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);
    const router = useRouter(); 

    useEffect(() => {
        const changeBackground = () => {
            setCurrentBackground(prev => {
                const currentIndex = backgrounds.indexOf(prev);
                const nextIndex = (currentIndex + 1) % backgrounds.length;
                return backgrounds[nextIndex];
            });
        };

        const intervalId = setInterval(changeBackground, 7000); 
        return () => clearInterval(intervalId); 
    }, []);

    const isCommunityPage = router.pathname === '/community';
    const isModPage = router.pathname === '/modifications';
    const isAboutPage = router.pathname === '/about';
    const isUpdatesPage = router.pathname === '/updates';

    let headerMarginTop = '0';
    if (isCommunityPage) {
        headerMarginTop = '550px';
    } else if (isModPage) {
        headerMarginTop = '350px';
    } else if (isAboutPage){
        headerMarginTop = '250px';
    } else if (isUpdatesPage){
        headerMarginTop = '1650px';
    }

    return (
        <html>
            <Head>
                <title>TerraWorld</title>
                <link rel="stylesheet" href="../styles/style.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            </Head>
            <header style={{ marginTop: headerMarginTop }}>
                <ul>
                    <li className="nav-item main"><a href="/">Главная</a></li>
                </ul>
                <nav>
                    <ul>
                        <li className="nav-item mods"><a href="/modifications">Моды</a></li>
                        <li className="nav-item comm"><a href="/community">Сообщество</a></li>
                        <li className="nav-item about"><a href="/about">О проекте</a></li>
                        <li className="nav-item updates"><a href="/updates">Обновления</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2025 сайт защищен MIT лицензией.<br/>Разрешается использование заготовки с упоминанием автора</p>
            </footer>
            <div className="background" style={{ backgroundImage: `url(${currentBackground})`}}></div>
        </html>
    );
};

export default Layout;
